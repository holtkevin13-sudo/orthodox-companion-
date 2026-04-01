// Orthodox Companion — Reading Plan
// Plan: New Testament — 1 Year (plan-nt-1year.js)
// Variable: PLAN_NT_1YEAR
// Days: 365
// Coverage: All 27 NT books at a gentle pace (~1 chapter/day)
// Structure: 260 NT chapters interspersed with 105 Psalm reflection days
//            placed at natural breaks between sections and chapters.
//            Psalm days are intentional pauses — not filler — for meditation.
// Sequence: Matthew · Mark · Luke · John · Acts · Romans · 1–2 Corinthians ·
//           Galatians · Ephesians · Philippians · Colossians · 1–2 Thessalonians ·
//           1–2 Timothy · Titus · Philemon · Hebrews · James · 1–2 Peter ·
//           1–2–3 John · Jude · Revelation
// Index 0 is unused — plan is 1-indexed.

const PLAN_NT_1YEAR = [
  null, // index 0 unused

  // ══════════════════════════════════════════════════════
  //  MATTHEW  (Days 1–39)
  //  28 chapters + 11 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 1
  { nt: { ref: "Mt 1", book: "MAT", ch: 1 } },
  // Day 2
  { nt: { ref: "Mt 2", book: "MAT", ch: 2 } },
  // Day 3 — Reflection
  { ps: { ref: "Ps 1", ch: 1 } },
  // Day 4
  { nt: { ref: "Mt 3", book: "MAT", ch: 3 } },
  // Day 5
  { nt: { ref: "Mt 4", book: "MAT", ch: 4 } },
  // Day 6 — Reflection
  { ps: { ref: "Ps 5", ch: 5 } },
  // Day 7
  { nt: { ref: "Mt 5", book: "MAT", ch: 5 } },
  // Day 8
  { nt: { ref: "Mt 6", book: "MAT", ch: 6 } },
  // Day 9
  { nt: { ref: "Mt 7", book: "MAT", ch: 7 } },
  // Day 10 — Reflection
  { ps: { ref: "Ps 8", ch: 8 } },
  // Day 11
  { nt: { ref: "Mt 8", book: "MAT", ch: 8 } },
  // Day 12
  { nt: { ref: "Mt 9", book: "MAT", ch: 9 } },
  // Day 13
  { nt: { ref: "Mt 10", book: "MAT", ch: 10 } },
  // Day 14 — Reflection
  { ps: { ref: "Ps 19", ch: 19 } },
  // Day 15
  { nt: { ref: "Mt 11", book: "MAT", ch: 11 } },
  // Day 16
  { nt: { ref: "Mt 12", book: "MAT", ch: 12 } },
  // Day 17
  { nt: { ref: "Mt 13", book: "MAT", ch: 13 } },
  // Day 18 — Reflection
  { ps: { ref: "Ps 22", ch: 22 } },
  // Day 19
  { nt: { ref: "Mt 14", book: "MAT", ch: 14 } },
  // Day 20
  { nt: { ref: "Mt 15", book: "MAT", ch: 15 } },
  // Day 21 — Reflection
  { ps: { ref: "Ps 23", ch: 23 } },
  // Day 22
  { nt: { ref: "Mt 16", book: "MAT", ch: 16 } },
  // Day 23
  { nt: { ref: "Mt 17", book: "MAT", ch: 17 } },
  // Day 24
  { nt: { ref: "Mt 18", book: "MAT", ch: 18 } },
  // Day 25 — Reflection
  { ps: { ref: "Ps 24", ch: 24 } },
  // Day 26
  { nt: { ref: "Mt 19", book: "MAT", ch: 19 } },
  // Day 27
  { nt: { ref: "Mt 20", book: "MAT", ch: 20 } },
  // Day 28
  { nt: { ref: "Mt 21", book: "MAT", ch: 21 } },
  // Day 29 — Reflection
  { ps: { ref: "Ps 27", ch: 27 } },
  // Day 30
  { nt: { ref: "Mt 22", book: "MAT", ch: 22 } },
  // Day 31
  { nt: { ref: "Mt 23", book: "MAT", ch: 23 } },
  // Day 32
  { nt: { ref: "Mt 24", book: "MAT", ch: 24 } },
  // Day 33 — Reflection
  { ps: { ref: "Ps 31", ch: 31 } },
  // Day 34
  { nt: { ref: "Mt 25", book: "MAT", ch: 25 } },
  // Day 35
  { nt: { ref: "Mt 26", book: "MAT", ch: 26 } },
  // Day 36 — Reflection
  { ps: { ref: "Ps 34", ch: 34 } },
  // Day 37
  { nt: { ref: "Mt 27", book: "MAT", ch: 27 } },
  // Day 38
  { nt: { ref: "Mt 28", book: "MAT", ch: 28 } },
  // Day 39 — Reflection
  { ps: { ref: "Ps 46", ch: 46 } },

  // ══════════════════════════════════════════════════════
  //  MARK  (Days 40–59)
  //  16 chapters + 4 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 40
  { nt: { ref: "Mk 1", book: "MRK", ch: 1 } },
  // Day 41
  { nt: { ref: "Mk 2", book: "MRK", ch: 2 } },
  // Day 42
  { nt: { ref: "Mk 3", book: "MRK", ch: 3 } },
  // Day 43
  { nt: { ref: "Mk 4", book: "MRK", ch: 4 } },
  // Day 44 — Reflection
  { ps: { ref: "Ps 42", ch: 42 } },
  // Day 45
  { nt: { ref: "Mk 5", book: "MRK", ch: 5 } },
  // Day 46
  { nt: { ref: "Mk 6", book: "MRK", ch: 6 } },
  // Day 47
  { nt: { ref: "Mk 7", book: "MRK", ch: 7 } },
  // Day 48
  { nt: { ref: "Mk 8", book: "MRK", ch: 8 } },
  // Day 49 — Reflection
  { ps: { ref: "Ps 51", ch: 51 } },
  // Day 50
  { nt: { ref: "Mk 9", book: "MRK", ch: 9 } },
  // Day 51
  { nt: { ref: "Mk 10", book: "MRK", ch: 10 } },
  // Day 52
  { nt: { ref: "Mk 11", book: "MRK", ch: 11 } },
  // Day 53
  { nt: { ref: "Mk 12", book: "MRK", ch: 12 } },
  // Day 54 — Reflection
  { ps: { ref: "Ps 63", ch: 63 } },
  // Day 55
  { nt: { ref: "Mk 13", book: "MRK", ch: 13 } },
  // Day 56
  { nt: { ref: "Mk 14", book: "MRK", ch: 14 } },
  // Day 57
  { nt: { ref: "Mk 15", book: "MRK", ch: 15 } },
  // Day 58
  { nt: { ref: "Mk 16", book: "MRK", ch: 16 } },
  // Day 59 — Reflection
  { ps: { ref: "Ps 91", ch: 91 } },

  // ══════════════════════════════════════════════════════
  //  LUKE  (Days 60–94)
  //  24 chapters + 11 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 60
  { nt: { ref: "Lk 1", book: "LUK", ch: 1 } },
  // Day 61
  { nt: { ref: "Lk 2", book: "LUK", ch: 2 } },
  // Day 62 — Reflection
  { ps: { ref: "Ps 25", ch: 25 } },
  // Day 63
  { nt: { ref: "Lk 3", book: "LUK", ch: 3 } },
  // Day 64
  { nt: { ref: "Lk 4", book: "LUK", ch: 4 } },
  // Day 65 — Reflection
  { ps: { ref: "Ps 27", ch: 27 } },
  // Day 66
  { nt: { ref: "Lk 5", book: "LUK", ch: 5 } },
  // Day 67
  { nt: { ref: "Lk 6", book: "LUK", ch: 6 } },
  // Day 68 — Reflection
  { ps: { ref: "Ps 40", ch: 40 } },
  // Day 69
  { nt: { ref: "Lk 7", book: "LUK", ch: 7 } },
  // Day 70
  { nt: { ref: "Lk 8", book: "LUK", ch: 8 } },
  // Day 71 — Reflection
  { ps: { ref: "Ps 46", ch: 46 } },
  // Day 72
  { nt: { ref: "Lk 9", book: "LUK", ch: 9 } },
  // Day 73
  { nt: { ref: "Lk 10", book: "LUK", ch: 10 } },
  // Day 74 — Reflection
  { ps: { ref: "Ps 63", ch: 63 } },
  // Day 75
  { nt: { ref: "Lk 11", book: "LUK", ch: 11 } },
  // Day 76
  { nt: { ref: "Lk 12", book: "LUK", ch: 12 } },
  // Day 77 — Reflection
  { ps: { ref: "Ps 84", ch: 84 } },
  // Day 78
  { nt: { ref: "Lk 13", book: "LUK", ch: 13 } },
  // Day 79
  { nt: { ref: "Lk 14", book: "LUK", ch: 14 } },
  // Day 80 — Reflection
  { ps: { ref: "Ps 90", ch: 90 } },
  // Day 81
  { nt: { ref: "Lk 15", book: "LUK", ch: 15 } },
  // Day 82
  { nt: { ref: "Lk 16", book: "LUK", ch: 16 } },
  // Day 83
  { nt: { ref: "Lk 17", book: "LUK", ch: 17 } },
  // Day 84 — Reflection
  { ps: { ref: "Ps 100", ch: 100 } },
  // Day 85
  { nt: { ref: "Lk 18", book: "LUK", ch: 18 } },
  // Day 86
  { nt: { ref: "Lk 19", book: "LUK", ch: 19 } },
  // Day 87 — Reflection
  { ps: { ref: "Ps 107", ch: 107 } },
  // Day 88
  { nt: { ref: "Lk 20", book: "LUK", ch: 20 } },
  // Day 89
  { nt: { ref: "Lk 21", book: "LUK", ch: 21 } },
  // Day 90 — Reflection
  { ps: { ref: "Ps 116", ch: 116 } },
  // Day 91
  { nt: { ref: "Lk 22", book: "LUK", ch: 22 } },
  // Day 92
  { nt: { ref: "Lk 23", book: "LUK", ch: 23 } },
  // Day 93 — Reflection
  { ps: { ref: "Ps 118", ch: 118 } },
  // Day 94
  { nt: { ref: "Lk 24", book: "LUK", ch: 24 } },

  // ══════════════════════════════════════════════════════
  //  JOHN  (Days 95–122)
  //  21 chapters + 7 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 95
  { nt: { ref: "Jn 1", book: "JHN", ch: 1 } },
  // Day 96
  { nt: { ref: "Jn 2", book: "JHN", ch: 2 } },
  // Day 97
  { nt: { ref: "Jn 3", book: "JHN", ch: 3 } },
  // Day 98 — Reflection
  { ps: { ref: "Ps 23", ch: 23 } },
  // Day 99
  { nt: { ref: "Jn 4", book: "JHN", ch: 4 } },
  // Day 100
  { nt: { ref: "Jn 5", book: "JHN", ch: 5 } },
  // Day 101
  { nt: { ref: "Jn 6", book: "JHN", ch: 6 } },
  // Day 102 — Reflection
  { ps: { ref: "Ps 36", ch: 36 } },
  // Day 103
  { nt: { ref: "Jn 7", book: "JHN", ch: 7 } },
  // Day 104
  { nt: { ref: "Jn 8", book: "JHN", ch: 8 } },
  // Day 105
  { nt: { ref: "Jn 9", book: "JHN", ch: 9 } },
  // Day 106 — Reflection
  { ps: { ref: "Ps 63", ch: 63 } },
  // Day 107
  { nt: { ref: "Jn 10", book: "JHN", ch: 10 } },
  // Day 108
  { nt: { ref: "Jn 11", book: "JHN", ch: 11 } },
  // Day 109
  { nt: { ref: "Jn 12", book: "JHN", ch: 12 } },
  // Day 110 — Reflection
  { ps: { ref: "Ps 84", ch: 84 } },
  // Day 111
  { nt: { ref: "Jn 13", book: "JHN", ch: 13 } },
  // Day 112
  { nt: { ref: "Jn 14", book: "JHN", ch: 14 } },
  // Day 113
  { nt: { ref: "Jn 15", book: "JHN", ch: 15 } },
  // Day 114 — Reflection
  { ps: { ref: "Ps 91", ch: 91 } },
  // Day 115
  { nt: { ref: "Jn 16", book: "JHN", ch: 16 } },
  // Day 116
  { nt: { ref: "Jn 17", book: "JHN", ch: 17 } },
  // Day 117 — Reflection
  { ps: { ref: "Ps 116", ch: 116 } },
  // Day 118
  { nt: { ref: "Jn 18", book: "JHN", ch: 18 } },
  // Day 119
  { nt: { ref: "Jn 19", book: "JHN", ch: 19 } },
  // Day 120
  { nt: { ref: "Jn 20", book: "JHN", ch: 20 } },
  // Day 121 — Reflection
  { ps: { ref: "Ps 130", ch: 130 } },
  // Day 122
  { nt: { ref: "Jn 21", book: "JHN", ch: 21 } },

  // ══════════════════════════════════════════════════════
  //  ACTS  (Days 123–161)
  //  28 chapters + 11 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 123
  { nt: { ref: "Acts 1", book: "ACT", ch: 1 } },
  // Day 124
  { nt: { ref: "Acts 2", book: "ACT", ch: 2 } },
  // Day 125
  { nt: { ref: "Acts 3", book: "ACT", ch: 3 } },
  // Day 126 — Reflection
  { ps: { ref: "Ps 2", ch: 2 } },
  // Day 127
  { nt: { ref: "Acts 4", book: "ACT", ch: 4 } },
  // Day 128
  { nt: { ref: "Acts 5", book: "ACT", ch: 5 } },
  // Day 129
  { nt: { ref: "Acts 6", book: "ACT", ch: 6 } },
  // Day 130 — Reflection
  { ps: { ref: "Ps 46", ch: 46 } },
  // Day 131
  { nt: { ref: "Acts 7", book: "ACT", ch: 7 } },
  // Day 132
  { nt: { ref: "Acts 8", book: "ACT", ch: 8 } },
  // Day 133
  { nt: { ref: "Acts 9", book: "ACT", ch: 9 } },
  // Day 134 — Reflection
  { ps: { ref: "Ps 47", ch: 47 } },
  // Day 135
  { nt: { ref: "Acts 10", book: "ACT", ch: 10 } },
  // Day 136
  { nt: { ref: "Acts 11", book: "ACT", ch: 11 } },
  // Day 137
  { nt: { ref: "Acts 12", book: "ACT", ch: 12 } },
  // Day 138 — Reflection
  { ps: { ref: "Ps 66", ch: 66 } },
  // Day 139
  { nt: { ref: "Acts 13", book: "ACT", ch: 13 } },
  // Day 140
  { nt: { ref: "Acts 14", book: "ACT", ch: 14 } },
  // Day 141
  { nt: { ref: "Acts 15", book: "ACT", ch: 15 } },
  // Day 142 — Reflection
  { ps: { ref: "Ps 68", ch: 68 } },
  // Day 143
  { nt: { ref: "Acts 16", book: "ACT", ch: 16 } },
  // Day 144
  { nt: { ref: "Acts 17", book: "ACT", ch: 17 } },
  // Day 145 — Reflection
  { ps: { ref: "Ps 96", ch: 96 } },
  // Day 146
  { nt: { ref: "Acts 18", book: "ACT", ch: 18 } },
  // Day 147
  { nt: { ref: "Acts 19", book: "ACT", ch: 19 } },
  // Day 148
  { nt: { ref: "Acts 20", book: "ACT", ch: 20 } },
  // Day 149 — Reflection
  { ps: { ref: "Ps 98", ch: 98 } },
  // Day 150
  { nt: { ref: "Acts 21", book: "ACT", ch: 21 } },
  // Day 151
  { nt: { ref: "Acts 22", book: "ACT", ch: 22 } },
  // Day 152
  { nt: { ref: "Acts 23", book: "ACT", ch: 23 } },
  // Day 153 — Reflection
  { ps: { ref: "Ps 100", ch: 100 } },
  // Day 154
  { nt: { ref: "Acts 24", book: "ACT", ch: 24 } },
  // Day 155
  { nt: { ref: "Acts 25", book: "ACT", ch: 25 } },
  // Day 156
  { nt: { ref: "Acts 26", book: "ACT", ch: 26 } },
  // Day 157 — Reflection
  { ps: { ref: "Ps 104", ch: 104 } },
  // Day 158
  { nt: { ref: "Acts 27", book: "ACT", ch: 27 } },
  // Day 159
  { nt: { ref: "Acts 28", book: "ACT", ch: 28 } },
  // Day 160 — Reflection
  { ps: { ref: "Ps 118", ch: 118 } },
  // Day 161 — Reflection
  { ps: { ref: "Ps 150", ch: 150 } },

  // ══════════════════════════════════════════════════════
  //  ROMANS  (Days 162–185)
  //  16 chapters + 8 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 162
  { nt: { ref: "Rom 1", book: "ROM", ch: 1 } },
  // Day 163
  { nt: { ref: "Rom 2", book: "ROM", ch: 2 } },
  // Day 164
  { nt: { ref: "Rom 3", book: "ROM", ch: 3 } },
  // Day 165 — Reflection
  { ps: { ref: "Ps 19", ch: 19 } },
  // Day 166
  { nt: { ref: "Rom 4", book: "ROM", ch: 4 } },
  // Day 167
  { nt: { ref: "Rom 5", book: "ROM", ch: 5 } },
  // Day 168
  { nt: { ref: "Rom 6", book: "ROM", ch: 6 } },
  // Day 169 — Reflection
  { ps: { ref: "Ps 22", ch: 22 } },
  // Day 170
  { nt: { ref: "Rom 7", book: "ROM", ch: 7 } },
  // Day 171
  { nt: { ref: "Rom 8", book: "ROM", ch: 8 } },
  // Day 172
  { nt: { ref: "Rom 9", book: "ROM", ch: 9 } },
  // Day 173 — Reflection
  { ps: { ref: "Ps 31", ch: 31 } },
  // Day 174
  { nt: { ref: "Rom 10", book: "ROM", ch: 10 } },
  // Day 175
  { nt: { ref: "Rom 11", book: "ROM", ch: 11 } },
  // Day 176
  { nt: { ref: "Rom 12", book: "ROM", ch: 12 } },
  // Day 177 — Reflection
  { ps: { ref: "Ps 32", ch: 32 } },
  // Day 178
  { nt: { ref: "Rom 13", book: "ROM", ch: 13 } },
  // Day 179
  { nt: { ref: "Rom 14", book: "ROM", ch: 14 } },
  // Day 180
  { nt: { ref: "Rom 15", book: "ROM", ch: 15 } },
  // Day 181 — Reflection
  { ps: { ref: "Ps 40", ch: 40 } },
  // Day 182
  { nt: { ref: "Rom 16", book: "ROM", ch: 16 } },
  // Day 183 — Reflection
  { ps: { ref: "Ps 51", ch: 51 } },
  // Day 184 — Reflection
  { ps: { ref: "Ps 62", ch: 62 } },
  // Day 185 — Reflection
  { ps: { ref: "Ps 103", ch: 103 } },

  // ══════════════════════════════════════════════════════
  //  1 CORINTHIANS  (Days 186–209)
  //  16 chapters + 8 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 186
  { nt: { ref: "1 Cor 1", book: "1CO", ch: 1 } },
  // Day 187
  { nt: { ref: "1 Cor 2", book: "1CO", ch: 2 } },
  // Day 188
  { nt: { ref: "1 Cor 3", book: "1CO", ch: 3 } },
  // Day 189 — Reflection
  { ps: { ref: "Ps 8", ch: 8 } },
  // Day 190
  { nt: { ref: "1 Cor 4", book: "1CO", ch: 4 } },
  // Day 191
  { nt: { ref: "1 Cor 5", book: "1CO", ch: 5 } },
  // Day 192
  { nt: { ref: "1 Cor 6", book: "1CO", ch: 6 } },
  // Day 193 — Reflection
  { ps: { ref: "Ps 24", ch: 24 } },
  // Day 194
  { nt: { ref: "1 Cor 7", book: "1CO", ch: 7 } },
  // Day 195
  { nt: { ref: "1 Cor 8", book: "1CO", ch: 8 } },
  // Day 196
  { nt: { ref: "1 Cor 9", book: "1CO", ch: 9 } },
  // Day 197 — Reflection
  { ps: { ref: "Ps 46", ch: 46 } },
  // Day 198
  { nt: { ref: "1 Cor 10", book: "1CO", ch: 10 } },
  // Day 199
  { nt: { ref: "1 Cor 11", book: "1CO", ch: 11 } },
  // Day 200
  { nt: { ref: "1 Cor 12", book: "1CO", ch: 12 } },
  // Day 201 — Reflection
  { ps: { ref: "Ps 51", ch: 51 } },
  // Day 202
  { nt: { ref: "1 Cor 13", book: "1CO", ch: 13 } },
  // Day 203
  { nt: { ref: "1 Cor 14", book: "1CO", ch: 14 } },
  // Day 204
  { nt: { ref: "1 Cor 15", book: "1CO", ch: 15 } },
  // Day 205 — Reflection
  { ps: { ref: "Ps 62", ch: 62 } },
  // Day 206
  { nt: { ref: "1 Cor 16", book: "1CO", ch: 16 } },
  // Day 207 — Reflection
  { ps: { ref: "Ps 100", ch: 100 } },
  // Day 208 — Reflection
  { ps: { ref: "Ps 118", ch: 118 } },
  // Day 209 — Reflection
  { ps: { ref: "Ps 148", ch: 148 } },

  // ══════════════════════════════════════════════════════
  //  2 CORINTHIANS  (Days 210–225)
  //  13 chapters + 3 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 210
  { nt: { ref: "2 Cor 1", book: "2CO", ch: 1 } },
  // Day 211
  { nt: { ref: "2 Cor 2", book: "2CO", ch: 2 } },
  // Day 212
  { nt: { ref: "2 Cor 3", book: "2CO", ch: 3 } },
  // Day 213
  { nt: { ref: "2 Cor 4", book: "2CO", ch: 4 } },
  // Day 214 — Reflection
  { ps: { ref: "Ps 34", ch: 34 } },
  // Day 215
  { nt: { ref: "2 Cor 5", book: "2CO", ch: 5 } },
  // Day 216
  { nt: { ref: "2 Cor 6", book: "2CO", ch: 6 } },
  // Day 217
  { nt: { ref: "2 Cor 7", book: "2CO", ch: 7 } },
  // Day 218
  { nt: { ref: "2 Cor 8", book: "2CO", ch: 8 } },
  // Day 219 — Reflection
  { ps: { ref: "Ps 91", ch: 91 } },
  // Day 220
  { nt: { ref: "2 Cor 9", book: "2CO", ch: 9 } },
  // Day 221
  { nt: { ref: "2 Cor 10", book: "2CO", ch: 10 } },
  // Day 222
  { nt: { ref: "2 Cor 11", book: "2CO", ch: 11 } },
  // Day 223
  { nt: { ref: "2 Cor 12", book: "2CO", ch: 12 } },
  // Day 224
  { nt: { ref: "2 Cor 13", book: "2CO", ch: 13 } },
  // Day 225 — Reflection
  { ps: { ref: "Ps 116", ch: 116 } },

  // ══════════════════════════════════════════════════════
  //  GALATIANS  (Days 226–233)
  //  6 chapters + 2 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 226
  { nt: { ref: "Gal 1", book: "GAL", ch: 1 } },
  // Day 227
  { nt: { ref: "Gal 2", book: "GAL", ch: 2 } },
  // Day 228
  { nt: { ref: "Gal 3", book: "GAL", ch: 3 } },
  // Day 229 — Reflection
  { ps: { ref: "Ps 119", ch: 119 } },
  // Day 230
  { nt: { ref: "Gal 4", book: "GAL", ch: 4 } },
  // Day 231
  { nt: { ref: "Gal 5", book: "GAL", ch: 5 } },
  // Day 232
  { nt: { ref: "Gal 6", book: "GAL", ch: 6 } },
  // Day 233 — Reflection
  { ps: { ref: "Ps 130", ch: 130 } },

  // ══════════════════════════════════════════════════════
  //  EPHESIANS  (Days 234–241)
  //  6 chapters + 2 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 234
  { nt: { ref: "Eph 1", book: "EPH", ch: 1 } },
  // Day 235
  { nt: { ref: "Eph 2", book: "EPH", ch: 2 } },
  // Day 236
  { nt: { ref: "Eph 3", book: "EPH", ch: 3 } },
  // Day 237 — Reflection
  { ps: { ref: "Ps 8", ch: 8 } },
  // Day 238
  { nt: { ref: "Eph 4", book: "EPH", ch: 4 } },
  // Day 239
  { nt: { ref: "Eph 5", book: "EPH", ch: 5 } },
  // Day 240
  { nt: { ref: "Eph 6", book: "EPH", ch: 6 } },
  // Day 241 — Reflection
  { ps: { ref: "Ps 19", ch: 19 } },

  // ══════════════════════════════════════════════════════
  //  PHILIPPIANS  (Days 242–247)
  //  4 chapters + 2 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 242
  { nt: { ref: "Phil 1", book: "PHP", ch: 1 } },
  // Day 243
  { nt: { ref: "Phil 2", book: "PHP", ch: 2 } },
  // Day 244 — Reflection
  { ps: { ref: "Ps 100", ch: 100 } },
  // Day 245
  { nt: { ref: "Phil 3", book: "PHP", ch: 3 } },
  // Day 246
  { nt: { ref: "Phil 4", book: "PHP", ch: 4 } },
  // Day 247 — Reflection
  { ps: { ref: "Ps 150", ch: 150 } },

  // ══════════════════════════════════════════════════════
  //  COLOSSIANS  (Days 248–253)
  //  4 chapters + 2 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 248
  { nt: { ref: "Col 1", book: "COL", ch: 1 } },
  // Day 249
  { nt: { ref: "Col 2", book: "COL", ch: 2 } },
  // Day 250 — Reflection
  { ps: { ref: "Ps 96", ch: 96 } },
  // Day 251
  { nt: { ref: "Col 3", book: "COL", ch: 3 } },
  // Day 252
  { nt: { ref: "Col 4", book: "COL", ch: 4 } },
  // Day 253 — Reflection
  { ps: { ref: "Ps 103", ch: 103 } },

  // ══════════════════════════════════════════════════════
  //  1 THESSALONIANS  (Days 254–260)
  //  5 chapters + 2 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 254
  { nt: { ref: "1 Th 1", book: "1TH", ch: 1 } },
  // Day 255
  { nt: { ref: "1 Th 2", book: "1TH", ch: 2 } },
  // Day 256
  { nt: { ref: "1 Th 3", book: "1TH", ch: 3 } },
  // Day 257 — Reflection
  { ps: { ref: "Ps 27", ch: 27 } },
  // Day 258
  { nt: { ref: "1 Th 4", book: "1TH", ch: 4 } },
  // Day 259
  { nt: { ref: "1 Th 5", book: "1TH", ch: 5 } },
  // Day 260 — Reflection
  { ps: { ref: "Ps 130", ch: 130 } },

  // ══════════════════════════════════════════════════════
  //  2 THESSALONIANS  (Days 261–264)
  //  3 chapters + 1 Psalm reflection day
  // ══════════════════════════════════════════════════════

  // Day 261
  { nt: { ref: "2 Th 1", book: "2TH", ch: 1 } },
  // Day 262
  { nt: { ref: "2 Th 2", book: "2TH", ch: 2 } },
  // Day 263
  { nt: { ref: "2 Th 3", book: "2TH", ch: 3 } },
  // Day 264 — Reflection
  { ps: { ref: "Ps 130", ch: 130 } },

  // ══════════════════════════════════════════════════════
  //  1 TIMOTHY  (Days 265–272)
  //  6 chapters + 2 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 265
  { nt: { ref: "1 Tim 1", book: "1TI", ch: 1 } },
  // Day 266
  { nt: { ref: "1 Tim 2", book: "1TI", ch: 2 } },
  // Day 267
  { nt: { ref: "1 Tim 3", book: "1TI", ch: 3 } },
  // Day 268 — Reflection
  { ps: { ref: "Ps 15", ch: 15 } },
  // Day 269
  { nt: { ref: "1 Tim 4", book: "1TI", ch: 4 } },
  // Day 270
  { nt: { ref: "1 Tim 5", book: "1TI", ch: 5 } },
  // Day 271
  { nt: { ref: "1 Tim 6", book: "1TI", ch: 6 } },
  // Day 272 — Reflection
  { ps: { ref: "Ps 24", ch: 24 } },

  // ══════════════════════════════════════════════════════
  //  2 TIMOTHY  (Days 273–278)
  //  4 chapters + 2 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 273
  { nt: { ref: "2 Tim 1", book: "2TI", ch: 1 } },
  // Day 274
  { nt: { ref: "2 Tim 2", book: "2TI", ch: 2 } },
  // Day 275 — Reflection
  { ps: { ref: "Ps 31", ch: 31 } },
  // Day 276
  { nt: { ref: "2 Tim 3", book: "2TI", ch: 3 } },
  // Day 277
  { nt: { ref: "2 Tim 4", book: "2TI", ch: 4 } },
  // Day 278 — Reflection
  { ps: { ref: "Ps 46", ch: 46 } },

  // ══════════════════════════════════════════════════════
  //  TITUS  (Days 279–282)
  //  3 chapters + 1 Psalm reflection day
  // ══════════════════════════════════════════════════════

  // Day 279
  { nt: { ref: "Tit 1", book: "TIT", ch: 1 } },
  // Day 280
  { nt: { ref: "Tit 2", book: "TIT", ch: 2 } },
  // Day 281
  { nt: { ref: "Tit 3", book: "TIT", ch: 3 } },
  // Day 282 — Reflection
  { ps: { ref: "Ps 98", ch: 98 } },

  // ══════════════════════════════════════════════════════
  //  PHILEMON  (Day 283)
  // ══════════════════════════════════════════════════════

  // Day 283 — Receive him no longer as a slave but as a dear brother
  { nt: { ref: "Phlm", book: "PHM", ch: 1 } },

  // ══════════════════════════════════════════════════════
  //  HEBREWS  (Days 284–303)
  //  13 chapters + 7 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 284
  { nt: { ref: "Heb 1", book: "HEB", ch: 1 } },
  // Day 285
  { nt: { ref: "Heb 2", book: "HEB", ch: 2 } },
  // Day 286
  { nt: { ref: "Heb 3", book: "HEB", ch: 3 } },
  // Day 287
  { nt: { ref: "Heb 4", book: "HEB", ch: 4 } },
  // Day 288 — Reflection
  { ps: { ref: "Ps 2", ch: 2 } },
  // Day 289
  { nt: { ref: "Heb 5", book: "HEB", ch: 5 } },
  // Day 290
  { nt: { ref: "Heb 6", book: "HEB", ch: 6 } },
  // Day 291
  { nt: { ref: "Heb 7", book: "HEB", ch: 7 } },
  // Day 292
  { nt: { ref: "Heb 8", book: "HEB", ch: 8 } },
  // Day 293 — Reflection
  { ps: { ref: "Ps 22", ch: 22 } },
  // Day 294
  { nt: { ref: "Heb 9", book: "HEB", ch: 9 } },
  // Day 295
  { nt: { ref: "Heb 10", book: "HEB", ch: 10 } },
  // Day 296
  { nt: { ref: "Heb 11", book: "HEB", ch: 11 } },
  // Day 297 — Reflection
  { ps: { ref: "Ps 40", ch: 40 } },
  // Day 298 — Reflection
  { ps: { ref: "Ps 45", ch: 45 } },
  // Day 299
  { nt: { ref: "Heb 12", book: "HEB", ch: 12 } },
  // Day 300
  { nt: { ref: "Heb 13", book: "HEB", ch: 13 } },
  // Day 301 — Reflection
  { ps: { ref: "Ps 91", ch: 91 } },
  // Day 302 — Reflection
  { ps: { ref: "Ps 110", ch: 110 } },
  // Day 303 — Reflection
  { ps: { ref: "Ps 118", ch: 118 } },

  // ══════════════════════════════════════════════════════
  //  JAMES  (Days 304–310)
  //  5 chapters + 2 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 304
  { nt: { ref: "Jas 1", book: "JAS", ch: 1 } },
  // Day 305
  { nt: { ref: "Jas 2", book: "JAS", ch: 2 } },
  // Day 306
  { nt: { ref: "Jas 3", book: "JAS", ch: 3 } },
  // Day 307 — Reflection
  { ps: { ref: "Ps 51", ch: 51 } },
  // Day 308
  { nt: { ref: "Jas 4", book: "JAS", ch: 4 } },
  // Day 309
  { nt: { ref: "Jas 5", book: "JAS", ch: 5 } },
  // Day 310 — Reflection
  { ps: { ref: "Ps 62", ch: 62 } },

  // ══════════════════════════════════════════════════════
  //  1 PETER  (Days 311–317)
  //  5 chapters + 2 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 311
  { nt: { ref: "1 Pet 1", book: "1PE", ch: 1 } },
  // Day 312
  { nt: { ref: "1 Pet 2", book: "1PE", ch: 2 } },
  // Day 313
  { nt: { ref: "1 Pet 3", book: "1PE", ch: 3 } },
  // Day 314 — Reflection
  { ps: { ref: "Ps 34", ch: 34 } },
  // Day 315
  { nt: { ref: "1 Pet 4", book: "1PE", ch: 4 } },
  // Day 316
  { nt: { ref: "1 Pet 5", book: "1PE", ch: 5 } },
  // Day 317 — Reflection
  { ps: { ref: "Ps 91", ch: 91 } },

  // ══════════════════════════════════════════════════════
  //  2 PETER  (Days 318–321)
  //  3 chapters + 1 Psalm reflection day
  // ══════════════════════════════════════════════════════

  // Day 318
  { nt: { ref: "2 Pet 1", book: "2PE", ch: 1 } },
  // Day 319
  { nt: { ref: "2 Pet 2", book: "2PE", ch: 2 } },
  // Day 320
  { nt: { ref: "2 Pet 3", book: "2PE", ch: 3 } },
  // Day 321 — Reflection
  { ps: { ref: "Ps 90", ch: 90 } },

  // ══════════════════════════════════════════════════════
  //  1 JOHN  (Days 322–328)
  //  5 chapters + 2 Psalm reflection days
  // ══════════════════════════════════════════════════════

  // Day 322
  { nt: { ref: "1 Jn 1", book: "1JO", ch: 1 } },
  // Day 323
  { nt: { ref: "1 Jn 2", book: "1JO", ch: 2 } },
  // Day 324
  { nt: { ref: "1 Jn 3", book: "1JO", ch: 3 } },
  // Day 325 — Reflection
  { ps: { ref: "Ps 103", ch: 103 } },
  // Day 326
  { nt: { ref: "1 Jn 4", book: "1JO", ch: 4 } },
  // Day 327
  { nt: { ref: "1 Jn 5", book: "1JO", ch: 5 } },
  // Day 328 — Reflection
  { ps: { ref: "Ps 130", ch: 130 } },

  // ══════════════════════════════════════════════════════
  //  2 JOHN · 3 JOHN · JUDE  (Days 329–332)
  //  3 chapters + 1 Psalm reflection day
  // ══════════════════════════════════════════════════════

  // Day 329
  { nt: { ref: "2 Jn", book: "2JO", ch: 1 } },
  // Day 330
  { nt: { ref: "3 Jn", book: "3JO", ch: 1 } },
  // Day 331
  { nt: { ref: "Jude", book: "JUD", ch: 1 } },
  // Day 332 — Reflection
  { ps: { ref: "Ps 119", ch: 119 } },

  // ══════════════════════════════════════════════════════
  //  REVELATION  (Days 333–365)
  //  22 chapters + 11 Psalm reflection days
  //  Revelation deserves a slow, prayerful reading.
  // ══════════════════════════════════════════════════════

  // Day 333
  { nt: { ref: "Rev 1", book: "REV", ch: 1 } },
  // Day 334
  { nt: { ref: "Rev 2", book: "REV", ch: 2 } },
  // Day 335
  { nt: { ref: "Rev 3", book: "REV", ch: 3 } },
  // Day 336 — Reflection
  { ps: { ref: "Ps 2", ch: 2 } },
  // Day 337
  { nt: { ref: "Rev 4", book: "REV", ch: 4 } },
  // Day 338
  { nt: { ref: "Rev 5", book: "REV", ch: 5 } },
  // Day 339
  { nt: { ref: "Rev 6", book: "REV", ch: 6 } },
  // Day 340 — Reflection
  { ps: { ref: "Ps 8", ch: 8 } },
  // Day 341
  { nt: { ref: "Rev 7", book: "REV", ch: 7 } },
  // Day 342
  { nt: { ref: "Rev 8", book: "REV", ch: 8 } },
  // Day 343
  { nt: { ref: "Rev 9", book: "REV", ch: 9 } },
  // Day 344 — Reflection
  { ps: { ref: "Ps 19", ch: 19 } },
  // Day 345
  { nt: { ref: "Rev 10", book: "REV", ch: 10 } },
  // Day 346
  { nt: { ref: "Rev 11", book: "REV", ch: 11 } },
  // Day 347
  { nt: { ref: "Rev 12", book: "REV", ch: 12 } },
  // Day 348 — Reflection
  { ps: { ref: "Ps 47", ch: 47 } },
  // Day 349
  { nt: { ref: "Rev 13", book: "REV", ch: 13 } },
  // Day 350
  { nt: { ref: "Rev 14", book: "REV", ch: 14 } },
  // Day 351
  { nt: { ref: "Rev 15", book: "REV", ch: 15 } },
  // Day 352 — Reflection
  { ps: { ref: "Ps 66", ch: 66 } },
  // Day 353
  { nt: { ref: "Rev 16", book: "REV", ch: 16 } },
  // Day 354
  { nt: { ref: "Rev 17", book: "REV", ch: 17 } },
  // Day 355 — Reflection
  { ps: { ref: "Ps 93", ch: 93 } },
  // Day 356
  { nt: { ref: "Rev 18", book: "REV", ch: 18 } },
  // Day 357
  { nt: { ref: "Rev 19", book: "REV", ch: 19 } },
  // Day 358
  { nt: { ref: "Rev 20", book: "REV", ch: 20 } },
  // Day 359 — Reflection
  { ps: { ref: "Ps 96", ch: 96 } },
  // Day 360
  { nt: { ref: "Rev 21", book: "REV", ch: 21 } },
  // Day 361
  { nt: { ref: "Rev 22", book: "REV", ch: 22 } },
  // Day 362 — Reflection
  { ps: { ref: "Ps 98", ch: 98 } },
  // Day 363 — Reflection
  { ps: { ref: "Ps 104", ch: 104 } },
  // Day 364 — Reflection
  { ps: { ref: "Ps 148", ch: 148 } },
  // Day 365 — Final Reflection: Let everything that has breath praise the Lord
  { ps: { ref: "Ps 150", ch: 150 } },
];
