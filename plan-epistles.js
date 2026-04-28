// Orthodox Companion — Reading Plan
// Plan: Epistles — 30 Days (plan-epistles.js)
// Variable: PLAN_EPISTLES
// Days: 30
// Coverage: Romans · 1–2 Corinthians · Galatians · Ephesians · Philippians · Colossians
//           1–2 Thessalonians · 1–2 Timothy · Titus · Philemon · Hebrews · James
//           1–2 Peter · 1–2–3 John · Jude
// Total: 121 chapters (~4 chapters/day)
// Index 0 is unused — plan is 1-indexed.

const PLAN_EPISTLES = [
  null, // index 0 unused

  // ══════════════════════════════════════════════════════
  //  ROMANS  (Days 1–6)
  // ══════════════════════════════════════════════════════

  // Day 1 — The Gospel is the power of God; the wrath of God against unrighteousness
  { nt: { ref: "Rom 1–2", book: "ROM", ch: 1 }, note: "The Gospel is the power of God; the wrath of God against unrighteousness" },

  // Day 2 — Justification by faith; Abraham justified before circumcision; peace with God
  { nt: { ref: "Rom 3–5", book: "ROM", ch: 3 }, note: "Justification by faith; Abraham justified before circumcision; peace with God" },

  // Day 3 — Dead to sin, alive to God; the Spirit gives life; nothing separates us from His love
  { nt: { ref: "Rom 6–8", book: "ROM", ch: 6 }, note: "Dead to sin, alive to God; the Spirit gives life; nothing separates us from His love" },

  // Day 4 — Israel and the mystery of God's mercy; the sovereign freedom of the potter
  { nt: { ref: "Rom 9–11", book: "ROM", ch: 9 }, note: "Israel and the mystery of God's mercy; the sovereign freedom of the potter" },

  // Day 5 — Living sacrifices; love one another; governing authorities; the strong bear with the weak
  { nt: { ref: "Rom 12–14", book: "ROM", ch: 12 }, note: "Living sacrifices; love one another; governing authorities; the strong bear with the weak" },

  // Day 6 — Greetings to the saints; the mystery now revealed; glory to God forever
  { nt: { ref: "Rom 15–16", book: "ROM", ch: 15 }, note: "Greetings to the saints; the mystery now revealed; glory to God forever" },

  // ══════════════════════════════════════════════════════
  //  1 CORINTHIANS  (Days 7–11)
  // ══════════════════════════════════════════════════════

  // Day 7 — The wisdom of the cross; divisions in the church; God's foolishness is wiser than men
  { nt: { ref: "1 Cor 1–4", book: "1CO", ch: 1 }, note: "The wisdom of the cross; divisions in the church; God's foolishness is wiser than men" },

  // Day 8 — Sexual immorality; lawsuits; marriage and celibacy; food offered to idols
  { nt: { ref: "1 Cor 5–8", book: "1CO", ch: 5 }, note: "Sexual immorality; lawsuits; marriage and celibacy; food offered to idols" },

  // Day 9 — Paul's apostolic rights; the race; warnings from Israel's history; the Lord's Supper
  { nt: { ref: "1 Cor 9–11", book: "1CO", ch: 9 }, note: "Paul's apostolic rights; the race; warnings from Israel's history; the Lord's Supper" },

  // Day 10 — Spiritual gifts; the Body of Christ; the greatest commandment is love
  { nt: { ref: "1 Cor 12–14", book: "1CO", ch: 12 }, note: "Spiritual gifts; the Body of Christ; the greatest commandment is love" },

  // Day 11 — The Resurrection of Christ and of the dead; the last enemy destroyed; the final greeting
  { nt: { ref: "1 Cor 15–16", book: "1CO", ch: 15 }, note: "The Resurrection of Christ and of the dead; the last enemy destroyed; the final greeting" },

  // ══════════════════════════════════════════════════════
  //  2 CORINTHIANS  (Days 12–14)
  // ══════════════════════════════════════════════════════

  // Day 12 — Comfort in suffering; ministers of the new covenant; the treasure in clay jars
  { nt: { ref: "2 Cor 1–4", book: "2CO", ch: 1 }, note: "Comfort in suffering; ministers of the new covenant; the treasure in clay jars" },

  // Day 13 — Ambassadors for Christ; the ministry of reconciliation; the collection for Jerusalem
  { nt: { ref: "2 Cor 5–9", book: "2CO", ch: 5 }, note: "Ambassadors for Christ; the ministry of reconciliation; the collection for Jerusalem" },

  // Day 14 — Paul's apostolic authority; his sufferings; the thorn in the flesh; power in weakness
  { nt: { ref: "2 Cor 10–13", book: "2CO", ch: 10 }, note: "Paul's apostolic authority; his sufferings; the thorn in the flesh; power in weakness" },

  // ══════════════════════════════════════════════════════
  //  GALATIANS  (Days 15–16)
  // ══════════════════════════════════════════════════════

  // Day 15 — No other Gospel; Paul's call; justification by faith, not by works of the Law
  { nt: { ref: "Gal 1–3", book: "GAL", ch: 1 }, note: "No other Gospel; Paul's call; justification by faith, not by works of the Law" },

  // Day 16 — Heirs through faith; freedom in Christ; the fruit of the Spirit; bear one another's burdens
  { nt: { ref: "Gal 4–6", book: "GAL", ch: 4 }, note: "Heirs through faith; freedom in Christ; the fruit of the Spirit; bear one another's burdens" },

  // ══════════════════════════════════════════════════════
  //  EPHESIANS  (Day 17)
  // ══════════════════════════════════════════════════════

  // Day 17 — Every spiritual blessing; saved by grace through faith; the mystery of the Church
  // Walk worthy; wives and husbands; the armor of God
  { nt: { ref: "Eph 1–6", book: "EPH", ch: 1 }, note: "Every spiritual blessing; saved by grace through faith; the mystery of the Church" },

  // ══════════════════════════════════════════════════════
  //  PHILIPPIANS + COLOSSIANS  (Day 18)
  // ══════════════════════════════════════════════════════

  // Day 18 — For me to live is Christ; the mind of Christ; rejoice always; I can do all things
  // The preeminence of Christ; fullness in Him; set your mind on things above
  { nt: { ref: "Phil 1–4; Col 1–4", book: "PHP", ch: 1 }, note: "For me to live is Christ; the mind of Christ; rejoice always; I can do all things" },

  // ══════════════════════════════════════════════════════
  //  1–2 THESSALONIANS  (Day 19)
  // ══════════════════════════════════════════════════════

  // Day 19 — Paul's thanksgiving; the coming of the Lord; comfort one another
  // The Day of the Lord; stand firm; the idle and disorderly
  { nt: { ref: "1 Th 1–5; 2 Th 1–3", book: "1TH", ch: 1 }, note: "Paul's thanksgiving; the coming of the Lord; comfort one another" },

  // ══════════════════════════════════════════════════════
  //  1 TIMOTHY  (Day 20)
  // ══════════════════════════════════════════════════════

  // Day 20 — Instructions for prayer and worship; the qualifications of bishops and deacons
  // Godliness with contentment; fight the good fight; charge to Timothy
  { nt: { ref: "1 Tim 1–6", book: "1TI", ch: 1 }, note: "Instructions for prayer and worship; the qualifications of bishops and deacons" },

  // ══════════════════════════════════════════════════════
  //  2 TIMOTHY + TITUS  (Day 21)
  // ══════════════════════════════════════════════════════

  // Day 21 — Fan into flame the gift of God; preach the word; I have kept the faith
  // Sound doctrine; the grace of God has appeared bringing salvation to all men
  { nt: { ref: "2 Tim 1–4; Tit 1–3", book: "2TI", ch: 1 }, note: "Fan into flame the gift of God; preach the word; I have kept the faith" },

  // ══════════════════════════════════════════════════════
  //  PHILEMON  (Day 22)
  // ══════════════════════════════════════════════════════

  // Day 22 — Philemon and Onesimus; receive him no longer as a slave but as a dear brother
  // The High Priest who sympathizes; approach the throne of grace; faith is the assurance of things hoped for
  { nt: { ref: "Phlm; Heb 1–3", book: "PHM", ch: 1 }, note: "Philemon and Onesimus; receive him no longer as a slave but as a dear brother" },

  // ══════════════════════════════════════════════════════
  //  HEBREWS  (Days 23–25)
  // ══════════════════════════════════════════════════════

  // Day 23 — The Son superior to angels and Moses; the Sabbath rest; the great High Priest
  // Melchizedek; the mature teaching
  { nt: { ref: "Heb 4–7", book: "HEB", ch: 4 }, note: "The Son superior to angels and Moses; the Sabbath rest; the great High Priest" },

  // Day 24 — The new covenant; the earthly and heavenly sanctuaries; Christ offered once for all
  { nt: { ref: "Heb 8–10", book: "HEB", ch: 8 }, note: "The new covenant; the earthly and heavenly sanctuaries; Christ offered once for all" },

  // Day 25 — The great cloud of witnesses; do not despise the Lord's discipline; a kingdom that cannot be shaken
  { nt: { ref: "Heb 11–13", book: "HEB", ch: 11 }, note: "The great cloud of witnesses; do not despise the Lord's discipline; a kingdom that cannot be shaken" },

  // ══════════════════════════════════════════════════════
  //  JAMES  (Day 26)
  // ══════════════════════════════════════════════════════

  // Day 26 — Count it all joy; faith without works is dead; tame the tongue
  // Draw near to God; the prayer of faith; the righteous man's prayer is powerful
  { nt: { ref: "Jas 1–5", book: "JAS", ch: 1 }, note: "Count it all joy; faith without works is dead; tame the tongue" },

  // ══════════════════════════════════════════════════════
  //  1 PETER  (Day 27)
  // ══════════════════════════════════════════════════════

  // Day 27 — Born again to a living hope; a chosen people, a royal priesthood
  // Suffering as a Christian; elders shepherd the flock; resist the devil
  { nt: { ref: "1 Pet 1–5", book: "1PE", ch: 1 }, note: "Born again to a living hope; a chosen people, a royal priesthood" },

  // ══════════════════════════════════════════════════════
  //  2 PETER  (Day 28)
  // ══════════════════════════════════════════════════════

  // Day 28 — Partakers of the divine nature; false teachers; the Day of the Lord
  // Grow in the grace and knowledge of our Lord Jesus Christ
  { nt: { ref: "2 Pet 1–3", book: "2PE", ch: 1 }, note: "Partakers of the divine nature; false teachers; the Day of the Lord" },

  // ══════════════════════════════════════════════════════
  //  1 JOHN  (Day 29)
  // ══════════════════════════════════════════════════════

  // Day 29 — God is light; walk in the light; do not love the world; the spirit of antichrist
  // We are children of God; love one another as He loved us
  { nt: { ref: "1 Jn 1–5", book: "1JO", ch: 1 }, note: "God is light; walk in the light; do not love the world; the spirit of antichrist" },

  // ══════════════════════════════════════════════════════
  //  2 JOHN · 3 JOHN · JUDE  (Day 30)
  // ══════════════════════════════════════════════════════

  // Day 30 — Walk in truth and love; beware of deceivers
  // Gaius commended; contend earnestly for the faith once delivered to the saints
  { nt: { ref: "2 Jn; 3 Jn; Jude", book: "2JO", ch: 1 }, note: "Walk in truth and love; beware of deceivers" },
];
