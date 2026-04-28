// Orthodox Companion — Reading Plan
// Plan: Prophets — 60 Days (plan-prophets.js)
// Variable: PLAN_PROPHETS
// Days: 60
// Coverage (LXX order):
//   Major Prophets: Isaiah (days 1–17) · Jeremiah (days 18–30)
//                   Lamentations (day 31) · Baruch + Letter of Jeremiah (days 32–33)
//                   Ezekiel (days 34–45) · Daniel + additions (days 46–49)
//   Minor Prophets: Hosea (days 50–51) · Joel (day 52) · Amos (days 52–53)
//                   Obadiah + Jonah (day 54) · Micah (day 55) · Nahum + Habakkuk (day 56)
//                   Zephaniah + Haggai (day 57) · Zechariah (days 58–59) · Malachi (day 60)
// ~260 chapters total, ~4 chapters/day
// Index 0 is unused — plan is 1-indexed.

const PLAN_PROPHETS = [
  null, // index 0 unused

  // ══════════════════════════════════════════════════════
  //  ISAIAH  (Days 1–17, 66 chapters)
  //  "The Fifth Evangelist" — more quoted in the NT than any other prophet
  // ══════════════════════════════════════════════════════

  // Day 1 — The indictment of Israel; come, let us reason together; the vision of the mountain of the Lord
  { ot: { ref: "Isa 1–4", book: "ISA", ch: 1 }, note: "The indictment of Israel; come, let us reason together; the vision of the mountain of the Lord" },

  // Day 2 — The vineyard song; Isaiah's call: Holy, holy, holy; the sign of Immanuel
  { ot: { ref: "Isa 5–8", book: "ISA", ch: 5 }, note: "The vineyard song; Isaiah's call: Holy, holy, holy; the sign of Immanuel" },

  // Day 3 — For unto us a Child is born; the rod out of Jesse's stem; the wolf and the lamb
  { ot: { ref: "Isa 9–12", book: "ISA", ch: 9 }, note: "For unto us a Child is born; the rod out of Jesse's stem; the wolf and the lamb" },

  // Day 4 — Oracles against Babylon, Assyria, Philistia, Moab, Damascus
  { ot: { ref: "Isa 13–17", book: "ISA", ch: 13 }, note: "Oracles against Babylon, Assyria, Philistia, Moab, Damascus" },

  // Day 5 — Oracles against Egypt and Ethiopia; the oracle of the valley of vision
  { ot: { ref: "Isa 18–22", book: "ISA", ch: 18 }, note: "Oracles against Egypt and Ethiopia; the oracle of the valley of vision" },

  // Day 6 — Tyre and Sidon; the little apocalypse: the earth is laid waste; your dead shall live
  { ot: { ref: "Isa 23–27", book: "ISA", ch: 23 }, note: "Tyre and Sidon; the little apocalypse: the earth is laid waste; your dead shall live" },

  // Day 7 — Woes on Ephraim, Jerusalem, Egypt; a cornerstone in Zion; the book sealed
  { ot: { ref: "Isa 28–31", book: "ISA", ch: 28 }, note: "Woes on Ephraim, Jerusalem, Egypt; a cornerstone in Zion; the book sealed" },

  // Day 8 — A King shall reign in righteousness; the wilderness shall blossom; Sennacherib's defeat
  { ot: { ref: "Isa 32–36", book: "ISA", ch: 32 }, note: "A King shall reign in righteousness; the wilderness shall blossom; Sennacherib's defeat" },

  // Day 9 — Hezekiah's prayer; the fall of Assyria; Hezekiah's illness; comfort my people
  { ot: { ref: "Isa 37–40", book: "ISA", ch: 37 }, note: "Hezekiah's prayer; the fall of Assyria; Hezekiah's illness; comfort my people" },

  // Day 10 — Fear not, I am with you; the great debate; idols have no breath; my Servant whom I uphold
  { ot: { ref: "Isa 41–44", book: "ISA", ch: 41 }, note: "Fear not, I am with you; the great debate; idols have no breath; my Servant whom I uphold" },

  // Day 11 — Cyrus named before his birth; I am the Lord, there is no other; come out of Babylon
  { ot: { ref: "Isa 45–48", book: "ISA", ch: 45 }, note: "Cyrus named before his birth; I am the Lord, there is no other; come out of Babylon" },

  // Day 12 — The Servant's obedience; salvation to the ends of the earth; the First Servant Song
  { ot: { ref: "Isa 49–52", book: "ISA", ch: 49 }, note: "The Servant's obedience; salvation to the ends of the earth; the First Servant Song" },

  // Day 13 — He was wounded for our transgressions — Isaiah 53; the desolate woman; enlarge your tent
  { ot: { ref: "Isa 53–56", book: "ISA", ch: 53 }, note: "He was wounded for our transgressions — Isaiah 53; the desolate woman; enlarge your tent" },

  // Day 14 — Peace to the far and to the near; is this not the fast I choose? your light shall break forth
  { ot: { ref: "Isa 57–60", book: "ISA", ch: 57 }, note: "Peace to the far and to the near; is this not the fast I choose? your light shall break forth" },

  // Day 15 — The Spirit of the Lord is upon me; the year of the Lord's favor; the watchmen on your walls
  { ot: { ref: "Isa 61–63", book: "ISA", ch: 61 }, note: "The Spirit of the Lord is upon me; the year of the Lord's favor; the watchmen on your walls" },

  // Day 16 — You are our Father, we are the clay; our holy cities have become a wilderness
  { ot: { ref: "Isa 64–65", book: "ISA", ch: 64 }, note: "You are our Father, we are the clay; our holy cities have become a wilderness" },

  // Day 17 — Behold, I create new heavens and a new earth; the wolf and the lamb shall feed together
  // To this one I will look: he who is humble and of a contrite spirit
  { ot: { ref: "Isa 66", book: "ISA", ch: 66 }, note: "Behold, I create new heavens and a new earth; the wolf and the lamb shall feed together" },

  // ══════════════════════════════════════════════════════
  //  JEREMIAH  (Days 18–30, 52 chapters)
  //  The weeping prophet — called before birth, persecuted, faithful to the end
  // ══════════════════════════════════════════════════════

  // Day 18 — Jeremiah's call; before I formed you in the womb I knew you; the almond rod and the boiling pot
  { ot: { ref: "Jer 1–4", book: "JER", ch: 1 }, note: "Jeremiah's call; before I formed you in the womb I knew you; the almond rod and the boiling pot" },

  // Day 19 — Has a nation ever changed its gods? The broken cisterns; the lioness from the north
  { ot: { ref: "Jer 5–8", book: "JER", ch: 5 }, note: "Has a nation ever changed its gods? The broken cisterns; the lioness from the north" },

  // Day 20 — Is there no balm in Gilead? The Temple sermon; do not trust in deceptive words
  { ot: { ref: "Jer 9–12", book: "JER", ch: 9 }, note: "Is there no balm in Gilead? The Temple sermon; do not trust in deceptive words" },

  // Day 21 — The linen belt; the great drought; the potter and the clay; the broken flask
  { ot: { ref: "Jer 13–16", book: "JER", ch: 13 }, note: "The linen belt; the great drought; the potter and the clay; the broken flask" },

  // Day 22 — The sabbath; the potter's house; the day of Jeremiah's birth cursed; the new covenant announced
  { ot: { ref: "Jer 17–20", book: "JER", ch: 17 }, note: "The sabbath; the potter's house; the day of Jeremiah's birth cursed; the new covenant announced" },

  // Day 23 — The kings judged; the righteous Branch; the lying prophets; the letter to the exiles
  { ot: { ref: "Jer 21–24", book: "JER", ch: 21 }, note: "The kings judged; the righteous Branch; the lying prophets; the letter to the exiles" },

  // Day 24 — Seventy years of captivity; the cup of wrath; Jeremiah's trial; the yoke of Babylon
  { ot: { ref: "Jer 25–28", book: "JER", ch: 25 }, note: "Seventy years of captivity; the cup of wrath; Jeremiah's trial; the yoke of Babylon" },

  // Day 25 — The Book of Consolation: I will restore your fortunes; the new covenant written on hearts
  { ot: { ref: "Jer 29–32", book: "JER", ch: 29 }, note: "The Book of Consolation: I will restore your fortunes; the new covenant written on hearts" },

  // Day 26 — Behold, the days are coming; call to me and I will answer; the Branch of righteousness
  { ot: { ref: "Jer 33–36", book: "JER", ch: 33 }, note: "Behold, the days are coming; call to me and I will answer; the Branch of righteousness" },

  // Day 27 — Jeremiah imprisoned; the fall of Jerusalem approaches; Jeremiah in the cistern; in the court of the guard
  { ot: { ref: "Jer 37–40", book: "JER", ch: 37 }, note: "Jeremiah imprisoned; the fall of Jerusalem approaches; Jeremiah in the cistern; in the court of the guard" },

  // Day 28 — The fall of Jerusalem; Gedaliah assassinated; the remnant flees to Egypt against God's word
  { ot: { ref: "Jer 41–44", book: "JER", ch: 41 }, note: "The fall of Jerusalem; Gedaliah assassinated; the remnant flees to Egypt against God's word" },

  // Day 29 — The word to Baruch; oracles against Egypt, Philistia, Moab, Ammon
  { ot: { ref: "Jer 45–48", book: "JER", ch: 45 }, note: "The word to Baruch; oracles against Egypt, Philistia, Moab, Ammon" },

  // Day 30 — Oracles against Edom, Damascus, Kedar, Elam; the great oracle against Babylon
  // How is Babylon taken! The Lord has opened His armory. Flee from her midst.
  { ot: { ref: "Jer 49–52", book: "JER", ch: 49 }, note: "Oracles against Edom, Damascus, Kedar, Elam; the great oracle against Babylon" },

  // ══════════════════════════════════════════════════════
  //  LAMENTATIONS  (Day 31, 5 chapters)
  //  The city sits desolate — but His mercies are new every morning
  // ══════════════════════════════════════════════════════

  // Day 31 — Jerusalem in ruins; Is it nothing to you, all you who pass by?
  // The Lord is righteous, for I have rebelled against His word
  // Great is Your faithfulness; The Lord is my portion, therefore I will hope in Him
  { ot: { ref: "Lam 1–5", book: "LAM", ch: 1 }, note: "Jerusalem in ruins; Is it nothing to you, all you who pass by?" },

  // ══════════════════════════════════════════════════════
  //  BARUCH + LETTER OF JEREMIAH  (Days 32–33, 6 + 1 chapters)
  //  Deuterocanonical — exilic wisdom, the condemnation of idolatry
  // ══════════════════════════════════════════════════════

  // Day 32 — Baruch's confession; Israel scattered for sin; wisdom not found among the nations
  // Happy are we, O Israel, for what pleases God is known to us
  { ot: { ref: "Bar 1–4", book: "BAR", ch: 1 }, note: "Baruch's confession; Israel scattered for sin; wisdom not found among the nations" },

  // Day 33 — Jerusalem comforted; take courage, my people; the Letter of Jeremiah against idols
  // Do not fear them — they cannot speak, they cannot help
  { ot: { ref: "Bar 5–6; LJe", book: "BAR", ch: 5 }, note: "Jerusalem comforted; take courage, my people; the Letter of Jeremiah against idols" },

  // ══════════════════════════════════════════════════════
  //  EZEKIEL  (Days 34–45, 48 chapters)
  //  The prophet of exile, visions, and the valley of dry bones
  // ══════════════════════════════════════════════════════

  // Day 34 — The vision of the chariot-throne; the call to be a watchman; lying on his side
  { ot: { ref: "Ezek 1–4", book: "EZK", ch: 1 }, note: "The vision of the chariot-throne; the call to be a watchman; lying on his side" },

  // Day 35 — The siege of Jerusalem enacted; the glory begins to depart from the Temple
  { ot: { ref: "Ezek 5–9", book: "EZK", ch: 5 }, note: "The siege of Jerusalem enacted; the glory begins to depart from the Temple" },

  // Day 36 — The glory of the Lord departs; the two eagles; the proverb about sour grapes
  { ot: { ref: "Ezek 10–14", book: "EZK", ch: 10 }, note: "The glory of the Lord departs; the two eagles; the proverb about sour grapes" },

  // Day 37 — The vine, the unfaithful wife, and the useless wood; the riddle of the eagles
  { ot: { ref: "Ezek 15–18", book: "EZK", ch: 15 }, note: "The vine, the unfaithful wife, and the useless wood; the riddle of the eagles" },

  // Day 38 — The parable of the princes; Ezekiel forbidden to mourn his wife; oracles against Ammon
  { ot: { ref: "Ezek 19–22", book: "EZK", ch: 19 }, note: "The parable of the princes; Ezekiel forbidden to mourn his wife; oracles against Ammon" },

  // Day 39 — The two sisters Oholah and Oholibah; the siege begins; oracles against Egypt
  { ot: { ref: "Ezek 23–26", book: "EZK", ch: 23 }, note: "The two sisters Oholah and Oholibah; the siege begins; oracles against Egypt" },

  // Day 40 — The lament over Tyre; oracles against Egypt; the watchman renewed
  { ot: { ref: "Ezek 27–31", book: "EZK", ch: 27 }, note: "The lament over Tyre; oracles against Egypt; the watchman renewed" },

  // Day 41 — The lament over Pharaoh; the watchman and individual accountability
  // I have no pleasure in the death of the wicked — turn and live
  { ot: { ref: "Ezek 32–34", book: "EZK", ch: 32 }, note: "The lament over Pharaoh; the watchman and individual accountability" },

  // Day 42 — Against Edom; the mountains of Israel shall be tilled; a new heart and a new spirit
  { ot: { ref: "Ezek 35–37", book: "EZK", ch: 35 }, note: "Against Edom; the mountains of Israel shall be tilled; a new heart and a new spirit" },

  // Day 43 — The valley of dry bones; the two sticks made one; the oracle against Gog of Magog
  { ot: { ref: "Ezek 38–40", book: "EZK", ch: 38 }, note: "The valley of dry bones; the two sticks made one; the oracle against Gog of Magog" },

  // Day 44 — The restored Temple: the outer court; the inner court; the altar; the prince's gate
  { ot: { ref: "Ezek 41–44", book: "EZK", ch: 41 }, note: "The restored Temple: the outer court; the inner court; the altar; the prince's gate" },

  // Day 45 — The river flowing from the Temple; the division of the land; the new Jerusalem
  // The name of the city from that day shall be: The Lord Is There
  { ot: { ref: "Ezek 45–48", book: "EZK", ch: 45 }, note: "The river flowing from the Temple; the division of the land; the new Jerusalem" },

  // ══════════════════════════════════════════════════════
  //  DANIEL + ADDITIONS  (Days 46–49)
  //  Apocalyptic vision; the Son of Man comes with the clouds of heaven
  // ══════════════════════════════════════════════════════

  // Day 46 — Daniel and his companions; Nebuchadnezzar's dream; the statue of four kingdoms
  { ot: { ref: "Dan 1–3", book: "DAN", ch: 1 }, note: "Daniel and his companions; Nebuchadnezzar's dream; the statue of four kingdoms" },

  // Day 47 — The great tree; Belshazzar's feast; the writing on the wall; Daniel in the lions' den
  { ot: { ref: "Dan 4–6", book: "DAN", ch: 4 }, note: "The great tree; Belshazzar's feast; the writing on the wall; Daniel in the lions' den" },

  // Day 48 — The four beasts; the Son of Man on the clouds; the ram and the goat; the seventy weeks
  { ot: { ref: "Dan 7–9", book: "DAN", ch: 7 }, note: "The four beasts; the Son of Man on the clouds; the ram and the goat; the seventy weeks" },

  // Day 49 — The vision of the latter days; Michael the great prince; many who sleep shall awaken
  // Susanna: righteousness vindicated; Bel and the Dragon: false gods exposed
  // The Prayer of Azariah and the Song of the Three Young Men
  { ot: { ref: "Dan 10–12; Sus; Bel; S3Y", book: "DAN", ch: 10 }, note: "The vision of the latter days; Michael the great prince; many who sleep shall awaken" },

  // ══════════════════════════════════════════════════════
  //  THE TWELVE MINOR PROPHETS  (Days 50–60)
  //  LXX order: Hosea · Joel · Amos · Obadiah · Jonah · Micah
  //             Nahum · Habakkuk · Zephaniah · Haggai · Zechariah · Malachi
  // ══════════════════════════════════════════════════════

  // Day 50 — HOSEA, part 1
  // Go, take a wife of harlotry — a type of God's covenant with Israel
  // I will betroth you to me forever in righteousness, justice, love, and compassion
  { ot: { ref: "Hos 1–7", book: "HOS", ch: 1 }, note: "HOSEA, part 1" },

  // Day 51 — HOSEA, part 2
  // Out of Egypt I called My Son; how can I give you up, O Ephraim?
  // Return to the Lord your God, for you have stumbled in your iniquity
  { ot: { ref: "Hos 8–14", book: "HOS", ch: 8 }, note: "HOSEA, part 2" },

  // Day 52 — JOEL + AMOS, part 1
  // Blow the trumpet in Zion; rend your heart and not your garments
  // I will pour out My Spirit on all flesh; the sun shall be turned to darkness
  // The words of Amos, a shepherd from Tekoa; judgment on the nations
  { ot: { ref: "Joel 1–3; Amos 1–2", book: "JOL", ch: 1 }, note: "JOEL + AMOS, part 1" },

  // Day 53 — AMOS, part 2
  // Hear this word, O house of Israel; seek the Lord and live
  // Let justice roll down like waters, and righteousness like a mighty stream
  // I will restore the fortunes of my people Israel — the Messianic ending
  { ot: { ref: "Amos 3–9", book: "AMO", ch: 3 }, note: "AMOS, part 2" },

  // Day 54 — OBADIAH + JONAH
  // The pride of Edom brought low; the Day of the Lord is near
  // Jonah's flight; the great fish; the prayer from the deep; the repentance of Nineveh
  // God's mercy is wider than Jonah imagined — should I not pity this great city?
  { ot: { ref: "Obad; Jon 1–4", book: "OBA", ch: 1 }, note: "OBADIAH + JONAH" },

  // Day 55 — MICAH
  // Hear O peoples; they shall beat their swords into plowshares
  // But you, Bethlehem Ephrathah — from you shall come forth the Ruler of Israel
  // What does the Lord require of you but to do justice, love mercy, and walk humbly with your God?
  { ot: { ref: "Mic 1–7", book: "MIC", ch: 1 }, note: "MICAH" },

  // Day 56 — NAHUM + HABAKKUK
  // The Lord is slow to anger but great in power; Nineveh shall be desolate
  // O Lord, how long shall I cry? The just shall live by his faith
  // Though the fig tree does not blossom, yet I will rejoice in the Lord
  { ot: { ref: "Nah 1–3; Hab 1–3", book: "NAM", ch: 1 }, note: "NAHUM + HABAKKUK" },

  // Day 57 — ZEPHANIAH + HAGGAI
  // The great Day of the Lord is near; I will leave in your midst a humble and lowly people
  // Sing aloud, O daughter of Zion; the Lord your God is in your midst — a mighty One who saves
  // Is it time for you to dwell in your paneled houses while My house lies in ruins?
  { ot: { ref: "Zeph 1–3; Hag 1–2", book: "ZEP", ch: 1 }, note: "ZEPHANIAH + HAGGAI" },

  // Day 58 — ZECHARIAH, part 1
  // Eight night visions: the horsemen, the four horns, the measuring line
  // Not by might, nor by power, but by My Spirit, says the Lord of Hosts
  // Rejoice greatly, O daughter of Zion — your King is coming, humble and riding on a donkey
  { ot: { ref: "Zech 1–8", book: "ZEC", ch: 1 }, note: "ZECHARIAH, part 1" },

  // Day 59 — ZECHARIAH, part 2
  // The burden of the word of the Lord against Israel and the nations
  // I will pour out a spirit of grace and supplication; they will look on Me, the one they have pierced
  // On that day living waters shall flow out from Jerusalem
  { ot: { ref: "Zech 9–14", book: "ZEC", ch: 9 }, note: "ZECHARIAH, part 2" },

  // Day 60 — MALACHI
  // I have loved you, says the Lord; but you ask, How have You loved us?
  // Will a man rob God? Bring the whole tithe into the storehouse
  // Behold, I will send you Elijah the prophet before the great and dreadful Day of the Lord
  // The final word of the Old Testament — pointing forward to the Forerunner and the Sun of Righteousness
  { ot: { ref: "Mal 1–4", book: "MAL", ch: 1 }, note: "MALACHI" },
];
