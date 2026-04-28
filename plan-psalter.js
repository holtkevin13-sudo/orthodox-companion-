// Orthodox Companion — Reading Plan
// Plan: Psalter Monthly (plan-psalter.js)
// Variable: PLAN_PSALTER
// Days: 30
// Coverage: All 150 Psalms across the 20 traditional kathismata
// Structure: 20 kathismata distributed over 30 days — larger kathismata are split at
//            natural stasis (antiphon) boundaries in the Orthodox tradition.
// Index 0 is unused — plan is 1-indexed.

// KATHISMA REFERENCE (LXX numbering):
//  K1: Ps 1–8     K2: Ps 9–16     K3: Ps 17–23    K4: Ps 24–31    K5: Ps 32–36
//  K6: Ps 37–45   K7: Ps 46–54    K8: Ps 55–63    K9: Ps 64–69    K10: Ps 70–76
//  K11: Ps 77–84  K12: Ps 85–90   K13: Ps 91–100  K14: Ps 101–104 K15: Ps 105–108
//  K16: Ps 109–117 K17: Ps 118    K18: Ps 119–133 K19: Ps 134–142 K20: Ps 143–150

const PLAN_PSALTER = [
  null, // index 0 unused

  // Day 1 — Kathisma 1 (Ps 1–8)
  // Blessed is the man who walks not in the counsel of the ungodly
  { ps: { ref: "Ps 1–8", ch: 1 }, note: "Kathisma 1 (Ps 1–8)" },

  // Day 2 — Kathisma 2 (Ps 9–16)
  // The Lord is a refuge for the oppressed; praise among the nations
  { ps: { ref: "Ps 9–16", ch: 9 }, note: "Kathisma 2 (Ps 9–16)" },

  // Day 3 — Kathisma 3, part 1 (Ps 17–19)
  // I will love You, O Lord my strength; the heavens declare the glory of God
  { ps: { ref: "Ps 17–19", ch: 17 }, note: "Kathisma 3, part 1 (Ps 17–19)" },

  // Day 4 — Kathisma 3, part 2 (Ps 20–23)
  // The Lord is my shepherd; I shall not want
  { ps: { ref: "Ps 20–23", ch: 20 }, note: "Kathisma 3, part 2 (Ps 20–23)" },

  // Day 5 — Kathisma 4 (Ps 24–31)
  // The earth is the Lord's; wait on the Lord; Into Your hand I commit my spirit
  { ps: { ref: "Ps 24–31", ch: 24 }, note: "Kathisma 4 (Ps 24–31)" },

  // Day 6 — Kathisma 5 (Ps 32–36)
  // Rejoice in the Lord; taste and see that the Lord is good
  { ps: { ref: "Ps 32–36", ch: 32 }, note: "Kathisma 5 (Ps 32–36)" },

  // Day 7 — Kathisma 6, part 1 (Ps 37–41)
  // O Lord, do not rebuke me in Your wrath; as the deer pants for the water
  { ps: { ref: "Ps 37–41", ch: 37 }, note: "Kathisma 6, part 1 (Ps 37–41)" },

  // Day 8 — Kathisma 6, part 2 (Ps 42–45)
  // Send out Your light and Your truth; God is our refuge and strength
  { ps: { ref: "Ps 42–45", ch: 42 }, note: "Kathisma 6, part 2 (Ps 42–45)" },

  // Day 9 — Kathisma 7, part 1 (Ps 46–50)
  // God is the King of all the earth; Great is the Lord; Have mercy on me, O God
  { ps: { ref: "Ps 46–50", ch: 46 }, note: "Kathisma 7, part 1 (Ps 46–50)" },

  // Day 10 — Kathisma 7, part 2 (Ps 51–54)
  // Why do you boast in evil; the fool says in his heart, there is no God
  { ps: { ref: "Ps 51–54", ch: 51 }, note: "Kathisma 7, part 2 (Ps 51–54)" },

  // Day 11 — Kathisma 8, part 1 (Ps 55–58)
  // When I am afraid, I will trust in You; O God, be merciful to us
  { ps: { ref: "Ps 55–58", ch: 55 }, note: "Kathisma 8, part 1 (Ps 55–58)" },

  // Day 12 — Kathisma 8, part 2 (Ps 59–63)
  // O God, You have cast us off; my soul thirsts for You
  { ps: { ref: "Ps 59–63", ch: 59 }, note: "Kathisma 8, part 2 (Ps 59–63)" },

  // Day 13 — Kathisma 9 (Ps 64–69)
  // Praise is awaiting You, O God; shout joyfully to God; Save me, O God
  { ps: { ref: "Ps 64–69", ch: 64 }, note: "Kathisma 9 (Ps 64–69)" },

  // Day 14 — Kathisma 10, part 1 (Ps 70–72)
  // In You, O Lord, I put my trust; the righteous shall flourish
  { ps: { ref: "Ps 70–72", ch: 70 }, note: "Kathisma 10, part 1 (Ps 70–72)" },

  // Day 15 — Kathisma 10, part 2 (Ps 73–76)
  // O God, why have You cast us off forever; we give thanks to You, O God
  { ps: { ref: "Ps 73–76", ch: 73 }, note: "Kathisma 10, part 2 (Ps 73–76)" },

  // Day 16 — Kathisma 11, part 1 (Ps 77–80)
  // Give ear, O my people; how lovely is Your tabernacle, O Lord of hosts
  { ps: { ref: "Ps 77–80", ch: 77 }, note: "Kathisma 11, part 1 (Ps 77–80)" },

  // Day 17 — Kathisma 11, part 2 (Ps 81–84)
  // God stands in the congregation of the mighty; how amiable are Your dwellings
  { ps: { ref: "Ps 81–84", ch: 81 }, note: "Kathisma 11, part 2 (Ps 81–84)" },

  // Day 18 — Kathisma 12 (Ps 85–90)
  // Bow down Your ear, O Lord; Lord, You have been our dwelling place in all generations
  { ps: { ref: "Ps 85–90", ch: 85 }, note: "Kathisma 12 (Ps 85–90)" },

  // Day 19 — Kathisma 13, part 1 (Ps 91–95)
  // He who dwells in the secret place of the Most High; O come, let us sing to the Lord
  { ps: { ref: "Ps 91–95", ch: 91 }, note: "Kathisma 13, part 1 (Ps 91–95)" },

  // Day 20 — Kathisma 13, part 2 (Ps 96–100)
  // The Lord reigns; O sing to the Lord a new song; Enter His gates with thanksgiving
  { ps: { ref: "Ps 96–100", ch: 96 }, note: "Kathisma 13, part 2 (Ps 96–100)" },

  // Day 21 — Kathisma 14 (Ps 101–104)
  // Hear my prayer, O Lord; bless the Lord, O my soul; He has not dealt with us according to our sins
  { ps: { ref: "Ps 101–104", ch: 101 }, note: "Kathisma 14 (Ps 101–104)" },

  // Day 22 — Kathisma 15 (Ps 105–108)
  // Oh, give thanks to the Lord; they cried out to the Lord in their trouble
  { ps: { ref: "Ps 105–108", ch: 105 }, note: "Kathisma 15 (Ps 105–108)" },

  // Day 23 — Kathisma 16, part 1 (Ps 109–113)
  // The Lord said to my Lord; not unto us, O Lord; praise the Lord, O my soul
  { ps: { ref: "Ps 109–113", ch: 109 }, note: "Kathisma 16, part 1 (Ps 109–113)" },

  // Day 24 — Kathisma 16, part 2 (Ps 114–117)
  // I love the Lord; the Lord is on my side; This is the day the Lord has made
  { ps: { ref: "Ps 114–117", ch: 114 }, note: "Kathisma 16, part 2 (Ps 114–117)" },

  // Day 25 — Kathisma 17 (Ps 118)
  // The great Psalm of the Law — 176 verses, 22 stanzas (one per Hebrew letter)
  // Blessed are the undefiled in the way, who walk in the law of the Lord
  { ps: { ref: "Ps 118", ch: 118 }, note: "Kathisma 17 (Ps 118)" },

  // Day 26 — Kathisma 18, part 1 (Ps 119–126) — The Songs of Ascent, part 1
  // I will lift up my eyes to the hills; the Lord shall preserve your going out and coming in
  { ps: { ref: "Ps 119–126", ch: 119 }, note: "Kathisma 18, part 1 (Ps 119–126) — The Songs of Ascent, part 1" },

  // Day 27 — Kathisma 18, part 2 (Ps 127–133) — The Songs of Ascent, part 2
  // Unless the Lord builds the house; behold, how good and pleasant for brethren to dwell together
  { ps: { ref: "Ps 127–133", ch: 127 }, note: "Kathisma 18, part 2 (Ps 127–133) — The Songs of Ascent, part 2" },

  // Day 28 — Kathisma 19, part 1 (Ps 134–138)
  // Praise the name of the Lord; by the rivers of Babylon; I will praise You with my whole heart
  { ps: { ref: "Ps 134–138", ch: 134 }, note: "Kathisma 19, part 1 (Ps 134–138)" },

  // Day 29 — Kathisma 19, part 2 (Ps 139–142)
  // Deliver me, O Lord; I cry out to the Lord; my spirit is overwhelmed within me
  { ps: { ref: "Ps 139–142", ch: 139 }, note: "Kathisma 19, part 2 (Ps 139–142)" },

  // Day 30 — Kathisma 20 (Ps 143–150)
  // Blessed be the Lord my Rock; praise Him with trumpet, harp, and dance
  // Let everything that has breath praise the Lord. Alleluia!
  { ps: { ref: "Ps 143–150", ch: 143 }, note: "Kathisma 20 (Ps 143–150)" },
];
