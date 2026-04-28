// Orthodox Companion — Reading Plan
// Plan: Nativity Fast — 40 Days (plan-nativity.js)
// Variable: PLAN_NATIVITY
// Days: 40 (November 15 – December 24)
// Coverage:
//   OT  — Isaiah (days 1–40, the great Nativity prophet)
//   NT  — Epistles: Philippians · Colossians · 1–2 Thessalonians · Hebrews · Titus (days 1–16)
//          then Galatians · Ephesians · Romans (days 17–40)
//   PS  — Selected Psalms of longing, hope, and expectation
//
// Liturgical note: Isaiah is the pre-eminent prophet of the Incarnation.
// The Church reads Isaiah throughout the Nativity Fast at Vespers and the Hours.
// "Behold, a virgin shall conceive and bear a Son, and you shall call His name Emmanuel." (Isa 7:14)
// Index 0 is unused — plan is 1-indexed.

const PLAN_NATIVITY = [
  null, // index 0 unused

  // ══════════════════════════════════════════════════════
  //  WEEK 1 (Days 1–7) — November 15–21
  //  Isaiah opens: indictment, call, the promised King
  //  NT: Philippians — the mind of Christ who emptied Himself
  // ══════════════════════════════════════════════════════

  // Day 1 — November 15 (Opening of the Fast)
  // The great indictment; come, let us reason together; though your sins be as scarlet
  {
    ot: { ref: "Isa 1–2", book: "ISA", ch: 1 },
    ps: { ref: "Ps 25", ch: 25 },
    nt: { ref: "Phil 1", book: "PHP", ch: 1 },
    note: "November 15 (Opening of the Fast)"
  },

  // Day 2 — November 16
  // The day of the Lord against pride; the Lord alone will be exalted
  {
    ot: { ref: "Isa 3–4", book: "ISA", ch: 3 },
    ps: { ref: "Ps 27", ch: 27 },
    nt: { ref: "Phil 2", book: "PHP", ch: 2 },
    note: "November 16"
  },

  // Day 3 — November 17
  // The song of the vineyard; woe to those who call evil good
  {
    ot: { ref: "Isa 5–6", book: "ISA", ch: 5 },
    ps: { ref: "Ps 33", ch: 33 },
    nt: { ref: "Phil 3", book: "PHP", ch: 3 },
    note: "November 17"
  },

  // Day 4 — November 18
  // The sign of Immanuel; behold, a virgin shall conceive
  {
    ot: { ref: "Isa 7–8", book: "ISA", ch: 7 },
    ps: { ref: "Ps 40", ch: 40 },
    nt: { ref: "Phil 4", book: "PHP", ch: 4 },
    note: "November 18"
  },

  // Day 5 — November 19
  // For unto us a Child is born; unto us a Son is given; Prince of Peace
  {
    ot: { ref: "Isa 9–10", book: "ISA", ch: 9 },
    ps: { ref: "Ps 46", ch: 46 },
    nt: { ref: "Col 1", book: "COL", ch: 1 },
    note: "November 19"
  },

  // Day 6 — November 20
  // The rod out of Jesse's stem; the wolf shall dwell with the lamb
  {
    ot: { ref: "Isa 11–12", book: "ISA", ch: 11 },
    ps: { ref: "Ps 63", ch: 63 },
    nt: { ref: "Col 2", book: "COL", ch: 2 },
    note: "November 20"
  },

  // Day 7 — November 21 (Entry of the Theotokos into the Temple)
  // Oracles against Babylon; the earth is shaken; the morning star has fallen
  {
    ot: { ref: "Isa 13–14", book: "ISA", ch: 13 },
    ps: { ref: "Ps 45", ch: 45 },
    nt: { ref: "Col 3", book: "COL", ch: 3 },
    note: "November 21 (Entry of the Theotokos into the Temple)"
  },

  // ══════════════════════════════════════════════════════
  //  WEEK 2 (Days 8–14) — November 22–28
  //  Isaiah: Oracles against the nations; the little apocalypse
  //  NT: Colossians · 1 Thessalonians
  // ══════════════════════════════════════════════════════

  // Day 8 — November 22
  // Oracles against Moab, Damascus, Egypt; the Lord of Hosts reigns from Zion
  {
    ot: { ref: "Isa 15–17", book: "ISA", ch: 15 },
    ps: { ref: "Ps 62", ch: 62 },
    nt: { ref: "Col 4", book: "COL", ch: 4 },
    note: "November 22"
  },

  // Day 9 — November 23
  // The nations gather and scatter; the little apocalypse begins; the earth mourns
  {
    ot: { ref: "Isa 18–21", book: "ISA", ch: 18 },
    ps: { ref: "Ps 84", ch: 84 },
    nt: { ref: "1 Th 1", book: "1TH", ch: 1 },
    note: "November 23"
  },

  // Day 10 — November 24
  // The oracle of the valley of vision; the key of David placed on His shoulder
  {
    ot: { ref: "Isa 22–23", book: "ISA", ch: 22 },
    ps: { ref: "Ps 86", ch: 86 },
    nt: { ref: "1 Th 2", book: "1TH", ch: 2 },
    note: "November 24"
  },

  // Day 11 — November 25
  // The little apocalypse concludes: Your dead shall live; the Lord punishes the host of heaven
  {
    ot: { ref: "Isa 24–26", book: "ISA", ch: 24 },
    ps: { ref: "Ps 91", ch: 91 },
    nt: { ref: "1 Th 3", book: "1TH", ch: 3 },
    note: "November 25"
  },

  // Day 12 — November 26
  // Leviathan slain; the Lord will gather his people; the fruitful vineyard
  {
    ot: { ref: "Isa 27–28", book: "ISA", ch: 27 },
    ps: { ref: "Ps 96", ch: 96 },
    nt: { ref: "1 Th 4", book: "1TH", ch: 4 },
    note: "November 26"
  },

  // Day 13 — November 27
  // Woe to Ariel; the blind shall see; the deaf shall hear; a cornerstone in Zion
  {
    ot: { ref: "Isa 29–30", book: "ISA", ch: 29 },
    ps: { ref: "Ps 98", ch: 98 },
    nt: { ref: "1 Th 5", book: "1TH", ch: 5 },
    note: "November 27"
  },

  // Day 14 — November 28
  // Do not go down to Egypt; the Lord waits to be gracious; your Teacher will not hide
  {
    ot: { ref: "Isa 31–33", book: "ISA", ch: 31 },
    ps: { ref: "Ps 100", ch: 100 },
    nt: { ref: "2 Th 1", book: "2TH", ch: 1 },
    note: "November 28"
  },

  // ══════════════════════════════════════════════════════
  //  WEEK 3 (Days 15–21) — November 29 – December 5
  //  Isaiah: The ransomed return; comfort my people
  //  NT: 2 Thessalonians · Hebrews
  // ══════════════════════════════════════════════════════

  // Day 15 — November 29
  // The wilderness shall rejoice; the ransomed of the Lord shall return; Hezekiah and Sennacherib
  {
    ot: { ref: "Isa 34–37", book: "ISA", ch: 34 },
    ps: { ref: "Ps 103", ch: 103 },
    nt: { ref: "2 Th 2", book: "2TH", ch: 2 },
    note: "November 29"
  },

  // Day 16 — November 30 (Feast of St. Andrew the First-Called)
  // Hezekiah's illness and prayer; the writing of Hezekiah; envoys from Babylon
  {
    ot: { ref: "Isa 38–39", book: "ISA", ch: 38 },
    ps: { ref: "Ps 116", ch: 116 },
    nt: { ref: "2 Th 3", book: "2TH", ch: 3 },
    note: "November 30 (Feast of St. Andrew the First-Called)"
  },

  // Day 17 — December 1
  // Comfort, comfort my people; the voice in the wilderness; He tends His flock like a shepherd
  {
    ot: { ref: "Isa 40", book: "ISA", ch: 40 },
    ps: { ref: "Ps 23", ch: 23 },
    nt: { ref: "Heb 1", book: "HEB", ch: 1 },
    note: "December 1"
  },

  // Day 18 — December 2
  // Fear not, I am with you; my Servant whom I uphold; a bruised reed He will not break
  {
    ot: { ref: "Isa 41–42", book: "ISA", ch: 41 },
    ps: { ref: "Ps 34", ch: 34 },
    nt: { ref: "Heb 2", book: "HEB", ch: 2 },
    note: "December 2"
  },

  // Day 19 — December 3
  // Do not fear, for I have redeemed you; I am the Lord your God; I am He
  {
    ot: { ref: "Isa 43–44", book: "ISA", ch: 43 },
    ps: { ref: "Ps 42", ch: 42 },
    nt: { ref: "Heb 3", book: "HEB", ch: 3 },
    note: "December 3"
  },

  // Day 20 — December 4
  // Cyrus named before his birth; I am God, there is no other; kneel before Me
  {
    ot: { ref: "Isa 45–46", book: "ISA", ch: 45 },
    ps: { ref: "Ps 51", ch: 51 },
    nt: { ref: "Heb 4", book: "HEB", ch: 4 },
    note: "December 4"
  },

  // Day 21 — December 5
  // Come out of Babylon; salvation to the ends of the earth; the Servant's obedience
  {
    ot: { ref: "Isa 47–49", book: "ISA", ch: 47 },
    ps: { ref: "Ps 57", ch: 57 },
    nt: { ref: "Heb 5", book: "HEB", ch: 5 },
    note: "December 5"
  },

  // ══════════════════════════════════════════════════════
  //  WEEK 4 (Days 22–28) — December 6–12
  //  Isaiah: The Servant Songs intensify; the new exodus
  //  NT: Hebrews — the great High Priest who offered Himself
  // ══════════════════════════════════════════════════════

  // Day 22 — December 6 (Feast of St. Nicholas)
  // The Lord has given me the tongue of the learned; I gave my back to those who struck me
  {
    ot: { ref: "Isa 50–51", book: "ISA", ch: 50 },
    ps: { ref: "Ps 68", ch: 68 },
    nt: { ref: "Heb 6", book: "HEB", ch: 6 },
    note: "December 6 (Feast of St. Nicholas)"
  },

  // Day 23 — December 7
  // How beautiful are the feet of Him who brings good news;
  // He was wounded for our transgressions — the Fourth Servant Song
  {
    ot: { ref: "Isa 52–53", book: "ISA", ch: 52 },
    ps: { ref: "Ps 22", ch: 22 },
    nt: { ref: "Heb 7", book: "HEB", ch: 7 },
    note: "December 7"
  },

  // Day 24 — December 8
  // The desolate woman shall have more children; enlarge the place of your tent
  // For your Maker is your Husband; everlasting kindness will I have on you
  {
    ot: { ref: "Isa 54–55", book: "ISA", ch: 54 },
    ps: { ref: "Ps 72", ch: 72 },
    nt: { ref: "Heb 8", book: "HEB", ch: 8 },
    note: "December 8"
  },

  // Day 25 — December 9
  // My house shall be called a house of prayer for all peoples
  // Peace, peace to the far and to the near, says the Lord
  {
    ot: { ref: "Isa 56–57", book: "ISA", ch: 56 },
    ps: { ref: "Ps 80", ch: 80 },
    nt: { ref: "Heb 9", book: "HEB", ch: 9 },
    note: "December 9"
  },

  // Day 26 — December 10
  // Is this not the fast I choose? Your light shall break forth like the dawn
  {
    ot: { ref: "Isa 58–59", book: "ISA", ch: 58 },
    ps: { ref: "Ps 85", ch: 85 },
    nt: { ref: "Heb 10", book: "HEB", ch: 10 },
    note: "December 10"
  },

  // Day 27 — December 11
  // Arise, shine, for your light has come; the glory of the Lord has risen upon you
  // Nations shall come to your light; kings to the brightness of your rising
  {
    ot: { ref: "Isa 60–61", book: "ISA", ch: 60 },
    ps: { ref: "Ps 87", ch: 87 },
    nt: { ref: "Heb 11", book: "HEB", ch: 11 },
    note: "December 11"
  },

  // Day 28 — December 12
  // The Spirit of the Lord is upon me; to proclaim the year of the Lord's favor
  // The watchmen on your walls; they shall call you Sought Out
  {
    ot: { ref: "Isa 62–63", book: "ISA", ch: 62 },
    ps: { ref: "Ps 89", ch: 89 },
    nt: { ref: "Heb 12", book: "HEB", ch: 12 },
    note: "December 12"
  },

  // ══════════════════════════════════════════════════════
  //  WEEK 5 (Days 29–35) — December 13–19
  //  Isaiah: The new creation; the new heavens and new earth
  //  NT: Hebrews · Titus · Galatians
  // ══════════════════════════════════════════════════════

  // Day 29 — December 13
  // You are our Father; we are the clay, You are our potter
  {
    ot: { ref: "Isa 64–65", book: "ISA", ch: 64 },
    ps: { ref: "Ps 90", ch: 90 },
    nt: { ref: "Heb 13", book: "HEB", ch: 13 },
    note: "December 13"
  },

  // Day 30 — December 14
  // Behold, I create new heavens and a new earth; the wolf and the lamb shall feed together
  // To this one I will look: he who is humble and of a contrite spirit
  {
    ot: { ref: "Isa 66", book: "ISA", ch: 66 },
    ps: { ref: "Ps 93", ch: 93 },
    nt: { ref: "Tit 1", book: "TIT", ch: 1 },
    note: "December 14"
  },

  // Day 31 — December 15
  // The grace of God has appeared, bringing salvation to all men
  // Await the blessed hope — the appearing of our great God and Savior, Jesus Christ
  {
    ot: { ref: "Isa 1", book: "ISA", ch: 1 },
    ps: { ref: "Ps 97", ch: 97 },
    nt: { ref: "Tit 2–3", book: "TIT", ch: 2 },
    note: "December 15"
  },

  // Day 32 — December 16
  // No other Gospel; Paul's call; we are justified by faith in Christ Jesus
  {
    ot: { ref: "Isa 7", book: "ISA", ch: 7 },
    ps: { ref: "Ps 99", ch: 99 },
    nt: { ref: "Gal 1–2", book: "GAL", ch: 1 },
    note: "December 16"
  },

  // Day 33 — December 17
  // In Christ there is neither Jew nor Greek; all are one in Christ Jesus
  {
    ot: { ref: "Isa 9", book: "ISA", ch: 9 },
    ps: { ref: "Ps 105", ch: 105 },
    nt: { ref: "Gal 3–4", book: "GAL", ch: 3 },
    note: "December 17"
  },

  // Day 34 — December 18
  // Freedom in Christ; the fruit of the Spirit; bear one another's burdens
  {
    ot: { ref: "Isa 11", book: "ISA", ch: 11 },
    ps: { ref: "Ps 107", ch: 107 },
    nt: { ref: "Gal 5–6", book: "GAL", ch: 5 },
    note: "December 18"
  },

  // Day 35 — December 19
  // Every spiritual blessing in Christ; adopted as sons through Jesus Christ
  // The mystery hidden for ages now revealed in the Church
  {
    ot: { ref: "Isa 40", book: "ISA", ch: 40 },
    ps: { ref: "Ps 111", ch: 111 },
    nt: { ref: "Eph 1–2", book: "EPH", ch: 1 },
    note: "December 19"
  },

  // ══════════════════════════════════════════════════════
  //  FINAL WEEK (Days 36–40) — December 20–24
  //  The eve of the Nativity — solemn, expectant, still
  //  NT: Ephesians · Romans
  // ══════════════════════════════════════════════════════

  // Day 36 — December 20
  // Walk worthy of your calling; one body, one Spirit, one Lord
  // Put on the whole armor of God
  {
    ot: { ref: "Isa 52–53", book: "ISA", ch: 52 },
    ps: { ref: "Ps 113", ch: 113 },
    nt: { ref: "Eph 3–4", book: "EPH", ch: 3 },
    note: "December 20"
  },

  // Day 37 — December 21
  // Wives and husbands; the great mystery refers to Christ and the Church; the full armor of God
  {
    ot: { ref: "Isa 60", book: "ISA", ch: 60 },
    ps: { ref: "Ps 117", ch: 117 },
    nt: { ref: "Eph 5–6", book: "EPH", ch: 5 },
    note: "December 21"
  },

  // Day 38 — December 22
  // The power of the Gospel; the righteousness of God revealed from faith to faith
  // Nothing in all creation will be able to separate us from the love of God in Christ Jesus
  {
    ot: { ref: "Isa 61", book: "ISA", ch: 61 },
    ps: { ref: "Ps 119", ch: 119 },
    nt: { ref: "Rom 1–5", book: "ROM", ch: 1 },
    note: "December 22"
  },

  // Day 39 — December 23
  // Life in the Spirit; the whole creation groans; if God is for us, who can be against us?
  // The mystery of Israel; all Israel shall be saved
  {
    ot: { ref: "Isa 62", book: "ISA", ch: 62 },
    ps: { ref: "Ps 130", ch: 130 },
    nt: { ref: "Rom 6–11", book: "ROM", ch: 6 },
    note: "December 23"
  },

  // Day 40 — December 24 (Forefeast of the Nativity)
  // Present your bodies as a living sacrifice; love one another; the glory to God forever
  // The night is far spent, the day is at hand. Put on the Lord Jesus Christ.
  {
    ot: { ref: "Isa 7", book: "ISA", ch: 7 },
    ps: { ref: "Ps 132", ch: 132 },
    nt: { ref: "Rom 12–16", book: "ROM", ch: 12 },
    note: "December 24 (Forefeast of the Nativity)"
  },
];
