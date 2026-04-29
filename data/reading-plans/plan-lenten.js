// Orthodox Companion — Reading Plan
// Plan: Lenten Plan — 48 Days (plan-lenten.js)
// Variable: PLAN_LENTEN
// Days: 48 (Clean Monday through Holy Saturday)
// Coverage:
//   OT  — Genesis (days 1–16) · Isaiah (days 17–48)
//   PR  — Proverbs (days 1–15, read alongside Genesis at Vespers)
//   NT  — Mark (days 33–48, one chapter/day through the final weeks)
//
// Liturgical note: The Orthodox Church traditionally reads Genesis and Proverbs
// at Vespers on weekday evenings during Great Lent, and Isaiah at the Royal Hours.
// Mark's Gospel is the Lenten Gospel, read through the final two weeks.
// Index 0 is unused — plan is 1-indexed.

const PLAN_LENTEN = [
  null, // index 0 unused

  // ══════════════════════════════════════════════════════
  //  WEEK 1 — CLEAN MONDAY THROUGH SATURDAY
  //  Genesis: The creation and the fall — where we came from and why we fast
  //  Proverbs: Wisdom calls us; the fear of the Lord is the beginning
  // ══════════════════════════════════════════════════════

  // Day 1 — Clean Monday
  // In the beginning; the six days of creation; the fall of man
  {
    ot: { ref: "Gen 1–3", book: "GEN", ch: 1 },
    pr: { ref: "Prov 1–2", ch: 1 },
    note: "Clean Monday · In the beginning; the six days of creation; the fall of man"
  },

  // Day 2 — Clean Tuesday
  // Cain and Abel; the sons of Adam; Noah found grace in the eyes of the Lord
  {
    ot: { ref: "Gen 4–6", book: "GEN", ch: 4 },
    pr: { ref: "Prov 3–4", ch: 3 },
    note: "Clean Tuesday · Cain and Abel; the sons of Adam; Noah found grace in the eyes of the Lord"
  },

  // Day 3 — Clean Wednesday
  // The flood; the covenant of the rainbow; Noah's sons
  {
    ot: { ref: "Gen 7–9", book: "GEN", ch: 7 },
    pr: { ref: "Prov 5–6", ch: 5 },
    note: "Clean Wednesday · The flood; the covenant of the rainbow; Noah's sons"
  },

  // Day 4 — Clean Thursday
  // The tower of Babel; the call of Abram; into a land I will show you
  {
    ot: { ref: "Gen 10–12", book: "GEN", ch: 10 },
    pr: { ref: "Prov 7–8", ch: 7 },
    note: "Clean Thursday · The tower of Babel; the call of Abram; into a land I will show you"
  },

  // Day 5 — Clean Friday
  // Abram and Lot; the rescue of Lot; Melchizedek blesses Abram
  {
    ot: { ref: "Gen 13–15", book: "GEN", ch: 13 },
    pr: { ref: "Prov 9–10", ch: 9 },
    note: "Clean Friday · Abram and Lot; the rescue of Lot; Melchizedek blesses Abram"
  },

  // Day 6 — Saturday of the First Week
  // Hagar and Ishmael; the covenant of circumcision; the three visitors
  {
    ot: { ref: "Gen 16–18", book: "GEN", ch: 16 },
    pr: { ref: "Prov 11–12", ch: 11 },
    note: "Saturday of the First Week · Hagar and Ishmael; the covenant of circumcision; the three visitors"
  },

  // ══════════════════════════════════════════════════════
  //  WEEK 2
  //  Genesis: Sodom and Gomorrah; the binding of Isaac
  // ══════════════════════════════════════════════════════

  // Day 7 — Monday of the Second Week
  // The destruction of Sodom; Lot's wife; Abraham and Abimelech
  {
    ot: { ref: "Gen 19–21", book: "GEN", ch: 19 },
    pr: { ref: "Prov 13–14", ch: 13 },
    note: "Monday of the Second Week · The destruction of Sodom; Lot's wife; Abraham and Abimelech"
  },

  // Day 8 — Tuesday of the Second Week
  // The binding of Isaac; the death of Sarah; the search for a wife for Isaac
  {
    ot: { ref: "Gen 22–24", book: "GEN", ch: 22 },
    pr: { ref: "Prov 15–16", ch: 15 },
    note: "Tuesday of the Second Week · The binding of Isaac; the death of Sarah; the search for a wife for Isaac"
  },

  // Day 9 — Wednesday of the Second Week
  // The death of Abraham; Esau and Jacob; the birthright sold for stew
  {
    ot: { ref: "Gen 25–27", book: "GEN", ch: 25 },
    pr: { ref: "Prov 17–18", ch: 17 },
    note: "Wednesday of the Second Week · The death of Abraham; Esau and Jacob; the birthright sold for stew"
  },

  // Day 10 — Thursday of the Second Week
  // Jacob's ladder; Jacob and Rachel; Jacob's wrestling with God; I have seen God face to face
  {
    ot: { ref: "Gen 28–30", book: "GEN", ch: 28 },
    pr: { ref: "Prov 19–20", ch: 19 },
    note: "Thursday of the Second Week · Jacob's ladder; Jacob and Rachel; Jacob's wrestling with God; I have seen God face to face"
  },

  // Day 11 — Friday of the Second Week
  // Jacob's return; the reconciliation with Esau; Dinah; Jacob named Israel
  {
    ot: { ref: "Gen 31–33", book: "GEN", ch: 31 },
    pr: { ref: "Prov 21–22", ch: 21 },
    note: "Friday of the Second Week · Jacob's return; the reconciliation with Esau; Dinah; Jacob named Israel"
  },

  // Day 12 — Saturday of the Second Week
  // The treachery of Simeon and Levi; the deaths of Rachel and Isaac; Edom's kings
  {
    ot: { ref: "Gen 34–36", book: "GEN", ch: 34 },
    pr: { ref: "Prov 23–24", ch: 23 },
    note: "Saturday of the Second Week · The treachery of Simeon and Levi; the deaths of Rachel and Isaac; Edom's kings"
  },

  // ══════════════════════════════════════════════════════
  //  WEEK 3
  //  Genesis: Joseph — the great type of Christ sold and exalted
  // ══════════════════════════════════════════════════════

  // Day 13 — Monday of the Third Week
  // Joseph sold by his brothers; Joseph in Potiphar's house; Joseph in prison
  {
    ot: { ref: "Gen 37–39", book: "GEN", ch: 37 },
    pr: { ref: "Prov 25–27", ch: 25 },
    note: "Monday of the Third Week · Joseph sold by his brothers; Joseph in Potiphar's house; Joseph in prison"
  },

  // Day 14 — Tuesday of the Third Week
  // The cupbearer and the baker; Pharaoh's dreams; Joseph exalted over Egypt
  {
    ot: { ref: "Gen 40–42", book: "GEN", ch: 40 },
    pr: { ref: "Prov 28–29", ch: 28 },
    note: "Tuesday of the Third Week · The cupbearer and the baker; Pharaoh's dreams; Joseph exalted over Egypt"
  },

  // Day 15 — Wednesday of the Third Week
  // Joseph's brothers return; Benjamin; the silver cup; Joseph reveals himself
  {
    ot: { ref: "Gen 43–45", book: "GEN", ch: 43 },
    pr: { ref: "Prov 30–31", ch: 30 },
    note: "Wednesday of the Third Week · Joseph's brothers return; Benjamin; the silver cup; Joseph reveals himself"
  },

  // Day 16 — Thursday of the Third Week
  // Jacob comes to Egypt; the years of famine; the blessings of the twelve tribes; the death of Jacob
  // Joseph's death: God meant it for good — the last word of Genesis
  {
    ot: { ref: "Gen 46–50", book: "GEN", ch: 46 },
    note: "Thursday of the Third Week · Jacob comes to Egypt; the years of famine; the blessings of the twelve tribes; the death of Jacob · Joseph's death: God meant it for good — the last word of Genesis"
  },

  // ══════════════════════════════════════════════════════
  //  WEEK 3–4 (continued)
  //  Isaiah begins: The prophet of repentance, judgment, and hope
  // ══════════════════════════════════════════════════════

  // Day 17 — Friday of the Third Week
  // The great indictment: hear O heavens; come let us reason together; though your sins be as scarlet
  {
    ot: { ref: "Isa 1–2", book: "ISA", ch: 1 },
    note: "Friday of the Third Week · The great indictment: hear O heavens; come let us reason together; though your sins be as scarlet"
  },

  // Day 18 — Saturday of the Third Week
  // The day of the Lord against pride; Judah's leaders judged; the vineyard song
  {
    ot: { ref: "Isa 3–5", book: "ISA", ch: 3 },
    note: "Saturday of the Third Week · The day of the Lord against pride; Judah's leaders judged; the vineyard song"
  },

  // Day 19 — Monday of the Fourth Week
  // Isaiah's vision: Holy, holy, holy; here am I, send me; the sign of Immanuel
  {
    ot: { ref: "Isa 6–8", book: "ISA", ch: 6 },
    note: "Monday of the Fourth Week · Isaiah's vision: Holy, holy, holy; here am I, send me; the sign of Immanuel"
  },

  // Day 20 — Tuesday of the Fourth Week
  // For unto us a Child is born; a Prince of Peace; the rod out of Jesse's stem
  {
    ot: { ref: "Isa 9–11", book: "ISA", ch: 9 },
    note: "Tuesday of the Fourth Week · For unto us a Child is born; a Prince of Peace; the rod out of Jesse's stem"
  },

  // Day 21 — Wednesday of the Fourth Week
  // The song of the redeemed; oracles against Babylon; the Assyrian boast
  {
    ot: { ref: "Isa 12–14", book: "ISA", ch: 12 },
    note: "Wednesday of the Fourth Week · The song of the redeemed; oracles against Babylon; the Assyrian boast"
  },

  // Day 22 — Thursday of the Fourth Week
  // Oracles against Moab; against Damascus; against Ethiopia and Egypt
  {
    ot: { ref: "Isa 15–17", book: "ISA", ch: 15 },
    note: "Thursday of the Fourth Week · Oracles against Moab; against Damascus; against Ethiopia and Egypt"
  },

  // Day 23 — Friday of the Fourth Week
  // The nations and the Lord of Hosts; the little apocalypse begins; the earth is defiled
  {
    ot: { ref: "Isa 18–21", book: "ISA", ch: 18 },
    note: "Friday of the Fourth Week · The nations and the Lord of Hosts; the little apocalypse begins; the earth is defiled"
  },

  // Day 24 — Saturday of the Fourth Week
  // The oracle of the valley of vision; Tyre and Sidon; the little apocalypse concludes
  // The Lord reigns on Mount Zion; Your dead shall live
  {
    ot: { ref: "Isa 22–26", book: "ISA", ch: 22 },
    note: "Saturday of the Fourth Week · The oracle of the valley of vision; Tyre and Sidon; the little apocalypse concludes · The Lord reigns on Mount Zion; Your dead shall live"
  },

  // ══════════════════════════════════════════════════════
  //  WEEK 5
  //  Isaiah: Woes and promises; the Servant begins to emerge
  // ══════════════════════════════════════════════════════

  // Day 25 — Monday of the Fifth Week
  // Woe to Ephraim; the Lord will be a diadem; precept upon precept; a cornerstone in Zion
  {
    ot: { ref: "Isa 27–28", book: "ISA", ch: 27 },
    note: "Monday of the Fifth Week · Woe to Ephraim; the Lord will be a diadem; precept upon precept; a cornerstone in Zion"
  },

  // Day 26 — Tuesday of the Fifth Week
  // Woe to Ariel; blind eyes shall see; the Lord's counsel stands; do not go down to Egypt
  {
    ot: { ref: "Isa 29–31", book: "ISA", ch: 29 },
    note: "Tuesday of the Fifth Week · Woe to Ariel; blind eyes shall see; the Lord's counsel stands; do not go down to Egypt"
  },

  // Day 27 — Wednesday of the Fifth Week
  // A King shall reign in righteousness; the wilderness shall rejoice; ransomed shall return
  {
    ot: { ref: "Isa 32–35", book: "ISA", ch: 32 },
    note: "Wednesday of the Fifth Week · A King shall reign in righteousness; the wilderness shall rejoice; ransomed shall return"
  },

  // Day 28 — Thursday of the Fifth Week
  // Sennacherib's taunt; Hezekiah's prayer; the angel slays 185,000; the fall of Assyria
  {
    ot: { ref: "Isa 36–37", book: "ISA", ch: 36 },
    note: "Thursday of the Fifth Week · Sennacherib's taunt; Hezekiah's prayer; the angel slays 185,000; the fall of Assyria"
  },

  // Day 29 — Friday of the Fifth Week
  // Hezekiah's illness; the writing of Hezekiah; the Babylonian envoys; comfort my people
  {
    ot: { ref: "Isa 38–40", book: "ISA", ch: 38 },
    note: "Friday of the Fifth Week · Hezekiah's illness; the writing of Hezekiah; the Babylonian envoys; comfort my people"
  },

  // Day 30 — Saturday of the Fifth Week
  // The great debate: who has measured the waters? Fear not, I am with you; idol makers shamed
  {
    ot: { ref: "Isa 41–43", book: "ISA", ch: 41 },
    note: "Saturday of the Fifth Week · The great debate: who has measured the waters? Fear not, I am with you; idol makers shamed"
  },

  // ══════════════════════════════════════════════════════
  //  WEEK 6 — PALM WEEK APPROACHES
  //  Isaiah: The Servant Songs; the new exodus
  //  Mark begins: The urgent Gospel of repentance
  // ══════════════════════════════════════════════════════

  // Day 31 — Monday of the Sixth Week
  // I am the first and the last; the new creation announced; Cyrus named before his birth
  {
    ot: { ref: "Isa 44–46", book: "ISA", ch: 44 },
    note: "Monday of the Sixth Week · I am the first and the last; the new creation announced; Cyrus named before his birth"
  },

  // Day 32 — Tuesday of the Sixth Week
  // Come out of Babylon; there is no God besides Me; salvation to the ends of the earth
  {
    ot: { ref: "Isa 47–49", book: "ISA", ch: 47 },
    note: "Tuesday of the Sixth Week · Come out of Babylon; there is no God besides Me; salvation to the ends of the earth"
  },

  // Day 33 — Wednesday of the Sixth Week
  // The beginning of the Gospel of Jesus Christ; baptism; the temptation; the Kingdom is at hand
  {
    ot: { ref: "Isa 50–51", book: "ISA", ch: 50 },
    nt: { ref: "Mk 1", book: "MRK", ch: 1 },
    note: "Wednesday of the Sixth Week · The beginning of the Gospel of Jesus Christ; baptism; the temptation; the Kingdom is at hand"
  },

  // Day 34 — Thursday of the Sixth Week
  // Awake, awake, put on your strength, O Zion; how beautiful are the feet of the messenger of peace
  // The Servant who bore our griefs — Isaiah 53
  {
    ot: { ref: "Isa 52–53", book: "ISA", ch: 52 },
    nt: { ref: "Mk 2", book: "MRK", ch: 2 },
    note: "Thursday of the Sixth Week · Awake, awake, put on your strength, O Zion; how beautiful are the feet of the messenger of peace · The Servant who bore our griefs — Isaiah 53"
  },

  // Day 35 — Friday of the Sixth Week
  // The desolate woman shall have more children; enlarge the place of your tent; everlasting kindness
  {
    ot: { ref: "Isa 54–55", book: "ISA", ch: 54 },
    nt: { ref: "Mk 3", book: "MRK", ch: 3 },
    note: "Friday of the Sixth Week · The desolate woman shall have more children; enlarge the place of your tent; everlasting kindness"
  },

  // Day 36 — Lazarus Saturday
  // Keep justice; the eunuch and the foreigner welcomed; my house shall be a house of prayer for all nations
  {
    ot: { ref: "Isa 56–57", book: "ISA", ch: 56 },
    nt: { ref: "Mk 4", book: "MRK", ch: 4 },
    note: "Lazarus Saturday · Keep justice; the eunuch and the foreigner welcomed; my house shall be a house of prayer for all nations"
  },

  // ══════════════════════════════════════════════════════
  //  HOLY WEEK — PALM SUNDAY THROUGH HOLY SATURDAY
  //  Isaiah: The final chapters — fasting, the Servant's anointing, the new creation
  //  Mark: The Passion narratives
  // ══════════════════════════════════════════════════════

  // Day 37 — Palm Sunday
  // Is this not the fast that I choose? Loose the bonds of injustice; your light shall break forth
  {
    ot: { ref: "Isa 58–59", book: "ISA", ch: 58 },
    nt: { ref: "Mk 5", book: "MRK", ch: 5 },
    note: "Palm Sunday · Is this not the fast that I choose? Loose the bonds of injustice; your light shall break forth"
  },

  // Day 38 — Holy Monday
  // Arise, shine, for your light has come; the nations shall come to your light
  {
    ot: { ref: "Isa 60–61", book: "ISA", ch: 60 },
    nt: { ref: "Mk 6", book: "MRK", ch: 6 },
    note: "Holy Monday · Arise, shine, for your light has come; the nations shall come to your light"
  },

  // Day 39 — Holy Tuesday
  // The watchmen on your walls; the nations shall see your righteousness; the year of the redeemed
  {
    ot: { ref: "Isa 62–63", book: "ISA", ch: 62 },
    nt: { ref: "Mk 7", book: "MRK", ch: 7 },
    note: "Holy Tuesday · The watchmen on your walls; the nations shall see your righteousness; the year of the redeemed"
  },

  // Day 40 — Holy Wednesday
  // Our Father, you are our potter; shall the clay say to the potter, what are you making?
  {
    ot: { ref: "Isa 64–65", book: "ISA", ch: 64 },
    nt: { ref: "Mk 8", book: "MRK", ch: 8 },
    note: "Holy Wednesday · Our Father, you are our potter; shall the clay say to the potter, what are you making?"
  },

  // Day 41 — Holy Thursday
  // Behold, I create new heavens and a new earth; the wolf and the lamb shall feed together
  {
    ot: { ref: "Isa 66", book: "ISA", ch: 66 },
    nt: { ref: "Mk 9", book: "MRK", ch: 9 },
    note: "Holy Thursday · Behold, I create new heavens and a new earth; the wolf and the lamb shall feed together"
  },

  // Day 42 — Holy Friday
  // The triumphal entry; the cleansing of the Temple; the wicked tenants
  // The greatest commandment; the widow's mite; the Olivet Discourse
  { nt: { ref: "Mk 10–11", book: "MRK", ch: 10 }, note: "Holy Friday · The triumphal entry; the cleansing of the Temple; the wicked tenants · The greatest commandment; the widow's mite; the Olivet Discourse" },

  // Day 43 — Holy Friday (continued readings)
  // The last teachings in the Temple; watch and be ready; the signs of the end
  { nt: { ref: "Mk 12–13", book: "MRK", ch: 12 }, note: "Holy Friday (continued readings) · The last teachings in the Temple; watch and be ready; the signs of the end" },

  // Day 44 — Holy Friday (Passion)
  // The anointing at Bethany; the Last Supper; Gethsemane; the betrayal and arrest; the trials
  { nt: { ref: "Mk 14", book: "MRK", ch: 14 }, note: "Holy Friday (Passion) · The anointing at Bethany; the Last Supper; Gethsemane; the betrayal and arrest; the trials" },

  // Day 45 — Holy Friday (Crucifixion)
  // The crucifixion; My God, my God, why have you forsaken me; the burial
  { nt: { ref: "Mk 15", book: "MRK", ch: 15 }, note: "Holy Friday (Crucifixion) · The crucifixion; My God, my God, why have you forsaken me; the burial" },

  // Day 46 — Holy Saturday (morning)
  // He is risen; he is going before you into Galilee; they were afraid
  { nt: { ref: "Mk 16", book: "MRK", ch: 16 }, note: "Holy Saturday (morning) · He is risen; he is going before you into Galilee; they were afraid" },

  // Day 47 — Holy Saturday (Vesperal Liturgy readings — a day of watchful silence)
  // The people sat in the tomb's shadow. The Bridegroom has been taken away.
  // No reading assigned — a day of stillness, prayer, and anticipation.
  // (This entry kept as a placeholder day in the plan.)
  {note: "Holy Saturday (Vesperal Liturgy readings — a day of watchful silence) · The people sat in the tomb's shadow. The Bridegroom has been taken away. · No reading assigned — a day of stillness, prayer, and anticipation. · (This entry kept as a placeholder day in the plan.)" },

  // Day 48 — Holy Saturday (night) / The Eve of Pascha
  // Christ is in the tomb — and the whole earth trembles.
  // Tonight, death is destroyed. Pascha is at the door.
  // No reading assigned — this night belongs to the Liturgy.
  {note: "Holy Saturday (night) / The Eve of Pascha · Christ is in the tomb — and the whole earth trembles. · Tonight, death is destroyed. Pascha is at the door. · No reading assigned — this night belongs to the Liturgy." },
];

// ─────────────────────────────────────────────────────────────────────────
// Plan metadata — surfaces on the View page lede, the PDF cover, and the
// reading-plans.html plan card. Authored April 29, 2026.
// ─────────────────────────────────────────────────────────────────────────
const PLAN_LENTEN_META = {
  id:           "lenten",
  globalVar:    "PLAN_LENTEN",
  metaVar:      "PLAN_LENTEN_META",
  title:        "Great Lent",
  durationLine: "48 days · Clean Monday → Holy Saturday",
  pdfFilename:  "orthodox-companion-the-great-lent-plan.pdf",
  viewSlug:     "great-lent",
  audience:     ["Catechumen", "The Faithful"],
  summary:      "A reading kept with the Church through the holy forty days and Holy Week, from Clean Monday to Holy Saturday — forty-eight days in all. Genesis and Proverbs accompany Vespers in the early weeks; Isaiah carries the Royal Hours; Mark’s Gospel is the Lenten Gospel, read through the final two weeks. The pace is unhurried at first and quickens as Holy Week approaches. Well-suited to catechumens preparing for baptism at the Paschal Liturgy, and to all the faithful who walk the Lenten road with the Church.",
  description:  "Aligned with the Triodion. Genesis, Proverbs, Isaiah, and Mark's Gospel.",
  sections:     {}
};
