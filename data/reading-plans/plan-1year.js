// Orthodox Companion — Reading Plan
// Plan: Full Bible — 1 Year (plan-1year.js)
// Variable: PLAN_1YEAR
// Days: 365
// Source: Orthodox Christian Daily Bible Reading Plan (orthodoxchristiandaily.com)
//         Based on the Orthodox Study Bible
// Coverage: OT + Psalms + Proverbs + NT every day
// Full Orthodox canon including all deuterocanonicals
// Index 0 is unused — plan is 1-indexed.

const PLAN_1YEAR = [
  null, // index 0 unused

  // Day 1
  { ot: { ref: "Gen 1–3", book: "GEN", ch: 1 }, ps: { ref: "Ps 1–2", ch: 1 }, pr: { ref: "Prov 1:1–5", ch: 1 }, nt: { ref: "Mt 1", book: "MAT", ch: 1 } },
  // Day 2
  { ot: { ref: "Gen 4–7", book: "GEN", ch: 4 }, ps: { ref: "Ps 3–4", ch: 3 }, pr: { ref: "Prov 1:6–10", ch: 1 }, nt: { ref: "Mt 2", book: "MAT", ch: 2 } },
  // Day 3
  { ot: { ref: "Gen 8:1–11:9", book: "GEN", ch: 8 }, ps: { ref: "Ps 5", ch: 5 }, pr: { ref: "Prov 1:11–15", ch: 1 }, nt: { ref: "Mt 3", book: "MAT", ch: 3 } },
  // Day 4
  { ot: { ref: "Gen 11:10–15:21", book: "GEN", ch: 11 }, ps: { ref: "Ps 6", ch: 6 }, pr: { ref: "Prov 1:16–19", ch: 1 }, nt: { ref: "Mt 4", book: "MAT", ch: 4 } },
  // Day 5
  { ot: { ref: "Gen 16–18", book: "GEN", ch: 16 }, ps: { ref: "Ps 7", ch: 7 }, pr: { ref: "Prov 1:20–24", ch: 1 }, nt: { ref: "Mt 5:1–20", book: "MAT", ch: 5 } },
  // Day 6
  { ot: { ref: "Gen 19–21", book: "GEN", ch: 19 }, ps: { ref: "Ps 8", ch: 8 }, pr: { ref: "Prov 1:25–29", ch: 1 }, nt: { ref: "Mt 5:21–48", book: "MAT", ch: 5 } },
  // Day 7
  { ot: { ref: "Gen 22–24:49", book: "GEN", ch: 22 }, ps: { ref: "Ps 9:1–17", ch: 9 }, pr: { ref: "Prov 1:30–35", ch: 1 }, nt: { ref: "Mt 6:1–18", book: "MAT", ch: 6 } },
  // Day 8
  { ot: { ref: "Gen 24:50–26:35", book: "GEN", ch: 24 }, ps: { ref: "Ps 9:18–39", ch: 9 }, pr: { ref: "Prov 2:1–5", ch: 2 }, nt: { ref: "Mt 6:19–34", book: "MAT", ch: 6 } },
  // Day 9
  { ot: { ref: "Gen 27–28", book: "GEN", ch: 27 }, ps: { ref: "Ps 10–11", ch: 10 }, pr: { ref: "Prov 2:6–9", ch: 2 }, nt: { ref: "Mt 7", book: "MAT", ch: 7 } },
  // Day 10
  { ot: { ref: "Gen 29–30", book: "GEN", ch: 29 }, ps: { ref: "Ps 12–13", ch: 12 }, pr: { ref: "Prov 2:10–16", ch: 2 }, nt: { ref: "Mt 8:1–17", book: "MAT", ch: 8 } },
  // Day 11
  { ot: { ref: "Gen 31–32", book: "GEN", ch: 31 }, ps: { ref: "Ps 14–15", ch: 14 }, pr: { ref: "Prov 2:17–23", ch: 2 }, nt: { ref: "Mt 8:18–34", book: "MAT", ch: 8 } },
  // Day 12
  { ot: { ref: "Gen 33–35", book: "GEN", ch: 33 }, ps: { ref: "Ps 16", ch: 16 }, pr: { ref: "Prov 3:1–5", ch: 3 }, nt: { ref: "Mt 9:1–17", book: "MAT", ch: 9 } },
  // Day 13
  { ot: { ref: "Gen 36–37", book: "GEN", ch: 36 }, ps: { ref: "Ps 17:1–17", ch: 17 }, pr: { ref: "Prov 3:6–10", ch: 3 }, nt: { ref: "Mt 9:18–38", book: "MAT", ch: 9 } },
  // Day 14
  { ot: { ref: "Gen 38–40", book: "GEN", ch: 38 }, ps: { ref: "Ps 17:18–32", ch: 17 }, pr: { ref: "Prov 3:11–16", ch: 3 }, nt: { ref: "Mt 10:1–23", book: "MAT", ch: 10 } },
  // Day 15
  { ot: { ref: "Gen 41–42", book: "GEN", ch: 41 }, ps: { ref: "Ps 17:33–51", ch: 17 }, pr: { ref: "Prov 3:17–22", ch: 3 }, nt: { ref: "Mt 10:24–42", book: "MAT", ch: 10 } },
  // Day 16
  { ot: { ref: "Gen 43–45", book: "GEN", ch: 43 }, ps: { ref: "Ps 18", ch: 18 }, pr: { ref: "Prov 3:23–27", ch: 3 }, nt: { ref: "Mt 11", book: "MAT", ch: 11 } },
  // Day 17
  { ot: { ref: "Gen 46–48", book: "GEN", ch: 46 }, ps: { ref: "Ps 19", ch: 19 }, pr: { ref: "Prov 3:28–32", ch: 3 }, nt: { ref: "Mt 12:1–21", book: "MAT", ch: 12 } },
  // Day 18
  { ot: { ref: "Gen 49–50", book: "GEN", ch: 49 }, ps: { ref: "Ps 20", ch: 20 }, pr: { ref: "Prov 3:33–38", ch: 3 }, nt: { ref: "Mt 12:22–50", book: "MAT", ch: 12 } },
  // Day 19
  { ot: { ref: "Exo 1–3", book: "EXO", ch: 1 }, ps: { ref: "Ps 21:1–19", ch: 21 }, pr: { ref: "Prov 4:1–8", ch: 4 }, nt: { ref: "Mt 13:1–30", book: "MAT", ch: 13 } },
  // Day 20
  { ot: { ref: "Exo 4:1–6:27", book: "EXO", ch: 4 }, ps: { ref: "Ps 21:20–32", ch: 21 }, pr: { ref: "Prov 4:9–12", ch: 4 }, nt: { ref: "Mt 13:31–58", book: "MAT", ch: 13 } },
  // Day 21
  { ot: { ref: "Exo 6:28–9:35", book: "EXO", ch: 6 }, ps: { ref: "Ps 22–23", ch: 22 }, pr: { ref: "Prov 4:13–18", ch: 4 }, nt: { ref: "Mt 14:1–21", book: "MAT", ch: 14 } },
  // Day 22
  { ot: { ref: "Exo 10–12", book: "EXO", ch: 10 }, ps: { ref: "Ps 24:1–11", ch: 24 }, pr: { ref: "Prov 4:19–23", ch: 4 }, nt: { ref: "Mt 14:22–36", book: "MAT", ch: 14 } },
  // Day 23
  { ot: { ref: "Exo 13–15", book: "EXO", ch: 13 }, ps: { ref: "Ps 24:12–22", ch: 24 }, pr: { ref: "Prov 4:24–28", ch: 4 }, nt: { ref: "Mt 15:1–20", book: "MAT", ch: 15 } },
  // Day 24
  { ot: { ref: "Exo 16–18", book: "EXO", ch: 16 }, ps: { ref: "Ps 25", ch: 25 }, pr: { ref: "Prov 5:1–6", ch: 5 }, nt: { ref: "Mt 15:21–39", book: "MAT", ch: 15 } },
  // Day 25
  { ot: { ref: "Exo 19–21", book: "EXO", ch: 19 }, ps: { ref: "Ps 26", ch: 26 }, pr: { ref: "Prov 5:7–14", ch: 5 }, nt: { ref: "Mt 16", book: "MAT", ch: 16 } },
  // Day 26
  { ot: { ref: "Exo 22–24", book: "EXO", ch: 22 }, ps: { ref: "Ps 27", ch: 27 }, pr: { ref: "Prov 5:15–19", ch: 5 }, nt: { ref: "Mt 17", book: "MAT", ch: 17 } },
  // Day 27
  { ot: { ref: "Exo 25–27", book: "EXO", ch: 25 }, ps: { ref: "Ps 28", ch: 28 }, pr: { ref: "Prov 5:20–23", ch: 5 }, nt: { ref: "Mt 18:1–20", book: "MAT", ch: 18 } },
  // Day 28
  { ot: { ref: "Exo 28–29", book: "EXO", ch: 28 }, ps: { ref: "Ps 29", ch: 29 }, pr: { ref: "Prov 6:1–6", ch: 6 }, nt: { ref: "Mt 18:21–35", book: "MAT", ch: 18 } },
  // Day 29
  { ot: { ref: "Exo 30–32", book: "EXO", ch: 30 }, ps: { ref: "Ps 30:1–14", ch: 30 }, pr: { ref: "Prov 6:7–12", ch: 6 }, nt: { ref: "Mt 19", book: "MAT", ch: 19 } },
  // Day 30
  { ot: { ref: "Exo 33–34", book: "EXO", ch: 33 }, ps: { ref: "Ps 30:15–25", ch: 30 }, pr: { ref: "Prov 6:13–16", ch: 6 }, nt: { ref: "Mt 20:1–16", book: "MAT", ch: 20 } },
  // Day 31
  { ot: { ref: "Exo 35–37", book: "EXO", ch: 35 }, ps: { ref: "Ps 31", ch: 31 }, pr: { ref: "Prov 6:17–19", ch: 6 }, nt: { ref: "Mt 20:17–34", book: "MAT", ch: 20 } },
  // Day 32
  { ot: { ref: "Exo 38–40", book: "EXO", ch: 38 }, ps: { ref: "Ps 32:1–12", ch: 32 }, pr: { ref: "Prov 6:20–25", ch: 6 }, nt: { ref: "Mt 21:1–22", book: "MAT", ch: 21 } },
  // Day 33
  { ot: { ref: "Lev 1–4", book: "LEV", ch: 1 }, ps: { ref: "Ps 32:13–22", ch: 32 }, pr: { ref: "Prov 6:26–31", ch: 6 }, nt: { ref: "Mt 21:23–46", book: "MAT", ch: 21 } },
  // Day 34
  { ot: { ref: "Lev 5:1–7:10", book: "LEV", ch: 5 }, ps: { ref: "Ps 33:1–11", ch: 33 }, pr: { ref: "Prov 6:32–36", ch: 6 }, nt: { ref: "Mt 22:1–22", book: "MAT", ch: 22 } },
  // Day 35
  { ot: { ref: "Lev 7:11–9:24", book: "LEV", ch: 7 }, ps: { ref: "Ps 33:12–23", ch: 33 }, pr: { ref: "Prov 6:37–40", ch: 6 }, nt: { ref: "Mt 22:23–46", book: "MAT", ch: 22 } },
  // Day 36
  { ot: { ref: "Lev 10–12", book: "LEV", ch: 10 }, ps: { ref: "Ps 34:1–16", ch: 34 }, pr: { ref: "Prov 7:1–6", ch: 7 }, nt: { ref: "Mt 23:1–22", book: "MAT", ch: 23 } },
  // Day 37
  { ot: { ref: "Lev 13", book: "LEV", ch: 13 }, ps: { ref: "Ps 34:17–28", ch: 34 }, pr: { ref: "Prov 7:7–12", ch: 7 }, nt: { ref: "Mt 23:23–39", book: "MAT", ch: 23 } },
  // Day 38
  { ot: { ref: "Lev 14–15", book: "LEV", ch: 14 }, ps: { ref: "Ps 35", ch: 35 }, pr: { ref: "Prov 7:13–20", ch: 7 }, nt: { ref: "Mt 24:1–28", book: "MAT", ch: 24 } },
  // Day 39
  { ot: { ref: "Lev 16–18", book: "LEV", ch: 16 }, ps: { ref: "Ps 36:1–20", ch: 36 }, pr: { ref: "Prov 7:21–24", ch: 7 }, nt: { ref: "Mt 24:29–51", book: "MAT", ch: 24 } },
  // Day 40
  { ot: { ref: "Lev 19–21", book: "LEV", ch: 19 }, ps: { ref: "Ps 36:21–40", ch: 36 }, pr: { ref: "Prov 7:25–27", ch: 7 }, nt: { ref: "Mt 25:1–30", book: "MAT", ch: 25 } },
  // Day 41
  { ot: { ref: "Lev 22–23", book: "LEV", ch: 22 }, ps: { ref: "Ps 37:1–11", ch: 37 }, pr: { ref: "Prov 8:1–5", ch: 8 }, nt: { ref: "Mt 25:31–46", book: "MAT", ch: 25 } },
  // Day 42
  { ot: { ref: "Lev 24–25", book: "LEV", ch: 24 }, ps: { ref: "Ps 37:12–23", ch: 37 }, pr: { ref: "Prov 8:6–10", ch: 8 }, nt: { ref: "Mt 26:1–25", book: "MAT", ch: 26 } },
  // Day 43
  { ot: { ref: "Lev 26–27", book: "LEV", ch: 26 }, ps: { ref: "Ps 38", ch: 38 }, pr: { ref: "Prov 8:11–16", ch: 8 }, nt: { ref: "Mt 26:26–46", book: "MAT", ch: 26 } },
  // Day 44
  { ot: { ref: "Num 1–2", book: "NUM", ch: 1 }, ps: { ref: "Ps 39", ch: 39 }, pr: { ref: "Prov 8:17–21", ch: 8 }, nt: { ref: "Mt 26:47–75", book: "MAT", ch: 26 } },
  // Day 45
  { ot: { ref: "Num 3:1–4:33", book: "NUM", ch: 3 }, ps: { ref: "Ps 40", ch: 40 }, pr: { ref: "Prov 8:22–26", ch: 8 }, nt: { ref: "Mt 27:1–26", book: "MAT", ch: 27 } },
  // Day 46
  { ot: { ref: "Num 4:34–6:26", book: "NUM", ch: 4 }, ps: { ref: "Ps 41–42", ch: 41 }, pr: { ref: "Prov 8:27–31", ch: 8 }, nt: { ref: "Mt 27:27–44", book: "MAT", ch: 27 } },
  // Day 47
  { ot: { ref: "Num 7:1–8:4", book: "NUM", ch: 7 }, ps: { ref: "Ps 43:1–9", ch: 43 }, pr: { ref: "Prov 8:32–35", ch: 8 }, nt: { ref: "Mt 27:45–66", book: "MAT", ch: 27 } },
  // Day 48
  { ot: { ref: "Num 8:5–10:36", book: "NUM", ch: 8 }, ps: { ref: "Ps 43:10–27", ch: 43 }, pr: { ref: "Prov 9:1–6", ch: 9 }, nt: { ref: "Mt 28", book: "MAT", ch: 28 } },
  // Day 49
  { ot: { ref: "Num 11:1–14:10", book: "NUM", ch: 11 }, ps: { ref: "Ps 44", ch: 44 }, pr: { ref: "Prov 9:7–11", ch: 9 }, nt: { ref: "Mk 1:1–20", book: "MRK", ch: 1 } },
  // Day 50
  { ot: { ref: "Num 14:11–15:41", book: "NUM", ch: 14 }, ps: { ref: "Ps 45", ch: 45 }, pr: { ref: "Prov 9:12–15", ch: 9 }, nt: { ref: "Mk 1:21–45", book: "MRK", ch: 1 } },
  // Day 51
  { ot: { ref: "Num 16:1–18:19", book: "NUM", ch: 16 }, ps: { ref: "Ps 46", ch: 46 }, pr: { ref: "Prov 9:16–20", ch: 9 }, nt: { ref: "Mk 2", book: "MRK", ch: 2 } },
  // Day 52
  { ot: { ref: "Num 18:20–21:9", book: "NUM", ch: 18 }, ps: { ref: "Ps 47", ch: 47 }, pr: { ref: "Prov 9:21–25", ch: 9 }, nt: { ref: "Mk 3:1–19", book: "MRK", ch: 3 } },
  // Day 53
  { ot: { ref: "Num 21:10–22:41", book: "NUM", ch: 21 }, ps: { ref: "Ps 48:1–10", ch: 48 }, pr: { ref: "Prov 10:1–6", ch: 10 }, nt: { ref: "Mk 3:20–35", book: "MRK", ch: 3 } },
  // Day 54
  { ot: { ref: "Num 23–24", book: "NUM", ch: 23 }, ps: { ref: "Ps 48:11–21", ch: 48 }, pr: { ref: "Prov 10:7–11", ch: 10 }, nt: { ref: "Mk 4:1–20", book: "MRK", ch: 4 } },
  // Day 55
  { ot: { ref: "Num 25:1–27:11", book: "NUM", ch: 25 }, ps: { ref: "Ps 49:1–15", ch: 49 }, pr: { ref: "Prov 10:12–16", ch: 10 }, nt: { ref: "Mk 4:21–41", book: "MRK", ch: 4 } },
  // Day 56
  { ot: { ref: "Num 27:12–29:39", book: "NUM", ch: 27 }, ps: { ref: "Ps 49:16–23", ch: 49 }, pr: { ref: "Prov 10:17–22", ch: 10 }, nt: { ref: "Mk 5:1–20", book: "MRK", ch: 5 } },
  // Day 57
  { ot: { ref: "Num 30–31", book: "NUM", ch: 30 }, ps: { ref: "Ps 50:1–10", ch: 50 }, pr: { ref: "Prov 10:23–27", ch: 10 }, nt: { ref: "Mk 5:21–43", book: "MRK", ch: 5 } },
  // Day 58
  { ot: { ref: "Num 32–33", book: "NUM", ch: 32 }, ps: { ref: "Ps 50:11–21", ch: 50 }, pr: { ref: "Prov 10:28–33", ch: 10 }, nt: { ref: "Mk 6:1–29", book: "MRK", ch: 6 } },
  // Day 59
  { ot: { ref: "Num 34–36", book: "NUM", ch: 34 }, ps: { ref: "Ps 51", ch: 51 }, pr: { ref: "Prov 11:1–5", ch: 11 }, nt: { ref: "Mk 6:30–56", book: "MRK", ch: 6 } },
  // Day 60
  { ot: { ref: "Deu 1–2", book: "DEU", ch: 1 }, ps: { ref: "Ps 52–53", ch: 52 }, pr: { ref: "Prov 11:6–10", ch: 11 }, nt: { ref: "Mk 7:1–23", book: "MRK", ch: 7 } },
  // Day 61
  { ot: { ref: "Deu 3–4", book: "DEU", ch: 3 }, ps: { ref: "Ps 54:1–12", ch: 54 }, pr: { ref: "Prov 11:11–15", ch: 11 }, nt: { ref: "Mk 7:24–37", book: "MRK", ch: 7 } },
  // Day 62
  { ot: { ref: "Deu 5–7", book: "DEU", ch: 5 }, ps: { ref: "Ps 54:13–24", ch: 54 }, pr: { ref: "Prov 11:16–20", ch: 11 }, nt: { ref: "Mk 8:1–21", book: "MRK", ch: 8 } },
  // Day 63
  { ot: { ref: "Deu 8–10", book: "DEU", ch: 8 }, ps: { ref: "Ps 55", ch: 55 }, pr: { ref: "Prov 11:21–25", ch: 11 }, nt: { ref: "Mk 8:22–9:1", book: "MRK", ch: 8 } },
  // Day 64
  { ot: { ref: "Deu 11–13", book: "DEU", ch: 11 }, ps: { ref: "Ps 56", ch: 56 }, pr: { ref: "Prov 11:26–30", ch: 11 }, nt: { ref: "Mk 9:2–29", book: "MRK", ch: 9 } },
  // Day 65
  { ot: { ref: "Deu 14–16", book: "DEU", ch: 14 }, ps: { ref: "Ps 57", ch: 57 }, pr: { ref: "Prov 12:1–5", ch: 12 }, nt: { ref: "Mk 9:30–50", book: "MRK", ch: 9 } },
  // Day 66
  { ot: { ref: "Deu 17–19", book: "DEU", ch: 17 }, ps: { ref: "Ps 58", ch: 58 }, pr: { ref: "Prov 12:6–10", ch: 12 }, nt: { ref: "Mk 10:1–31", book: "MRK", ch: 10 } },
  // Day 67
  { ot: { ref: "Deu 20–22", book: "DEU", ch: 20 }, ps: { ref: "Ps 59", ch: 59 }, pr: { ref: "Prov 12:11–15", ch: 12 }, nt: { ref: "Mk 10:32–52", book: "MRK", ch: 10 } },
  // Day 68
  { ot: { ref: "Deu 23–25", book: "DEU", ch: 23 }, ps: { ref: "Ps 60", ch: 60 }, pr: { ref: "Prov 12:16–20", ch: 12 }, nt: { ref: "Mk 11:1–19", book: "MRK", ch: 11 } },
  // Day 69
  { ot: { ref: "Deu 26:1–28:14", book: "DEU", ch: 26 }, ps: { ref: "Ps 61", ch: 61 }, pr: { ref: "Prov 12:21–25", ch: 12 }, nt: { ref: "Mk 11:20–33", book: "MRK", ch: 11 } },
  // Day 70
  { ot: { ref: "Deu 28:15–29:28", book: "DEU", ch: 28 }, ps: { ref: "Ps 62", ch: 62 }, pr: { ref: "Prov 12:26–31", ch: 12 }, nt: { ref: "Mk 12:1–27", book: "MRK", ch: 12 } },
  // Day 71
  { ot: { ref: "Deu 30–31", book: "DEU", ch: 30 }, ps: { ref: "Ps 63", ch: 63 }, pr: { ref: "Prov 13:1–5", ch: 13 }, nt: { ref: "Mk 12:28–44", book: "MRK", ch: 12 } },
  // Day 72
  { ot: { ref: "Deu 32", book: "DEU", ch: 32 }, ps: { ref: "Ps 64", ch: 64 }, pr: { ref: "Prov 13:6–10", ch: 13 }, nt: { ref: "Mk 13:1–23", book: "MRK", ch: 13 } },
  // Day 73
  { ot: { ref: "Deu 33–34", book: "DEU", ch: 33 }, ps: { ref: "Ps 65", ch: 65 }, pr: { ref: "Prov 13:11–15", ch: 13 }, nt: { ref: "Mk 13:24–37", book: "MRK", ch: 13 } },
  // Day 74
  { ot: { ref: "Jos 1–3", book: "JOS", ch: 1 }, ps: { ref: "Ps 66", ch: 66 }, pr: { ref: "Prov 13:16–21", ch: 13 }, nt: { ref: "Mk 14:1–31", book: "MRK", ch: 14 } },
  // Day 75
  { ot: { ref: "Jos 4–6", book: "JOS", ch: 4 }, ps: { ref: "Ps 67:1–20", ch: 67 }, pr: { ref: "Prov 13:22–27", ch: 13 }, nt: { ref: "Mk 14:32–52", book: "MRK", ch: 14 } },
  // Day 76
  { ot: { ref: "Jos 7–9", book: "JOS", ch: 7 }, ps: { ref: "Ps 67:21–36", ch: 67 }, pr: { ref: "Prov 14:1–5", ch: 14 }, nt: { ref: "Mk 14:53–72", book: "MRK", ch: 14 } },
  // Day 77
  { ot: { ref: "Jos 10–11", book: "JOS", ch: 10 }, ps: { ref: "Ps 68:1–20", ch: 68 }, pr: { ref: "Prov 14:6–10", ch: 14 }, nt: { ref: "Mk 15:1–20", book: "MRK", ch: 15 } },
  // Day 78
  { ot: { ref: "Jos 12–14", book: "JOS", ch: 12 }, ps: { ref: "Ps 68:21–37", ch: 68 }, pr: { ref: "Prov 14:11–15", ch: 14 }, nt: { ref: "Mk 15:21–47", book: "MRK", ch: 15 } },
  // Day 79
  { ot: { ref: "Jos 15–17", book: "JOS", ch: 15 }, ps: { ref: "Ps 69", ch: 69 }, pr: { ref: "Prov 14:16–20", ch: 14 }, nt: { ref: "Mk 16", book: "MRK", ch: 16 } },
  // Day 80
  { ot: { ref: "Jos 18–20", book: "JOS", ch: 18 }, ps: { ref: "Ps 70:1–13", ch: 70 }, pr: { ref: "Prov 14:21–25", ch: 14 }, nt: { ref: "Lk 1:1–25", book: "LUK", ch: 1 } },
  // Day 81
  { ot: { ref: "Jos 21–22", book: "JOS", ch: 21 }, ps: { ref: "Ps 70:14–24", ch: 70 }, pr: { ref: "Prov 14:26–30", ch: 14 }, nt: { ref: "Lk 1:26–56", book: "LUK", ch: 1 } },
  // Day 82
  { ot: { ref: "Jos 23–24", book: "JOS", ch: 23 }, ps: { ref: "Ps 71", ch: 71 }, pr: { ref: "Prov 14:31–36", ch: 14 }, nt: { ref: "Lk 1:57–80", book: "LUK", ch: 1 } },
  // Day 83
  { ot: { ref: "Jdg 1–2", book: "JDG", ch: 1 }, ps: { ref: "Ps 72:1–14", ch: 72 }, pr: { ref: "Prov 15:1–5", ch: 15 }, nt: { ref: "Lk 2:1–24", book: "LUK", ch: 2 } },
  // Day 84
  { ot: { ref: "Jdg 3–4", book: "JDG", ch: 3 }, ps: { ref: "Ps 72:15–28", ch: 72 }, pr: { ref: "Prov 15:6–10", ch: 15 }, nt: { ref: "Lk 2:25–52", book: "LUK", ch: 2 } },
  // Day 85
  { ot: { ref: "Jdg 5:1–6:10", book: "JDG", ch: 5 }, ps: { ref: "Ps 73:1–11", ch: 73 }, pr: { ref: "Prov 15:11–15", ch: 15 }, nt: { ref: "Lk 3:1–20", book: "LUK", ch: 3 } },
  // Day 86
  { ot: { ref: "Jdg 6:11–7:25", book: "JDG", ch: 6 }, ps: { ref: "Ps 73:12–23", ch: 73 }, pr: { ref: "Prov 15:16–20", ch: 15 }, nt: { ref: "Lk 3:21–38", book: "LUK", ch: 3 } },
  // Day 87
  { ot: { ref: "Jdg 8–9", book: "JDG", ch: 8 }, ps: { ref: "Ps 74", ch: 74 }, pr: { ref: "Prov 15:21–26", ch: 15 }, nt: { ref: "Lk 4:1–30", book: "LUK", ch: 4 } },
  // Day 88
  { ot: { ref: "Jdg 10–11", book: "JDG", ch: 10 }, ps: { ref: "Ps 75", ch: 75 }, pr: { ref: "Prov 15:27–32", ch: 15 }, nt: { ref: "Lk 4:31–44", book: "LUK", ch: 4 } },
  // Day 89
  { ot: { ref: "Jdg 12–14", book: "JDG", ch: 12 }, ps: { ref: "Ps 76:1–10", ch: 76 }, pr: { ref: "Prov 15:33–38", ch: 15 }, nt: { ref: "Lk 5:1–16", book: "LUK", ch: 5 } },
  // Day 90
  { ot: { ref: "Jdg 15–17", book: "JDG", ch: 15 }, ps: { ref: "Ps 76:11–21", ch: 76 }, pr: { ref: "Prov 16:1–5", ch: 16 }, nt: { ref: "Lk 5:17–39", book: "LUK", ch: 5 } },
  // Day 91
  { ot: { ref: "Jdg 18–19", book: "JDG", ch: 18 }, ps: { ref: "Ps 77:1–17", ch: 77 }, pr: { ref: "Prov 16:6–10", ch: 16 }, nt: { ref: "Lk 6:1–26", book: "LUK", ch: 6 } },
  // Day 92
  { ot: { ref: "Jdg 20–21", book: "JDG", ch: 20 }, ps: { ref: "Ps 77:18–37", ch: 77 }, pr: { ref: "Prov 16:11–15", ch: 16 }, nt: { ref: "Lk 6:27–49", book: "LUK", ch: 6 } },
  // Day 93
  { ot: { ref: "Rut 1–4", book: "RUT", ch: 1 }, ps: { ref: "Ps 77:38–55", ch: 77 }, pr: { ref: "Prov 16:16–20", ch: 16 }, nt: { ref: "Lk 7:1–17", book: "LUK", ch: 7 } },
  // Day 94
  { ot: { ref: "1 Sam 1:1–2:17", book: "1SA", ch: 1 }, ps: { ref: "Ps 77:56–72", ch: 77 }, pr: { ref: "Prov 16:21–25", ch: 16 }, nt: { ref: "Lk 7:18–50", book: "LUK", ch: 7 } },
  // Day 95
  { ot: { ref: "1 Sam 2:18–4:22", book: "1SA", ch: 2 }, ps: { ref: "Ps 78", ch: 78 }, pr: { ref: "Prov 16:26–31", ch: 16 }, nt: { ref: "Lk 8:1–25", book: "LUK", ch: 8 } },
  // Day 96
  { ot: { ref: "1 Sam 5–7", book: "1SA", ch: 5 }, ps: { ref: "Ps 79", ch: 79 }, pr: { ref: "Prov 17:1–5", ch: 17 }, nt: { ref: "Lk 8:26–56", book: "LUK", ch: 8 } },
  // Day 97
  { ot: { ref: "1 Sam 8:1–10:16", book: "1SA", ch: 8 }, ps: { ref: "Ps 80", ch: 80 }, pr: { ref: "Prov 17:6–10", ch: 17 }, nt: { ref: "Lk 9:1–17", book: "LUK", ch: 9 } },
  // Day 98
  { ot: { ref: "1 Sam 10:17–13:22", book: "1SA", ch: 10 }, ps: { ref: "Ps 81", ch: 81 }, pr: { ref: "Prov 17:11–15", ch: 17 }, nt: { ref: "Lk 9:18–36", book: "LUK", ch: 9 } },
  // Day 99
  { ot: { ref: "1 Sam 14:1–15:9", book: "1SA", ch: 14 }, ps: { ref: "Ps 82", ch: 82 }, pr: { ref: "Prov 17:16–20", ch: 17 }, nt: { ref: "Lk 9:37–62", book: "LUK", ch: 9 } },
  // Day 100
  { ot: { ref: "1 Sam 15:10–17:30", book: "1SA", ch: 15 }, ps: { ref: "Ps 83", ch: 83 }, pr: { ref: "Prov 17:21–25", ch: 17 }, nt: { ref: "Lk 10:1–24", book: "LUK", ch: 10 } },
  // Day 101
  { ot: { ref: "1 Sam 18–21:1", book: "1SA", ch: 18 }, ps: { ref: "Ps 84", ch: 84 }, pr: { ref: "Prov 17:26–30", ch: 17 }, nt: { ref: "Lk 10:25–42", book: "LUK", ch: 10 } },
  // Day 102
  { ot: { ref: "1 Sam 21:2–23:28", book: "1SA", ch: 21 }, ps: { ref: "Ps 85", ch: 85 }, pr: { ref: "Prov 18:1–5", ch: 18 }, nt: { ref: "Lk 11:1–28", book: "LUK", ch: 11 } },
  // Day 103
  { ot: { ref: "1 Sam 24–25", book: "1SA", ch: 24 }, ps: { ref: "Ps 86", ch: 86 }, pr: { ref: "Prov 18:6–11", ch: 18 }, nt: { ref: "Lk 11:29–54", book: "LUK", ch: 11 } },
  // Day 104
  { ot: { ref: "1 Sam 26–28", book: "1SA", ch: 26 }, ps: { ref: "Ps 87", ch: 87 }, pr: { ref: "Prov 18:11–17", ch: 18 }, nt: { ref: "Lk 12:1–34", book: "LUK", ch: 12 } },
  // Day 105
  { ot: { ref: "1 Sam 29–31", book: "1SA", ch: 29 }, ps: { ref: "Ps 88:1–19", ch: 88 }, pr: { ref: "Prov 18:18–23", ch: 18 }, nt: { ref: "Lk 12:35–59", book: "LUK", ch: 12 } },
  // Day 106
  { ot: { ref: "2 Sam 1–2", book: "2SA", ch: 1 }, ps: { ref: "Ps 88:20–38", ch: 88 }, pr: { ref: "Prov 19:1–6", ch: 19 }, nt: { ref: "Lk 13:1–21", book: "LUK", ch: 13 } },
  // Day 107
  { ot: { ref: "2 Sam 3–4", book: "2SA", ch: 3 }, ps: { ref: "Ps 88:39–53", ch: 88 }, pr: { ref: "Prov 19:7–12", ch: 19 }, nt: { ref: "Lk 13:22–35", book: "LUK", ch: 13 } },
  // Day 108
  { ot: { ref: "2 Sam 5–7", book: "2SA", ch: 5 }, ps: { ref: "Ps 89", ch: 89 }, pr: { ref: "Prov 19:13–18", ch: 19 }, nt: { ref: "Lk 14:1–24", book: "LUK", ch: 14 } },
  // Day 109
  { ot: { ref: "2 Sam 8–11", book: "2SA", ch: 8 }, ps: { ref: "Ps 90", ch: 90 }, pr: { ref: "Prov 19:19–24", ch: 19 }, nt: { ref: "Lk 14:25–35", book: "LUK", ch: 14 } },
  // Day 110
  { ot: { ref: "2 Sam 12–13", book: "2SA", ch: 12 }, ps: { ref: "Ps 91", ch: 91 }, pr: { ref: "Prov 19:25–29", ch: 19 }, nt: { ref: "Lk 15:1–10", book: "LUK", ch: 15 } },
  // Day 111
  { ot: { ref: "2 Sam 14–15", book: "2SA", ch: 14 }, ps: { ref: "Ps 92", ch: 92 }, pr: { ref: "Prov 20:1–5", ch: 20 }, nt: { ref: "Lk 15:11–32", book: "LUK", ch: 15 } },
  // Day 112
  { ot: { ref: "2 Sam 16–18:18", book: "2SA", ch: 16 }, ps: { ref: "Ps 93:1–15", ch: 93 }, pr: { ref: "Prov 20:6–10", ch: 20 }, nt: { ref: "Lk 16", book: "LUK", ch: 16 } },
  // Day 113
  { ot: { ref: "2 Sam 18:19–19:44", book: "2SA", ch: 18 }, ps: { ref: "Ps 93:16–23", ch: 93 }, pr: { ref: "Prov 20:11–15", ch: 20 }, nt: { ref: "Lk 17:1–19", book: "LUK", ch: 17 } },
  // Day 114
  { ot: { ref: "2 Sam 20–21", book: "2SA", ch: 20 }, ps: { ref: "Ps 94", ch: 94 }, pr: { ref: "Prov 20:16–20", ch: 20 }, nt: { ref: "Lk 17:20–37", book: "LUK", ch: 17 } },
  // Day 115
  { ot: { ref: "2 Sam 22:1–23:7", book: "2SA", ch: 22 }, ps: { ref: "Ps 95", ch: 95 }, pr: { ref: "Prov 20:21–25", ch: 20 }, nt: { ref: "Lk 18:1–17", book: "LUK", ch: 18 } },
  // Day 116
  { ot: { ref: "2 Sam 23:8–24:25", book: "2SA", ch: 23 }, ps: { ref: "Ps 96", ch: 96 }, pr: { ref: "Prov 21:1–5", ch: 21 }, nt: { ref: "Lk 18:18–43", book: "LUK", ch: 18 } },
  // Day 117
  { ot: { ref: "1 Ki 1:1–2:25", book: "1KI", ch: 1 }, ps: { ref: "Ps 97–98", ch: 97 }, pr: { ref: "Prov 21:6–10", ch: 21 }, nt: { ref: "Lk 19:1–27", book: "LUK", ch: 19 } },
  // Day 118
  { ot: { ref: "1 Ki 2:26–3:27", book: "1KI", ch: 2 }, ps: { ref: "Ps 99–100", ch: 99 }, pr: { ref: "Prov 21:11–15", ch: 21 }, nt: { ref: "Lk 19:28–48", book: "LUK", ch: 19 } },
  // Day 119
  { ot: { ref: "1 Ki 4–6", book: "1KI", ch: 4 }, ps: { ref: "Ps 101:1–15", ch: 101 }, pr: { ref: "Prov 21:16–20", ch: 21 }, nt: { ref: "Lk 20:1–26", book: "LUK", ch: 20 } },
  // Day 120
  { ot: { ref: "1 Ki 7:1–8:52", book: "1KI", ch: 7 }, ps: { ref: "Ps 101:16–29", ch: 101 }, pr: { ref: "Prov 21:21–25", ch: 21 }, nt: { ref: "Lk 20:27–47", book: "LUK", ch: 20 } },
  // Day 121
  { ot: { ref: "1 Ki 8:53–10:33", book: "1KI", ch: 8 }, ps: { ref: "Ps 102:1–12", ch: 102 }, pr: { ref: "Prov 21:26–30", ch: 21 }, nt: { ref: "Lk 21:1–19", book: "LUK", ch: 21 } },
  // Day 122
  { ot: { ref: "1 Ki 11:1–12:25", book: "1KI", ch: 11 }, ps: { ref: "Ps 102:13–22", ch: 102 }, pr: { ref: "Prov 22:1–5", ch: 22 }, nt: { ref: "Lk 21:20–38", book: "LUK", ch: 21 } },
  // Day 123
  { ot: { ref: "1 Ki 12:26–13:34", book: "1KI", ch: 12 }, ps: { ref: "Ps 103:1–18", ch: 103 }, pr: { ref: "Prov 22:6–10", ch: 22 }, nt: { ref: "Lk 22:1–23", book: "LUK", ch: 22 } },
  // Day 124
  { ot: { ref: "1 Ki 14–16", book: "1KI", ch: 14 }, ps: { ref: "Ps 103:19–35", ch: 103 }, pr: { ref: "Prov 22:11–15", ch: 22 }, nt: { ref: "Lk 22:24–46", book: "LUK", ch: 22 } },
  // Day 125
  { ot: { ref: "1 Ki 17:1–19:9", book: "1KI", ch: 17 }, ps: { ref: "Ps 104:1–15", ch: 104 }, pr: { ref: "Prov 22:16–20", ch: 22 }, nt: { ref: "Lk 22:47–71", book: "LUK", ch: 22 } },
  // Day 126
  { ot: { ref: "1 Ki 19:10–21:22", book: "1KI", ch: 19 }, ps: { ref: "Ps 104:16–27", ch: 104 }, pr: { ref: "Prov 22:21–26", ch: 22 }, nt: { ref: "Lk 23:1–25", book: "LUK", ch: 23 } },
  // Day 127
  { ot: { ref: "1 Ki 21:23–22:50", book: "1KI", ch: 21 }, ps: { ref: "Ps 104:28–45", ch: 104 }, pr: { ref: "Prov 22:27–31", ch: 22 }, nt: { ref: "Lk 23:26–56", book: "LUK", ch: 23 } },
  // Day 128
  { ot: { ref: "2 Ki 1–3", book: "2KI", ch: 1 }, ps: { ref: "Ps 105:1–15", ch: 105 }, pr: { ref: "Prov 23:1–5", ch: 23 }, nt: { ref: "Lk 24:1–35", book: "LUK", ch: 24 } },
  // Day 129
  { ot: { ref: "2 Ki 4–5", book: "2KI", ch: 4 }, ps: { ref: "Ps 105:16–31", ch: 105 }, pr: { ref: "Prov 23:6–12", ch: 23 }, nt: { ref: "Lk 24:36–53", book: "LUK", ch: 24 } },
  // Day 130
  { ot: { ref: "2 Ki 6:1–8:6", book: "2KI", ch: 6 }, ps: { ref: "Ps 105:32–48", ch: 105 }, pr: { ref: "Prov 23:13–18", ch: 23 }, nt: { ref: "Jn 1:1–28", book: "JHN", ch: 1 } },
  // Day 131
  { ot: { ref: "2 Ki 8:7–9:37", book: "2KI", ch: 8 }, ps: { ref: "Ps 106:1–14", ch: 106 }, pr: { ref: "Prov 23:19–23", ch: 23 }, nt: { ref: "Jn 1:29–51", book: "JHN", ch: 1 } },
  // Day 132
  { ot: { ref: "2 Ki 10–11", book: "2KI", ch: 10 }, ps: { ref: "Ps 106:15–30", ch: 106 }, pr: { ref: "Prov 23:24–27", ch: 23 }, nt: { ref: "Jn 2", book: "JHN", ch: 2 } },
  // Day 133
  { ot: { ref: "2 Ki 12–14", book: "2KI", ch: 12 }, ps: { ref: "Ps 106:31–43", ch: 106 }, pr: { ref: "Prov 23:28–32", ch: 23 }, nt: { ref: "Jn 3:1–21", book: "JHN", ch: 3 } },
  // Day 134
  { ot: { ref: "2 Ki 15:1–17:23", book: "2KI", ch: 15 }, ps: { ref: "Ps 107", ch: 107 }, pr: { ref: "Prov 23:33–36", ch: 23 }, nt: { ref: "Jn 3:22–36", book: "JHN", ch: 3 } },
  // Day 135
  { ot: { ref: "2 Ki 17:24–18:37", book: "2KI", ch: 17 }, ps: { ref: "Ps 108:1–20", ch: 108 }, pr: { ref: "Prov 24:1–6", ch: 24 }, nt: { ref: "Jn 4:1–26", book: "JHN", ch: 4 } },
  // Day 136
  { ot: { ref: "2 Ki 19–20", book: "2KI", ch: 19 }, ps: { ref: "Ps 108:21–31", ch: 108 }, pr: { ref: "Prov 24:7–12", ch: 24 }, nt: { ref: "Jn 4:27–54", book: "JHN", ch: 4 } },
  // Day 137
  { ot: { ref: "2 Ki 21:1–23:20", book: "2KI", ch: 21 }, ps: { ref: "Ps 109–110", ch: 109 }, pr: { ref: "Prov 24:13–18", ch: 24 }, nt: { ref: "Jn 5:1–15", book: "JHN", ch: 5 } },
  // Day 138
  { ot: { ref: "2 Ki 23:21–25:30", book: "2KI", ch: 23 }, ps: { ref: "Ps 111–112", ch: 111 }, pr: { ref: "Prov 24:19–23", ch: 24 }, nt: { ref: "Jn 5:16–47", book: "JHN", ch: 5 } },
  // Day 139
  { ot: { ref: "1 Chr 1–3", book: "1CH", ch: 1 }, ps: { ref: "Ps 113:1–11", ch: 113 }, pr: { ref: "Prov 24:24–27", ch: 24 }, nt: { ref: "Jn 6:1–21", book: "JHN", ch: 6 } },
  // Day 140
  { ot: { ref: "1 Chr 4:1–6:33", book: "1CH", ch: 4 }, ps: { ref: "Ps 113:12–26", ch: 113 }, pr: { ref: "Prov 24:29–34", ch: 24 }, nt: { ref: "Jn 6:22–50", book: "JHN", ch: 6 } },
  // Day 141
  { ot: { ref: "1 Chr 6:34–8:40", book: "1CH", ch: 6 }, ps: { ref: "Ps 114", ch: 114 }, pr: { ref: "Prov 24:35–39", ch: 24 }, nt: { ref: "Jn 6:51–71", book: "JHN", ch: 6 } },
  // Day 142
  { ot: { ref: "1 Chr 9:1–11:9", book: "1CH", ch: 9 }, ps: { ref: "Ps 115–116", ch: 115 }, pr: { ref: "Prov 25:1–5", ch: 25 }, nt: { ref: "Jn 7:1–36", book: "JHN", ch: 7 } },
  // Day 143
  { ot: { ref: "1 Chr 11:10–13:14", book: "1CH", ch: 11 }, ps: { ref: "Ps 117:1–16", ch: 117 }, pr: { ref: "Prov 25:6–11", ch: 25 }, nt: { ref: "Jn 7:37–8:2", book: "JHN", ch: 7 } },
  // Day 144
  { ot: { ref: "1 Chr 14:1–16:35", book: "1CH", ch: 14 }, ps: { ref: "Ps 117:17–29", ch: 117 }, pr: { ref: "Prov 25:12–16", ch: 25 }, nt: { ref: "Jn 8:3–30", book: "JHN", ch: 8 } },
  // Day 145
  { ot: { ref: "1 Chr 16:36–19:19", book: "1CH", ch: 16 }, ps: { ref: "Ps 118:1–16", ch: 118 }, pr: { ref: "Prov 25:17–21", ch: 25 }, nt: { ref: "Jn 8:31–59", book: "JHN", ch: 8 } },
  // Day 146
  { ot: { ref: "1 Chr 20–22", book: "1CH", ch: 20 }, ps: { ref: "Ps 118:17–32", ch: 118 }, pr: { ref: "Prov 25:22–26", ch: 25 }, nt: { ref: "Jn 9:1–12", book: "JHN", ch: 9 } },
  // Day 147
  { ot: { ref: "1 Chr 23–25", book: "1CH", ch: 23 }, ps: { ref: "Ps 118:33–48", ch: 118 }, pr: { ref: "Prov 25:27–31", ch: 25 }, nt: { ref: "Jn 9:13–41", book: "JHN", ch: 9 } },
  // Day 148
  { ot: { ref: "1 Chr 26–27", book: "1CH", ch: 26 }, ps: { ref: "Ps 118:49–64", ch: 118 }, pr: { ref: "Prov 26:1–5", ch: 26 }, nt: { ref: "Jn 10:1–21", book: "JHN", ch: 10 } },
  // Day 149
  { ot: { ref: "1 Chr 28–29", book: "1CH", ch: 28 }, ps: { ref: "Ps 118:65–80", ch: 118 }, pr: { ref: "Prov 26:6–9", ch: 26 }, nt: { ref: "Jn 10:22–42", book: "JHN", ch: 10 } },
  // Day 150
  { ot: { ref: "2 Chr 1–4", book: "2CH", ch: 1 }, ps: { ref: "Ps 118:81–96", ch: 118 }, pr: { ref: "Prov 26:10–13", ch: 26 }, nt: { ref: "Jn 11:1–37", book: "JHN", ch: 11 } },
  // Day 151
  { ot: { ref: "2 Chr 5–6", book: "2CH", ch: 5 }, ps: { ref: "Ps 118:97–112", ch: 118 }, pr: { ref: "Prov 26:14–17", ch: 26 }, nt: { ref: "Jn 11:38–57", book: "JHN", ch: 11 } },
  // Day 152
  { ot: { ref: "2 Chr 7–9", book: "2CH", ch: 7 }, ps: { ref: "Ps 118:113–128", ch: 118 }, pr: { ref: "Prov 26:18–23", ch: 26 }, nt: { ref: "Jn 12:1–28", book: "JHN", ch: 12 } },
  // Day 153
  { ot: { ref: "2 Chr 10–13", book: "2CH", ch: 10 }, ps: { ref: "Ps 118:129–144", ch: 118 }, pr: { ref: "Prov 26:24–29", ch: 26 }, nt: { ref: "Jn 12:29–50", book: "JHN", ch: 12 } },
  // Day 154
  { ot: { ref: "2 Chr 14–17", book: "2CH", ch: 14 }, ps: { ref: "Ps 118:145–160", ch: 118 }, pr: { ref: "Prov 27:1–6", ch: 27 }, nt: { ref: "Jn 13:1–17", book: "JHN", ch: 13 } },
  // Day 155
  { ot: { ref: "2 Chr 18–20", book: "2CH", ch: 18 }, ps: { ref: "Ps 118:161–176", ch: 118 }, pr: { ref: "Prov 27:7–12", ch: 27 }, nt: { ref: "Jn 13:18–38", book: "JHN", ch: 13 } },
  // Day 156
  { ot: { ref: "2 Chr 21:1–24:14", book: "2CH", ch: 21 }, ps: { ref: "Ps 119–120", ch: 119 }, pr: { ref: "Prov 27:13–18", ch: 27 }, nt: { ref: "Jn 14", book: "JHN", ch: 14 } },
  // Day 157
  { ot: { ref: "2 Chr 24:15–26:23", book: "2CH", ch: 24 }, ps: { ref: "Ps 121–122", ch: 121 }, pr: { ref: "Prov 27:19–24", ch: 27 }, nt: { ref: "Jn 15", book: "JHN", ch: 15 } },
  // Day 158
  { ot: { ref: "2 Chr 27–29", book: "2CH", ch: 27 }, ps: { ref: "Ps 123–124", ch: 123 }, pr: { ref: "Prov 27:25–29", ch: 27 }, nt: { ref: "Jn 16", book: "JHN", ch: 16 } },
  // Day 159
  { ot: { ref: "2 Chr 30–32", book: "2CH", ch: 30 }, ps: { ref: "Ps 125–126", ch: 125 }, pr: { ref: "Prov 28:1–5", ch: 28 }, nt: { ref: "Jn 17", book: "JHN", ch: 17 } },
  // Day 160
  { ot: { ref: "2 Chr 33–34", book: "2CH", ch: 33 }, ps: { ref: "Ps 127–128", ch: 127 }, pr: { ref: "Prov 28:6–11", ch: 28 }, nt: { ref: "Jn 18:1–27", book: "JHN", ch: 18 } },
  // Day 161
  { ot: { ref: "2 Chr 35–36", book: "2CH", ch: 35 }, ps: { ref: "Ps 129–130", ch: 129 }, pr: { ref: "Prov 28:12–15", ch: 28 }, nt: { ref: "Jn 18:28–19:4", book: "JHN", ch: 18 } },
  // Day 162
  { ot: { ref: "1 Esd 1:1–2:11", book: "1ES", ch: 1 }, ps: { ref: "Ps 131", ch: 131 }, pr: { ref: "Prov 28:16–20", ch: 28 }, nt: { ref: "Jn 19:5–24", book: "JHN", ch: 19 } },
  // Day 163
  { ot: { ref: "1 Esd 2:12–4:42", book: "1ES", ch: 2 }, ps: { ref: "Ps 132–133", ch: 132 }, pr: { ref: "Prov 28:21–25", ch: 28 }, nt: { ref: "Jn 19:25–42", book: "JHN", ch: 19 } },
  // Day 164
  { ot: { ref: "1 Esd 4:43–5:45", book: "1ES", ch: 4 }, ps: { ref: "Ps 134:1–12", ch: 134 }, pr: { ref: "Prov 28:26–30", ch: 28 }, nt: { ref: "Jn 20", book: "JHN", ch: 20 } },
  // Day 165
  { ot: { ref: "1 Esd 5:46–7:15", book: "1ES", ch: 5 }, ps: { ref: "Ps 134:13–21", ch: 134 }, pr: { ref: "Prov 29:1–6", ch: 29 }, nt: { ref: "Jn 21", book: "JHN", ch: 21 } },
  // Day 166
  { ot: { ref: "1 Esd 8:1–70", book: "1ES", ch: 8 }, ps: { ref: "Ps 135:1–15", ch: 135 }, pr: { ref: "Prov 29:7–12", ch: 29 }, nt: { ref: "Acts 1", book: "ACT", ch: 1 } },
  // Day 167
  { ot: { ref: "1 Esd 8:71–9:55", book: "1ES", ch: 8 }, ps: { ref: "Ps 135:16–26", ch: 135 }, pr: { ref: "Prov 29:13–18", ch: 29 }, nt: { ref: "Acts 2:1–21", book: "ACT", ch: 2 } },
  // Day 168
  { ot: { ref: "Ezra 1–3", book: "EZR", ch: 1 }, ps: { ref: "Ps 136–137", ch: 136 }, pr: { ref: "Prov 29:19–23", ch: 29 }, nt: { ref: "Acts 2:22–47", book: "ACT", ch: 2 } },
  // Day 169
  { ot: { ref: "Ezra 4:1–6:14", book: "EZR", ch: 4 }, ps: { ref: "Ps 138:1–12", ch: 138 }, pr: { ref: "Prov 29:24–28", ch: 29 }, nt: { ref: "Acts 3", book: "ACT", ch: 3 } },
  // Day 170
  { ot: { ref: "Ezra 6:15–8:30", book: "EZR", ch: 6 }, ps: { ref: "Ps 138:13–24", ch: 138 }, pr: { ref: "Prov 30:1–5", ch: 30 }, nt: { ref: "Acts 4:1–22", book: "ACT", ch: 4 } },
  // Day 171
  { ot: { ref: "Ezra 8:31–10:44", book: "EZR", ch: 8 }, ps: { ref: "Ps 139", ch: 139 }, pr: { ref: "Prov 30:6–10", ch: 30 }, nt: { ref: "Acts 4:23–37", book: "ACT", ch: 4 } },
  // Day 172
  { ot: { ref: "Neh 1–3", book: "NEH", ch: 1 }, ps: { ref: "Ps 140", ch: 140 }, pr: { ref: "Prov 30:11–15", ch: 30 }, nt: { ref: "Acts 5:1–16", book: "ACT", ch: 5 } },
  // Day 173
  { ot: { ref: "Neh 4:1–7:3", book: "NEH", ch: 4 }, ps: { ref: "Ps 141", ch: 141 }, pr: { ref: "Prov 30:16–21", ch: 30 }, nt: { ref: "Acts 5:17–42", book: "ACT", ch: 5 } },
  // Day 174
  { ot: { ref: "Neh 7:4–8:18", book: "NEH", ch: 7 }, ps: { ref: "Ps 142", ch: 142 }, pr: { ref: "Prov 30:22–25", ch: 30 }, nt: { ref: "Acts 6", book: "ACT", ch: 6 } },
  // Day 175
  { ot: { ref: "Neh 9–11", book: "NEH", ch: 9 }, ps: { ref: "Ps 143", ch: 143 }, pr: { ref: "Prov 30:26–30", ch: 30 }, nt: { ref: "Acts 7:1–21", book: "ACT", ch: 7 } },
  // Day 176
  { ot: { ref: "Neh 12–13", book: "NEH", ch: 12 }, ps: { ref: "Ps 144:1–9", ch: 144 }, pr: { ref: "Prov 30:31–35", ch: 30 }, nt: { ref: "Acts 7:22–43", book: "ACT", ch: 7 } },
  // Day 177
  { ot: { ref: "Tob 1–3", book: "TOB", ch: 1 }, ps: { ref: "Ps 144:10–21", ch: 144 }, pr: { ref: "Prov 31:1–5", ch: 31 }, nt: { ref: "Acts 7:44–60", book: "ACT", ch: 7 } },
  // Day 178
  { ot: { ref: "Tob 4–6", book: "TOB", ch: 4 }, ps: { ref: "Ps 145", ch: 145 }, pr: { ref: "Prov 31:6–9", ch: 31 }, nt: { ref: "Acts 8:1–25", book: "ACT", ch: 8 } },
  // Day 179
  { ot: { ref: "Tob 7–11", book: "TOB", ch: 7 }, ps: { ref: "Ps 146–147", ch: 146 }, pr: { ref: "Prov 31:10–15", ch: 31 }, nt: { ref: "Acts 8:26–40", book: "ACT", ch: 8 } },
  // Day 180
  { ot: { ref: "Tob 12–14", book: "TOB", ch: 12 }, ps: { ref: "Ps 148", ch: 148 }, pr: { ref: "Prov 31:16–20", ch: 31 }, nt: { ref: "Acts 9:1–18", book: "ACT", ch: 9 } },
  // Day 181
  { ot: { ref: "Jdt 1–4", book: "JDT", ch: 1 }, ps: { ref: "Ps 149", ch: 149 }, pr: { ref: "Prov 31:21–25", ch: 31 }, nt: { ref: "Acts 9:19–43", book: "ACT", ch: 9 } },
  // Day 182
  { ot: { ref: "Jdt 5–7", book: "JDT", ch: 5 }, ps: { ref: "Ps 150–151", ch: 150 }, pr: { ref: "Prov 31:26–30", ch: 31 }, nt: { ref: "Acts 10:1–23", book: "ACT", ch: 10 } },
  // Day 183
  { ot: { ref: "Jdt 8–10", book: "JDT", ch: 8 }, ps: { ref: "Ps 1–2", ch: 1 }, pr: { ref: "Prov 1:1–5", ch: 1 }, nt: { ref: "Acts 10:24–48", book: "ACT", ch: 10 } },
  // Day 184
  { ot: { ref: "Jdt 11–13", book: "JDT", ch: 11 }, ps: { ref: "Ps 3–4", ch: 3 }, pr: { ref: "Prov 1:6–10", ch: 1 }, nt: { ref: "Acts 11", book: "ACT", ch: 11 } },
  // Day 185
  { ot: { ref: "Jdt 14–16", book: "JDT", ch: 14 }, ps: { ref: "Ps 5", ch: 5 }, pr: { ref: "Prov 1:11–15", ch: 1 }, nt: { ref: "Acts 12", book: "ACT", ch: 12 } },
  // Day 186
  { ot: { ref: "Est 1–2", book: "EST", ch: 1 }, ps: { ref: "Ps 6", ch: 6 }, pr: { ref: "Prov 1:16–19", ch: 1 }, nt: { ref: "Acts 13:1–25", book: "ACT", ch: 13 } },
  // Day 187
  { ot: { ref: "Est 3–4", book: "EST", ch: 3 }, ps: { ref: "Ps 7", ch: 7 }, pr: { ref: "Prov 1:20–24", ch: 1 }, nt: { ref: "Acts 13:26–52", book: "ACT", ch: 13 } },
  // Day 188
  { ot: { ref: "Est 5:1–8:12", book: "EST", ch: 5 }, ps: { ref: "Ps 8", ch: 8 }, pr: { ref: "Prov 1:25–29", ch: 1 }, nt: { ref: "Acts 14", book: "ACT", ch: 14 } },
  // Day 189
  { ot: { ref: "Est 8:12a–10:3k", book: "EST", ch: 8 }, ps: { ref: "Ps 9:1–17", ch: 9 }, pr: { ref: "Prov 1:30–35", ch: 1 }, nt: { ref: "Acts 15:1–21", book: "ACT", ch: 15 } },
  // Day 190
  { ot: { ref: "1 Mac 1:1–2:14", book: "1MA", ch: 1 }, ps: { ref: "Ps 9:18–39", ch: 9 }, pr: { ref: "Prov 2:1–5", ch: 2 }, nt: { ref: "Acts 15:22–41", book: "ACT", ch: 15 } },
  // Day 191
  { ot: { ref: "1 Mac 2:15–3:41", book: "1MA", ch: 2 }, ps: { ref: "Ps 10–11", ch: 10 }, pr: { ref: "Prov 2:6–9", ch: 2 }, nt: { ref: "Acts 16:1–18", book: "ACT", ch: 16 } },
  // Day 192
  { ot: { ref: "1 Mac 3:42–4:61", book: "1MA", ch: 3 }, ps: { ref: "Ps 12–13", ch: 12 }, pr: { ref: "Prov 2:10–16", ch: 2 }, nt: { ref: "Acts 16:19–40", book: "ACT", ch: 16 } },
  // Day 193
  { ot: { ref: "1 Mac 5:1–6:17", book: "1MA", ch: 5 }, ps: { ref: "Ps 14–15", ch: 14 }, pr: { ref: "Prov 2:17–23", ch: 2 }, nt: { ref: "Acts 17:1–15", book: "ACT", ch: 17 } },
  // Day 194
  { ot: { ref: "1 Mac 6:18–7:50", book: "1MA", ch: 6 }, ps: { ref: "Ps 16", ch: 16 }, pr: { ref: "Prov 3:1–5", ch: 3 }, nt: { ref: "Acts 17:16–34", book: "ACT", ch: 17 } },
  // Day 195
  { ot: { ref: "1 Mac 8:1–9:53", book: "1MA", ch: 8 }, ps: { ref: "Ps 17:1–17", ch: 17 }, pr: { ref: "Prov 3:6–10", ch: 3 }, nt: { ref: "Acts 18", book: "ACT", ch: 18 } },
  // Day 196
  { ot: { ref: "1 Mac 9:54–10:58", book: "1MA", ch: 9 }, ps: { ref: "Ps 17:18–32", ch: 17 }, pr: { ref: "Prov 3:11–16", ch: 3 }, nt: { ref: "Acts 19:1–22", book: "ACT", ch: 19 } },
  // Day 197
  { ot: { ref: "1 Mac 10:59–11:53", book: "1MA", ch: 10 }, ps: { ref: "Ps 17:33–51", ch: 17 }, pr: { ref: "Prov 3:17–22", ch: 3 }, nt: { ref: "Acts 19:23–41", book: "ACT", ch: 19 } },
  // Day 198
  { ot: { ref: "1 Mac 11:54–13:11", book: "1MA", ch: 11 }, ps: { ref: "Ps 18", ch: 18 }, pr: { ref: "Prov 3:23–27", ch: 3 }, nt: { ref: "Acts 20:1–16", book: "ACT", ch: 20 } },
  // Day 199
  { ot: { ref: "1 Mac 13:12–14:24", book: "1MA", ch: 13 }, ps: { ref: "Ps 19", ch: 19 }, pr: { ref: "Prov 3:28–32", ch: 3 }, nt: { ref: "Acts 20:17–38", book: "ACT", ch: 20 } },
  // Day 200
  { ot: { ref: "1 Mac 14:25–16:24", book: "1MA", ch: 14 }, ps: { ref: "Ps 20", ch: 20 }, pr: { ref: "Prov 3:33–38", ch: 3 }, nt: { ref: "Acts 21:1–16", book: "ACT", ch: 21 } },
  // Day 201
  { ot: { ref: "2 Mac 1–2", book: "2MA", ch: 1 }, ps: { ref: "Ps 21:1–19", ch: 21 }, pr: { ref: "Prov 4:1–8", ch: 4 }, nt: { ref: "Acts 21:17–40", book: "ACT", ch: 21 } },
  // Day 202
  { ot: { ref: "2 Mac 3:1–4:29", book: "2MA", ch: 3 }, ps: { ref: "Ps 21:20–32", ch: 21 }, pr: { ref: "Prov 4:9–12", ch: 4 }, nt: { ref: "Acts 22:1–29", book: "ACT", ch: 22 } },
  // Day 203
  { ot: { ref: "2 Mac 4:30–6:31", book: "2MA", ch: 4 }, ps: { ref: "Ps 22–23", ch: 22 }, pr: { ref: "Prov 4:13–18", ch: 4 }, nt: { ref: "Acts 22:30–23:11", book: "ACT", ch: 22 } },
  // Day 204
  { ot: { ref: "2 Mac 7:1–8:20", book: "2MA", ch: 7 }, ps: { ref: "Ps 24:1–11", ch: 24 }, pr: { ref: "Prov 4:19–23", ch: 4 }, nt: { ref: "Acts 23:12–35", book: "ACT", ch: 23 } },
  // Day 205
  { ot: { ref: "2 Mac 8:21–10:23", book: "2MA", ch: 8 }, ps: { ref: "Ps 24:12–22", ch: 24 }, pr: { ref: "Prov 4:24–28", ch: 4 }, nt: { ref: "Acts 24", book: "ACT", ch: 24 } },
  // Day 206
  { ot: { ref: "2 Mac 10:24–12:16", book: "2MA", ch: 10 }, ps: { ref: "Ps 25", ch: 25 }, pr: { ref: "Prov 5:1–6", ch: 5 }, nt: { ref: "Acts 25", book: "ACT", ch: 25 } },
  // Day 207
  { ot: { ref: "2 Mac 12:17–14:17", book: "2MA", ch: 12 }, ps: { ref: "Ps 26", ch: 26 }, pr: { ref: "Prov 5:7–14", ch: 5 }, nt: { ref: "Acts 26", book: "ACT", ch: 26 } },
  // Day 208
  { ot: { ref: "2 Mac 14:18–15:39", book: "2MA", ch: 14 }, ps: { ref: "Ps 27", ch: 27 }, pr: { ref: "Prov 5:15–19", ch: 5 }, nt: { ref: "Acts 27:1–20", book: "ACT", ch: 27 } },
  // Day 209
  { ot: { ref: "3 Mac 1–2", book: "3MA", ch: 1 }, ps: { ref: "Ps 28", ch: 28 }, pr: { ref: "Prov 5:20–23", ch: 5 }, nt: { ref: "Acts 27:21–44", book: "ACT", ch: 27 } },
  // Day 210
  { ot: { ref: "3 Mac 3–4", book: "3MA", ch: 3 }, ps: { ref: "Ps 29", ch: 29 }, pr: { ref: "Prov 6:1–6", ch: 6 }, nt: { ref: "Acts 28", book: "ACT", ch: 28 } },
  // Day 211
  { ot: { ref: "3 Mac 5", book: "3MA", ch: 5 }, ps: { ref: "Ps 30:1–14", ch: 30 }, pr: { ref: "Prov 6:7–12", ch: 6 }, nt: { ref: "Rom 1", book: "ROM", ch: 1 } },
  // Day 212
  { ot: { ref: "3 Mac 6–7", book: "3MA", ch: 6 }, ps: { ref: "Ps 30:15–25", ch: 30 }, pr: { ref: "Prov 6:13–16", ch: 6 }, nt: { ref: "Rom 2", book: "ROM", ch: 2 } },
  // Day 213
  { ot: { ref: "Job 1–2", book: "JOB", ch: 1 }, ps: { ref: "Ps 31", ch: 31 }, pr: { ref: "Prov 6:17–19", ch: 6 }, nt: { ref: "Rom 3", book: "ROM", ch: 3 } },
  // Day 214
  { ot: { ref: "Job 3–4", book: "JOB", ch: 3 }, ps: { ref: "Ps 32:1–12", ch: 32 }, pr: { ref: "Prov 6:20–25", ch: 6 }, nt: { ref: "Rom 4", book: "ROM", ch: 4 } },
  // Day 215
  { ot: { ref: "Job 5–6", book: "JOB", ch: 5 }, ps: { ref: "Ps 32:13–22", ch: 32 }, pr: { ref: "Prov 6:26–31", ch: 6 }, nt: { ref: "Rom 5", book: "ROM", ch: 5 } },
  // Day 216
  { ot: { ref: "Job 7–8", book: "JOB", ch: 7 }, ps: { ref: "Ps 33:1–11", ch: 33 }, pr: { ref: "Prov 6:32–36", ch: 6 }, nt: { ref: "Rom 6", book: "ROM", ch: 6 } },
  // Day 217
  { ot: { ref: "Job 9–10", book: "JOB", ch: 9 }, ps: { ref: "Ps 33:12–23", ch: 33 }, pr: { ref: "Prov 6:37–40", ch: 6 }, nt: { ref: "Rom 7", book: "ROM", ch: 7 } },
  // Day 218
  { ot: { ref: "Job 11–13", book: "JOB", ch: 11 }, ps: { ref: "Ps 34:1–16", ch: 34 }, pr: { ref: "Prov 7:1–6", ch: 7 }, nt: { ref: "Rom 8:1–17", book: "ROM", ch: 8 } },
  // Day 219
  { ot: { ref: "Job 14–15", book: "JOB", ch: 14 }, ps: { ref: "Ps 34:17–28", ch: 34 }, pr: { ref: "Prov 7:7–12", ch: 7 }, nt: { ref: "Rom 8:18–39", book: "ROM", ch: 8 } },
  // Day 220
  { ot: { ref: "Job 16–18", book: "JOB", ch: 16 }, ps: { ref: "Ps 35", ch: 35 }, pr: { ref: "Prov 7:13–20", ch: 7 }, nt: { ref: "Rom 9:1–13", book: "ROM", ch: 9 } },
  // Day 221
  { ot: { ref: "Job 19–20", book: "JOB", ch: 19 }, ps: { ref: "Ps 36:1–20", ch: 36 }, pr: { ref: "Prov 7:21–24", ch: 7 }, nt: { ref: "Rom 9:14–33", book: "ROM", ch: 9 } },
  // Day 222
  { ot: { ref: "Job 21–22", book: "JOB", ch: 21 }, ps: { ref: "Ps 36:21–40", ch: 36 }, pr: { ref: "Prov 7:25–27", ch: 7 }, nt: { ref: "Rom 10", book: "ROM", ch: 10 } },
  // Day 223
  { ot: { ref: "Job 23–25", book: "JOB", ch: 23 }, ps: { ref: "Ps 37:1–11", ch: 37 }, pr: { ref: "Prov 8:1–5", ch: 8 }, nt: { ref: "Rom 11:1–15", book: "ROM", ch: 11 } },
  // Day 224
  { ot: { ref: "Job 26–28", book: "JOB", ch: 26 }, ps: { ref: "Ps 37:12–23", ch: 37 }, pr: { ref: "Prov 8:6–10", ch: 8 }, nt: { ref: "Rom 11:16–36", book: "ROM", ch: 11 } },
  // Day 225
  { ot: { ref: "Job 29–30", book: "JOB", ch: 29 }, ps: { ref: "Ps 38", ch: 38 }, pr: { ref: "Prov 8:11–16", ch: 8 }, nt: { ref: "Rom 12", book: "ROM", ch: 12 } },
  // Day 226
  { ot: { ref: "Job 31–32", book: "JOB", ch: 31 }, ps: { ref: "Ps 39", ch: 39 }, pr: { ref: "Prov 8:17–21", ch: 8 }, nt: { ref: "Rom 13", book: "ROM", ch: 13 } },
  // Day 227
  { ot: { ref: "Job 33:1–34:9", book: "JOB", ch: 33 }, ps: { ref: "Ps 40", ch: 40 }, pr: { ref: "Prov 8:22–26", ch: 8 }, nt: { ref: "Rom 14", book: "ROM", ch: 14 } },
  // Day 228
  { ot: { ref: "Job 34:10–35:16", book: "JOB", ch: 34 }, ps: { ref: "Ps 41–42", ch: 41 }, pr: { ref: "Prov 8:27–31", ch: 8 }, nt: { ref: "Rom 15:1–21", book: "ROM", ch: 15 } },
  // Day 229
  { ot: { ref: "Job 36–37", book: "JOB", ch: 36 }, ps: { ref: "Ps 43:1–9", ch: 43 }, pr: { ref: "Prov 8:32–35", ch: 8 }, nt: { ref: "Rom 15:22–33", book: "ROM", ch: 15 } },
  // Day 230
  { ot: { ref: "Job 38", book: "JOB", ch: 38 }, ps: { ref: "Ps 43:10–27", ch: 43 }, pr: { ref: "Prov 9:1–6", ch: 9 }, nt: { ref: "Rom 16", book: "ROM", ch: 16 } },
  // Day 231
  { ot: { ref: "Job 39–40", book: "JOB", ch: 39 }, ps: { ref: "Ps 44", ch: 44 }, pr: { ref: "Prov 9:7–11", ch: 9 }, nt: { ref: "1 Cor 1", book: "1CO", ch: 1 } },
  // Day 232
  { ot: { ref: "Job 41–42", book: "JOB", ch: 41 }, ps: { ref: "Ps 45", ch: 45 }, pr: { ref: "Prov 9:12–15", ch: 9 }, nt: { ref: "1 Cor 2", book: "1CO", ch: 2 } },
  // Day 233
  { ot: { ref: "Eccl 1–2", book: "ECC", ch: 1 }, ps: { ref: "Ps 46", ch: 46 }, pr: { ref: "Prov 9:16–20", ch: 9 }, nt: { ref: "1 Cor 3", book: "1CO", ch: 3 } },
  // Day 234
  { ot: { ref: "Eccl 3:1–5:6", book: "ECC", ch: 3 }, ps: { ref: "Ps 47", ch: 47 }, pr: { ref: "Prov 9:21–25", ch: 9 }, nt: { ref: "1 Cor 4", book: "1CO", ch: 4 } },
  // Day 235
  { ot: { ref: "Eccl 5:7–7:29", book: "ECC", ch: 5 }, ps: { ref: "Ps 48:1–10", ch: 48 }, pr: { ref: "Prov 10:1–6", ch: 10 }, nt: { ref: "1 Cor 5", book: "1CO", ch: 5 } },
  // Day 236
  { ot: { ref: "Eccl 8:1–10:10", book: "ECC", ch: 8 }, ps: { ref: "Ps 48:11–21", ch: 48 }, pr: { ref: "Prov 10:7–11", ch: 10 }, nt: { ref: "1 Cor 6", book: "1CO", ch: 6 } },
  // Day 237
  { ot: { ref: "Eccl 10:11–12:14", book: "ECC", ch: 10 }, ps: { ref: "Ps 49:1–15", ch: 49 }, pr: { ref: "Prov 10:12–16", ch: 10 }, nt: { ref: "1 Cor 7:1–24", book: "1CO", ch: 7 } },
  // Day 238
  { ot: { ref: "Song 1–2", book: "SNG", ch: 1 }, ps: { ref: "Ps 49:16–23", ch: 49 }, pr: { ref: "Prov 10:17–22", ch: 10 }, nt: { ref: "1 Cor 7:25–40", book: "1CO", ch: 7 } },
  // Day 239
  { ot: { ref: "Song 3–4", book: "SNG", ch: 3 }, ps: { ref: "Ps 50:1–10", ch: 50 }, pr: { ref: "Prov 10:23–27", ch: 10 }, nt: { ref: "1 Cor 8", book: "1CO", ch: 8 } },
  // Day 240
  { ot: { ref: "Song 5–6", book: "SNG", ch: 5 }, ps: { ref: "Ps 50:11–21", ch: 50 }, pr: { ref: "Prov 10:28–33", ch: 10 }, nt: { ref: "1 Cor 9", book: "1CO", ch: 9 } },
  // Day 241
  { ot: { ref: "Song 7–8", book: "SNG", ch: 7 }, ps: { ref: "Ps 51", ch: 51 }, pr: { ref: "Prov 11:1–5", ch: 11 }, nt: { ref: "1 Cor 10:1–13", book: "1CO", ch: 10 } },
  // Day 242
  { ot: { ref: "Wis 1–2", book: "WIS", ch: 1 }, ps: { ref: "Ps 52–53", ch: 52 }, pr: { ref: "Prov 11:6–10", ch: 11 }, nt: { ref: "1 Cor 10:14–11:1", book: "1CO", ch: 10 } },
  // Day 243
  { ot: { ref: "Wis 3–4", book: "WIS", ch: 3 }, ps: { ref: "Ps 54:1–12", ch: 54 }, pr: { ref: "Prov 11:11–15", ch: 11 }, nt: { ref: "1 Cor 11:2–16", book: "1CO", ch: 11 } },
  // Day 244
  { ot: { ref: "Wis 5–6", book: "WIS", ch: 5 }, ps: { ref: "Ps 54:13–24", ch: 54 }, pr: { ref: "Prov 11:16–20", ch: 11 }, nt: { ref: "1 Cor 11:17–34", book: "1CO", ch: 11 } },
  // Day 245
  { ot: { ref: "Wis 7–8", book: "WIS", ch: 7 }, ps: { ref: "Ps 55", ch: 55 }, pr: { ref: "Prov 11:21–25", ch: 11 }, nt: { ref: "1 Cor 12:1–30", book: "1CO", ch: 12 } },
  // Day 246
  { ot: { ref: "Wis 9–10", book: "WIS", ch: 9 }, ps: { ref: "Ps 56", ch: 56 }, pr: { ref: "Prov 11:26–30", ch: 11 }, nt: { ref: "1 Cor 12:31–13:13", book: "1CO", ch: 12 } },
  // Day 247
  { ot: { ref: "Wis 11:1–12:11", book: "WIS", ch: 11 }, ps: { ref: "Ps 57", ch: 57 }, pr: { ref: "Prov 12:1–5", ch: 12 }, nt: { ref: "1 Cor 14:1–25", book: "1CO", ch: 14 } },
  // Day 248
  { ot: { ref: "Wis 12:12–13:19", book: "WIS", ch: 12 }, ps: { ref: "Ps 58", ch: 58 }, pr: { ref: "Prov 12:6–10", ch: 12 }, nt: { ref: "1 Cor 14:26–40", book: "1CO", ch: 14 } },
  // Day 249
  { ot: { ref: "Wis 14", book: "WIS", ch: 14 }, ps: { ref: "Ps 59", ch: 59 }, pr: { ref: "Prov 12:11–15", ch: 12 }, nt: { ref: "1 Cor 15:1–34", book: "1CO", ch: 15 } },
  // Day 250
  { ot: { ref: "Wis 15:1–16:14", book: "WIS", ch: 15 }, ps: { ref: "Ps 60", ch: 60 }, pr: { ref: "Prov 12:16–20", ch: 12 }, nt: { ref: "1 Cor 15:35–58", book: "1CO", ch: 15 } },
  // Day 251
  { ot: { ref: "Wis 16:15–18:4", book: "WIS", ch: 16 }, ps: { ref: "Ps 61", ch: 61 }, pr: { ref: "Prov 12:21–25", ch: 12 }, nt: { ref: "1 Cor 16", book: "1CO", ch: 16 } },
  // Day 252
  { ot: { ref: "Wis 18:5–19:22", book: "WIS", ch: 18 }, ps: { ref: "Ps 62", ch: 62 }, pr: { ref: "Prov 12:26–31", ch: 12 }, nt: { ref: "2 Cor 1:1–22", book: "2CO", ch: 1 } },
  // Day 253
  { ot: { ref: "Sir 1–2", book: "SIR", ch: 1 }, ps: { ref: "Ps 63", ch: 63 }, pr: { ref: "Prov 13:1–5", ch: 13 }, nt: { ref: "2 Cor 1:23–2:17", book: "2CO", ch: 1 } },
  // Day 254
  { ot: { ref: "Sir 3–4", book: "SIR", ch: 3 }, ps: { ref: "Ps 64", ch: 64 }, pr: { ref: "Prov 13:6–10", ch: 13 }, nt: { ref: "2 Cor 3", book: "2CO", ch: 3 } },
  // Day 255
  { ot: { ref: "Sir 5–6", book: "SIR", ch: 5 }, ps: { ref: "Ps 65", ch: 65 }, pr: { ref: "Prov 13:11–15", ch: 13 }, nt: { ref: "2 Cor 4", book: "2CO", ch: 4 } },
  // Day 256
  { ot: { ref: "Sir 7–8", book: "SIR", ch: 7 }, ps: { ref: "Ps 66", ch: 66 }, pr: { ref: "Prov 13:16–21", ch: 13 }, nt: { ref: "2 Cor 5", book: "2CO", ch: 5 } },
  // Day 257
  { ot: { ref: "Sir 9–10", book: "SIR", ch: 9 }, ps: { ref: "Ps 67:1–20", ch: 67 }, pr: { ref: "Prov 13:22–27", ch: 13 }, nt: { ref: "2 Cor 6", book: "2CO", ch: 6 } },
  // Day 258
  { ot: { ref: "Sir 11–12", book: "SIR", ch: 11 }, ps: { ref: "Ps 67:21–36", ch: 67 }, pr: { ref: "Prov 14:1–5", ch: 14 }, nt: { ref: "2 Cor 7", book: "2CO", ch: 7 } },
  // Day 259
  { ot: { ref: "Sir 13–14", book: "SIR", ch: 13 }, ps: { ref: "Ps 68:1–20", ch: 68 }, pr: { ref: "Prov 14:6–10", ch: 14 }, nt: { ref: "2 Cor 8", book: "2CO", ch: 8 } },
  // Day 260
  { ot: { ref: "Sir 15–16", book: "SIR", ch: 15 }, ps: { ref: "Ps 68:21–37", ch: 68 }, pr: { ref: "Prov 14:11–15", ch: 14 }, nt: { ref: "2 Cor 9", book: "2CO", ch: 9 } },
  // Day 261
  { ot: { ref: "Sir 17–18", book: "SIR", ch: 17 }, ps: { ref: "Ps 69", ch: 69 }, pr: { ref: "Prov 14:16–20", ch: 14 }, nt: { ref: "2 Cor 10", book: "2CO", ch: 10 } },
  // Day 262
  { ot: { ref: "Sir 19–20", book: "SIR", ch: 19 }, ps: { ref: "Ps 70:1–13", ch: 70 }, pr: { ref: "Prov 14:21–25", ch: 14 }, nt: { ref: "2 Cor 11:1–15", book: "2CO", ch: 11 } },
  // Day 263
  { ot: { ref: "Sir 21–22", book: "SIR", ch: 21 }, ps: { ref: "Ps 70:14–24", ch: 70 }, pr: { ref: "Prov 14:26–30", ch: 14 }, nt: { ref: "2 Cor 11:16–33", book: "2CO", ch: 11 } },
  // Day 264
  { ot: { ref: "Sir 23:1–24:18", book: "SIR", ch: 23 }, ps: { ref: "Ps 71", ch: 71 }, pr: { ref: "Prov 14:31–36", ch: 14 }, nt: { ref: "2 Cor 12", book: "2CO", ch: 12 } },
  // Day 265
  { ot: { ref: "Sir 24:19–25:25", book: "SIR", ch: 24 }, ps: { ref: "Ps 72:1–14", ch: 72 }, pr: { ref: "Prov 15:1–5", ch: 15 }, nt: { ref: "2 Cor 13", book: "2CO", ch: 13 } },
  // Day 266
  { ot: { ref: "Sir 26–27", book: "SIR", ch: 26 }, ps: { ref: "Ps 72:15–28", ch: 72 }, pr: { ref: "Prov 15:6–10", ch: 15 }, nt: { ref: "Gal 1", book: "GAL", ch: 1 } },
  // Day 267
  { ot: { ref: "Sir 28–29", book: "SIR", ch: 28 }, ps: { ref: "Ps 73:1–11", ch: 73 }, pr: { ref: "Prov 15:11–15", ch: 15 }, nt: { ref: "Gal 2", book: "GAL", ch: 2 } },
  // Day 268
  { ot: { ref: "Sir 30–31", book: "SIR", ch: 30 }, ps: { ref: "Ps 73:12–23", ch: 73 }, pr: { ref: "Prov 15:16–20", ch: 15 }, nt: { ref: "Gal 3", book: "GAL", ch: 3 } },
  // Day 269
  { ot: { ref: "Sir 32–33", book: "SIR", ch: 32 }, ps: { ref: "Ps 74", ch: 74 }, pr: { ref: "Prov 15:21–26", ch: 15 }, nt: { ref: "Gal 4", book: "GAL", ch: 4 } },
  // Day 270
  { ot: { ref: "Sir 34–35", book: "SIR", ch: 34 }, ps: { ref: "Ps 75", ch: 75 }, pr: { ref: "Prov 15:27–32", ch: 15 }, nt: { ref: "Gal 5", book: "GAL", ch: 5 } },
  // Day 271
  { ot: { ref: "Sir 36–37", book: "SIR", ch: 36 }, ps: { ref: "Ps 76:1–10", ch: 76 }, pr: { ref: "Prov 15:33–38", ch: 15 }, nt: { ref: "Gal 6", book: "GAL", ch: 6 } },
  // Day 272
  { ot: { ref: "Sir 38:1–39:11", book: "SIR", ch: 38 }, ps: { ref: "Ps 76:11–21", ch: 76 }, pr: { ref: "Prov 16:1–5", ch: 16 }, nt: { ref: "Eph 1", book: "EPH", ch: 1 } },
  // Day 273
  { ot: { ref: "Sir 39:12–40:30", book: "SIR", ch: 39 }, ps: { ref: "Ps 77:1–17", ch: 77 }, pr: { ref: "Prov 16:6–10", ch: 16 }, nt: { ref: "Eph 2", book: "EPH", ch: 2 } },
  // Day 274
  { ot: { ref: "Sir 41–42", book: "SIR", ch: 41 }, ps: { ref: "Ps 77:18–37", ch: 77 }, pr: { ref: "Prov 16:11–15", ch: 16 }, nt: { ref: "Eph 3", book: "EPH", ch: 3 } },
  // Day 275
  { ot: { ref: "Sir 43:1–44:18", book: "SIR", ch: 43 }, ps: { ref: "Ps 77:38–55", ch: 77 }, pr: { ref: "Prov 16:16–20", ch: 16 }, nt: { ref: "Eph 4:1–24", book: "EPH", ch: 4 } },
  // Day 276
  { ot: { ref: "Sir 44:19–45:26", book: "SIR", ch: 44 }, ps: { ref: "Ps 77:56–72", ch: 77 }, pr: { ref: "Prov 16:21–25", ch: 16 }, nt: { ref: "Eph 4:25–5:14", book: "EPH", ch: 4 } },
  // Day 277
  { ot: { ref: "Sir 46–47", book: "SIR", ch: 46 }, ps: { ref: "Ps 78", ch: 78 }, pr: { ref: "Prov 16:26–31", ch: 16 }, nt: { ref: "Eph 5:15–33", book: "EPH", ch: 5 } },
  // Day 278
  { ot: { ref: "Sir 48–49", book: "SIR", ch: 48 }, ps: { ref: "Ps 79", ch: 79 }, pr: { ref: "Prov 17:1–5", ch: 17 }, nt: { ref: "Eph 6", book: "EPH", ch: 6 } },
  // Day 279
  { ot: { ref: "Sir 50", book: "SIR", ch: 50 }, ps: { ref: "Ps 80", ch: 80 }, pr: { ref: "Prov 17:6–10", ch: 17 }, nt: { ref: "Phil 1", book: "PHP", ch: 1 } },
  // Day 280
  { ot: { ref: "Sir 51", book: "SIR", ch: 51 }, ps: { ref: "Ps 81", ch: 81 }, pr: { ref: "Prov 17:11–15", ch: 17 }, nt: { ref: "Phil 2", book: "PHP", ch: 2 } },
  // Day 281
  { ot: { ref: "Hos 1–2", book: "HOS", ch: 1 }, ps: { ref: "Ps 82", ch: 82 }, pr: { ref: "Prov 17:16–20", ch: 17 }, nt: { ref: "Phil 3:1–4:1", book: "PHP", ch: 3 } },
  // Day 282
  { ot: { ref: "Hos 3–5", book: "HOS", ch: 3 }, ps: { ref: "Ps 83", ch: 83 }, pr: { ref: "Prov 17:21–25", ch: 17 }, nt: { ref: "Phil 4:2–23", book: "PHP", ch: 4 } },
  // Day 283
  { ot: { ref: "Hos 6–7", book: "HOS", ch: 6 }, ps: { ref: "Ps 84", ch: 84 }, pr: { ref: "Prov 17:26–30", ch: 17 }, nt: { ref: "Col 1", book: "COL", ch: 1 } },
  // Day 284
  { ot: { ref: "Hos 8–9", book: "HOS", ch: 8 }, ps: { ref: "Ps 85", ch: 85 }, pr: { ref: "Prov 18:1–5", ch: 18 }, nt: { ref: "Col 2", book: "COL", ch: 2 } },
  // Day 285
  { ot: { ref: "Hos 10:1–12:7", book: "HOS", ch: 10 }, ps: { ref: "Ps 86", ch: 86 }, pr: { ref: "Prov 18:6–11", ch: 18 }, nt: { ref: "Col 3:1–4:1", book: "COL", ch: 3 } },
  // Day 286
  { ot: { ref: "Hos 12:8–14:10", book: "HOS", ch: 12 }, ps: { ref: "Ps 87", ch: 87 }, pr: { ref: "Prov 18:11–17", ch: 18 }, nt: { ref: "Col 4:2–18", book: "COL", ch: 4 } },
  // Day 287
  { ot: { ref: "Amos 1:1–5:3", book: "AMO", ch: 1 }, ps: { ref: "Ps 88:1–19", ch: 88 }, pr: { ref: "Prov 18:18–23", ch: 18 }, nt: { ref: "1 Th 1", book: "1TH", ch: 1 } },
  // Day 288
  { ot: { ref: "Amos 5:4–9:15", book: "AMO", ch: 5 }, ps: { ref: "Ps 88:20–38", ch: 88 }, pr: { ref: "Prov 19:1–6", ch: 19 }, nt: { ref: "1 Th 2", book: "1TH", ch: 2 } },
  // Day 289
  { ot: { ref: "Mic 1–4", book: "MIC", ch: 1 }, ps: { ref: "Ps 88:39–53", ch: 88 }, pr: { ref: "Prov 19:7–12", ch: 19 }, nt: { ref: "1 Th 3", book: "1TH", ch: 3 } },
  // Day 290
  { ot: { ref: "Mic 5–7", book: "MIC", ch: 5 }, ps: { ref: "Ps 89", ch: 89 }, pr: { ref: "Prov 19:13–18", ch: 19 }, nt: { ref: "1 Th 4", book: "1TH", ch: 4 } },
  // Day 291
  { ot: { ref: "Joel 1–4", book: "JOL", ch: 1 }, ps: { ref: "Ps 90", ch: 90 }, pr: { ref: "Prov 19:19–24", ch: 19 }, nt: { ref: "1 Th 5", book: "1TH", ch: 5 } },
  // Day 292
  { ot: { ref: "Obad", book: "OBA", ch: 1 }, ps: { ref: "Ps 91", ch: 91 }, pr: { ref: "Prov 19:25–29", ch: 19 }, nt: { ref: "2 Th 1", book: "2TH", ch: 1 } },
  // Day 293
  { ot: { ref: "Jon 1–4", book: "JON", ch: 1 }, ps: { ref: "Ps 92", ch: 92 }, pr: { ref: "Prov 20:1–5", ch: 20 }, nt: { ref: "2 Th 2", book: "2TH", ch: 2 } },
  // Day 294
  { ot: { ref: "Nah 1–3", book: "NAM", ch: 1 }, ps: { ref: "Ps 93:1–15", ch: 93 }, pr: { ref: "Prov 20:6–10", ch: 20 }, nt: { ref: "2 Th 3", book: "2TH", ch: 3 } },
  // Day 295
  { ot: { ref: "Hab 1–3", book: "HAB", ch: 1 }, ps: { ref: "Ps 93:16–23", ch: 93 }, pr: { ref: "Prov 20:11–15", ch: 20 }, nt: { ref: "1 Tim 1", book: "1TI", ch: 1 } },
  // Day 296
  { ot: { ref: "Zeph 1–3", book: "ZEP", ch: 1 }, ps: { ref: "Ps 94", ch: 94 }, pr: { ref: "Prov 20:16–20", ch: 20 }, nt: { ref: "1 Tim 2", book: "1TI", ch: 2 } },
  // Day 297
  { ot: { ref: "Hag 1–2", book: "HAG", ch: 1 }, ps: { ref: "Ps 95", ch: 95 }, pr: { ref: "Prov 20:21–25", ch: 20 }, nt: { ref: "1 Tim 3", book: "1TI", ch: 3 } },
  // Day 298
  { ot: { ref: "Zech 1–5", book: "ZEC", ch: 1 }, ps: { ref: "Ps 96", ch: 96 }, pr: { ref: "Prov 21:1–5", ch: 21 }, nt: { ref: "1 Tim 4", book: "1TI", ch: 4 } },
  // Day 299
  { ot: { ref: "Zech 6–9", book: "ZEC", ch: 6 }, ps: { ref: "Ps 97–98", ch: 97 }, pr: { ref: "Prov 21:6–10", ch: 21 }, nt: { ref: "1 Tim 5", book: "1TI", ch: 5 } },
  // Day 300
  { ot: { ref: "Zech 10–14", book: "ZEC", ch: 10 }, ps: { ref: "Ps 99–100", ch: 99 }, pr: { ref: "Prov 21:11–15", ch: 21 }, nt: { ref: "1 Tim 6", book: "1TI", ch: 6 } },
  // Day 301
  { ot: { ref: "Mal 1–3", book: "MAL", ch: 1 }, ps: { ref: "Ps 101:1–15", ch: 101 }, pr: { ref: "Prov 21:16–20", ch: 21 }, nt: { ref: "2 Tim 1", book: "2TI", ch: 1 } },
  // Day 302
  { ot: { ref: "Isa 1–4", book: "ISA", ch: 1 }, ps: { ref: "Ps 101:16–29", ch: 101 }, pr: { ref: "Prov 21:21–25", ch: 21 }, nt: { ref: "2 Tim 2", book: "2TI", ch: 2 } },
  // Day 303
  { ot: { ref: "Isa 5–9", book: "ISA", ch: 5 }, ps: { ref: "Ps 102:1–12", ch: 102 }, pr: { ref: "Prov 21:26–30", ch: 21 }, nt: { ref: "2 Tim 3", book: "2TI", ch: 3 } },
  // Day 304
  { ot: { ref: "Isa 10–14", book: "ISA", ch: 10 }, ps: { ref: "Ps 102:13–22", ch: 102 }, pr: { ref: "Prov 22:1–5", ch: 22 }, nt: { ref: "2 Tim 4", book: "2TI", ch: 4 } },
  // Day 305
  { ot: { ref: "Isa 15–21", book: "ISA", ch: 15 }, ps: { ref: "Ps 103:1–18", ch: 103 }, pr: { ref: "Prov 22:6–10", ch: 22 }, nt: { ref: "Tit 1", book: "TIT", ch: 1 } },
  // Day 306
  { ot: { ref: "Isa 22–26", book: "ISA", ch: 22 }, ps: { ref: "Ps 103:19–35", ch: 103 }, pr: { ref: "Prov 22:11–15", ch: 22 }, nt: { ref: "Tit 2", book: "TIT", ch: 2 } },
  // Day 307
  { ot: { ref: "Isa 27–30", book: "ISA", ch: 27 }, ps: { ref: "Ps 104:1–15", ch: 104 }, pr: { ref: "Prov 22:16–20", ch: 22 }, nt: { ref: "Tit 3", book: "TIT", ch: 3 } },
  // Day 308
  { ot: { ref: "Isa 31–36", book: "ISA", ch: 31 }, ps: { ref: "Ps 104:16–27", ch: 104 }, pr: { ref: "Prov 22:21–26", ch: 22 }, nt: { ref: "Phlm", book: "PHM", ch: 1 } },
  // Day 309
  { ot: { ref: "Isa 37–40", book: "ISA", ch: 37 }, ps: { ref: "Ps 104:28–45", ch: 104 }, pr: { ref: "Prov 22:27–31", ch: 22 }, nt: { ref: "Heb 1", book: "HEB", ch: 1 } },
  // Day 310
  { ot: { ref: "Isa 41–43", book: "ISA", ch: 41 }, ps: { ref: "Ps 105:1–15", ch: 105 }, pr: { ref: "Prov 23:1–5", ch: 23 }, nt: { ref: "Heb 2", book: "HEB", ch: 2 } },
  // Day 311
  { ot: { ref: "Isa 44–47", book: "ISA", ch: 44 }, ps: { ref: "Ps 105:16–31", ch: 105 }, pr: { ref: "Prov 23:6–12", ch: 23 }, nt: { ref: "Heb 3", book: "HEB", ch: 3 } },
  // Day 312
  { ot: { ref: "Isa 48–51", book: "ISA", ch: 48 }, ps: { ref: "Ps 105:32–48", ch: 105 }, pr: { ref: "Prov 23:13–18", ch: 23 }, nt: { ref: "Heb 4", book: "HEB", ch: 4 } },
  // Day 313
  { ot: { ref: "Isa 52–57", book: "ISA", ch: 52 }, ps: { ref: "Ps 106:1–14", ch: 106 }, pr: { ref: "Prov 23:19–23", ch: 23 }, nt: { ref: "Heb 5", book: "HEB", ch: 5 } },
  // Day 314
  { ot: { ref: "Isa 58–62", book: "ISA", ch: 58 }, ps: { ref: "Ps 106:15–30", ch: 106 }, pr: { ref: "Prov 23:24–27", ch: 23 }, nt: { ref: "Heb 6", book: "HEB", ch: 6 } },
  // Day 315
  { ot: { ref: "Isa 63–66", book: "ISA", ch: 63 }, ps: { ref: "Ps 106:31–43", ch: 106 }, pr: { ref: "Prov 23:28–32", ch: 23 }, nt: { ref: "Heb 7", book: "HEB", ch: 7 } },
  // Day 316
  { ot: { ref: "Jer 1–3", book: "JER", ch: 1 }, ps: { ref: "Ps 107", ch: 107 }, pr: { ref: "Prov 23:33–36", ch: 23 }, nt: { ref: "Heb 8", book: "HEB", ch: 8 } },
  // Day 317
  { ot: { ref: "Jer 4–6", book: "JER", ch: 4 }, ps: { ref: "Ps 108:1–20", ch: 108 }, pr: { ref: "Prov 24:1–6", ch: 24 }, nt: { ref: "Heb 9", book: "HEB", ch: 9 } },
  // Day 318
  { ot: { ref: "Jer 7–9", book: "JER", ch: 7 }, ps: { ref: "Ps 108:21–31", ch: 108 }, pr: { ref: "Prov 24:7–12", ch: 24 }, nt: { ref: "Heb 10:1–18", book: "HEB", ch: 10 } },
  // Day 319
  { ot: { ref: "Jer 10–13", book: "JER", ch: 10 }, ps: { ref: "Ps 109–110", ch: 109 }, pr: { ref: "Prov 24:13–18", ch: 24 }, nt: { ref: "Heb 10:19–39", book: "HEB", ch: 10 } },
  // Day 320
  { ot: { ref: "Jer 14–16", book: "JER", ch: 14 }, ps: { ref: "Ps 111–112", ch: 111 }, pr: { ref: "Prov 24:19–23", ch: 24 }, nt: { ref: "Heb 11:1–22", book: "HEB", ch: 11 } },
  // Day 321
  { ot: { ref: "Jer 17–19", book: "JER", ch: 17 }, ps: { ref: "Ps 113:1–11", ch: 113 }, pr: { ref: "Prov 24:24–27", ch: 24 }, nt: { ref: "Heb 11:23–40", book: "HEB", ch: 11 } },
  // Day 322
  { ot: { ref: "Jer 20–22", book: "JER", ch: 20 }, ps: { ref: "Ps 113:12–26", ch: 113 }, pr: { ref: "Prov 24:29–34", ch: 24 }, nt: { ref: "Heb 12:1–27", book: "HEB", ch: 12 } },
  // Day 323
  { ot: { ref: "Jer 23–26", book: "JER", ch: 23 }, ps: { ref: "Ps 114", ch: 114 }, pr: { ref: "Prov 24:35–39", ch: 24 }, nt: { ref: "Heb 12:28–13:25", book: "HEB", ch: 12 } },
  // Day 324
  { ot: { ref: "Jer 27–28", book: "JER", ch: 27 }, ps: { ref: "Ps 115–116", ch: 115 }, pr: { ref: "Prov 25:1–5", ch: 25 }, nt: { ref: "Jas 1", book: "JAS", ch: 1 } },
  // Day 325
  { ot: { ref: "Jer 29–31", book: "JER", ch: 29 }, ps: { ref: "Ps 117:1–16", ch: 117 }, pr: { ref: "Prov 25:6–11", ch: 25 }, nt: { ref: "Jas 2", book: "JAS", ch: 2 } },
  // Day 326
  { ot: { ref: "Jer 32–35", book: "JER", ch: 32 }, ps: { ref: "Ps 117:17–29", ch: 117 }, pr: { ref: "Prov 25:12–16", ch: 25 }, nt: { ref: "Jas 3", book: "JAS", ch: 3 } },
  // Day 327
  { ot: { ref: "Jer 36–38", book: "JER", ch: 36 }, ps: { ref: "Ps 118:1–16", ch: 118 }, pr: { ref: "Prov 25:17–21", ch: 25 }, nt: { ref: "Jas 4", book: "JAS", ch: 4 } },
  // Day 328
  { ot: { ref: "Jer 39–41", book: "JER", ch: 39 }, ps: { ref: "Ps 118:17–32", ch: 118 }, pr: { ref: "Prov 25:22–26", ch: 25 }, nt: { ref: "Jas 5", book: "JAS", ch: 5 } },
  // Day 329
  { ot: { ref: "Jer 42–44", book: "JER", ch: 42 }, ps: { ref: "Ps 118:33–48", ch: 118 }, pr: { ref: "Prov 25:27–31", ch: 25 }, nt: { ref: "1 Pet 1", book: "1PE", ch: 1 } },
  // Day 330
  { ot: { ref: "Jer 45–48", book: "JER", ch: 45 }, ps: { ref: "Ps 118:49–64", ch: 118 }, pr: { ref: "Prov 26:1–5", ch: 26 }, nt: { ref: "1 Pet 2", book: "1PE", ch: 2 } },
  // Day 331
  { ot: { ref: "Jer 49–52", book: "JER", ch: 49 }, ps: { ref: "Ps 118:65–80", ch: 118 }, pr: { ref: "Prov 26:6–9", ch: 26 }, nt: { ref: "1 Pet 3", book: "1PE", ch: 3 } },
  // Day 332
  { ot: { ref: "Bar 1–2", book: "BAR", ch: 1 }, ps: { ref: "Ps 118:81–96", ch: 118 }, pr: { ref: "Prov 26:10–13", ch: 26 }, nt: { ref: "1 Pet 4", book: "1PE", ch: 4 } },
  // Day 333
  { ot: { ref: "Bar 3–5", book: "BAR", ch: 3 }, ps: { ref: "Ps 118:97–112", ch: 118 }, pr: { ref: "Prov 26:14–17", ch: 26 }, nt: { ref: "1 Pet 5", book: "1PE", ch: 5 } },
  // Day 334
  { ot: { ref: "LJe 1", book: "LJE", ch: 1 }, ps: { ref: "Ps 118:113–128", ch: 118 }, pr: { ref: "Prov 26:18–23", ch: 26 }, nt: { ref: "2 Pet 1", book: "2PE", ch: 1 } },
  // Day 335
  { ot: { ref: "Lam 1", book: "LAM", ch: 1 }, ps: { ref: "Ps 118:129–144", ch: 118 }, pr: { ref: "Prov 26:24–29", ch: 26 }, nt: { ref: "2 Pet 2", book: "2PE", ch: 2 } },
  // Day 336
  { ot: { ref: "Lam 2", book: "LAM", ch: 2 }, ps: { ref: "Ps 118:145–160", ch: 118 }, pr: { ref: "Prov 27:1–5", ch: 27 }, nt: { ref: "2 Pet 3", book: "2PE", ch: 3 } },
  // Day 337
  { ot: { ref: "Lam 3", book: "LAM", ch: 3 }, ps: { ref: "Ps 118:161–176", ch: 118 }, pr: { ref: "Prov 27:6–10", ch: 27 }, nt: { ref: "1 Jn 1:1–2:1", book: "1JO", ch: 1 } },
  // Day 338
  { ot: { ref: "Lam 4", book: "LAM", ch: 4 }, ps: { ref: "Ps 119–120", ch: 119 }, pr: { ref: "Prov 27:11–15", ch: 27 }, nt: { ref: "1 Jn 2:2–27", book: "1JO", ch: 2 } },
  // Day 339
  { ot: { ref: "Lam 5", book: "LAM", ch: 5 }, ps: { ref: "Ps 121–122", ch: 121 }, pr: { ref: "Prov 27:16–20", ch: 27 }, nt: { ref: "1 Jn 2:28–3:24", book: "1JO", ch: 2 } },
  // Day 340
  { ot: { ref: "Ezek 1–3", book: "EZK", ch: 1 }, ps: { ref: "Ps 123–124", ch: 123 }, pr: { ref: "Prov 27:21–24", ch: 27 }, nt: { ref: "1 Jn 4:1–19", book: "1JO", ch: 4 } },
  // Day 341
  { ot: { ref: "Ezek 4–7", book: "EZK", ch: 4 }, ps: { ref: "Ps 125–126", ch: 125 }, pr: { ref: "Prov 27:25–29", ch: 27 }, nt: { ref: "1 Jn 4:20–5:21", book: "1JO", ch: 4 } },
  // Day 342
  { ot: { ref: "Ezek 8–11", book: "EZK", ch: 8 }, ps: { ref: "Ps 127–128", ch: 127 }, pr: { ref: "Prov 28:1–5", ch: 28 }, nt: { ref: "2 Jn", book: "2JO", ch: 1 } },
  // Day 343
  { ot: { ref: "Ezek 12–14", book: "EZK", ch: 12 }, ps: { ref: "Ps 129–130", ch: 129 }, pr: { ref: "Prov 28:6–11", ch: 28 }, nt: { ref: "3 Jn", book: "3JO", ch: 1 } },
  // Day 344
  { ot: { ref: "Ezek 15–16", book: "EZK", ch: 15 }, ps: { ref: "Ps 131", ch: 131 }, pr: { ref: "Prov 28:12–15", ch: 28 }, nt: { ref: "Jude", book: "JUD", ch: 1 } },
  // Day 345
  { ot: { ref: "Ezek 17–19", book: "EZK", ch: 17 }, ps: { ref: "Ps 132–133", ch: 132 }, pr: { ref: "Prov 28:16–20", ch: 28 }, nt: { ref: "Rev 1", book: "REV", ch: 1 } },
  // Day 346
  { ot: { ref: "Ezek 20–21", book: "EZK", ch: 20 }, ps: { ref: "Ps 134:1–12", ch: 134 }, pr: { ref: "Prov 28:21–25", ch: 28 }, nt: { ref: "Rev 2", book: "REV", ch: 2 } },
  // Day 347
  { ot: { ref: "Ezek 22–23", book: "EZK", ch: 22 }, ps: { ref: "Ps 134:13–21", ch: 134 }, pr: { ref: "Prov 28:26–30", ch: 28 }, nt: { ref: "Rev 3", book: "REV", ch: 3 } },
  // Day 348
  { ot: { ref: "Ezek 24–26", book: "EZK", ch: 24 }, ps: { ref: "Ps 135:1–15", ch: 135 }, pr: { ref: "Prov 29:1–6", ch: 29 }, nt: { ref: "Rev 4–5", book: "REV", ch: 4 } },
  // Day 349
  { ot: { ref: "Ezek 27–29", book: "EZK", ch: 27 }, ps: { ref: "Ps 135:16–26", ch: 135 }, pr: { ref: "Prov 29:7–12", ch: 29 }, nt: { ref: "Rev 6", book: "REV", ch: 6 } },
  // Day 350
  { ot: { ref: "Ezek 30–32", book: "EZK", ch: 30 }, ps: { ref: "Ps 136–137", ch: 136 }, pr: { ref: "Prov 29:13–18", ch: 29 }, nt: { ref: "Rev 7", book: "REV", ch: 7 } },
  // Day 351
  { ot: { ref: "Ezek 33–35", book: "EZK", ch: 33 }, ps: { ref: "Ps 138:1–12", ch: 138 }, pr: { ref: "Prov 29:19–23", ch: 29 }, nt: { ref: "Rev 8", book: "REV", ch: 8 } },
  // Day 352
  { ot: { ref: "Ezek 36–37", book: "EZK", ch: 36 }, ps: { ref: "Ps 138:13–24", ch: 138 }, pr: { ref: "Prov 29:24–28", ch: 29 }, nt: { ref: "Rev 9", book: "REV", ch: 9 } },
  // Day 353
  { ot: { ref: "Ezek 38:1–40:23", book: "EZK", ch: 38 }, ps: { ref: "Ps 139", ch: 139 }, pr: { ref: "Prov 30:1–5", ch: 30 }, nt: { ref: "Rev 10", book: "REV", ch: 10 } },
  // Day 354
  { ot: { ref: "Ezek 40:24–41:26", book: "EZK", ch: 40 }, ps: { ref: "Ps 140", ch: 140 }, pr: { ref: "Prov 30:6–10", ch: 30 }, nt: { ref: "Rev 11", book: "REV", ch: 11 } },
  // Day 355
  { ot: { ref: "Ezek 42–43", book: "EZK", ch: 42 }, ps: { ref: "Ps 141", ch: 141 }, pr: { ref: "Prov 30:11–15", ch: 30 }, nt: { ref: "Rev 12", book: "REV", ch: 12 } },
  // Day 356
  { ot: { ref: "Ezek 44–46", book: "EZK", ch: 44 }, ps: { ref: "Ps 142", ch: 142 }, pr: { ref: "Prov 30:16–21", ch: 30 }, nt: { ref: "Rev 13", book: "REV", ch: 13 } },
  // Day 357
  { ot: { ref: "Ezek 47–48", book: "EZK", ch: 47 }, ps: { ref: "Ps 143", ch: 143 }, pr: { ref: "Prov 30:22–25", ch: 30 }, nt: { ref: "Rev 14", book: "REV", ch: 14 } },
  // Day 358
  { ot: { ref: "Sus 1; Dan 1", book: "SUS", ch: 1 }, ps: { ref: "Ps 144:1–9", ch: 144 }, pr: { ref: "Prov 30:26–30", ch: 30 }, nt: { ref: "Rev 15:1–16:7", book: "REV", ch: 15 } },
  // Day 359
  { ot: { ref: "Dan 2:1–3:24", book: "DAN", ch: 2 }, ps: { ref: "Ps 144:10–21", ch: 144 }, pr: { ref: "Prov 30:31–35", ch: 30 }, nt: { ref: "Rev 16:8–21", book: "REV", ch: 16 } },
  // Day 360
  { ot: { ref: "Dan 3:25–66", book: "DAN", ch: 3 }, ps: { ref: "Ps 145", ch: 145 }, pr: { ref: "Prov 31:1–5", ch: 31 }, nt: { ref: "Rev 17", book: "REV", ch: 17 } },
  // Day 361
  { ot: { ref: "Dan 3:67–4:18", book: "DAN", ch: 3 }, ps: { ref: "Ps 146", ch: 146 }, pr: { ref: "Prov 31:6–9", ch: 31 }, nt: { ref: "Rev 18", book: "REV", ch: 18 } },
  // Day 362
  { ot: { ref: "Dan 4:19–6:29", book: "DAN", ch: 4 }, ps: { ref: "Ps 147", ch: 147 }, pr: { ref: "Prov 31:10–15", ch: 31 }, nt: { ref: "Rev 19", book: "REV", ch: 19 } },
  // Day 363
  { ot: { ref: "Dan 7–8", book: "DAN", ch: 7 }, ps: { ref: "Ps 148", ch: 148 }, pr: { ref: "Prov 31:16–20", ch: 31 }, nt: { ref: "Rev 20", book: "REV", ch: 20 } },
  // Day 364
  { ot: { ref: "Dan 9:1–11:28", book: "DAN", ch: 9 }, ps: { ref: "Ps 149", ch: 149 }, pr: { ref: "Prov 31:21–25", ch: 31 }, nt: { ref: "Rev 21", book: "REV", ch: 21 } },
  // Day 365
  { ot: { ref: "Dan 11:29–45; Bel 1", book: "DAN", ch: 11 }, ps: { ref: "Ps 150–151", ch: 150 }, pr: { ref: "Prov 31:26–30", ch: 31 }, nt: { ref: "Rev 22", book: "REV", ch: 22 } },
];