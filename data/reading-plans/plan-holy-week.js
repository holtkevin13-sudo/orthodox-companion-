// Orthodox Companion — Reading Plan
// Plan: Holy Week — 8 Days (plan-holy-week.js)
// Variable: PLAN_HOLY_WEEK
// Days: 8 (Palm Sunday through Pascha)
// Coverage: Zechariah · Genesis · Isaiah · Ezekiel · Jonah · Psalms · Matthew · John · Romans
// Index 0 is unused — plan is 1-indexed.

const PLAN_HOLY_WEEK = [
  null, // index 0 unused

  // Day 1 — Palm Sunday
  // The King enters Jerusalem on a colt; Zechariah's prophecy fulfilled
  {
    ot: { ref: "Zech 9", book: "ZEC", ch: 9 },
    ps: { ref: "Ps 118", ch: 118 },
    nt: { ref: "Jn 12", book: "JHN", ch: 12 },
    note: "Palm Sunday · The King enters Jerusalem on a colt; Zechariah's prophecy fulfilled"
  },

  // Day 2 — Holy Monday
  // Joseph sold by his brothers — a type of Christ betrayed
  {
    ot: { ref: "Gen 37", book: "GEN", ch: 37 },
    ps: { ref: "Ps 41", ch: 41 },
    nt: { ref: "Mt 21", book: "MAT", ch: 21 },
    note: "Holy Monday · Joseph sold by his brothers — a type of Christ betrayed"
  },

  // Day 3 — Holy Tuesday
  // Joseph in Egypt — continued typology; Christ teaches in the Temple
  {
    ot: { ref: "Gen 43", book: "GEN", ch: 43 },
    ps: { ref: "Ps 23", ch: 23 },
    nt: { ref: "Mt 22", book: "MAT", ch: 22 },
    note: "Holy Tuesday · Joseph in Egypt — continued typology; Christ teaches in the Temple"
  },

  // Day 4 — Holy Wednesday
  // The Third Servant Song; the woman anoints Christ; Judas bargains
  {
    ot: { ref: "Isa 50", book: "ISA", ch: 50 },
    ps: { ref: "Ps 69", ch: 69 },
    nt: { ref: "Mt 26", book: "MAT", ch: 26 },
    note: "Holy Wednesday · The Third Servant Song; the woman anoints Christ; Judas bargains"
  },

  // Day 5 — Holy Thursday
  // The Mystical Supper; the washing of feet; the farewell discourse
  {
    ot: { ref: "Exo 19", book: "EXO", ch: 19 },
    ps: { ref: "Ps 116", ch: 116 },
    nt: { ref: "Jn 13", book: "JHN", ch: 13 },
    note: "Holy Thursday · The Mystical Supper; the washing of feet; the farewell discourse"
  },

  // Day 6 — Holy Friday
  // The Fourth Servant Song; the Passion of our Lord
  {
    ot: { ref: "Isa 52", book: "ISA", ch: 52 },
    ps: { ref: "Ps 22", ch: 22 },
    nt: { ref: "Jn 18", book: "JHN", ch: 18 },
    note: "Holy Friday · The Fourth Servant Song; the Passion of our Lord"
  },

  // Day 7 — Holy Saturday
  // The valley of dry bones; baptism into Christ's death and burial
  {
    ot: { ref: "Ezek 37", book: "EZK", ch: 37 },
    ps: { ref: "Ps 88", ch: 88 },
    nt: { ref: "Rom 6", book: "ROM", ch: 6 },
    note: "Holy Saturday · The valley of dry bones; baptism into Christ's death and burial"
  },

  // Day 8 — Holy Pascha
  // Jonah — type of the three days; the Paschal Gospel: In the beginning was the Word
  {
    ot: { ref: "Jon 1", book: "JON", ch: 1 },
    ps: { ref: "Ps 68", ch: 68 },
    nt: { ref: "Jn 1", book: "JHN", ch: 1 },
    note: "Holy Pascha · Jonah — type of the three days; the Paschal Gospel: In the beginning was the Word"
  },
];

// ─────────────────────────────────────────────────────────────────────────
// Plan metadata — surfaces on the View page lede, the PDF cover, and the
// reading-plans.html plan card. Authored April 29, 2026.
// ─────────────────────────────────────────────────────────────────────────
const PLAN_HOLY_WEEK_META = {
  id:           "holy-week",
  globalVar:    "PLAN_HOLY_WEEK",
  metaVar:      "PLAN_HOLY_WEEK_META",
  title:        "Holy Week — 8 Days",
  durationLine: "8 days · Palm Sunday → Pascha",
  pdfFilename:  "orthodox-companion-the-holy-week-plan.pdf",
  viewSlug:     "holy-week",
  audience:     ["Inquirer", "Catechumen", "The Faithful"],
  summary:      "Eight days of reading kept hour by hour with the Church through Holy Week, from the triumphal entry on Palm Sunday to the empty tomb on Pascha. Each day carries an Old Testament passage prefiguring Christ’s Passion, a Psalm the Church prays at the services, and a Gospel chapter from the day’s narrative. Well-suited to all three audiences during this single week of the year. The plan is dense; the rule is to walk slowly with our Lord, not to finish first.",
  description:  "Palm Sunday through Pascha. Passion narratives, Lamentations, and the Resurrection.",
  sections:     {
    8: "PASCHA"
  }
};
