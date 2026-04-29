// Orthodox Companion — Week-break rotation pools (week-break-pools.js)
//
// Shared by all 14 View pages. Each ornamental week-break (every 7 days,
// suppressed adjacent to a section heading) draws from one of three pools
// in rotation: Scripture → Father → prayer. Eighteen entries each — a
// complete cycle covers a 365-day plan without repetition.
//
// Same authored content as the PDF chrome (April 27, 2026 wave). Lifted
// from pdf-generator.js so View pages share the source of truth.
//
// Usage (View pages):
//   <script src="../data/reading-plans/week-break-pools.js"></script>
//   …
//   var pools  = OC_WEEK_BREAK_POOLS;
//   var bucket = [pools.scripture, pools.fathers, pools.prayers];
//   …

const OC_WEEK_BREAK_POOLS = {
  scripture: [
    { text: "Open my eyes, that I may behold wondrous things from Your law.", attr: "Psalm 118:18 (LXX)" },
    { text: "Your word is a lamp to my feet and a light to my path.", attr: "Psalm 118:105 (LXX)" },
    { text: "I have hidden Your word in my heart, that I might not sin against You.", attr: "Psalm 118:11 (LXX)" },
    { text: "How sweet are Your words to my taste, sweeter than honey to my mouth!", attr: "Psalm 118:103 (LXX)" },
    { text: "Your law is within my heart.", attr: "Psalm 39:8 (LXX)" },
    { text: "The grass withers, the flower fades, but the word of our God stands forever.", attr: "Isaiah 40:8" },
    { text: "Man shall not live by bread alone, but by every word that proceeds from the mouth of God.", attr: "Matthew 4:4" },
    { text: "Heaven and earth shall pass away, but My words shall not pass away.", attr: "Matthew 24:35" },
    { text: "In the beginning was the Word, and the Word was with God, and the Word was God.", attr: "John 1:1" },
    { text: "And the Word became flesh and dwelt among us.", attr: "John 1:14" },
    { text: "Sanctify them by Your truth. Your word is truth.", attr: "John 17:17" },
    { text: "Then He opened their understanding, that they might comprehend the Scriptures.", attr: "Luke 24:45" },
    { text: "Faith comes by hearing, and hearing by the word of God.", attr: "Romans 10:17" },
    { text: "All Scripture is given by inspiration of God, and is profitable for doctrine.", attr: "2 Timothy 3:16" },
    { text: "For the word of God is living and powerful, and sharper than any two-edged sword.", attr: "Hebrews 4:12" },
    { text: "Receive with meekness the implanted word, which is able to save your souls.", attr: "James 1:21" },
    { text: "Lord, to whom shall we go? You have the words of eternal life.", attr: "John 6:68" },
    { text: "He has filled the hungry with good things.", attr: "Luke 1:53" }
  ],
  fathers: [
    { text: "Reading the Scriptures is a great safeguard against sin. Ignorance of them is a great precipice and a deep gulf.", attr: "St. John Chrysostom · Homily 35 on Genesis" },
    { text: "Pay close attention, beloved, to the reading of the Scriptures, that you may receive grace from the words.", attr: "After St. John Chrysostom" },
    { text: "When you sit down to read, first ask the Lord to open the eyes of your heart, that you may understand not only with the mind, but with the heart that loves Him.", attr: "After St. Ephraim the Syrian" },
    { text: "Do not be in haste to finish your reading; be in haste only to be transformed by what you read.", attr: "Orthodox patristic counsel" },
    { text: "He who would profit from the Scriptures must read them with reverence, with prayer, and with fear of the Lord.", attr: "After St. Isaac the Syrian" },
    { text: "The Scriptures are like a deep well; the deeper you draw, the sweeter the water.", attr: "After St. John Climacus" },
    { text: "Read a little; meditate much. The Scriptures are food, not entertainment.", attr: "Orthodox monastic saying" },
    { text: "He who reads the Scriptures speaks with God; he who prays speaks with God in another way. The two together are the life of the Christian.", attr: "After St. Isidore of Pelusium" },
    { text: "Let the words of the Lord be heard not only with the ears, but with the heart.", attr: "After St. Gregory the Theologian" },
    { text: "If you wish to know God, first know His Scriptures. They are the lamp by which He is found.", attr: "After St. Athanasius" },
    { text: "Reading without doing is the seed without water; doing without reading is water without seed.", attr: "Orthodox saying" },
    { text: "The Scriptures are written so that we may know Christ, and knowing Him, be saved.", attr: "After St. Cyril of Alexandria" },
    { text: "Every word of God is a small door, and through every door, Christ Himself comes to meet us.", attr: "Orthodox patristic counsel" },
    { text: "When you read the Holy Scriptures, do not aim at reading; aim at understanding. And do not aim at understanding alone; aim at fulfilling.", attr: "After St. Mark the Ascetic" },
    { text: "The Scriptures cannot be understood without the Church that bore them, the Fathers who taught them, and the Liturgy that prays them.", attr: "After St. Vincent of Lérins" },
    { text: "It is not the much-reading that profits us, but the much-praying with what we read.", attr: "After St. Theophan the Recluse" },
    { text: "He who reads with humility receives more than he who reads with much learning.", attr: "After St. Macarius" },
    { text: "What you receive in reading, lay before the Lord in prayer; what you receive in prayer, live out in love.", attr: "Orthodox patristic counsel" }
  ],
  prayers: [
    { text: "Lord Jesus Christ, Son of God, have mercy on me, a sinner, and let Your Word abide in me as I read.", attr: null },
    { text: "O Lord, who opens the Scriptures by the breath of Your Spirit, open my heart now to receive Your living Word. Let this rule be a doorway, not a destination.", attr: null },
    { text: "Most Holy Theotokos, who heard the Word and kept it in your heart, pray for me that I may do likewise.", attr: null },
    { text: "Holy Spirit, Comforter, take what is written and plant it in me. Amen.", attr: null },
    { text: "Christ our God, You are the Word made flesh. Speak to me through these words. Amen.", attr: null },
    { text: "Lord, I do not understand all that I read; teach me what You will. What I understand, give me grace to live. Amen.", attr: null },
    { text: "Glory to You, O Lord, glory to You. Through the prayers of Your saints, save me.", attr: null },
    { text: "O Lord, Lover of mankind, give me ears to hear and a heart to keep what I have heard. Amen.", attr: null },
    { text: "Christ is in our midst. He is and ever shall be. Bless, O Lord, this reading, that it may bear fruit unto life eternal.", attr: null },
    { text: "Lord, set me back on the path when I wander, and keep me on it when I am near. Amen.", attr: null },
    { text: "Glory to the Father, and to the Son, and to the Holy Spirit, both now and ever, and unto the ages of ages. Amen.", attr: null },
    { text: "Holy Trinity, have mercy on me. Lord, cleanse my sins. Master, pardon my iniquities. Holy One, visit and heal my infirmities, for Your name’s sake.", attr: null },
    { text: "O Lord, write Your Word on my heart, and let me carry it into the Liturgy, and from the Liturgy into the world. Amen.", attr: null },
    { text: "Through the prayers of the holy Fathers, Lord Jesus Christ our God, have mercy on us and save us. Amen.", attr: null },
    { text: "O Heavenly King, the Comforter, the Spirit of Truth, who are everywhere present and fill all things, treasury of blessings and giver of life, come and abide in me, and cleanse me from every stain, and save my soul, O Good One.", attr: null },
    { text: "Christ our God, the Word who became flesh, grant that the words of Your servants the prophets and apostles may bear fruit in me. Amen.", attr: null },
    { text: "It is meet and right to glorify You always, the unoriginate Father with Your only-begotten Son and Your all-holy Spirit. Amen.", attr: null },
    { text: "O Lord, give me a humble heart and an open ear, that what You have given Your Church I may receive with thanksgiving. Amen.", attr: null }
  ]
};
