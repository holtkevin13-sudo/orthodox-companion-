// Orthodox Companion — Reading Plan
// Plan: Old Testament — 1 Year (plan-ot-1year.js)
// Variable: PLAN_OT_1YEAR
// Days: 365
// Coverage: Full Orthodox OT canon in LXX order, ~3 chapters/day
//   Pentateuch (days 1–63) · Historical Books (days 64–137)
//   Ezra · Nehemiah · Esther (days 138–152) · Deuterocanonical Books (days 153–187)
//   Wisdom Books (days 188–273) · Major Prophets (days 274–339)
//   Minor Prophets (days 340–365)
// Psalms: read 5/day across 30 days in the Wisdom section
// All deuterocanonicals included: Tobit · Judith · 1–4 Maccabees · 1 Esdras
//   Prayer of Manasseh · Wisdom of Solomon · Sirach · Baruch · Letter of Jeremiah
//   Susanna · Bel and the Dragon · Song of the Three Young Men
// Index 0 is unused — plan is 1-indexed.

const PLAN_OT_1YEAR = [
  null, // index 0 unused

  // ══════════════════════════════════════════════════════
  //  PENTATEUCH  (Days 1–63)
  // ══════════════════════════════════════════════════════

  // ── GENESIS (Days 1–17, 50 chapters) ──────────────────
  { ot: { ref: "Gen 1–3",   book: "GEN", ch: 1  }, note: "Creation and the Fall" }, // Day 1   — Creation and the Fall
  { ot: { ref: "Gen 4–6",   book: "GEN", ch: 4  }, note: "Cain; sons of Adam; Noah finds grace" }, // Day 2   — Cain; sons of Adam; Noah finds grace
  { ot: { ref: "Gen 7–9",   book: "GEN", ch: 7  }, note: "The flood; the rainbow covenant" }, // Day 3   — The flood; the rainbow covenant
  { ot: { ref: "Gen 10–12", book: "GEN", ch: 10 }, note: "The nations; Babel; the call of Abram" }, // Day 4   — The nations; Babel; the call of Abram
  { ot: { ref: "Gen 13–15", book: "GEN", ch: 13 }, note: "Abram and Lot; Melchizedek; the covenant" }, // Day 5   — Abram and Lot; Melchizedek; the covenant
  { ot: { ref: "Gen 16–18", book: "GEN", ch: 16 }, note: "Hagar; circumcision; the three visitors" }, // Day 6   — Hagar; circumcision; the three visitors
  { ot: { ref: "Gen 19–21", book: "GEN", ch: 19 }, note: "Sodom destroyed; Lot's wife; Isaac born" }, // Day 7   — Sodom destroyed; Lot's wife; Isaac born
  { ot: { ref: "Gen 22–24", book: "GEN", ch: 22 }, note: "The binding of Isaac; a wife for Isaac" }, // Day 8   — The binding of Isaac; a wife for Isaac
  { ot: { ref: "Gen 25–27", book: "GEN", ch: 25 }, note: "Esau and Jacob; the birthright sold" }, // Day 9   — Esau and Jacob; the birthright sold
  { ot: { ref: "Gen 28–30", book: "GEN", ch: 28 }, note: "Jacob's ladder; Rachel; the twelve tribes begin" }, // Day 10  — Jacob's ladder; Rachel; the twelve tribes begin
  { ot: { ref: "Gen 31–33", book: "GEN", ch: 31 }, note: "Jacob's return; wrestling with God" }, // Day 11  — Jacob's return; wrestling with God
  { ot: { ref: "Gen 34–36", book: "GEN", ch: 34 }, note: "Dinah; Jacob named Israel; Isaac dies" }, // Day 12  — Dinah; Jacob named Israel; Isaac dies
  { ot: { ref: "Gen 37–39", book: "GEN", ch: 37 }, note: "Joseph sold; Potiphar; Joseph in prison" }, // Day 13  — Joseph sold; Potiphar; Joseph in prison
  { ot: { ref: "Gen 40–42", book: "GEN", ch: 40 }, note: "Dreams interpreted; Joseph before Pharaoh" }, // Day 14  — Dreams interpreted; Joseph before Pharaoh
  { ot: { ref: "Gen 43–45", book: "GEN", ch: 43 }, note: "Brothers return; Joseph reveals himself" }, // Day 15  — Brothers return; Joseph reveals himself
  { ot: { ref: "Gen 46–48", book: "GEN", ch: 46 }, note: "Jacob comes to Egypt; Joseph's blessing" }, // Day 16  — Jacob comes to Egypt; Joseph's blessing
  { ot: { ref: "Gen 49–50", book: "GEN", ch: 49 }, note: "Jacob's blessings; death; God meant it for good" }, // Day 17  — Jacob's blessings; death; God meant it for good

  // ── EXODUS (Days 18–30, 40 chapters) ─────────────────
  { ot: { ref: "Exo 1–3",   book: "EXO", ch: 1  }, note: "Slavery in Egypt; Moses; the burning bush" }, // Day 18  — Slavery in Egypt; Moses; the burning bush
  { ot: { ref: "Exo 4–6",   book: "EXO", ch: 4  }, note: "Signs for Moses; first audience with Pharaoh" }, // Day 19  — Signs for Moses; first audience with Pharaoh
  { ot: { ref: "Exo 7–9",   book: "EXO", ch: 7  }, note: "Plagues 1–6: water, frogs, gnats, flies, livestock, boils" }, // Day 20  — Plagues 1–6: water, frogs, gnats, flies, livestock, boils
  { ot: { ref: "Exo 10–12", book: "EXO", ch: 10 }, note: "Plagues 7–10; the Passover instituted" }, // Day 21  — Plagues 7–10; the Passover instituted
  { ot: { ref: "Exo 13–15", book: "EXO", ch: 13 }, note: "The Exodus; the Red Sea crossing; the Song of Moses" }, // Day 22  — The Exodus; the Red Sea crossing; the Song of Moses
  { ot: { ref: "Exo 16–18", book: "EXO", ch: 16 }, note: "Manna; water from the rock; Jethro's counsel" }, // Day 23  — Manna; water from the rock; Jethro's counsel
  { ot: { ref: "Exo 19–21", book: "EXO", ch: 19 }, note: "Sinai; the Ten Commandments; the Book of the Covenant" }, // Day 24  — Sinai; the Ten Commandments; the Book of the Covenant
  { ot: { ref: "Exo 22–24", book: "EXO", ch: 22 }, note: "Laws; the covenant ratified; the seventy elders" }, // Day 25  — Laws; the covenant ratified; the seventy elders
  { ot: { ref: "Exo 25–27", book: "EXO", ch: 25 }, note: "Instructions for the Tabernacle: ark, table, lampstand" }, // Day 26  — Instructions for the Tabernacle: ark, table, lampstand
  { ot: { ref: "Exo 28–30", book: "EXO", ch: 28 }, note: "The priestly garments; the altar; consecration" }, // Day 27  — The priestly garments; the altar; consecration
  { ot: { ref: "Exo 31–33", book: "EXO", ch: 31 }, note: "The Sabbath; the golden calf; Moses' intercession" }, // Day 28  — The Sabbath; the golden calf; Moses' intercession
  { ot: { ref: "Exo 34–36", book: "EXO", ch: 34 }, note: "The covenant renewed; the Tabernacle constructed" }, // Day 29  — The covenant renewed; the Tabernacle constructed
  { ot: { ref: "Exo 37–40", book: "EXO", ch: 37 }, note: "The furnishings completed; the glory fills the Tabernacle" }, // Day 30  — The furnishings completed; the glory fills the Tabernacle

  // ── LEVITICUS (Days 31–39, 27 chapters) ──────────────
  { ot: { ref: "Lev 1–3",   book: "LEV", ch: 1  }, note: "Burnt, grain, and peace offerings" }, // Day 31  — Burnt, grain, and peace offerings
  { ot: { ref: "Lev 4–6",   book: "LEV", ch: 4  }, note: "Sin and guilt offerings; the perpetual fire" }, // Day 32  — Sin and guilt offerings; the perpetual fire
  { ot: { ref: "Lev 7–9",   book: "LEV", ch: 7  }, note: "Peace offerings; the ordination of Aaron" }, // Day 33  — Peace offerings; the ordination of Aaron
  { ot: { ref: "Lev 10–12", book: "LEV", ch: 10 }, note: "Nadab and Abihu; clean and unclean foods" }, // Day 34  — Nadab and Abihu; clean and unclean foods
  { ot: { ref: "Lev 13–15", book: "LEV", ch: 13 }, note: "Skin diseases; mildew; bodily discharges" }, // Day 35  — Skin diseases; mildew; bodily discharges
  { ot: { ref: "Lev 16–18", book: "LEV", ch: 16 }, note: "The Day of Atonement; the blood; sexual laws" }, // Day 36  — The Day of Atonement; the blood; sexual laws
  { ot: { ref: "Lev 19–21", book: "LEV", ch: 19 }, note: "The Holiness Code; love your neighbor; priestly laws" }, // Day 37  — The Holiness Code; love your neighbor; priestly laws
  { ot: { ref: "Lev 22–24", book: "LEV", ch: 22 }, note: "Sacred offerings; the feasts of the Lord; the lampstand" }, // Day 38  — Sacred offerings; the feasts of the Lord; the lampstand
  { ot: { ref: "Lev 25–27", book: "LEV", ch: 25 }, note: "The Sabbath year; the Jubilee; vows and tithes" }, // Day 39  — The Sabbath year; the Jubilee; vows and tithes

  // ── NUMBERS (Days 40–51, 36 chapters) ────────────────
  { ot: { ref: "Num 1–3",   book: "NUM", ch: 1  }, note: "The census; the Levites appointed" }, // Day 40  — The census; the Levites appointed
  { ot: { ref: "Num 4–6",   book: "NUM", ch: 4  }, note: "Levitical duties; the Nazirite vow; the Aaronic blessing" }, // Day 41  — Levitical duties; the Nazirite vow; the Aaronic blessing
  { ot: { ref: "Num 7–9",   book: "NUM", ch: 7  }, note: "Offerings of the leaders; the cloud and fire" }, // Day 42  — Offerings of the leaders; the cloud and fire
  { ot: { ref: "Num 10–12", book: "NUM", ch: 10 }, note: "Departure from Sinai; complaining; Miriam's leprosy" }, // Day 43  — Departure from Sinai; complaining; Miriam's leprosy
  { ot: { ref: "Num 13–15", book: "NUM", ch: 13 }, note: "The twelve spies; the report; forty years decreed" }, // Day 44  — The twelve spies; the report; forty years decreed
  { ot: { ref: "Num 16–18", book: "NUM", ch: 16 }, note: "Korah's rebellion; Aaron's staff; priestly duties" }, // Day 45  — Korah's rebellion; Aaron's staff; priestly duties
  { ot: { ref: "Num 19–21", book: "NUM", ch: 19 }, note: "The red heifer; the death of Miriam; the bronze serpent" }, // Day 46  — The red heifer; the death of Miriam; the bronze serpent
  { ot: { ref: "Num 22–24", book: "NUM", ch: 22 }, note: "Balaam and his donkey; the oracles of blessing" }, // Day 47  — Balaam and his donkey; the oracles of blessing
  { ot: { ref: "Num 25–27", book: "NUM", ch: 25 }, note: "The apostasy at Peor; the second census; Joshua chosen" }, // Day 48  — The apostasy at Peor; the second census; Joshua chosen
  { ot: { ref: "Num 28–30", book: "NUM", ch: 28 }, note: "Appointed offerings; the feasts; vows" }, // Day 49  — Appointed offerings; the feasts; vows
  { ot: { ref: "Num 31–33", book: "NUM", ch: 31 }, note: "War against Midian; the tribes east of Jordan; the stages" }, // Day 50  — War against Midian; the tribes east of Jordan; the stages
  { ot: { ref: "Num 34–36", book: "NUM", ch: 34 }, note: "The land boundaries; cities of refuge; inheritance laws" }, // Day 51  — The land boundaries; cities of refuge; inheritance laws

  // ── DEUTERONOMY (Days 52–63, 34 chapters) ────────────
  { ot: { ref: "Deu 1–3",   book: "DEU", ch: 1  }, note: "Moses reviews the wilderness journey" }, // Day 52  — Moses reviews the wilderness journey
  { ot: { ref: "Deu 4–6",   book: "DEU", ch: 4  }, note: "Obey and live; the Shema: the Lord is One" }, // Day 53  — Obey and live; the Shema: the Lord is One
  { ot: { ref: "Deu 7–9",   book: "DEU", ch: 7  }, note: "Drive out the nations; remember the manna; the golden calf recalled" }, // Day 54  — Drive out the nations; remember the manna; the golden calf recalled
  { ot: { ref: "Deu 10–12", book: "DEU", ch: 10 }, note: "Circumcise your hearts; love the stranger; one place of worship" }, // Day 55  — Circumcise your hearts; love the stranger; one place of worship
  { ot: { ref: "Deu 13–15", book: "DEU", ch: 13 }, note: "False prophets; clean foods; the sabbatical year; firstborn" }, // Day 56  — False prophets; clean foods; the sabbatical year; firstborn
  { ot: { ref: "Deu 16–18", book: "DEU", ch: 16 }, note: "The feasts; justice; kings; the Levitical priesthood; the Prophet" }, // Day 57  — The feasts; justice; kings; the Levitical priesthood; the Prophet
  { ot: { ref: "Deu 19–21", book: "DEU", ch: 19 }, note: "Cities of refuge; witnesses; laws of war" }, // Day 58  — Cities of refuge; witnesses; laws of war
  { ot: { ref: "Deu 22–24", book: "DEU", ch: 22 }, note: "Marriage laws; divorce; various civil laws" }, // Day 59  — Marriage laws; divorce; various civil laws
  { ot: { ref: "Deu 25–27", book: "DEU", ch: 25 }, note: "Justice; firstfruits; write the Law on stones at the Jordan" }, // Day 60  — Justice; firstfruits; write the Law on stones at the Jordan
  { ot: { ref: "Deu 28–30", book: "DEU", ch: 28 }, note: "Blessings and curses; the secret things belong to the Lord" }, // Day 61  — Blessings and curses; the secret things belong to the Lord
  { ot: { ref: "Deu 31–33", book: "DEU", ch: 31 }, note: "Joshua commissioned; the Song of Moses; the blessings" }, // Day 62  — Joshua commissioned; the Song of Moses; the blessings
  { ot: { ref: "Deu 34",    book: "DEU", ch: 34 }, note: "Moses ascends Nebo; he sees the land; there has not arisen a prophet like Moses" }, // Day 63  — Moses ascends Nebo; he sees the land; there has not arisen a prophet like Moses

  // ══════════════════════════════════════════════════════
  //  HISTORICAL BOOKS  (Days 64–137)
  // ══════════════════════════════════════════════════════

  // ── JOSHUA (Days 64–71, 24 chapters) ─────────────────
  { ot: { ref: "Jos 1–3",   book: "JOS", ch: 1  }, note: "Be strong and courageous; crossing the Jordan" }, // Day 64  — Be strong and courageous; crossing the Jordan
  { ot: { ref: "Jos 4–6",   book: "JOS", ch: 4  }, note: "The twelve stones; circumcision; the fall of Jericho" }, // Day 65  — The twelve stones; circumcision; the fall of Jericho
  { ot: { ref: "Jos 7–9",   book: "JOS", ch: 7  }, note: "Achan's sin; Ai defeated; the Gibeonite deception" }, // Day 66  — Achan's sin; Ai defeated; the Gibeonite deception
  { ot: { ref: "Jos 10–12", book: "JOS", ch: 10 }, note: "The sun stands still; southern and northern campaigns" }, // Day 67  — The sun stands still; southern and northern campaigns
  { ot: { ref: "Jos 13–15", book: "JOS", ch: 13 }, note: "The division of the land; Caleb's inheritance" }, // Day 68  — The division of the land; Caleb's inheritance
  { ot: { ref: "Jos 16–18", book: "JOS", ch: 16 }, note: "The lots for Ephraim, Manasseh, and Benjamin" }, // Day 69  — The lots for Ephraim, Manasseh, and Benjamin
  { ot: { ref: "Jos 19–21", book: "JOS", ch: 19 }, note: "The remaining tribes; cities of refuge; Levitical cities" }, // Day 70  — The remaining tribes; cities of refuge; Levitical cities
  { ot: { ref: "Jos 22–24", book: "JOS", ch: 22 }, note: "The altar of witness; Joshua's farewell; choose this day" }, // Day 71  — The altar of witness; Joshua's farewell; choose this day

  // ── JUDGES (Days 72–78, 21 chapters) ─────────────────
  { ot: { ref: "Jdg 1–3",   book: "JDG", ch: 1  }, note: "Incomplete conquest; the cycle of apostasy; the first judges" }, // Day 72  — Incomplete conquest; the cycle of apostasy; the first judges
  { ot: { ref: "Jdg 4–6",   book: "JDG", ch: 4  }, note: "Deborah and Barak; Jael; the Song of Deborah; Gideon called" }, // Day 73  — Deborah and Barak; Jael; the Song of Deborah; Gideon called
  { ot: { ref: "Jdg 7–9",   book: "JDG", ch: 7  }, note: "Gideon's three hundred; Abimelech's usurpation" }, // Day 74  — Gideon's three hundred; Abimelech's usurpation
  { ot: { ref: "Jdg 10–12", book: "JDG", ch: 10 }, note: "Jephthah's vow; his daughter; minor judges" }, // Day 75  — Jephthah's vow; his daughter; minor judges
  { ot: { ref: "Jdg 13–15", book: "JDG", ch: 13 }, note: "The birth of Samson; Delilah; the riddle and vengeance" }, // Day 76  — The birth of Samson; Delilah; the riddle and vengeance
  { ot: { ref: "Jdg 16–18", book: "JDG", ch: 16 }, note: "Samson and Delilah; his death; Micah's idols; Dan's migration" }, // Day 77  — Samson and Delilah; his death; Micah's idols; Dan's migration
  { ot: { ref: "Jdg 19–21", book: "JDG", ch: 19 }, note: "The Levite's concubine; the civil war; Benjamin nearly destroyed" }, // Day 78  — The Levite's concubine; the civil war; Benjamin nearly destroyed

  // ── RUTH (Day 79, 4 chapters) ─────────────────────────
  { ot: { ref: "Rut 1–4",   book: "RUT", ch: 1  }, note: "Where you go I will go; Boaz the kinsman-redeemer; the ancestor of David" }, // Day 79  — Where you go I will go; Boaz the kinsman-redeemer; the ancestor of David

  // ── 1 SAMUEL (Days 80–90, 31 chapters) ───────────────
  { ot: { ref: "1 Sam 1–3",   book: "1SA", ch: 1  }, note: "Hannah's prayer; Samuel born; God calls in the night" }, // Day 80  — Hannah's prayer; Samuel born; God calls in the night
  { ot: { ref: "1 Sam 4–6",   book: "1SA", ch: 4  }, note: "The Ark captured; Eli dies; the Ark returned" }, // Day 81  — The Ark captured; Eli dies; the Ark returned
  { ot: { ref: "1 Sam 7–9",   book: "1SA", ch: 7  }, note: "Samuel as judge; Israel asks for a king; Saul seeks donkeys" }, // Day 82  — Samuel as judge; Israel asks for a king; Saul seeks donkeys
  { ot: { ref: "1 Sam 10–12", book: "1SA", ch: 10 }, note: "Saul anointed; Saul's first victory; Samuel's farewell" }, // Day 83  — Saul anointed; Saul's first victory; Samuel's farewell
  { ot: { ref: "1 Sam 13–15", book: "1SA", ch: 13 }, note: "Saul's rash oath; Samuel rejects Saul; Agag and the sheep" }, // Day 84  — Saul's rash oath; Samuel rejects Saul; Agag and the sheep
  { ot: { ref: "1 Sam 16–18", book: "1SA", ch: 16 }, note: "David anointed; the boy and Goliath; Jonathan's covenant" }, // Day 85  — David anointed; the boy and Goliath; Jonathan's covenant
  { ot: { ref: "1 Sam 19–21", book: "1SA", ch: 19 }, note: "Saul pursues David; Jonathan's intercession; David flees" }, // Day 86  — Saul pursues David; Jonathan's intercession; David flees
  { ot: { ref: "1 Sam 22–24", book: "1SA", ch: 22 }, note: "The cave of Adullam; the priests massacred; Saul spared" }, // Day 87  — The cave of Adullam; the priests massacred; Saul spared
  { ot: { ref: "1 Sam 25–27", book: "1SA", ch: 25 }, note: "Abigail; the cave at En Gedi; David among the Philistines" }, // Day 88  — Abigail; the cave at En Gedi; David among the Philistines
  { ot: { ref: "1 Sam 28–30", book: "1SA", ch: 28 }, note: "The witch of Endor; the Amalekites raided; David recovers all" }, // Day 89  — The witch of Endor; the Amalekites raided; David recovers all
  { ot: { ref: "1 Sam 31",    book: "1SA", ch: 31 }, note: "Saul and his sons fall on Gilboa" }, // Day 90  — Saul and his sons fall on Gilboa

  // ── 2 SAMUEL (Days 91–98, 24 chapters) ───────────────
  { ot: { ref: "2 Sam 1–3",   book: "2SA", ch: 1  }, note: "David laments for Saul; king over Judah; Abner defects" }, // Day 91  — David laments for Saul; king over Judah; Abner defects
  { ot: { ref: "2 Sam 4–6",   book: "2SA", ch: 4  }, note: "Ish-bosheth assassinated; David over all Israel; the Ark to Jerusalem" }, // Day 92  — Ish-bosheth assassinated; David over all Israel; the Ark to Jerusalem
  { ot: { ref: "2 Sam 7–9",   book: "2SA", ch: 7  }, note: "The Davidic covenant; David's prayer; kindness to Mephibosheth" }, // Day 93  — The Davidic covenant; David's prayer; kindness to Mephibosheth
  { ot: { ref: "2 Sam 10–12", book: "2SA", ch: 10 }, note: "War with Ammon; Bathsheba; Nathan: You are the man" }, // Day 94  — War with Ammon; Bathsheba; Nathan: You are the man
  { ot: { ref: "2 Sam 13–15", book: "2SA", ch: 13 }, note: "Amnon and Tamar; Absalom's revenge; Absalom's rebellion" }, // Day 95  — Amnon and Tamar; Absalom's revenge; Absalom's rebellion
  { ot: { ref: "2 Sam 16–18", book: "2SA", ch: 16 }, note: "David flees; Hushai's counsel; Absalom's death" }, // Day 96  — David flees; Hushai's counsel; Absalom's death
  { ot: { ref: "2 Sam 19–21", book: "2SA", ch: 19 }, note: "David's return; Sheba's revolt; the Gibeonite bloodguilt" }, // Day 97  — David's return; Sheba's revolt; the Gibeonite bloodguilt
  { ot: { ref: "2 Sam 22–24", book: "2SA", ch: 22 }, note: "The Song of David; David's last words; the census and plague" }, // Day 98  — The Song of David; David's last words; the census and plague

  // ── 1 KINGS (Days 99–106, 22 chapters) ───────────────
  { ot: { ref: "1 Ki 1–3",   book: "1KI", ch: 1  }, note: "Solomon crowned; David's death; Solomon's wisdom" }, // Day 99  — Solomon crowned; David's death; Solomon's wisdom
  { ot: { ref: "1 Ki 4–6",   book: "1KI", ch: 4  }, note: "Solomon's administration; building the Temple begins" }, // Day 100 — Solomon's administration; building the Temple begins
  { ot: { ref: "1 Ki 7–9",   book: "1KI", ch: 7  }, note: "The Temple furnishings; its dedication; the Lord appears again" }, // Day 101 — The Temple furnishings; its dedication; the Lord appears again
  { ot: { ref: "1 Ki 10–12", book: "1KI", ch: 10 }, note: "The Queen of Sheba; Solomon's wealth; the kingdom divided" }, // Day 102 — The Queen of Sheba; Solomon's wealth; the kingdom divided
  { ot: { ref: "1 Ki 13–15", book: "1KI", ch: 13 }, note: "The man of God from Judah; Jeroboam's sin; Asa and Ahab" }, // Day 103 — The man of God from Judah; Jeroboam's sin; Asa and Ahab
  { ot: { ref: "1 Ki 16–18", book: "1KI", ch: 16 }, note: "Ahab and Jezebel; Elijah and the drought; the contest on Carmel" }, // Day 104 — Ahab and Jezebel; Elijah and the drought; the contest on Carmel
  { ot: { ref: "1 Ki 19–21", book: "1KI", ch: 19 }, note: "Elijah at Horeb; the still small voice; Naboth's vineyard" }, // Day 105 — Elijah at Horeb; the still small voice; Naboth's vineyard
  { ot: { ref: "1 Ki 22",    book: "1KI", ch: 22 }, note: "Micaiah's true prophecy; Ahab killed at Ramoth-gilead" }, // Day 106 — Micaiah's true prophecy; Ahab killed at Ramoth-gilead

  // ── 2 KINGS (Days 107–115, 25 chapters) ──────────────
  { ot: { ref: "2 Ki 1–3",   book: "2KI", ch: 1  }, note: "Elijah and Ahaziah; Elijah taken in a chariot of fire" }, // Day 107 — Elijah and Ahaziah; Elijah taken in a chariot of fire
  { ot: { ref: "2 Ki 4–6",   book: "2KI", ch: 4  }, note: "Elisha's miracles; the Shunammite; Naaman cleansed" }, // Day 108 — Elisha's miracles; the Shunammite; Naaman cleansed
  { ot: { ref: "2 Ki 7–9",   book: "2KI", ch: 7  }, note: "The siege lifted; Hazael; Jehu anointed; Jezebel's death" }, // Day 109 — The siege lifted; Hazael; Jehu anointed; Jezebel's death
  { ot: { ref: "2 Ki 10–12", book: "2KI", ch: 10 }, note: "Jehu destroys Baal worship; Joash restores the Temple" }, // Day 110 — Jehu destroys Baal worship; Joash restores the Temple
  { ot: { ref: "2 Ki 13–15", book: "2KI", ch: 13 }, note: "Elisha's death; the bones that raised a man; Assyrian pressure" }, // Day 111 — Elisha's death; the bones that raised a man; Assyrian pressure
  { ot: { ref: "2 Ki 16–18", book: "2KI", ch: 16 }, note: "Ahaz's apostasy; the fall of Samaria; Hezekiah's reforms" }, // Day 112 — Ahaz's apostasy; the fall of Samaria; Hezekiah's reforms
  { ot: { ref: "2 Ki 19–21", book: "2KI", ch: 19 }, note: "Sennacherib's defeat; Hezekiah's illness; Manasseh's evil" }, // Day 113 — Sennacherib's defeat; Hezekiah's illness; Manasseh's evil
  { ot: { ref: "2 Ki 22–24", book: "2KI", ch: 22 }, note: "Josiah finds the Law; the great reform; Babylon threatens" }, // Day 114 — Josiah finds the Law; the great reform; Babylon threatens
  { ot: { ref: "2 Ki 25",    book: "2KI", ch: 25 }, note: "The fall of Jerusalem; the Temple burned; Gedaliah; Jehoiachin released" }, // Day 115 — The fall of Jerusalem; the Temple burned; Gedaliah; Jehoiachin released

  // ── 1 CHRONICLES (Days 116–125, 29 chapters) ─────────
  { ot: { ref: "1 Chr 1–3",   book: "1CH", ch: 1  }, note: "Genealogies: from Adam to Israel to David's line" }, // Day 116 — Genealogies: from Adam to Israel to David's line
  { ot: { ref: "1 Chr 4–6",   book: "1CH", ch: 4  }, note: "The tribes of Judah, Simeon, Reuben, Gad, Levi" }, // Day 117 — The tribes of Judah, Simeon, Reuben, Gad, Levi
  { ot: { ref: "1 Chr 7–9",   book: "1CH", ch: 7  }, note: "Issachar through Benjamin; the inhabitants of Jerusalem" }, // Day 118 — Issachar through Benjamin; the inhabitants of Jerusalem
  { ot: { ref: "1 Chr 10–12", book: "1CH", ch: 10 }, note: "Saul's death; David becomes king; his mighty men" }, // Day 119 — Saul's death; David becomes king; his mighty men
  { ot: { ref: "1 Chr 13–15", book: "1CH", ch: 13 }, note: "The Ark brought up; Uzzah's death; the Ark to Jerusalem" }, // Day 120 — The Ark brought up; Uzzah's death; the Ark to Jerusalem
  { ot: { ref: "1 Chr 16–18", book: "1CH", ch: 16 }, note: "The psalm of thanksgiving; the Davidic covenant; victories" }, // Day 121 — The psalm of thanksgiving; the Davidic covenant; victories
  { ot: { ref: "1 Chr 19–21", book: "1CH", ch: 19 }, note: "War with Ammon; the census; the threshing floor of Ornan" }, // Day 122 — War with Ammon; the census; the threshing floor of Ornan
  { ot: { ref: "1 Chr 22–24", book: "1CH", ch: 22 }, note: "David prepares for the Temple; Solomon charged; the divisions of priests" }, // Day 123 — David prepares for the Temple; Solomon charged; the divisions of priests
  { ot: { ref: "1 Chr 25–27", book: "1CH", ch: 25 }, note: "The musicians; gatekeepers; overseers; the army divisions" }, // Day 124 — The musicians; gatekeepers; overseers; the army divisions
  { ot: { ref: "1 Chr 28–29", book: "1CH", ch: 28 }, note: "David's final charge; the freewill offerings; Solomon's coronation" }, // Day 125 — David's final charge; the freewill offerings; Solomon's coronation

  // ── 2 CHRONICLES (Days 126–137, 36 chapters) ─────────
  { ot: { ref: "2 Chr 1–3",   book: "2CH", ch: 1  }, note: "Solomon's wisdom; the Temple building begins" }, // Day 126 — Solomon's wisdom; the Temple building begins
  { ot: { ref: "2 Chr 4–6",   book: "2CH", ch: 4  }, note: "The Temple furnishings; the Ark brought in; Solomon's prayer" }, // Day 127 — The Temple furnishings; the Ark brought in; Solomon's prayer
  { ot: { ref: "2 Chr 7–9",   book: "2CH", ch: 7  }, note: "The glory fills the Temple; the dedication; the Queen of Sheba" }, // Day 128 — The glory fills the Temple; the dedication; the Queen of Sheba
  { ot: { ref: "2 Chr 10–12", book: "2CH", ch: 10 }, note: "The kingdom divided; Rehoboam; Shishak plunders Jerusalem" }, // Day 129 — The kingdom divided; Rehoboam; Shishak plunders Jerusalem
  { ot: { ref: "2 Chr 13–15", book: "2CH", ch: 13 }, note: "Abijah defeats Israel; Asa's reform; the great covenant" }, // Day 130 — Abijah defeats Israel; Asa's reform; the great covenant
  { ot: { ref: "2 Chr 16–18", book: "2CH", ch: 16 }, note: "Asa's failure; Jehoshaphat's righteousness; Micaiah's warning" }, // Day 131 — Asa's failure; Jehoshaphat's righteousness; Micaiah's warning
  { ot: { ref: "2 Chr 19–21", book: "2CH", ch: 19 }, note: "Jehoshaphat's judges; victory without fighting; Jehoram's evil" }, // Day 132 — Jehoshaphat's judges; victory without fighting; Jehoram's evil
  { ot: { ref: "2 Chr 22–24", book: "2CH", ch: 22 }, note: "Athaliah's usurpation; Joash restored; the Temple repaired" }, // Day 133 — Athaliah's usurpation; Joash restored; the Temple repaired
  { ot: { ref: "2 Chr 25–27", book: "2CH", ch: 25 }, note: "Amaziah; Uzziah's leprosy; Jotham's faithfulness" }, // Day 134 — Amaziah; Uzziah's leprosy; Jotham's faithfulness
  { ot: { ref: "2 Chr 28–30", book: "2CH", ch: 28 }, note: "Ahaz's apostasy; Hezekiah opens the Temple; Passover restored" }, // Day 135 — Ahaz's apostasy; Hezekiah opens the Temple; Passover restored
  { ot: { ref: "2 Chr 31–33", book: "2CH", ch: 31 }, note: "Hezekiah's organization; Sennacherib; Manasseh's repentance" }, // Day 136 — Hezekiah's organization; Sennacherib; Manasseh's repentance
  { ot: { ref: "2 Chr 34–36", book: "2CH", ch: 34 }, note: "Josiah's reform; the Law found; Jerusalem falls; the edict of Cyrus" }, // Day 137 — Josiah's reform; the Law found; Jerusalem falls; the edict of Cyrus

  // ══════════════════════════════════════════════════════
  //  EZRA · NEHEMIAH · ESTHER  (Days 138–152)
  // ══════════════════════════════════════════════════════

  // ── EZRA (Days 138–141, 10 chapters) ─────────────────
  { ot: { ref: "Ezra 1–3",  book: "EZR", ch: 1  }, note: "Cyrus's decree; the return of the exiles; the altar rebuilt" }, // Day 138 — Cyrus's decree; the return of the exiles; the altar rebuilt
  { ot: { ref: "Ezra 4–6",  book: "EZR", ch: 4  }, note: "Opposition to the building; Darius decrees completion; the Temple dedicated" }, // Day 139 — Opposition to the building; Darius decrees completion; the Temple dedicated
  { ot: { ref: "Ezra 7–9",  book: "EZR", ch: 7  }, note: "Ezra the scribe arrives; the hand of God upon him; the mixed marriages" }, // Day 140 — Ezra the scribe arrives; the hand of God upon him; the mixed marriages
  { ot: { ref: "Ezra 10",   book: "EZR", ch: 10 }, note: "The great assembly; the foreign wives sent away; covenant renewed" }, // Day 141 — The great assembly; the foreign wives sent away; covenant renewed

  // ── NEHEMIAH (Days 142–146, 13 chapters) ─────────────
  { ot: { ref: "Neh 1–3",   book: "NEH", ch: 1  }, note: "Nehemiah weeps; the king sends him; the walls rebuilt" }, // Day 142 — Nehemiah weeps; the king sends him; the walls rebuilt
  { ot: { ref: "Neh 4–6",   book: "NEH", ch: 4  }, note: "Opposition; the workers armed; Nehemiah refuses to be intimidated" }, // Day 143 — Opposition; the workers armed; Nehemiah refuses to be intimidated
  { ot: { ref: "Neh 7–9",   book: "NEH", ch: 7  }, note: "The list of returned exiles; Ezra reads the Law; the great confession" }, // Day 144 — The list of returned exiles; Ezra reads the Law; the great confession
  { ot: { ref: "Neh 10–12", book: "NEH", ch: 10 }, note: "The signed covenant; the people settle Jerusalem; the dedication" }, // Day 145 — The signed covenant; the people settle Jerusalem; the dedication
  { ot: { ref: "Neh 13",    book: "NEH", ch: 13 }, note: "Nehemiah's final reforms; remember me, O my God" }, // Day 146 — Nehemiah's final reforms; remember me, O my God

  // ── ESTHER (LXX, Days 147–152, 16 chapters) ──────────
  { ot: { ref: "Est 1–3",   book: "EST", ch: 1  }, note: "Vashti deposed; Esther chosen queen; Haman's plot" }, // Day 147 — Vashti deposed; Esther chosen queen; Haman's plot
  { ot: { ref: "Est 4–6",   book: "EST", ch: 4  }, note: "If I perish, I perish; Esther's courage; Haman's gallows" }, // Day 148 — If I perish, I perish; Esther's courage; Haman's gallows
  { ot: { ref: "Est 7–9",   book: "EST", ch: 7  }, note: "Haman exposed and hanged; Mordecai's edict; the Jews prevail" }, // Day 149 — Haman exposed and hanged; Mordecai's edict; the Jews prevail
  { ot: { ref: "Est 10–12", book: "EST", ch: 10 }, note: "Mordecai honored; the Prayer of Mordecai (LXX addition)" }, // Day 150 — Mordecai honored; the Prayer of Mordecai (LXX addition)
  { ot: { ref: "Est 13–15", book: "EST", ch: 13 }, note: "The Prayer of Esther; her audience with the king (LXX)" }, // Day 151 — The Prayer of Esther; her audience with the king (LXX)
  { ot: { ref: "Est 16",    book: "EST", ch: 16 }, note: "The edict of Artaxerxes (LXX); the feast of Purim established" }, // Day 152 — The edict of Artaxerxes (LXX); the feast of Purim established

  // ══════════════════════════════════════════════════════
  //  DEUTEROCANONICAL BOOKS  (Days 153–187)
  // ══════════════════════════════════════════════════════

  // ── TOBIT (Days 153–157, 14 chapters) ────────────────
  { ot: { ref: "Tob 1–3",   book: "TOB", ch: 1  }, note: "Tobit the righteous exile; his blindness; Sarah tormented by Asmodeus" }, // Day 153 — Tobit the righteous exile; his blindness; Sarah tormented by Asmodeus
  { ot: { ref: "Tob 4–6",   book: "TOB", ch: 4  }, note: "Tobit's instructions to Tobias; Raphael as guide; the fish" }, // Day 154 — Tobit's instructions to Tobias; Raphael as guide; the fish
  { ot: { ref: "Tob 7–9",   book: "TOB", ch: 7  }, note: "Tobias marries Sarah; the demon driven away; Tobit's money retrieved" }, // Day 155 — Tobias marries Sarah; the demon driven away; Tobit's money retrieved
  { ot: { ref: "Tob 10–12", book: "TOB", ch: 10 }, note: "The return home; Tobit's sight restored; Raphael revealed" }, // Day 156 — The return home; Tobit's sight restored; Raphael revealed
  { ot: { ref: "Tob 13–14", book: "TOB", ch: 13 }, note: "The hymn of Tobit; his last words; his death in peace" }, // Day 157 — The hymn of Tobit; his last words; his death in peace

  // ── JUDITH (Days 158–163, 16 chapters) ───────────────
  { ot: { ref: "Jdt 1–3",   book: "JDT", ch: 1  }, note: "Nebuchadnezzar's campaign; Holofernes advances; the nations surrender" }, // Day 158 — Nebuchadnezzar's campaign; Holofernes advances; the nations surrender
  { ot: { ref: "Jdt 4–6",   book: "JDT", ch: 4  }, note: "Israel fasts and prays; Achior's testimony; Holofernes's anger" }, // Day 159 — Israel fasts and prays; Achior's testimony; Holofernes's anger
  { ot: { ref: "Jdt 7–9",   book: "JDT", ch: 7  }, note: "The siege of Bethulia; the people despair; Judith's prayer" }, // Day 160 — The siege of Bethulia; the people despair; Judith's prayer
  { ot: { ref: "Jdt 10–12", book: "JDT", ch: 10 }, note: "Judith enters the camp; she captivates Holofernes" }, // Day 161 — Judith enters the camp; she captivates Holofernes
  { ot: { ref: "Jdt 13–15", book: "JDT", ch: 13 }, note: "Judith beheads Holofernes; the Assyrians flee in panic" }, // Day 162 — Judith beheads Holofernes; the Assyrians flee in panic
  { ot: { ref: "Jdt 16",    book: "JDT", ch: 16 }, note: "The Song of Judith: Judith's final years and death in peace" }, // Day 163 — The Song of Judith: Judith's final years and death in peace

  // ── 1 MACCABEES (Days 164–169, 16 chapters) ──────────
  { ot: { ref: "1 Mac 1–3",   book: "1MA", ch: 1  }, note: "Antiochus desecrates the Temple; Mattathias refuses to apostatize; Judas leads" }, // Day 164 — Antiochus desecrates the Temple; Mattathias refuses to apostatize; Judas leads
  { ot: { ref: "1 Mac 4–6",   book: "1MA", ch: 4  }, note: "The Temple rededicated (Hanukkah); Antiochus dies in disgrace" }, // Day 165 — The Temple rededicated (Hanukkah); Antiochus dies in disgrace
  { ot: { ref: "1 Mac 7–9",   book: "1MA", ch: 7  }, note: "The Alcimus affair; Nicanor defeated; Judas Maccabaeus falls" }, // Day 166 — The Alcimus affair; Nicanor defeated; Judas Maccabaeus falls
  { ot: { ref: "1 Mac 10–12", book: "1MA", ch: 10 }, note: "Jonathan as high priest; alliances with Rome and Sparta" }, // Day 167 — Jonathan as high priest; alliances with Rome and Sparta
  { ot: { ref: "1 Mac 13–15", book: "1MA", ch: 13 }, note: "Simon secures independence; the era of the Hasmoneans begins" }, // Day 168 — Simon secures independence; the era of the Hasmoneans begins
  { ot: { ref: "1 Mac 16",    book: "1MA", ch: 16 }, note: "Simon's treacherous murder; John Hyrcanus continues the line" }, // Day 169 — Simon's treacherous murder; John Hyrcanus continues the line

  // ── 2 MACCABEES (Days 170–174, 15 chapters) ──────────
  { ot: { ref: "2 Mac 1–3",   book: "2MA", ch: 1  }, note: "Letters to Egypt; Nehemiah and the sacred fire; Heliodorus repelled" }, // Day 170 — Letters to Egypt; Nehemiah and the sacred fire; Heliodorus repelled
  { ot: { ref: "2 Mac 4–6",   book: "2MA", ch: 4  }, note: "Jason buys the high priesthood; Hellenization; the Temple profaned" }, // Day 171 — Jason buys the high priesthood; Hellenization; the Temple profaned
  { ot: { ref: "2 Mac 7–9",   book: "2MA", ch: 7  }, note: "The seven brothers and their mother: the resurrection hope; Antiochus's death" }, // Day 172 — The seven brothers and their mother: the resurrection hope; Antiochus's death
  { ot: { ref: "2 Mac 10–12", book: "2MA", ch: 10 }, note: "Judas purifies the Temple; ongoing campaigns" }, // Day 173 — Judas purifies the Temple; ongoing campaigns
  { ot: { ref: "2 Mac 13–15", book: "2MA", ch: 13 }, note: "The last campaigns; Nicanor's head displayed; the summary" }, // Day 174 — The last campaigns; Nicanor's head displayed; the summary

  // ── 3 MACCABEES (Days 175–177, 7 chapters) ───────────
  { ot: { ref: "3 Mac 1–3",   book: "3MA", ch: 1  }, note: "Ptolemy Philopator tries to enter the Holy of Holies; repelled" }, // Day 175 — Ptolemy Philopator tries to enter the Holy of Holies; repelled
  { ot: { ref: "3 Mac 4–6",   book: "3MA", ch: 4  }, note: "The Jews threatened with death; angels intercede; the elephants turn" }, // Day 176 — The Jews threatened with death; angels intercede; the elephants turn
  { ot: { ref: "3 Mac 7",     book: "3MA", ch: 7  }, note: "Ptolemy repents; the Jews celebrate; they return in peace" }, // Day 177 — Ptolemy repents; the Jews celebrate; they return in peace

  // ── 4 MACCABEES (Days 178–183, 18 chapters) ──────────
  // A philosophical meditation on reason and the Law through martyrdom
  { ot: { ref: "4 Mac 1–3",   book: "4MA", ch: 1  }, note: "Reason's mastery over the passions; the thesis stated" }, // Day 178 — Reason's mastery over the passions; the thesis stated
  { ot: { ref: "4 Mac 4–6",   book: "4MA", ch: 4  }, note: "Eleazar's martyrdom: the old priest remains firm" }, // Day 179 — Eleazar's martyrdom: the old priest remains firm
  { ot: { ref: "4 Mac 7–9",   book: "4MA", ch: 7  }, note: "The seven brothers: the first three refuse to eat swine's flesh" }, // Day 180 — The seven brothers: the first three refuse to eat swine's flesh
  { ot: { ref: "4 Mac 10–12", book: "4MA", ch: 10 }, note: "Brothers four through six: they encourage one another to die nobly" }, // Day 181 — Brothers four through six: they encourage one another to die nobly
  { ot: { ref: "4 Mac 13–15", book: "4MA", ch: 13 }, note: "The seventh son; the mother's speech; she leaps into the fire" }, // Day 182 — The seventh son; the mother's speech; she leaps into the fire
  { ot: { ref: "4 Mac 16–18", book: "4MA", ch: 16 }, note: "The author's epilogue: their deaths were an atonement for the nation" }, // Day 183 — The author's epilogue: their deaths were an atonement for the nation

  // ── 1 ESDRAS (Days 184–186, 9 chapters) ──────────────
  { ot: { ref: "1 Esd 1–3",  book: "1ES", ch: 1  }, note: "Josiah's Passover; the fall of Jerusalem; Cyrus's edict" }, // Day 184 — Josiah's Passover; the fall of Jerusalem; Cyrus's edict
  { ot: { ref: "1 Esd 4–6",  book: "1ES", ch: 4  }, note: "The debate of the three youths: truth is the greatest; Zerubbabel wins" }, // Day 185 — The debate of the three youths: truth is the greatest; Zerubbabel wins
  { ot: { ref: "1 Esd 7–9",  book: "1ES", ch: 7  }, note: "The Temple dedicated; Ezra arrives; the assembly; the mixed marriages resolved" }, // Day 186 — The Temple dedicated; Ezra arrives; the assembly; the mixed marriages resolved

  // ── PRAYER OF MANASSEH (Day 187, 1 chapter) ──────────
  { ot: { ref: "Man 1",       book: "MAN", ch: 1  }, note: "The great penitential prayer of the most wicked king: You are the God of the repentant" }, // Day 187 — The great penitential prayer of the most wicked king: You are the God of the repentant

  // ══════════════════════════════════════════════════════
  //  WISDOM BOOKS  (Days 188–273)
  // ══════════════════════════════════════════════════════

  // ── JOB (Days 188–201, 42 chapters) ──────────────────
  { ot: { ref: "Job 1–3",   book: "JOB", ch: 1  }, note: "The blameless man; the heavenly court; Job stripped of everything" }, // Day 188 — The blameless man; the heavenly court; Job stripped of everything
  { ot: { ref: "Job 4–6",   book: "JOB", ch: 4  }, note: "Eliphaz speaks; Job's anguished reply" }, // Day 189 — Eliphaz speaks; Job's anguished reply
  { ot: { ref: "Job 7–9",   book: "JOB", ch: 7  }, note: "My days are a breath; Bildad replies; how can a man be righteous?" }, // Day 190 — My days are a breath; Bildad replies; how can a man be righteous?
  { ot: { ref: "Job 10–12", book: "JOB", ch: 10 }, note: "Job speaks to God directly; Zophar's rebuke" }, // Day 191 — Job speaks to God directly; Zophar's rebuke
  { ot: { ref: "Job 13–15", book: "JOB", ch: 13 }, note: "Though He slay me, yet will I trust Him; Eliphaz's second speech" }, // Day 192 — Though He slay me, yet will I trust Him; Eliphaz's second speech
  { ot: { ref: "Job 16–18", book: "JOB", ch: 16 }, note: "Miserable comforters; my witness is in heaven; Bildad on the wicked" }, // Day 193 — Miserable comforters; my witness is in heaven; Bildad on the wicked
  { ot: { ref: "Job 19–21", book: "JOB", ch: 19 }, note: "I know that my Redeemer lives; the prosperity of the wicked" }, // Day 194 — I know that my Redeemer lives; the prosperity of the wicked
  { ot: { ref: "Job 22–24", book: "JOB", ch: 22 }, note: "Eliphaz's accusation; Job seeks God and cannot find Him" }, // Day 195 — Eliphaz's accusation; Job seeks God and cannot find Him
  { ot: { ref: "Job 25–27", book: "JOB", ch: 25 }, note: "Bildad's last speech; Job's dignity; wisdom is hidden from the living" }, // Day 196 — Bildad's last speech; Job's dignity; wisdom is hidden from the living
  { ot: { ref: "Job 28–30", book: "JOB", ch: 28 }, note: "Where can wisdom be found? Job mourns his lost honor" }, // Day 197 — Where can wisdom be found? Job mourns his lost honor
  { ot: { ref: "Job 31–33", book: "JOB", ch: 31 }, note: "Job's oath of innocence; Elihu begins his defense of God" }, // Day 198 — Job's oath of innocence; Elihu begins his defense of God
  { ot: { ref: "Job 34–36", book: "JOB", ch: 34 }, note: "Elihu: God is just; He uses affliction to open our ears" }, // Day 199 — Elihu: God is just; He uses affliction to open our ears
  { ot: { ref: "Job 37–39", book: "JOB", ch: 37 }, note: "God speaks from the whirlwind: where were you when I laid the foundations?" }, // Day 200 — God speaks from the whirlwind: where were you when I laid the foundations?
  { ot: { ref: "Job 40–42", book: "JOB", ch: 40 }, note: "Job humbled and restored; the Lord gave Job twice as much" }, // Day 201 — Job humbled and restored; the Lord gave Job twice as much

  // ── PSALMS (Days 202–231, 150 psalms, 5/day) ─────────
  { ps: { ref: "Ps 1–5",     ch: 1   } }, // Day 202
  { ps: { ref: "Ps 6–10",    ch: 6   } }, // Day 203
  { ps: { ref: "Ps 11–15",   ch: 11  } }, // Day 204
  { ps: { ref: "Ps 16–20",   ch: 16  } }, // Day 205
  { ps: { ref: "Ps 21–25",   ch: 21  } }, // Day 206
  { ps: { ref: "Ps 26–30",   ch: 26  } }, // Day 207
  { ps: { ref: "Ps 31–35",   ch: 31  } }, // Day 208
  { ps: { ref: "Ps 36–40",   ch: 36  } }, // Day 209
  { ps: { ref: "Ps 41–45",   ch: 41  } }, // Day 210
  { ps: { ref: "Ps 46–50",   ch: 46  } }, // Day 211
  { ps: { ref: "Ps 51–55",   ch: 51  } }, // Day 212
  { ps: { ref: "Ps 56–60",   ch: 56  } }, // Day 213
  { ps: { ref: "Ps 61–65",   ch: 61  } }, // Day 214
  { ps: { ref: "Ps 66–70",   ch: 66  } }, // Day 215
  { ps: { ref: "Ps 71–75",   ch: 71  } }, // Day 216
  { ps: { ref: "Ps 76–80",   ch: 76  } }, // Day 217
  { ps: { ref: "Ps 81–85",   ch: 81  } }, // Day 218
  { ps: { ref: "Ps 86–90",   ch: 86  } }, // Day 219
  { ps: { ref: "Ps 91–95",   ch: 91  } }, // Day 220
  { ps: { ref: "Ps 96–100",  ch: 96  } }, // Day 221
  { ps: { ref: "Ps 101–105", ch: 101 } }, // Day 222
  { ps: { ref: "Ps 106–110", ch: 106 } }, // Day 223
  { ps: { ref: "Ps 111–115", ch: 111 } }, // Day 224
  { ps: { ref: "Ps 116–120", ch: 116 } }, // Day 225
  { ps: { ref: "Ps 121–125", ch: 121 } }, // Day 226
  { ps: { ref: "Ps 126–130", ch: 126 } }, // Day 227
  { ps: { ref: "Ps 131–135", ch: 131 } }, // Day 228
  { ps: { ref: "Ps 136–140", ch: 136 } }, // Day 229
  { ps: { ref: "Ps 141–145", ch: 141 } }, // Day 230
  { ps: { ref: "Ps 146–150", ch: 146 } }, // Day 231

  // ── PROVERBS (Days 232–242, 31 chapters) ─────────────
  { ot: { ref: "Prov 1–3",   book: "PRO", ch: 1  }, note: "The fear of the Lord is the beginning; Lady Wisdom calls" }, // Day 232 — The fear of the Lord is the beginning; Lady Wisdom calls
  { ot: { ref: "Prov 4–6",   book: "PRO", ch: 4  }, note: "Guard your heart; the ant's wisdom; seven things the Lord hates" }, // Day 233 — Guard your heart; the ant's wisdom; seven things the Lord hates
  { ot: { ref: "Prov 7–9",   book: "PRO", ch: 7  }, note: "The adulteress; wisdom's house; understanding's banquet" }, // Day 234 — The adulteress; wisdom's house; understanding's banquet
  { ot: { ref: "Prov 10–12", book: "PRO", ch: 10 }, note: "A wise son makes a glad father; the diligent hand" }, // Day 235 — A wise son makes a glad father; the diligent hand
  { ot: { ref: "Prov 13–15", book: "PRO", ch: 13 }, note: "A good name; hope deferred; the gentle answer" }, // Day 236 — A good name; hope deferred; the gentle answer
  { ot: { ref: "Prov 16–18", book: "PRO", ch: 16 }, note: "Pride before the fall; pleasant words are a honeycomb" }, // Day 237 — Pride before the fall; pleasant words are a honeycomb
  { ot: { ref: "Prov 19–21", book: "PRO", ch: 19 }, note: "The Lord weighs the spirit; train up a child" }, // Day 238 — The Lord weighs the spirit; train up a child
  { ot: { ref: "Prov 22–24", book: "PRO", ch: 22 }, note: "A good name is better than riches; do not remove the landmark" }, // Day 239 — A good name is better than riches; do not remove the landmark
  { ot: { ref: "Prov 25–27", book: "PRO", ch: 25 }, note: "Proverbs of Solomon copied by Hezekiah's men" }, // Day 240 — Proverbs of Solomon copied by Hezekiah's men
  { ot: { ref: "Prov 28–30", book: "PRO", ch: 28 }, note: "The righteous are bold as a lion; the words of Agur" }, // Day 241 — The righteous are bold as a lion; the words of Agur
  { ot: { ref: "Prov 31",    book: "PRO", ch: 31 }, note: "Who can find a virtuous woman? Her worth is far above rubies" }, // Day 242 — Who can find a virtuous woman? Her worth is far above rubies

  // ── ECCLESIASTES (Days 243–246, 12 chapters) ─────────
  { ot: { ref: "Eccl 1–3",   book: "ECC", ch: 1  }, note: "Vanity of vanities; the Preacher's search; a time for everything" }, // Day 243 — Vanity of vanities; the Preacher's search; a time for everything
  { ot: { ref: "Eccl 4–6",   book: "ECC", ch: 4  }, note: "Better two than one; guard your steps in God's house; the vanity of wealth" }, // Day 244 — Better two than one; guard your steps in God's house; the vanity of wealth
  { ot: { ref: "Eccl 7–9",   book: "ECC", ch: 7  }, note: "A good name; the heart of the wise in the house of mourning" }, // Day 245 — A good name; the heart of the wise in the house of mourning
  { ot: { ref: "Eccl 10–12", book: "ECC", ch: 10 }, note: "Cast your bread upon the waters; fear God and keep His commandments" }, // Day 246 — Cast your bread upon the waters; fear God and keep His commandments

  // ── SONG OF SONGS (Days 247–249, 8 chapters) ─────────
  { ot: { ref: "Song 1–3",   book: "SNG", ch: 1  }, note: "Draw me after you; I am the rose of Sharon; love and longing" }, // Day 247 — Draw me after you; I am the rose of Sharon; love and longing
  { ot: { ref: "Song 4–6",   book: "SNG", ch: 4  }, note: "You are altogether beautiful; I sleep but my heart is awake" }, // Day 248 — You are altogether beautiful; I sleep but my heart is awake
  { ot: { ref: "Song 7–8",   book: "SNG", ch: 7  }, note: "I am my beloved's; love is as strong as death; seal me on your heart" }, // Day 249 — I am my beloved's; love is as strong as death; seal me on your heart

  // ── WISDOM OF SOLOMON (Days 250–256, 19 chapters) ────
  { ot: { ref: "Wis 1–3",   book: "WIS", ch: 1  }, note: "Love righteousness; the souls of the righteous are in God's hand" }, // Day 250 — Love righteousness; the souls of the righteous are in God's hand
  { ot: { ref: "Wis 4–6",   book: "WIS", ch: 4  }, note: "A blameless life; the ungodly's foolish reasoning; wisdom's call" }, // Day 251 — A blameless life; the ungodly's foolish reasoning; wisdom's call
  { ot: { ref: "Wis 7–9",   book: "WIS", ch: 7  }, note: "Wisdom is the radiance of eternal light; Solomon's prayer" }, // Day 252 — Wisdom is the radiance of eternal light; Solomon's prayer
  { ot: { ref: "Wis 10–12", book: "WIS", ch: 10 }, note: "Wisdom guided the patriarchs; God's mercy through the Exodus" }, // Day 253 — Wisdom guided the patriarchs; God's mercy through the Exodus
  { ot: { ref: "Wis 13–15", book: "WIS", ch: 13 }, note: "The folly of idol worship; the carpenter's irony; false gods are nothing" }, // Day 254 — The folly of idol worship; the carpenter's irony; false gods are nothing
  { ot: { ref: "Wis 16–18", book: "WIS", ch: 16 }, note: "The plagues contrasted with Israel's protection; the Word healed them" }, // Day 255 — The plagues contrasted with Israel's protection; the Word healed them
  { ot: { ref: "Wis 19",    book: "WIS", ch: 19 }, note: "The Red Sea crossing; the elements served Your holy children" }, // Day 256 — The Red Sea crossing; the elements served Your holy children

  // ── SIRACH (Days 257–273, 51 chapters) ───────────────
  { ot: { ref: "Sir 1–3",   book: "SIR", ch: 1  }, note: "All wisdom comes from the Lord; fear of the Lord; honor your parents" }, // Day 257 — All wisdom comes from the Lord; fear of the Lord; honor your parents
  { ot: { ref: "Sir 4–6",   book: "SIR", ch: 4  }, note: "Do not delay giving to the poor; be not ashamed of wisdom; a faithful friend" }, // Day 258 — Do not delay giving to the poor; be not ashamed of wisdom; a faithful friend
  { ot: { ref: "Sir 7–9",   book: "SIR", ch: 7  }, note: "Seek no position from the Lord; be humble; respect the old" }, // Day 259 — Seek no position from the Lord; be humble; respect the old
  { ot: { ref: "Sir 10–12", book: "SIR", ch: 10 }, note: "Pride is the beginning of sin; discernment in generosity" }, // Day 260 — Pride is the beginning of sin; discernment in generosity
  { ot: { ref: "Sir 13–15", book: "SIR", ch: 13 }, note: "Rich and poor; the danger of the unfit friend; free will" }, // Day 261 — Rich and poor; the danger of the unfit friend; free will
  { ot: { ref: "Sir 16–18", book: "SIR", ch: 16 }, note: "God sees all; the wonders of creation; honor the doctor" }, // Day 262 — God sees all; the wonders of creation; honor the doctor
  { ot: { ref: "Sir 19–21", book: "SIR", ch: 19 }, note: "The danger of loose talk; tame the tongue; true and false wisdom" }, // Day 263 — The danger of loose talk; tame the tongue; true and false wisdom
  { ot: { ref: "Sir 22–24", book: "SIR", ch: 22 }, note: "Lament over the foolish; silence in grief; wisdom's self-praise" }, // Day 264 — Lament over the foolish; silence in grief; wisdom's self-praise
  { ot: { ref: "Sir 25–27", book: "SIR", ch: 25 }, note: "Three things the heart loves; a good wife; friendship and sin" }, // Day 265 — Three things the heart loves; a good wife; friendship and sin
  { ot: { ref: "Sir 28–30", book: "SIR", ch: 28 }, note: "Forgive your neighbor; the unruly tongue; the joy of good health" }, // Day 266 — Forgive your neighbor; the unruly tongue; the joy of good health
  { ot: { ref: "Sir 31–33", book: "SIR", ch: 31 }, note: "Anxiety about wealth; table manners; dream not of false visions" }, // Day 267 — Anxiety about wealth; table manners; dream not of false visions
  { ot: { ref: "Sir 34–36", book: "SIR", ch: 34 }, note: "The Lord's testing; true worship; prayer for Israel's restoration" }, // Day 268 — The Lord's testing; true worship; prayer for Israel's restoration
  { ot: { ref: "Sir 37–39", book: "SIR", ch: 37 }, note: "Beware the false counselor; self-control; the scribe's calling" }, // Day 269 — Beware the false counselor; self-control; the scribe's calling
  { ot: { ref: "Sir 40–42", book: "SIR", ch: 40 }, note: "Heavy yoke on all Adam's sons; joy in old age; the father's daughters" }, // Day 270 — Heavy yoke on all Adam's sons; joy in old age; the father's daughters
  { ot: { ref: "Sir 43–45", book: "SIR", ch: 43 }, note: "The glory of creation; the Praise of the Fathers: Enoch, Noah, Abraham, Moses, Aaron" }, // Day 271 — The glory of creation; the Praise of the Fathers: Enoch, Noah, Abraham, Moses, Aaron
  { ot: { ref: "Sir 46–48", book: "SIR", ch: 46 }, note: "Joshua, Caleb, Samuel, David, Solomon, Elijah, Elisha, Hezekiah, Isaiah" }, // Day 272 — Joshua, Caleb, Samuel, David, Solomon, Elijah, Elisha, Hezekiah, Isaiah
  { ot: { ref: "Sir 49–51", book: "SIR", ch: 49 }, note: "Josiah, Ezekiel, Zerubbabel, Nehemiah; Come to me, you who are untaught" }, // Day 273 — Josiah, Ezekiel, Zerubbabel, Nehemiah; Come to me, you who are untaught

  // ══════════════════════════════════════════════════════
  //  MAJOR PROPHETS  (Days 274–339)
  // ══════════════════════════════════════════════════════

  // ── ISAIAH (Days 274–295, 66 chapters) ───────────────
  { ot: { ref: "Isa 1–3",   book: "ISA", ch: 1  }, note: "The indictment; come, let us reason together; the mountain of the Lord" }, // Day 274 — The indictment; come, let us reason together; the mountain of the Lord
  { ot: { ref: "Isa 4–6",   book: "ISA", ch: 4  }, note: "The Branch of the Lord; the vineyard song; Holy, holy, holy; here am I" }, // Day 275 — The Branch of the Lord; the vineyard song; Holy, holy, holy; here am I
  { ot: { ref: "Isa 7–9",   book: "ISA", ch: 7  }, note: "Behold, a virgin shall conceive; Immanuel; For unto us a Child is born" }, // Day 276 — Behold, a virgin shall conceive; Immanuel; For unto us a Child is born
  { ot: { ref: "Isa 10–12", book: "ISA", ch: 10 }, note: "Woe to Assyria; the rod out of Jesse's stem; the wolf with the lamb" }, // Day 277 — Woe to Assyria; the rod out of Jesse's stem; the wolf with the lamb
  { ot: { ref: "Isa 13–15", book: "ISA", ch: 13 }, note: "The oracle against Babylon; the morning star fallen; Moab's lament" }, // Day 278 — The oracle against Babylon; the morning star fallen; Moab's lament
  { ot: { ref: "Isa 16–18", book: "ISA", ch: 16 }, note: "Oracles against Damascus, Ethiopia, and Egypt" }, // Day 279 — Oracles against Damascus, Ethiopia, and Egypt
  { ot: { ref: "Isa 19–21", book: "ISA", ch: 19 }, note: "Egypt shall know the Lord; the oracle of the valley of vision" }, // Day 280 — Egypt shall know the Lord; the oracle of the valley of vision
  { ot: { ref: "Isa 22–24", book: "ISA", ch: 22 }, note: "Tyre and Sidon; the little apocalypse begins; the earth is defiled" }, // Day 281 — Tyre and Sidon; the little apocalypse begins; the earth is defiled
  { ot: { ref: "Isa 25–27", book: "ISA", ch: 25 }, note: "The great banquet; death swallowed up; Your dead shall live" }, // Day 282 — The great banquet; death swallowed up; Your dead shall live
  { ot: { ref: "Isa 28–30", book: "ISA", ch: 28 }, note: "Woes on Ephraim; a cornerstone in Zion; woe to Ariel; look to the Holy One" }, // Day 283 — Woes on Ephraim; a cornerstone in Zion; woe to Ariel; look to the Holy One
  { ot: { ref: "Isa 31–33", book: "ISA", ch: 31 }, note: "Do not go down to Egypt; a King shall reign in righteousness" }, // Day 284 — Do not go down to Egypt; a King shall reign in righteousness
  { ot: { ref: "Isa 34–36", book: "ISA", ch: 34 }, note: "The Lord's vengeance on Edom; the wilderness rejoices; Sennacherib's taunt" }, // Day 285 — The Lord's vengeance on Edom; the wilderness rejoices; Sennacherib's taunt
  { ot: { ref: "Isa 37–39", book: "ISA", ch: 37 }, note: "Hezekiah's prayer; 185,000 slain; the king's illness; the Babylonian envoys" }, // Day 286 — Hezekiah's prayer; 185,000 slain; the king's illness; the Babylonian envoys
  { ot: { ref: "Isa 40–42", book: "ISA", ch: 40 }, note: "Comfort my people; who has measured the waters?; My Servant whom I uphold" }, // Day 287 — Comfort my people; who has measured the waters?; My Servant whom I uphold
  { ot: { ref: "Isa 43–45", book: "ISA", ch: 43 }, note: "Fear not, I have redeemed you; I am He; Cyrus named before his birth" }, // Day 288 — Fear not, I have redeemed you; I am He; Cyrus named before his birth
  { ot: { ref: "Isa 46–48", book: "ISA", ch: 46 }, note: "Bel bows down; I am God, there is none like me; come out of Babylon" }, // Day 289 — Bel bows down; I am God, there is none like me; come out of Babylon
  { ot: { ref: "Isa 49–51", book: "ISA", ch: 49 }, note: "My Servant's mission; salvation to the ends of the earth; awake, awake" }, // Day 290 — My Servant's mission; salvation to the ends of the earth; awake, awake
  { ot: { ref: "Isa 52–54", book: "ISA", ch: 52 }, note: "He was wounded for our transgressions; the barren woman shall rejoice" }, // Day 291 — He was wounded for our transgressions; the barren woman shall rejoice
  { ot: { ref: "Isa 55–57", book: "ISA", ch: 55 }, note: "Ho, come and buy without money; my house a house of prayer for all peoples" }, // Day 292 — Ho, come and buy without money; my house a house of prayer for all peoples
  { ot: { ref: "Isa 58–60", book: "ISA", ch: 58 }, note: "The true fast; your light shall break forth; arise, shine" }, // Day 293 — The true fast; your light shall break forth; arise, shine
  { ot: { ref: "Isa 61–63", book: "ISA", ch: 61 }, note: "The Spirit of the Lord is upon me; the year of the Lord's favor" }, // Day 294 — The Spirit of the Lord is upon me; the year of the Lord's favor
  { ot: { ref: "Isa 64–66", book: "ISA", ch: 64 }, note: "You are our potter; behold, I create new heavens and a new earth" }, // Day 295 — You are our potter; behold, I create new heavens and a new earth

  // ── JEREMIAH (Days 296–313, 52 chapters) ─────────────
  { ot: { ref: "Jer 1–3",   book: "JER", ch: 1  }, note: "Called before birth; the almond rod and boiling pot; Israel's unfaithfulness" }, // Day 296 — Called before birth; the almond rod and boiling pot; Israel's unfaithfulness
  { ot: { ref: "Jer 4–6",   book: "JER", ch: 4  }, note: "The foe from the north; circumcise your hearts; the harvest is past" }, // Day 297 — The foe from the north; circumcise your hearts; the harvest is past
  { ot: { ref: "Jer 7–9",   book: "JER", ch: 7  }, note: "The Temple sermon; do not trust in deceptive words; is there no balm?" }, // Day 298 — The Temple sermon; do not trust in deceptive words; is there no balm?
  { ot: { ref: "Jer 10–12", book: "JER", ch: 10 }, note: "Idols are like scarecrows; the Lord is the true God; the linen belt" }, // Day 299 — Idols are like scarecrows; the Lord is the true God; the linen belt
  { ot: { ref: "Jer 13–15", book: "JER", ch: 13 }, note: "The great drought; God cannot be persuaded to spare; Jeremiah's lament" }, // Day 300 — The great drought; God cannot be persuaded to spare; Jeremiah's lament
  { ot: { ref: "Jer 16–18", book: "JER", ch: 16 }, note: "Jeremiah forbidden to marry; the Sabbath; the potter and the clay" }, // Day 301 — Jeremiah forbidden to marry; the Sabbath; the potter and the clay
  { ot: { ref: "Jer 19–21", book: "JER", ch: 19 }, note: "The broken flask; Pashur puts Jeremiah in stocks; the siege of Jerusalem" }, // Day 302 — The broken flask; Pashur puts Jeremiah in stocks; the siege of Jerusalem
  { ot: { ref: "Jer 22–24", book: "JER", ch: 22 }, note: "The kings judged; the righteous Branch; the two baskets of figs" }, // Day 303 — The kings judged; the righteous Branch; the two baskets of figs
  { ot: { ref: "Jer 25–27", book: "JER", ch: 25 }, note: "Seventy years; the cup of wrath; Jeremiah's trial; the yoke of Babylon" }, // Day 304 — Seventy years; the cup of wrath; Jeremiah's trial; the yoke of Babylon
  { ot: { ref: "Jer 28–30", book: "JER", ch: 28 }, note: "Hananiah's false prophecy; the letter to the exiles; I will restore you" }, // Day 305 — Hananiah's false prophecy; the letter to the exiles; I will restore you
  { ot: { ref: "Jer 31–33", book: "JER", ch: 31 }, note: "The new covenant written on hearts; the field bought; the Branch of righteousness" }, // Day 306 — The new covenant written on hearts; the field bought; the Branch of righteousness
  { ot: { ref: "Jer 34–36", book: "JER", ch: 34 }, note: "Zedekiah warned; the freed slaves re-enslaved; Baruch reads the scroll" }, // Day 307 — Zedekiah warned; the freed slaves re-enslaved; Baruch reads the scroll
  { ot: { ref: "Jer 37–39", book: "JER", ch: 37 }, note: "Jeremiah in the cistern; the fall of Jerusalem; Ebed-melech saved" }, // Day 308 — Jeremiah in the cistern; the fall of Jerusalem; Ebed-melech saved
  { ot: { ref: "Jer 40–42", book: "JER", ch: 40 }, note: "Gedaliah appointed and assassinated; the remnant appeals to Jeremiah" }, // Day 309 — Gedaliah appointed and assassinated; the remnant appeals to Jeremiah
  { ot: { ref: "Jer 43–45", book: "JER", ch: 43 }, note: "The remnant goes to Egypt against God's word; the word to Baruch" }, // Day 310 — The remnant goes to Egypt against God's word; the word to Baruch
  { ot: { ref: "Jer 46–48", book: "JER", ch: 46 }, note: "Oracles against Egypt, Philistia, Moab: how is the strong staff broken!" }, // Day 311 — Oracles against Egypt, Philistia, Moab: how is the strong staff broken!
  { ot: { ref: "Jer 49–51", book: "JER", ch: 49 }, note: "Oracles against Ammon, Edom, Damascus; the great oracle against Babylon" }, // Day 312 — Oracles against Ammon, Edom, Damascus; the great oracle against Babylon
  { ot: { ref: "Jer 52",    book: "JER", ch: 52 }, note: "The fall of Jerusalem recounted; the Temple vessels; Jehoiachin released" }, // Day 313 — The fall of Jerusalem recounted; the Temple vessels; Jehoiachin released

  // ── LAMENTATIONS (Days 314–315, 5 chapters) ──────────
  { ot: { ref: "Lam 1–3",   book: "LAM", ch: 1  }, note: "Jerusalem sits desolate; Is it nothing to you? Great is Your faithfulness" }, // Day 314 — Jerusalem sits desolate; Is it nothing to you? Great is Your faithfulness
  { ot: { ref: "Lam 4–5",   book: "LAM", ch: 4  }, note: "The Lord has accomplished His wrath; Restore us to yourself, O Lord" }, // Day 315 — The Lord has accomplished His wrath; Restore us to yourself, O Lord

  // ── BARUCH + LETTER OF JEREMIAH (Days 316–318) ───────
  { ot: { ref: "Bar 1–3",   book: "BAR", ch: 1  }, note: "Baruch's confession; we sinned; wisdom not found among the nations" }, // Day 316 — Baruch's confession; we sinned; wisdom not found among the nations
  { ot: { ref: "Bar 4–5",   book: "BAR", ch: 4  }, note: "Jerusalem comforted; take courage, my people; return in splendor" }, // Day 317 — Jerusalem comforted; take courage, my people; return in splendor
  { ot: { ref: "LJe 1",     book: "LJE", ch: 1  }, note: "The Letter of Jeremiah: do not fear the idols — they cannot speak or help" }, // Day 318 — The Letter of Jeremiah: do not fear the idols — they cannot speak or help

  // ── EZEKIEL (Days 319–334, 48 chapters) ──────────────
  { ot: { ref: "Ezek 1–3",   book: "EZK", ch: 1  }, note: "The chariot-throne vision; the call; be a watchman" }, // Day 319 — The chariot-throne vision; the call; be a watchman
  { ot: { ref: "Ezek 4–6",   book: "EZK", ch: 4  }, note: "The siege enacted; the razor and the hair; the sword against the mountains" }, // Day 320 — The siege enacted; the razor and the hair; the sword against the mountains
  { ot: { ref: "Ezek 7–9",   book: "EZK", ch: 7  }, note: "The end has come; the abominations in the Temple; the mark on the foreheads" }, // Day 321 — The end has come; the abominations in the Temple; the mark on the foreheads
  { ot: { ref: "Ezek 10–12", book: "EZK", ch: 10 }, note: "The glory departs the Temple; the wicked leaders; the exiles as a remnant" }, // Day 322 — The glory departs the Temple; the wicked leaders; the exiles as a remnant
  { ot: { ref: "Ezek 13–15", book: "EZK", ch: 13 }, note: "False prophets whitewashing the wall; individual accountability; the useless vine" }, // Day 323 — False prophets whitewashing the wall; individual accountability; the useless vine
  { ot: { ref: "Ezek 16–18", book: "EZK", ch: 16 }, note: "The unfaithful wife (Jerusalem's history); the two eagles; I have no pleasure in death" }, // Day 324 — The unfaithful wife (Jerusalem's history); the two eagles; I have no pleasure in death
  { ot: { ref: "Ezek 19–21", book: "EZK", ch: 19 }, note: "The lioness lament; the vine; the elders rebuked; the sword sharpened" }, // Day 325 — The lioness lament; the vine; the elders rebuked; the sword sharpened
  { ot: { ref: "Ezek 22–24", book: "EZK", ch: 22 }, note: "Jerusalem the bloody city; the two sisters; the siege begins; Ezekiel's wife dies" }, // Day 326 — Jerusalem the bloody city; the two sisters; the siege begins; Ezekiel's wife dies
  { ot: { ref: "Ezek 25–27", book: "EZK", ch: 25 }, note: "Oracles against Ammon, Moab, Edom, Philistia, Tyre; the lamentation over Tyre" }, // Day 327 — Oracles against Ammon, Moab, Edom, Philistia, Tyre; the lamentation over Tyre
  { ot: { ref: "Ezek 28–30", book: "EZK", ch: 28 }, note: "The prince of Tyre's pride; Eden's covering cherub; oracles against Egypt" }, // Day 328 — The prince of Tyre's pride; Eden's covering cherub; oracles against Egypt
  { ot: { ref: "Ezek 31–33", book: "EZK", ch: 31 }, note: "The great cedar; the descent of Egypt; the renewed watchman commission" }, // Day 329 — The great cedar; the descent of Egypt; the renewed watchman commission
  { ot: { ref: "Ezek 34–36", book: "EZK", ch: 34 }, note: "The shepherds who scatter; I myself will search for My sheep; a new heart and spirit" }, // Day 330 — The shepherds who scatter; I myself will search for My sheep; a new heart and spirit
  { ot: { ref: "Ezek 37–39", book: "EZK", ch: 37 }, note: "The valley of dry bones; the two sticks become one; the oracle against Gog" }, // Day 331 — The valley of dry bones; the two sticks become one; the oracle against Gog
  { ot: { ref: "Ezek 40–42", book: "EZK", ch: 40 }, note: "The man with a measuring rod; the outer gate; the inner court; the chambers" }, // Day 332 — The man with a measuring rod; the outer gate; the inner court; the chambers
  { ot: { ref: "Ezek 43–45", book: "EZK", ch: 43 }, note: "The glory returns to the Temple; the altar; the prince's duties; the holy district" }, // Day 333 — The glory returns to the Temple; the altar; the prince's duties; the holy district
  { ot: { ref: "Ezek 46–48", book: "EZK", ch: 46 }, note: "The river flowing from the Temple; the trees for healing; The Lord Is There" }, // Day 334 — The river flowing from the Temple; the trees for healing; The Lord Is There

  // ── DANIEL + ADDITIONS (Days 335–339) ────────────────
  { ot: { ref: "Dan 1–3",   book: "DAN", ch: 1  }, note: "Daniel's faithfulness; the great statue; the fiery furnace" }, // Day 335 — Daniel's faithfulness; the great statue; the fiery furnace
  { ot: { ref: "Dan 4–6",   book: "DAN", ch: 4  }, note: "Nebuchadnezzar's tree; Belshazzar's feast; Daniel in the lions' den" }, // Day 336 — Nebuchadnezzar's tree; Belshazzar's feast; Daniel in the lions' den
  { ot: { ref: "Dan 7–9",   book: "DAN", ch: 7  }, note: "The four beasts; the Son of Man on the clouds; the seventy weeks" }, // Day 337 — The four beasts; the Son of Man on the clouds; the seventy weeks
  { ot: { ref: "Dan 10–12", book: "DAN", ch: 10 }, note: "The vision of the end; Michael the great prince; many who sleep shall awake" }, // Day 338 — The vision of the end; Michael the great prince; many who sleep shall awake
  { ot: { ref: "Sus; Bel; S3Y", book: "SUS", ch: 1 }, note: "Susanna: righteousness vindicated; Bel and the Dragon: false gods exposed; the Song of the Three Young Men" }, // Day 339 — Susanna: righteousness vindicated; Bel and the Dragon: false gods exposed; the Song of the Three Young Men

  // ══════════════════════════════════════════════════════
  //  MINOR PROPHETS  (Days 340–365)
  //  LXX order
  // ══════════════════════════════════════════════════════

  // ── HOSEA (Days 340–344, 14 chapters) ────────────────
  { ot: { ref: "Hos 1–3",   book: "HOS", ch: 1  }, note: "Go, take a wife of harlotry; I will betroth you to me forever" }, // Day 340 — Go, take a wife of harlotry; I will betroth you to me forever
  { ot: { ref: "Hos 4–6",   book: "HOS", ch: 4  }, note: "My people are destroyed for lack of knowledge; they sow the wind" }, // Day 341 — My people are destroyed for lack of knowledge; they sow the wind
  { ot: { ref: "Hos 7–9",   book: "HOS", ch: 7  }, note: "Ephraim is like a half-baked cake; they cry out but not to Me" }, // Day 342 — Ephraim is like a half-baked cake; they cry out but not to Me
  { ot: { ref: "Hos 10–12", book: "HOS", ch: 10 }, note: "Israel is a spreading vine; sow righteousness; out of Egypt I called My Son" }, // Day 343 — Israel is a spreading vine; sow righteousness; out of Egypt I called My Son
  { ot: { ref: "Hos 13–14", book: "HOS", ch: 13 }, note: "I will ransom them from the power of the grave; return to the Lord" }, // Day 344 — I will ransom them from the power of the grave; return to the Lord

  // ── JOEL (Day 345, 3 chapters) ────────────────────────
  { ot: { ref: "Joel 1–3",  book: "JOL", ch: 1  }, note: "The locust plague; rend your hearts; I will pour out My Spirit on all flesh" }, // Day 345 — The locust plague; rend your hearts; I will pour out My Spirit on all flesh

  // ── AMOS (Days 346–348, 9 chapters) ──────────────────
  { ot: { ref: "Amos 1–3",  book: "AMO", ch: 1  }, note: "Judgments on the nations; judgment on Israel; can two walk together?" }, // Day 346 — Judgments on the nations; judgment on Israel; can two walk together?
  { ot: { ref: "Amos 4–6",  book: "AMO", ch: 4  }, note: "Prepare to meet your God; seek the Lord and live; woe to those at ease" }, // Day 347 — Prepare to meet your God; seek the Lord and live; woe to those at ease
  { ot: { ref: "Amos 7–9",  book: "AMO", ch: 7  }, note: "The plumb line; Amaziah opposes Amos; let justice roll down like waters" }, // Day 348 — The plumb line; Amaziah opposes Amos; let justice roll down like waters

  // ── OBADIAH (Day 349, 1 chapter) ─────────────────────
  { ot: { ref: "Obad 1",    book: "OBA", ch: 1  }, note: "The pride of Edom brought low; the day of the Lord is near for all nations" }, // Day 349 — The pride of Edom brought low; the day of the Lord is near for all nations

  // ── JONAH (Days 350–351, 4 chapters) ─────────────────
  { ot: { ref: "Jon 1–2",   book: "JON", ch: 1  }, note: "Jonah flees; the storm; the great fish; prayer from the deep" }, // Day 350 — Jonah flees; the storm; the great fish; prayer from the deep
  { ot: { ref: "Jon 3–4",   book: "JON", ch: 3  }, note: "Nineveh repents; God relents; Jonah's anger; should I not pity this great city?" }, // Day 351 — Nineveh repents; God relents; Jonah's anger; should I not pity this great city?

  // ── MICAH (Days 352–354, 7 chapters) ─────────────────
  { ot: { ref: "Mic 1–3",   book: "MIC", ch: 1  }, note: "The judgment comes to Judah and Israel; woe to those who plan evil" }, // Day 352 — The judgment comes to Judah and Israel; woe to those who plan evil
  { ot: { ref: "Mic 4–5",   book: "MIC", ch: 4  }, note: "They shall beat their swords into plowshares; But you, Bethlehem Ephrathah" }, // Day 353 — They shall beat their swords into plowshares; But you, Bethlehem Ephrathah
  { ot: { ref: "Mic 6–7",   book: "MIC", ch: 6  }, note: "What does the Lord require? Do justice, love mercy, walk humbly; I will wait for God" }, // Day 354 — What does the Lord require? Do justice, love mercy, walk humbly; I will wait for God

  // ── NAHUM (Day 355, 3 chapters) ───────────────────────
  { ot: { ref: "Nah 1–3",   book: "NAM", ch: 1  }, note: "The Lord is slow to anger but great in power; Nineveh is desolate at last" }, // Day 355 — The Lord is slow to anger but great in power; Nineveh is desolate at last

  // ── HABAKKUK (Day 356, 3 chapters) ───────────────────
  { ot: { ref: "Hab 1–3",   book: "HAB", ch: 1  }, note: "How long shall I cry? The just shall live by his faith; though the fig tree does not blossom, I will rejoice" }, // Day 356 — How long shall I cry? The just shall live by his faith; though the fig tree does not blossom, I will rejoice

  // ── ZEPHANIAH (Day 357, 3 chapters) ──────────────────
  { ot: { ref: "Zeph 1–3",  book: "ZEP", ch: 1  }, note: "The great Day of the Lord; Sing aloud, daughter of Zion; the Lord your God is in your midst" }, // Day 357 — The great Day of the Lord; Sing aloud, daughter of Zion; the Lord your God is in your midst

  // ── HAGGAI (Day 358, 2 chapters) ─────────────────────
  { ot: { ref: "Hag 1–2",   book: "HAG", ch: 1  }, note: "Is it time to dwell in paneled houses while My house lies in ruins? I am with you" }, // Day 358 — Is it time to dwell in paneled houses while My house lies in ruins? I am with you

  // ── ZECHARIAH (Days 359–363, 14 chapters) ────────────
  { ot: { ref: "Zech 1–3",  book: "ZEC", ch: 1  }, note: "The eight night visions: horsemen, horns, measuring line, the high priest" }, // Day 359 — The eight night visions: horsemen, horns, measuring line, the high priest
  { ot: { ref: "Zech 4–6",  book: "ZEC", ch: 4  }, note: "Not by might nor by power, but by My Spirit; the flying scroll; the four chariots" }, // Day 360 — Not by might nor by power, but by My Spirit; the flying scroll; the four chariots
  { ot: { ref: "Zech 7–9",  book: "ZEC", ch: 7  }, note: "True fasting; Zion's future joy; Rejoice greatly — your King comes on a donkey" }, // Day 361 — True fasting; Zion's future joy; Rejoice greatly — your King comes on a donkey
  { ot: { ref: "Zech 10–12", book: "ZEC", ch: 10 }, note: "The Lord will restore Judah; they will look on Me, the one they have pierced" }, // Day 362 — The Lord will restore Judah; they will look on Me, the one they have pierced
  { ot: { ref: "Zech 13–14", book: "ZEC", ch: 13 }, note: "Strike the Shepherd; on that day living waters shall flow; the Lord shall be King" }, // Day 363 — Strike the Shepherd; on that day living waters shall flow; the Lord shall be King

  // ── MALACHI (Days 364–365, 4 chapters) ───────────────
  { ot: { ref: "Mal 1–2",   book: "MAL", ch: 1  }, note: "I have loved you, says the Lord; will a man rob God?" }, // Day 364 — I have loved you, says the Lord; will a man rob God?
  { ot: { ref: "Mal 3–4",   book: "MAL", ch: 3  }, note: "Behold, I send My messenger; the Sun of Righteousness shall rise" }, // Day 365 — Behold, I send My messenger; the Sun of Righteousness shall rise
                                                       //            Behold, I will send you Elijah — the final word of the OT
];
