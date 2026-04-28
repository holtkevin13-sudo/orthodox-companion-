// Orthodox Companion — Reading Plan
// Plan: Catechumen Plan — 40 Days (plan-catechumen.js)
// Variable: PLAN_CATECHUMEN
// Days: 40
// Coverage: John (21 days) · Acts (days 22–40, paired with Wisdom of Solomon)
// Designed for those in catechetical instruction. Unique to Orthodox Companion.
// Index 0 is unused — plan is 1-indexed.

const PLAN_CATECHUMEN = [
  null, // index 0 unused

  // ── PART I: The Gospel of John (Days 1–21) ──────────────────────────────
  // One chapter of John per day, paired with a catechetical Psalm.
  // The Gospel of John is the traditional first Gospel for inquirers —
  // it opens with the divine Logos and reveals Christ as the Son of God.

  // Day 1 — In the beginning was the Word
  { nt: { ref: "Jn 1", book: "JHN", ch: 1 }, ps: { ref: "Ps 1", ch: 1 }, note: "In the beginning was the Word" },

  // Day 2 — The Wedding at Cana; the first sign
  { nt: { ref: "Jn 2", book: "JHN", ch: 2 }, ps: { ref: "Ps 8", ch: 8 }, note: "The Wedding at Cana; the first sign" },

  // Day 3 — You must be born again; God so loved the world
  { nt: { ref: "Jn 3", book: "JHN", ch: 3 }, ps: { ref: "Ps 19", ch: 19 }, note: "You must be born again; God so loved the world" },

  // Day 4 — The Woman at the Well; living water
  { nt: { ref: "Jn 4", book: "JHN", ch: 4 }, ps: { ref: "Ps 22", ch: 22 }, note: "The Woman at the Well; living water" },

  // Day 5 — The healing at Bethesda; the Father and the Son
  { nt: { ref: "Jn 5", book: "JHN", ch: 5 }, ps: { ref: "Ps 23", ch: 23 }, note: "The healing at Bethesda; the Father and the Son" },

  // Day 6 — The Bread of Life discourse
  { nt: { ref: "Jn 6", book: "JHN", ch: 6 }, ps: { ref: "Ps 24", ch: 24 }, note: "The Bread of Life discourse" },

  // Day 7 — Rivers of living water; division over Christ
  { nt: { ref: "Jn 7", book: "JHN", ch: 7 }, ps: { ref: "Ps 25", ch: 25 }, note: "Rivers of living water; division over Christ" },

  // Day 8 — I am the light of the world; the woman taken in adultery
  { nt: { ref: "Jn 8", book: "JHN", ch: 8 }, ps: { ref: "Ps 27", ch: 27 }, note: "I am the light of the world; the woman taken in adultery" },

  // Day 9 — The man born blind; sin and sight
  { nt: { ref: "Jn 9", book: "JHN", ch: 9 }, ps: { ref: "Ps 34", ch: 34 }, note: "The man born blind; sin and sight" },

  // Day 10 — I am the Good Shepherd; one flock, one shepherd
  { nt: { ref: "Jn 10", book: "JHN", ch: 10 }, ps: { ref: "Ps 42", ch: 42 }, note: "I am the Good Shepherd; one flock, one shepherd" },

  // Day 11 — The raising of Lazarus; I am the resurrection and the life
  { nt: { ref: "Jn 11", book: "JHN", ch: 11 }, ps: { ref: "Ps 46", ch: 46 }, note: "The raising of Lazarus; I am the resurrection and the life" },

  // Day 12 — The anointing at Bethany; the triumphal entry
  { nt: { ref: "Jn 12", book: "JHN", ch: 12 }, ps: { ref: "Ps 51", ch: 51 }, note: "The anointing at Bethany; the triumphal entry" },

  // Day 13 — The washing of feet; the new commandment: love one another
  { nt: { ref: "Jn 13", book: "JHN", ch: 13 }, ps: { ref: "Ps 63", ch: 63 }, note: "The washing of feet; the new commandment: love one another" },

  // Day 14 — I am the way, the truth, and the life; the Father's house
  { nt: { ref: "Jn 14", book: "JHN", ch: 14 }, ps: { ref: "Ps 84", ch: 84 }, note: "I am the way, the truth, and the life; the Father's house" },

  // Day 15 — I am the true vine; abide in my love
  { nt: { ref: "Jn 15", book: "JHN", ch: 15 }, ps: { ref: "Ps 91", ch: 91 }, note: "I am the true vine; abide in my love" },

  // Day 16 — The Paraclete; sorrow turns to joy
  { nt: { ref: "Jn 16", book: "JHN", ch: 16 }, ps: { ref: "Ps 100", ch: 100 }, note: "The Paraclete; sorrow turns to joy" },

  // Day 17 — The High Priestly Prayer; that they may be one
  { nt: { ref: "Jn 17", book: "JHN", ch: 17 }, ps: { ref: "Ps 103", ch: 103 }, note: "The High Priestly Prayer; that they may be one" },

  // Day 18 — The arrest and trial; Pilate: I find no fault in him
  { nt: { ref: "Jn 18", book: "JHN", ch: 18 }, ps: { ref: "Ps 116", ch: 116 }, note: "The arrest and trial; Pilate: I find no fault in him" },

  // Day 19 — The crucifixion; It is finished
  { nt: { ref: "Jn 19", book: "JHN", ch: 19 }, ps: { ref: "Ps 118", ch: 118 }, note: "The crucifixion; It is finished" },

  // Day 20 — The Resurrection; Mary Magdalene; the empty tomb
  { nt: { ref: "Jn 20", book: "JHN", ch: 20 }, ps: { ref: "Ps 130", ch: 130 }, note: "The Resurrection; Mary Magdalene; the empty tomb" },

  // Day 21 — The appearance at the Sea; Feed my sheep
  { nt: { ref: "Jn 21", book: "JHN", ch: 21 }, ps: { ref: "Ps 150", ch: 150 }, note: "The appearance at the Sea; Feed my sheep" },

  // ── PART II: Acts + Wisdom of Solomon (Days 22–40) ──────────────────────
  // The Acts of the Apostles shows the Church born, spreading, and suffering.
  // Wisdom of Solomon speaks directly to those seeking God through reason and faith.
  // Both are read in parallel — the living Church and divine Wisdom together.

  // Day 22 — The Ascension; Pentecost approaches; Matthias chosen
  { nt: { ref: "Acts 1", book: "ACT", ch: 1 }, ot: { ref: "Wis 1", book: "WIS", ch: 1 }, note: "The Ascension; Pentecost approaches; Matthias chosen" },

  // Day 23 — Pentecost; Peter's first sermon; three thousand baptized
  { nt: { ref: "Acts 2", book: "ACT", ch: 2 }, ot: { ref: "Wis 2", book: "WIS", ch: 2 }, note: "Pentecost; Peter's first sermon; three thousand baptized" },

  // Day 24 — The lame man healed; Peter in Solomon's Portico
  { nt: { ref: "Acts 3", book: "ACT", ch: 3 }, ot: { ref: "Wis 3", book: "WIS", ch: 3 }, note: "The lame man healed; Peter in Solomon's Portico" },

  // Day 25 — Peter and John before the Sanhedrin; the Church prays boldly
  { nt: { ref: "Acts 4", book: "ACT", ch: 4 }, ot: { ref: "Wis 4", book: "WIS", ch: 4 }, note: "Peter and John before the Sanhedrin; the Church prays boldly" },

  // Day 26 — Ananias and Sapphira; Gamaliel's counsel
  { nt: { ref: "Acts 5", book: "ACT", ch: 5 }, ot: { ref: "Wis 5", book: "WIS", ch: 5 }, note: "Ananias and Sapphira; Gamaliel's counsel" },

  // Day 27 — The seven deacons ordained; Stephen's ministry begins
  { nt: { ref: "Acts 6", book: "ACT", ch: 6 }, ot: { ref: "Wis 6", book: "WIS", ch: 6 }, note: "The seven deacons ordained; Stephen's ministry begins" },

  // Day 28 — Stephen's great speech; the first martyr
  { nt: { ref: "Acts 7", book: "ACT", ch: 7 }, ot: { ref: "Wis 7", book: "WIS", ch: 7 }, note: "Stephen's great speech; the first martyr" },

  // Day 29 — Philip in Samaria; Simon Magus; the Ethiopian eunuch baptized
  { nt: { ref: "Acts 8", book: "ACT", ch: 8 }, ot: { ref: "Wis 8", book: "WIS", ch: 8 }, note: "Philip in Samaria; Simon Magus; the Ethiopian eunuch baptized" },

  // Day 30 — Saul's conversion on the road to Damascus
  { nt: { ref: "Acts 9", book: "ACT", ch: 9 }, ot: { ref: "Wis 9", book: "WIS", ch: 9 }, note: "Saul's conversion on the road to Damascus" },

  // Day 31 — Cornelius; Peter's vision; Gentiles receive the Spirit
  { nt: { ref: "Acts 10–11", book: "ACT", ch: 10 }, ot: { ref: "Wis 10", book: "WIS", ch: 10 }, note: "Cornelius; Peter's vision; Gentiles receive the Spirit" },

  // Day 32 — Herod's persecution; James martyred; Peter freed by an angel
  { nt: { ref: "Acts 12–13", book: "ACT", ch: 12 }, ot: { ref: "Wis 11", book: "WIS", ch: 11 }, note: "Herod's persecution; James martyred; Peter freed by an angel" },

  // Day 33 — First missionary journey continues; the Council at Jerusalem
  { nt: { ref: "Acts 14–15", book: "ACT", ch: 14 }, ot: { ref: "Wis 12", book: "WIS", ch: 12 }, note: "First missionary journey continues; the Council at Jerusalem" },

  // Day 34 — Timothy joins; Macedonia; Lydia baptized; Paul in prison
  { nt: { ref: "Acts 16–17", book: "ACT", ch: 16 }, ot: { ref: "Wis 13", book: "WIS", ch: 13 }, note: "Timothy joins; Macedonia; Lydia baptized; Paul in prison" },

  // Day 35 — Corinth; Apollos; Paul's third journey begins
  { nt: { ref: "Acts 18–19", book: "ACT", ch: 18 }, ot: { ref: "Wis 14", book: "WIS", ch: 14 }, note: "Corinth; Apollos; Paul's third journey begins" },

  // Day 36 — Paul's farewell to the elders at Ephesus; Jerusalem bound
  { nt: { ref: "Acts 20–21", book: "ACT", ch: 20 }, ot: { ref: "Wis 15", book: "WIS", ch: 15 }, note: "Paul's farewell to the elders at Ephesus; Jerusalem bound" },

  // Day 37 — Paul arrested; his defense before the crowd and Sanhedrin
  { nt: { ref: "Acts 22–23", book: "ACT", ch: 22 }, ot: { ref: "Wis 16", book: "WIS", ch: 16 }, note: "Paul arrested; his defense before the crowd and Sanhedrin" },

  // Day 38 — Paul before Felix and Festus
  { nt: { ref: "Acts 24–25", book: "ACT", ch: 24 }, ot: { ref: "Wis 17", book: "WIS", ch: 17 }, note: "Paul before Felix and Festus" },

  // Day 39 — Paul before Agrippa; the voyage and shipwreck
  { nt: { ref: "Acts 26–27", book: "ACT", ch: 26 }, ot: { ref: "Wis 18", book: "WIS", ch: 18 }, note: "Paul before Agrippa; the voyage and shipwreck" },

  // Day 40 — Paul arrives in Rome; the Gospel reaches the ends of the earth
  { nt: { ref: "Acts 28", book: "ACT", ch: 28 }, ot: { ref: "Wis 19", book: "WIS", ch: 19 }, note: "Paul arrives in Rome; the Gospel reaches the ends of the earth" },
];
