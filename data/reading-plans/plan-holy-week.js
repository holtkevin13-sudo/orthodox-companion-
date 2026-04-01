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
    nt: { ref: "Jn 12", book: "JHN", ch: 12 }
  },

  // Day 2 — Holy Monday
  // Joseph sold by his brothers — a type of Christ betrayed
  {
    ot: { ref: "Gen 37", book: "GEN", ch: 37 },
    ps: { ref: "Ps 41", ch: 41 },
    nt: { ref: "Mt 21", book: "MAT", ch: 21 }
  },

  // Day 3 — Holy Tuesday
  // Joseph in Egypt — continued typology; Christ teaches in the Temple
  {
    ot: { ref: "Gen 43", book: "GEN", ch: 43 },
    ps: { ref: "Ps 23", ch: 23 },
    nt: { ref: "Mt 22", book: "MAT", ch: 22 }
  },

  // Day 4 — Holy Wednesday
  // The Third Servant Song; the woman anoints Christ; Judas bargains
  {
    ot: { ref: "Isa 50", book: "ISA", ch: 50 },
    ps: { ref: "Ps 69", ch: 69 },
    nt: { ref: "Mt 26", book: "MAT", ch: 26 }
  },

  // Day 5 — Holy Thursday
  // The Mystical Supper; the washing of feet; the farewell discourse
  {
    ot: { ref: "Exo 19", book: "EXO", ch: 19 },
    ps: { ref: "Ps 116", ch: 116 },
    nt: { ref: "Jn 13", book: "JHN", ch: 13 }
  },

  // Day 6 — Holy Friday
  // The Fourth Servant Song; the Passion of our Lord
  {
    ot: { ref: "Isa 52", book: "ISA", ch: 52 },
    ps: { ref: "Ps 22", ch: 22 },
    nt: { ref: "Jn 18", book: "JHN", ch: 18 }
  },

  // Day 7 — Holy Saturday
  // The valley of dry bones; baptism into Christ's death and burial
  {
    ot: { ref: "Ezek 37", book: "EZK", ch: 37 },
    ps: { ref: "Ps 88", ch: 88 },
    nt: { ref: "Rom 6", book: "ROM", ch: 6 }
  },

  // Day 8 — Holy Pascha
  // Jonah — type of the three days; the Paschal Gospel: In the beginning was the Word
  {
    ot: { ref: "Jon 1", book: "JON", ch: 1 },
    ps: { ref: "Ps 68", ch: 68 },
    nt: { ref: "Jn 1", book: "JHN", ch: 1 }
  },
];
