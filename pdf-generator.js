/* ════════════════════════════════════════════════════════════
   Orthodox Companion — pdf-generator.js
   Generates printable reading-plan and fasting-tracker PDFs from
   the existing plan-*.js data sources, using pdfmake.

   Public API: OCPDF.generate(planId)
     planId is one of:
       'bible-2yr', 'bible-1yr', 'ot-1yr', 'nt-1yr', 'nt-90',
       'gospels-60', 'epistles-30', 'psalter', 'wisdom-30',
       'prophets-60', 'lenten', 'nativity-40', 'holy-week',
       'catechumen-40'
     or 'fasting-tracker' for the fasting-tracker PDF.

   Architecture:
     · Browser: lazy-loads pdfmake from cdnjs and pdf-fonts.js (vfs)
       on first call, then renders + downloads.
     · Server (Node): same docDef builders are exported on globalThis.
       The Node sample-runner creates a PdfPrinter directly.

   Visual register: parchment palette, EB Garamond body, Cinzel for
   plan-title only. Cross-flanked-by-rules colophon, chi-rho ornaments,
   week-break rotation (Scripture → Father → prayer), framed prayers.
   ════════════════════════════════════════════════════════════ */
(function (root) {
  'use strict';

  /* ── Parchment palette (locked, mirrors parchment-patterns.html) ── */
  var COLORS = {
    ink:        '#1F1B16',
    inkDim:     '#3A2F22',
    inkMuted:   '#6B5A3F',
    parchment:  '#F4EAD3',  // cover background
    surface:    '#FAF6E8',  // body-page background (lighter, prints clean)
    surfaceDeep:'#EFE2BF',  // framed-prayer interior
    gold:       '#C9A84C',
    goldLight:  '#A8862E',
    goldDim:    '#8A6A28',
    rule:       '#C8B98C',
    ruleSoft:   '#D8C7A0'
  };

  /* ── SVG ornaments (lifted byte-identical from parchment-patterns.html
       and given inline stroke/fill since pdfmake doesn't process CSS) ── */
  function chiRhoSvg(size, color) {
    color = color || COLORS.gold;
    return [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40" width="', size, '" height="', size * (40/32), '">',
      '<g fill="none" stroke="', color, '" stroke-width="2.4" stroke-linecap="round">',
      '<line x1="6" y1="14" x2="26" y2="34"/>',
      '<line x1="26" y1="14" x2="6" y2="34"/>',
      '<line x1="16" y1="4" x2="16" y2="36"/>',
      '<path d="M 16 4 Q 27 4 27 12 Q 27 20 16 20"/>',
      '</g></svg>'
    ].join('');
  }
  function crossOrthSvg(size, color) {
    color = color || COLORS.gold;
    return [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 48" width="', size, '" height="', size * (48/32), '">',
      '<g fill="', color, '">',
      '<rect x="14" y="4" width="4" height="40"/>',
      '<rect x="10" y="8" width="12" height="3"/>',
      '<rect x="4" y="14" width="24" height="4"/>',
      '<rect x="8" y="30" width="16" height="3" transform="rotate(15 16 31.5)"/>',
      '</g></svg>'
    ].join('');
  }
  function checkboxSvg(size) {
    var s = size || 9;
    return [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ', s, ' ', s, '" width="', s, '" height="', s, '">',
      '<rect x="0.5" y="0.5" width="', s - 1, '" height="', s - 1,
        '" fill="none" stroke="', COLORS.goldDim, '" stroke-width="0.7"/>',
      '</svg>'
    ].join('');
  }

  /* ── Authored chrome (Phase 1 Candidate A approved) ── */
  var OPENING_PRAYER =
    'Open my eyes, that I may behold wondrous things from Your law. ' +
    'Bless, O Lord, this rule of reading. Plant Your Word in my heart ' +
    'that I may not sin against You. Lead me, through this Scripture, ' +
    'to the parish where You are present in the Mysteries; to the Fathers ' +
    'who taught Your saints; to the priest who shepherds Your flock; ' +
    'and to You, the Word made flesh, our Savior Jesus Christ. Amen.';

  var CLOSING_PRAYER =
    'Glory to You, O Lord, who has fed me from the storehouse of Your Word. ' +
    'What I have read, plant in my life. What I have not understood, send ' +
    'Your Holy Spirit to teach. What I have understood, give me grace to live. ' +
    'Bring me, by these readings, deeper into Your Holy Church, to the parish ' +
    'where Your Body is present in the Mysteries. For You are the Word, and ' +
    'apart from You there is no life. Amen.';

  var RULE_NOT_RACE =
    'This is a rule, not a race. Miss a day; begin again the next. ' +
    'The Church does not measure us by speed.';

  var PARISH_LOCATOR_LINE =
    'When you have walked this rule, walk into a parish. ' +
    'Find one near you at orthodoxcompanion.com/new-to-orthodoxy.html';

  var FOOTER_BRAND = 'Orthodox Companion  \u00B7  In service of the Church.';

  /* ── End-of-week break rotation pools (18 each — covers a 365-day plan
       cycling Scripture → Father → prayer without repetition) ── */
  var SCRIPTURE_ROTATION = [
    { text: 'Open my eyes, that I may behold wondrous things from Your law.', attr: 'Psalm 118:18 (LXX)' },
    { text: 'Your word is a lamp to my feet and a light to my path.', attr: 'Psalm 118:105 (LXX)' },
    { text: 'I have hidden Your word in my heart, that I might not sin against You.', attr: 'Psalm 118:11 (LXX)' },
    { text: 'How sweet are Your words to my taste, sweeter than honey to my mouth!', attr: 'Psalm 118:103 (LXX)' },
    { text: 'Your law is within my heart.', attr: 'Psalm 39:8 (LXX)' },
    { text: 'The grass withers, the flower fades, but the word of our God stands forever.', attr: 'Isaiah 40:8' },
    { text: 'Man shall not live by bread alone, but by every word that proceeds from the mouth of God.', attr: 'Matthew 4:4' },
    { text: 'Heaven and earth shall pass away, but My words shall not pass away.', attr: 'Matthew 24:35' },
    { text: 'In the beginning was the Word, and the Word was with God, and the Word was God.', attr: 'John 1:1' },
    { text: 'And the Word became flesh and dwelt among us.', attr: 'John 1:14' },
    { text: 'Sanctify them by Your truth. Your word is truth.', attr: 'John 17:17' },
    { text: 'Then He opened their understanding, that they might comprehend the Scriptures.', attr: 'Luke 24:45' },
    { text: 'Faith comes by hearing, and hearing by the word of God.', attr: 'Romans 10:17' },
    { text: 'All Scripture is given by inspiration of God, and is profitable for doctrine.', attr: '2 Timothy 3:16' },
    { text: 'For the word of God is living and powerful, and sharper than any two-edged sword.', attr: 'Hebrews 4:12' },
    { text: 'Receive with meekness the implanted word, which is able to save your souls.', attr: 'James 1:21' },
    { text: 'Lord, to whom shall we go? You have the words of eternal life.', attr: 'John 6:68' },
    { text: 'He has filled the hungry with good things.', attr: 'Luke 1:53' }
  ];

  var FATHER_ROTATION = [
    { text: 'Reading the Scriptures is a great safeguard against sin. Ignorance of them is a great precipice and a deep gulf.', attr: 'St. John Chrysostom \u00B7 Homily 35 on Genesis' },
    { text: 'Pay close attention, beloved, to the reading of the Scriptures, that you may receive grace from the words.', attr: 'After St. John Chrysostom' },
    { text: 'When you sit down to read, first ask the Lord to open the eyes of your heart, that you may understand not only with the mind, but with the heart that loves Him.', attr: 'After St. Ephraim the Syrian' },
    { text: 'Do not be in haste to finish your reading; be in haste only to be transformed by what you read.', attr: 'Orthodox patristic counsel' },
    { text: 'He who would profit from the Scriptures must read them with reverence, with prayer, and with fear of the Lord.', attr: 'After St. Isaac the Syrian' },
    { text: 'The Scriptures are like a deep well; the deeper you draw, the sweeter the water.', attr: 'After St. John Climacus' },
    { text: 'Read a little; meditate much. The Scriptures are food, not entertainment.', attr: 'Orthodox monastic saying' },
    { text: 'He who reads the Scriptures speaks with God; he who prays speaks with God in another way. The two together are the life of the Christian.', attr: 'After St. Isidore of Pelusium' },
    { text: 'Let the words of the Lord be heard not only with the ears, but with the heart.', attr: 'After St. Gregory the Theologian' },
    { text: 'If you wish to know God, first know His Scriptures. They are the lamp by which He is found.', attr: 'After St. Athanasius' },
    { text: 'Reading without doing is the seed without water; doing without reading is water without seed.', attr: 'Orthodox saying' },
    { text: 'The Scriptures are written so that we may know Christ, and knowing Him, be saved.', attr: 'After St. Cyril of Alexandria' },
    { text: 'Every word of God is a small door, and through every door, Christ Himself comes to meet us.', attr: 'Orthodox patristic counsel' },
    { text: 'When you read the Holy Scriptures, do not aim at reading; aim at understanding. And do not aim at understanding alone; aim at fulfilling.', attr: 'After St. Mark the Ascetic' },
    { text: 'The Scriptures cannot be understood without the Church that bore them, the Fathers who taught them, and the Liturgy that prays them.', attr: 'After St. Vincent of L\u00E9rins' },
    { text: 'It is not the much-reading that profits us, but the much-praying with what we read.', attr: 'After St. Theophan the Recluse' },
    { text: 'He who reads with humility receives more than he who reads with much learning.', attr: 'After St. Macarius' },
    { text: 'What you receive in reading, lay before the Lord in prayer; what you receive in prayer, live out in love.', attr: 'Orthodox patristic counsel' }
  ];

  var PRAYER_ROTATION = [
    { text: 'Lord Jesus Christ, Son of God, have mercy on me, a sinner, and let Your Word abide in me as I read.', attr: null },
    { text: 'O Lord, who opens the Scriptures by the breath of Your Spirit, open my heart now to receive Your living Word. Let this rule be a doorway, not a destination.', attr: null },
    { text: 'Most Holy Theotokos, who heard the Word and kept it in your heart, pray for me that I may do likewise.', attr: null },
    { text: 'Holy Spirit, Comforter, take what is written and plant it in me. Amen.', attr: null },
    { text: 'Christ our God, You are the Word made flesh. Speak to me through these words. Amen.', attr: null },
    { text: 'Lord, I do not understand all that I read; teach me what You will. What I understand, give me grace to live. Amen.', attr: null },
    { text: 'Glory to You, O Lord, glory to You. Through the prayers of Your saints, save me.', attr: null },
    { text: 'O Lord, Lover of mankind, give me ears to hear and a heart to keep what I have heard. Amen.', attr: null },
    { text: 'Christ is in our midst. He is and ever shall be. Bless, O Lord, this reading, that it may bear fruit unto life eternal.', attr: null },
    { text: 'Lord, set me back on the path when I wander, and keep me on it when I am near. Amen.', attr: null },
    { text: 'Glory to the Father, and to the Son, and to the Holy Spirit, both now and ever, and unto the ages of ages. Amen.', attr: null },
    { text: 'Holy Trinity, have mercy on me. Lord, cleanse my sins. Master, pardon my iniquities. Holy One, visit and heal my infirmities, for Your name\u2019s sake.', attr: null },
    { text: 'O Lord, write Your Word on my heart, and let me carry it into the Liturgy, and from the Liturgy into the world. Amen.', attr: null },
    { text: 'Through the prayers of the holy Fathers, Lord Jesus Christ our God, have mercy on us and save us. Amen.', attr: null },
    { text: 'O Heavenly King, the Comforter, the Spirit of Truth, who are everywhere present and fill all things, treasury of blessings and giver of life, come and abide in me, and cleanse me from every stain, and save my soul, O Good One.', attr: null },
    { text: 'Christ our God, the Word who became flesh, grant that the words of Your servants the prophets and apostles may bear fruit in me. Amen.', attr: null },
    { text: 'It is meet and right to glorify You always, the unoriginate Father with Your only-begotten Son and Your all-holy Spirit. Amen.', attr: null },
    { text: 'O Lord, give me a humble heart and an open ear, that what You have given Your Church I may receive with thanksgiving. Amen.', attr: null }
  ];

  /* ── Per-plan metadata. The globalVar field is the const declared
       inside the plan-*.js file (loaded earlier on reading-plans.html).
       The sections map is dayNum → tracked-caps section name. ── */
  var PLAN_META = {
    'bible-2yr': {
      title: 'The Whole Bible',
      subtitle: 'A two-year reading of Holy Scripture',
      durationCaps: 'a reading in seven hundred and thirty days',
      filename: 'orthodox-companion-the-whole-bible-two-years.pdf',
      globalVar: 'PLAN_2YEAR',
      sections: {}
    },
    'bible-1yr': {
      title: 'The Whole Bible',
      subtitle: 'A one-year reading of Holy Scripture',
      durationCaps: 'a reading in three hundred and sixty-five days',
      filename: 'orthodox-companion-the-whole-bible-one-year.pdf',
      globalVar: 'PLAN_1YEAR',
      sections: {}
    },
    'ot-1yr': {
      title: 'The Old Testament',
      subtitle: 'A one-year reading of the Septuagint',
      durationCaps: 'a reading in three hundred and sixty-five days',
      filename: 'orthodox-companion-the-old-testament-one-year.pdf',
      globalVar: 'PLAN_OT_1YEAR',
      sections: {
        1:   'PENTATEUCH',
        64:  'HISTORICAL BOOKS',
        153: 'DEUTEROCANONICAL BOOKS',
        188: 'WISDOM BOOKS',
        274: 'MAJOR PROPHETS',
        340: 'MINOR PROPHETS'
      }
    },
    'nt-1yr': {
      title: 'The New Testament',
      subtitle: 'A one-year reading of the New Covenant',
      durationCaps: 'a reading in three hundred and sixty-five days',
      filename: 'orthodox-companion-the-new-testament-one-year.pdf',
      globalVar: 'PLAN_NT_1YEAR',
      sections: {
        1: 'MATTHEW', 40: 'MARK', 60: 'LUKE', 95: 'JOHN', 123: 'ACTS',
        162: 'ROMANS', 186: '1 CORINTHIANS', 210: '2 CORINTHIANS',
        226: 'GALATIANS', 234: 'EPHESIANS', 242: 'PHILIPPIANS',
        248: 'COLOSSIANS', 254: '1 THESSALONIANS', 261: '2 THESSALONIANS',
        265: '1 TIMOTHY', 273: '2 TIMOTHY', 279: 'TITUS', 283: 'PHILEMON',
        284: 'HEBREWS', 304: 'JAMES', 311: '1 PETER', 318: '2 PETER',
        322: '1 JOHN', 333: 'REVELATION'
      }
    },
    'nt-90': {
      title: 'The New Testament',
      subtitle: 'A ninety-day reading of the New Covenant',
      durationCaps: 'a reading in ninety days',
      filename: 'orthodox-companion-the-new-testament-ninety-days.pdf',
      globalVar: 'PLAN_NT_90',
      sections: {
        1: 'MATTHEW', 11: 'MARK', 17: 'LUKE', 25: 'JOHN', 32: 'ACTS',
        41: 'ROMANS', 46: '1 CORINTHIANS', 51: '2 CORINTHIANS',
        55: 'GALATIANS', 57: 'EPHESIANS', 59: 'PHILIPPIANS',
        60: 'COLOSSIANS', 67: 'TITUS', 73: 'JAMES', 81: 'REVELATION'
      }
    },
    'gospels-60': {
      title: 'The Four Gospels',
      subtitle: 'A reading of the Holy Gospels in sixty days',
      durationCaps: 'a reading in sixty days',
      filename: 'orthodox-companion-the-four-gospels.pdf',
      globalVar: 'PLAN_GOSPELS',
      sections: { 1: 'MATTHEW', 19: 'MARK', 28: 'LUKE', 44: 'JOHN' }
    },
    'epistles-30': {
      title: 'The Apostolic Epistles',
      subtitle: 'A thirty-day reading of the letters of the Apostles',
      durationCaps: 'a reading in thirty days',
      filename: 'orthodox-companion-the-apostolic-epistles.pdf',
      globalVar: 'PLAN_EPISTLES',
      sections: {
        1: 'ROMANS', 7: '1 CORINTHIANS', 12: '2 CORINTHIANS',
        15: 'GALATIANS', 17: 'EPHESIANS', 18: 'PHILIPPIANS & COLOSSIANS',
        19: '1\u20132 THESSALONIANS', 20: '1 TIMOTHY', 21: '2 TIMOTHY & TITUS',
        22: 'PHILEMON', 23: 'HEBREWS', 26: 'JAMES', 27: '1 PETER',
        28: '2 PETER', 29: '1 JOHN'
      }
    },
    'psalter': {
      title: 'The Psalter',
      subtitle: 'A monthly reading of the Psalter in the kathisma tradition',
      durationCaps: 'a reading in thirty days',
      filename: 'orthodox-companion-the-psalter-monthly.pdf',
      globalVar: 'PLAN_PSALTER',
      sections: {}
    },
    'wisdom-30': {
      title: 'The Wisdom Books',
      subtitle: 'A thirty-day reading of the Wisdom literature',
      durationCaps: 'a reading in thirty days',
      filename: 'orthodox-companion-the-wisdom-books.pdf',
      globalVar: 'PLAN_WISDOM',
      sections: {
        1: 'JOB', 8: 'PROVERBS', 14: 'ECCLESIASTES',
        16: 'SONG OF SONGS', 17: 'WISDOM OF SOLOMON', 20: 'SIRACH'
      }
    },
    'prophets-60': {
      title: 'The Prophets',
      subtitle: 'A sixty-day reading of the Major and Minor Prophets',
      durationCaps: 'a reading in sixty days',
      filename: 'orthodox-companion-the-prophets.pdf',
      globalVar: 'PLAN_PROPHETS',
      sections: {
        1: 'ISAIAH', 18: 'JEREMIAH', 31: 'LAMENTATIONS',
        32: 'BARUCH & LETTER OF JEREMIAH', 34: 'EZEKIEL',
        46: 'DANIEL & ADDITIONS', 50: 'THE TWELVE MINOR PROPHETS'
      }
    },
    'lenten': {
      title: 'Great Lent',
      subtitle: 'A reading for the holy forty days and Holy Week',
      durationCaps: 'a reading in forty-eight days',
      filename: 'orthodox-companion-the-great-lent-plan.pdf',
      globalVar: 'PLAN_LENTEN',
      sections: {}
    },
    'nativity-40': {
      title: 'The Nativity Fast',
      subtitle: 'A forty-day reading before the Nativity of Christ',
      durationCaps: 'a reading in forty days',
      filename: 'orthodox-companion-the-nativity-fast-plan.pdf',
      globalVar: 'PLAN_NATIVITY',
      sections: {}
    },
    'holy-week': {
      title: 'Holy Week',
      subtitle: 'A reading for the eight days from Palm Sunday to Pascha',
      durationCaps: 'a reading in eight days',
      filename: 'orthodox-companion-the-holy-week-plan.pdf',
      globalVar: 'PLAN_HOLY_WEEK',
      sections: {}
    },
    'catechumen-40': {
      title: 'For Catechumens',
      subtitle: 'A forty-day reading for those entering the Faith',
      durationCaps: 'a reading in forty days',
      filename: 'orthodox-companion-the-catechumen-plan.pdf',
      globalVar: 'PLAN_CATECHUMEN',
      sections: { 1: 'THE GOSPEL OF JOHN', 22: 'ACTS AND WISDOM OF SOLOMON' }
    }
  };

  /* ── Fasting tracker data (the four fasts + weekly Wed/Fri) ── */
  var FASTS = [
    {
      name: 'GREAT LENT',
      datesLine: 'Clean Monday \u2014 Holy Saturday \u00B7 The seven weeks before Pascha',
      desc: 'The most solemn fast of the year, calling the whole Church into forty days of intensive repentance and prayer before the great Passover of our Lord. The fast deepens through Holy Week, as the Church draws ever closer to the Cross \u2014 and to the empty tomb.',
      cells: 48, cols: 7
    },
    {
      name: 'THE APOSTLES\u2019 FAST',
      datesLine: 'Monday after All Saints \u2014 June 28 \u00B7 Variable in length',
      desc: 'Kept in memory of the holy Apostles who fasted before being sent out to proclaim the Risen Christ to the world. Its length varies year by year with the date of Pascha, from about a week to roughly six. A gentler fast, suited to the long days of summer, yet carrying the Apostolic spirit.',
      cells: 42, cols: 7
    },
    {
      name: 'THE DORMITION FAST',
      datesLine: 'August 1 \u2014 14 \u00B7 The two weeks before the Dormition of the Theotokos',
      desc: 'Two weeks of quiet fasting before the Dormition of the Theotokos on August 15. The Church enters this fast as she enters prayer \u2014 with stillness and love, accompanying the Mother of God in her last days on earth.',
      cells: 14, cols: 7
    },
    {
      name: 'THE NATIVITY FAST',
      datesLine: 'November 15 \u2014 December 24 \u00B7 The forty days before the Nativity of Christ',
      desc: 'Forty days of patient preparation for the Nativity of Christ. In the earlier weeks the fast carries a lighter, expectant character. As the great feast draws near, the fast deepens \u2014 the Church entering a more intensive period of waiting for the Word to become flesh.',
      cells: 40, cols: 8
    }
  ];

  /* ════════════════════════════════════════════════════════════
     DOC-DEFINITION BUILDERS
     ════════════════════════════════════════════════════════════ */

  /* Common page chrome. The cover page (currentPage === 1) gets the
     parchment tint with no header/footer; body pages get the lighter
     cream surface plus a running header and a small page number. */
  function pageBackground(planTitle) {
    return function (currentPage, pageSize) {
      var color = currentPage === 1 ? COLORS.parchment : COLORS.surface;
      return [{
        canvas: [{ type: 'rect', x: 0, y: 0,
                   w: pageSize.width, h: pageSize.height, color: color }]
      }];
    };
  }
  function pageHeader(planTitle) {
    return function (currentPage) {
      if (currentPage === 1) return null;
      return {
        stack: [
          { text: 'Orthodox Companion  \u00B7  ' + planTitle,
            italics: true, color: COLORS.inkMuted, fontSize: 8.5,
            alignment: 'center', margin: [0, 22, 0, 0] },
          { canvas: [{ type: 'line', x1: 65, y1: 0, x2: 547, y2: 0,
                       lineWidth: 0.4, lineColor: COLORS.rule }],
            margin: [0, 6, 0, 0] }
        ]
      };
    };
  }
  function pageFooter() {
    return function (currentPage) {
      if (currentPage === 1) return null;
      return { text: String(currentPage - 1),
               fontSize: 9, color: COLORS.goldDim,
               alignment: 'right', margin: [0, 24, 65, 0] };
    };
  }

  /* Tracked-caps label using pdfmake's characterSpacing. */
  function trackedCaps(text, opts) {
    opts = opts || {};
    return {
      text: String(text).toUpperCase(),
      font: opts.font || 'Garamond',
      bold: opts.bold !== false,
      fontSize: opts.fontSize || 8.5,
      characterSpacing: opts.tracking != null ? opts.tracking : 2.4,
      color: opts.color || COLORS.goldLight,
      alignment: opts.alignment || 'center',
      margin: opts.margin || [0, 0, 0, 0]
    };
  }

  /* A thin gold-dim horizontal rule, centered. */
  function goldRule(width, opts) {
    opts = opts || {};
    return {
      canvas: [{
        type: 'line',
        x1: 0, y1: 0, x2: width, y2: 0,
        lineWidth: opts.lineWidth || 0.7,
        lineColor: opts.color || COLORS.goldDim
      }],
      alignment: 'center',
      margin: opts.margin || [0, 0, 0, 0]
    };
  }

  /* Cross flanked by rules — the article-end ornament from the website. */
  function colophonMark() {
    var ruleW = 110, gap = 14, crossW = 22;
    var totalW = ruleW * 2 + gap * 2 + crossW;
    return {
      columns: [
        { width: '*', text: '' },
        {
          width: totalW,
          columns: [
            { width: ruleW, canvas: [{ type: 'line',
                x1: 0, y1: 11, x2: ruleW, y2: 11,
                lineWidth: 0.6, lineColor: COLORS.goldDim }] },
            { width: gap, text: '' },
            { width: crossW, svg: crossOrthSvg(crossW, COLORS.gold) },
            { width: gap, text: '' },
            { width: ruleW, canvas: [{ type: 'line',
                x1: 0, y1: 11, x2: ruleW, y2: 11,
                lineWidth: 0.6, lineColor: COLORS.goldDim }] }
          ]
        },
        { width: '*', text: '' }
      ],
      margin: [0, 0, 0, 0]
    };
  }

  /* The cover page block. */
  function coverPage(meta) {
    return {
      stack: [
        { text: '', margin: [0, 80, 0, 0] },
        { svg: chiRhoSvg(44, COLORS.gold), width: 44, alignment: 'center' },
        { text: '', margin: [0, 18, 0, 0] },
        goldRule(170, { margin: [0, 0, 0, 14] }),
        { text: meta.title,
          font: 'Cinzel', bold: true, fontSize: 22, color: COLORS.ink,
          alignment: 'center', characterSpacing: 0.6, margin: [0, 0, 0, 6] },
        goldRule(170, { margin: [0, 0, 0, 14] }),
        { text: meta.subtitle,
          italics: true, fontSize: 12, color: COLORS.inkDim,
          alignment: 'center', margin: [0, 0, 0, 8] },
        trackedCaps(meta.durationCaps, { fontSize: 9, tracking: 2.4,
          color: COLORS.goldLight, bold: false, margin: [0, 0, 0, 36] }),
        { text: RULE_NOT_RACE,
          italics: true, fontSize: 11, color: COLORS.inkDim,
          alignment: 'center', margin: [50, 0, 50, 28] },
        goldRule(350, { lineWidth: 0.5, margin: [0, 0, 0, 14] }),
        trackedCaps('Before you begin', { fontSize: 8.5, tracking: 2.4,
          color: COLORS.goldLight, margin: [0, 0, 0, 8] }),
        { text: OPENING_PRAYER,
          italics: true, fontSize: 11, color: COLORS.inkDim,
          alignment: 'center', lineHeight: 1.4,
          margin: [30, 0, 30, 14] },
        goldRule(350, { lineWidth: 0.5 })
      ],
      pageBreak: 'after'
    };
  }

  /* The closing chrome — kept together as one unbreakable block so it
     never straddles two pages. */
  function closingBlock() {
    return {
      stack: [
        { text: '', margin: [0, 22, 0, 0] },
        goldRule(350, { lineWidth: 0.5, margin: [0, 0, 0, 14] }),
        trackedCaps('When the rule is kept', { fontSize: 8.5, tracking: 2.4,
          color: COLORS.goldLight, margin: [0, 0, 0, 8] }),
        { text: CLOSING_PRAYER,
          italics: true, fontSize: 11, color: COLORS.inkDim,
          alignment: 'center', lineHeight: 1.4,
          margin: [30, 0, 30, 14] },
        goldRule(350, { lineWidth: 0.5, margin: [0, 0, 0, 36] }),
        colophonMark(),
        { text: '', margin: [0, 22, 0, 0] },
        { text: PARISH_LOCATOR_LINE,
          fontSize: 10, color: COLORS.inkMuted,
          alignment: 'center', lineHeight: 1.4,
          margin: [30, 0, 30, 22] },
        { text: FOOTER_BRAND,
          fontSize: 8, color: COLORS.inkMuted,
          alignment: 'center', italics: true }
      ],
      unbreakable: true
    };
  }

  /* A section heading + its first 3 day rows, kept together. */
  function sectionOpening(name, dayRows) {
    return {
      stack: [
        { text: '', margin: [0, 14, 0, 0] },
        trackedCaps(name, { fontSize: 10, tracking: 2.0,
          color: COLORS.goldLight, margin: [0, 0, 0, 6] }),
        goldRule(64, { lineWidth: 0.6, margin: [0, 0, 0, 10] })
      ].concat(dayRows),
      unbreakable: true
    };
  }

  /* A single day row, rendered as a small 3-column table with a
     bottom-only hairline. The checkbox is an SVG for crisp printing.
     The whole row is wrapped in an unbreakable stack so that a day's
     citation + note never split across a page boundary. */
  function dayRow(dayNum, refsLine, note) {
    var bodyStack = [
      { columns: [
          { width: 50, text: 'Day ' + dayNum,
            color: COLORS.inkDim, fontSize: 10, margin: [0, 1, 0, 0] },
          { width: '*', text: refsLine,
            color: COLORS.ink, fontSize: 11 }
        ]
      }
    ];
    if (note) {
      bodyStack.push({
        columns: [
          { width: 50, text: '' },
          { width: '*', text: note,
            italics: true, color: COLORS.inkMuted,
            fontSize: 9, margin: [0, 2, 0, 0] }
        ]
      });
    }
    return {
      stack: [{
        table: {
          widths: [14, '*'],
          body: [[
            { svg: checkboxSvg(9), margin: [0, 1, 0, 0], border: [false, false, false, false] },
            { stack: bodyStack, border: [false, false, false, false] }
          ]]
        },
        layout: {
          hLineWidth: function (i, node) {
            return i === node.table.body.length ? 0.4 : 0;
          },
          hLineColor: function () { return COLORS.rule; },
          vLineWidth: function () { return 0; },
          paddingLeft:   function () { return 0; },
          paddingRight:  function () { return 4; },
          paddingTop:    function () { return 4; },
          paddingBottom: function () { return 4; }
        }
      }],
      unbreakable: true
    };
  }

  /* End-of-week break block — chi-rho ornament, italic rotation text,
     gold-light attribution. Wrapped unbreakable. */
  function weekBreak(item) {
    var content = [
      { text: '', margin: [0, 8, 0, 0] },
      { svg: chiRhoSvg(14, COLORS.gold), width: 14, alignment: 'center' },
      { text: '', margin: [0, 6, 0, 0] },
      { text: item.text,
        italics: true, fontSize: 10.5, color: COLORS.inkDim,
        alignment: 'center', lineHeight: 1.4,
        margin: [40, 0, 40, item.attr ? 6 : 4] }
    ];
    if (item.attr) {
      content.push({
        text: '\u2014 ' + item.attr,
        fontSize: 9, color: COLORS.goldLight,
        alignment: 'center', margin: [0, 0, 0, 4]
      });
    }
    content.push({ text: '', margin: [0, 8, 0, 0] });
    return { stack: content, unbreakable: true };
  }

  /* Format a single day's citations into a single line with the middle-
     dot separator the website uses. Order: OT \u00B7 Ps \u00B7 Pr \u00B7 NT. */
  function formatRefs(entry) {
    var parts = [];
    if (entry && entry.ot && entry.ot.ref) parts.push('OT: ' + entry.ot.ref);
    if (entry && entry.ps && entry.ps.ref) parts.push('Ps: ' + entry.ps.ref);
    if (entry && entry.pr && entry.pr.ref) parts.push('Pr: ' + entry.pr.ref);
    if (entry && entry.nt && entry.nt.ref) parts.push('NT: ' + entry.nt.ref);
    return parts.join('  \u00B7  ');
  }

  /* Pull the per-day note (if any) directly from the data object. The
     plan-*.js source files carry an authored `note` string on each day
     that has one; days without a note get no italic line under the
     citation. The note text becomes the source of truth — no comment
     parsing at runtime. */
  function getDayNote(planArr, dayNum) {
    var entry = planArr[dayNum];
    return (entry && typeof entry.note === 'string' && entry.note) || null;
  }

  /* Build the body content for one plan: section openings, day rows,
     week breaks every 7 days. Week breaks adjacent to a section start
     are suppressed (the section transition is the natural pause). */
  function buildPlanBody(planId, planArr) {
    var meta = PLAN_META[planId];
    var sections = meta.sections || {};
    var sectionDays = {};
    for (var k in sections) sectionDays[parseInt(k, 10)] = sections[k];

    var content = [];
    var totalDays = planArr.length - 1;  // index 0 is unused (1-indexed)
    var rotationIdx = 0;
    var rotationOrder = [
      SCRIPTURE_ROTATION, FATHER_ROTATION, PRAYER_ROTATION
    ];
    var scrCount = 0, fathCount = 0, prayCount = 0;
    var counters = [0, 0, 0];  // per-bucket counters
    var bucketOrder = [];      // 0=scripture 1=father 2=prayer

    var i = 1;
    while (i <= totalDays) {
      // Section opening?
      if (sectionDays[i]) {
        var stick = Math.min(3, totalDays - i + 1);
        var firstRows = [];
        for (var k2 = 0; k2 < stick; k2++) {
          var d = i + k2;
          var entry = planArr[d];
          firstRows.push(dayRow(d, formatRefs(entry), getDayNote(planArr, d)));
        }
        content.push(sectionOpening(sectionDays[i], firstRows));
        // Advance, suppressing any week break that would have fired
        // on these days.
        for (var kk = 0; kk < stick; kk++) {
          var dd = i + kk;
          if (dd % 7 === 0 && dd < totalDays) {
            // Suppress (but advance the rotation counter so the rotation
            // stays honest across the document)
            rotationIdx++;
          }
        }
        i += stick;
        continue;
      }

      // Normal day row
      var entry2 = planArr[i];
      content.push(dayRow(i, formatRefs(entry2), getDayNote(planArr, i)));

      // Week break every 7 days, except adjacent to a section start
      if (i % 7 === 0 && i < totalDays) {
        var nextDay = i + 1;
        if (sectionDays[nextDay]) {
          // Section header about to fire — let it be the pause
          rotationIdx++;
        } else {
          var bucket = rotationOrder[rotationIdx % 3];
          var item = bucket[Math.floor(rotationIdx / 3) % bucket.length];
          content.push(weekBreak(item));
          rotationIdx++;
        }
      }
      i++;
    }
    return content;
  }

  /* Assemble the full doc-definition for a reading plan. */
  function buildPlanDocDef(planId, planArr) {
    var meta = PLAN_META[planId];
    if (!meta) throw new Error('Unknown plan id: ' + planId);
    if (!planArr || !planArr.length) {
      throw new Error('Plan data missing for ' + planId +
                      ' (expected global ' + meta.globalVar + ')');
    }
    var content = [coverPage(meta)]
      .concat(buildPlanBody(planId, planArr))
      .concat([closingBlock()]);
    return {
      info: {
        title: 'Orthodox Companion \u00B7 ' + meta.title,
        author: 'Orthodox Companion',
        subject: meta.subtitle
      },
      pageSize: 'LETTER',
      pageMargins: [65, 60, 65, 70],
      defaultStyle: { font: 'Garamond', fontSize: 11, color: COLORS.ink, lineHeight: 1.3 },
      background: pageBackground(meta.title),
      header: pageHeader(meta.title),
      footer: pageFooter(),
      content: content
    };
  }

  /* ── Fasting tracker doc-definition ── */

  /* A single fast page: title + dates + 2-3 sentence description +
     the per-fast checkbox grid. Page-break before each. */
  function fastPage(fast) {
    return [
      { text: '', margin: [0, 18, 0, 0] },
      trackedCaps(fast.name, { fontSize: 14, tracking: 3.0,
        color: COLORS.goldLight, margin: [0, 0, 0, 6] }),
      goldRule(120, { lineWidth: 0.6, margin: [0, 0, 0, 14] }),
      { text: fast.datesLine,
        italics: true, fontSize: 11, color: COLORS.inkDim,
        alignment: 'center', margin: [30, 0, 30, 14] },
      { text: fast.desc,
        fontSize: 11, color: COLORS.ink, lineHeight: 1.45,
        alignment: 'left', margin: [10, 0, 10, 22] },
      fastCheckGrid(fast.cells, fast.cols),
      { text: '', pageBreak: 'after' }
    ];
  }

  /* Checkbox grid for a fast. Renders cells as a table with N columns
     and the right number of rows; each cell is a small SVG checkbox
     plus the day number. */
  function fastCheckGrid(cells, cols) {
    var rows = [];
    var dayNum = 1;
    while (dayNum <= cells) {
      var row = [];
      for (var c = 0; c < cols; c++) {
        if (dayNum <= cells) {
          row.push({
            stack: [
              { svg: checkboxSvg(11), alignment: 'center', margin: [0, 0, 0, 3] },
              { text: String(dayNum), alignment: 'center',
                fontSize: 9, color: COLORS.inkMuted }
            ],
            margin: [0, 6, 0, 6]
          });
          dayNum++;
        } else {
          row.push({ text: '' });
        }
      }
      rows.push(row);
    }
    var widths = [];
    for (var w = 0; w < cols; w++) widths.push('*');
    return {
      table: { widths: widths, body: rows },
      layout: {
        hLineWidth:    function () { return 0; },
        vLineWidth:    function () { return 0; },
        paddingLeft:   function () { return 4; },
        paddingRight:  function () { return 4; },
        paddingTop:    function () { return 0; },
        paddingBottom: function () { return 0; }
      }
    };
  }

  /* Weekly Wednesday-Friday tracker — twelve months on one page. */
  function weeklyTracker() {
    var months = [
      'JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE',
      'JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'
    ];
    function monthBlock(name) {
      var weekRows = [];
      // 5 weeks of "Wed [ ]   Fri [ ]" rows
      for (var w = 0; w < 5; w++) {
        weekRows.push({
          columns: [
            { width: 24, text: 'Wed', fontSize: 8.5, color: COLORS.inkMuted, italics: true, margin: [0, 1, 0, 0] },
            { width: 14, svg: checkboxSvg(9), margin: [0, 1, 0, 0] },
            { width: 8, text: '' },
            { width: 24, text: 'Fri', fontSize: 8.5, color: COLORS.inkMuted, italics: true, margin: [0, 1, 0, 0] },
            { width: 14, svg: checkboxSvg(9), margin: [0, 1, 0, 0] }
          ],
          margin: [0, 2, 0, 2]
        });
      }
      return {
        stack: [
          trackedCaps(name, { fontSize: 8.5, tracking: 1.6,
            color: COLORS.goldLight, alignment: 'left',
            margin: [0, 0, 0, 4] }),
          { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 80, y2: 0,
                       lineWidth: 0.4, lineColor: COLORS.goldDim }],
            margin: [0, 0, 0, 6] }
        ].concat(weekRows),
        margin: [0, 0, 0, 18]
      };
    }
    // 4-column grid of the 12 months
    var rows = [];
    for (var r = 0; r < 3; r++) {
      var row = [];
      for (var c = 0; c < 4; c++) {
        row.push(monthBlock(months[r * 4 + c]));
      }
      rows.push(row);
    }
    return {
      stack: [
        { text: '', margin: [0, 18, 0, 0] },
        trackedCaps('THE WEEKLY FAST', { fontSize: 14, tracking: 3.0,
          color: COLORS.goldLight, margin: [0, 0, 0, 6] }),
        goldRule(120, { lineWidth: 0.6, margin: [0, 0, 0, 18] }),
        { text: 'Wednesday for the betrayal, Friday for the Cross. ' +
                'Every week the Church keeps watch with her Lord.',
          italics: true, fontSize: 11, color: COLORS.inkDim,
          alignment: 'center', margin: [40, 0, 40, 18] },
        {
          table: {
            widths: ['*', '*', '*', '*'],
            body: rows
          },
          layout: {
            hLineWidth: function () { return 0; },
            vLineWidth: function () { return 0; },
            paddingLeft: function () { return 4; },
            paddingRight: function () { return 4; },
            paddingTop: function () { return 0; },
            paddingBottom: function () { return 0; }
          }
        },
        { text: '', margin: [0, 8, 0, 0] },
        { text: 'When a fixed feast or a fast-free week (Bright Week, ' +
                'the week after Pentecost, Christmas to Theophany) falls ' +
                'on a Wednesday or Friday, the Church sets the fast aside.',
          italics: true, fontSize: 9, color: COLORS.inkMuted,
          alignment: 'center', margin: [40, 0, 40, 0] },
        { text: '', pageBreak: 'after' }
      ]
    };
  }

  function buildFastingDocDef() {
    var meta = {
      title: 'The Fasting Tracker',
      subtitle: 'The four great fasts, and every Wednesday and Friday, all year',
      durationCaps: 'all year, with the church'
    };
    var content = [coverPage(meta), weeklyTracker()];
    for (var i = 0; i < FASTS.length; i++) {
      content = content.concat(fastPage(FASTS[i]));
    }
    content.push(closingBlock());
    return {
      info: {
        title: 'Orthodox Companion \u00B7 ' + meta.title,
        author: 'Orthodox Companion',
        subject: meta.subtitle
      },
      pageSize: 'LETTER',
      pageMargins: [65, 60, 65, 70],
      defaultStyle: { font: 'Garamond', fontSize: 11, color: COLORS.ink, lineHeight: 1.3 },
      background: pageBackground(meta.title),
      header: pageHeader(meta.title),
      footer: pageFooter(),
      content: content
    };
  }

  /* ════════════════════════════════════════════════════════════
     LAZY LOADER (browser only) — pulls pdfmake from cdnjs and
     pdf-fonts.js (the base64 vfs) on first OCPDF.generate() call.
     Pinned to 0.2.12 — cdnjs's latest published pdfmake. The 0.2.18
     and 0.2.20 npm releases were never mirrored to cdnjs (as of the
     last verification: 2026-04-28). Our docDef uses no APIs newer
     than 0.2.12; verified by re-rendering the full sample set under
     pdfmake@0.2.12 server-side.
     ════════════════════════════════════════════════════════════ */
  var PDFMAKE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.12/pdfmake.min.js';
  var FONTS_URL   = 'pdf-fonts.js';

  function loadScript(url) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = url;
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error('Failed to load ' + url)); };
      document.head.appendChild(s);
    });
  }

  function ensureLoaded() {
    if (typeof window === 'undefined') return Promise.resolve();
    var hasPdfMake = typeof window.pdfMake !== 'undefined';
    var hasVfs = hasPdfMake && window.pdfMake.vfs &&
                 Object.keys(window.pdfMake.vfs).length > 0;
    if (hasPdfMake && hasVfs) return Promise.resolve();
    var p = hasPdfMake ? Promise.resolve() : loadScript(PDFMAKE_URL);
    return p.then(function () { return loadScript(FONTS_URL); });
  }

  /* ════════════════════════════════════════════════════════════
     PUBLIC API
     ════════════════════════════════════════════════════════════ */
  function generate(planId) {
    if (planId === 'fasting-tracker') {
      return ensureLoaded().then(function () {
        var docDef = buildFastingDocDef();
        return downloadPdf(docDef, 'orthodox-companion-the-fasting-tracker.pdf');
      });
    }
    var meta = PLAN_META[planId];
    if (!meta) {
      console.error('OCPDF.generate: unknown plan id', planId);
      return Promise.reject(new Error('Unknown plan id: ' + planId));
    }
    return ensureLoaded().then(function () {
      var planArr = root[meta.globalVar];
      if (!planArr) {
        throw new Error('Plan data global ' + meta.globalVar +
                        ' is not loaded. Make sure ' + planId +
                        '.js is included before pdf-generator.js calls.');
      }
      var docDef = buildPlanDocDef(planId, planArr);
      return downloadPdf(docDef, meta.filename);
    }).catch(function (err) {
      console.error('OCPDF.generate failed:', err);
      throw err;
    });
  }

  function downloadPdf(docDef, filename) {
    if (typeof window === 'undefined' || !window.pdfMake) {
      throw new Error('pdfMake not available in current environment');
    }
    return new Promise(function (resolve) {
      window.pdfMake.createPdf(docDef).download(filename, function () {
        resolve();
      });
    });
  }

  /* ── Export ── */
  root.OCPDF = {
    generate:           generate,
    buildPlanDocDef:    buildPlanDocDef,    // for server-side runners
    buildFastingDocDef: buildFastingDocDef, // for server-side runners
    PLAN_META:          PLAN_META,
    COLORS:             COLORS
  };

})(typeof window !== 'undefined' ? window
 : typeof globalThis !== 'undefined' ? globalThis
 : this);
