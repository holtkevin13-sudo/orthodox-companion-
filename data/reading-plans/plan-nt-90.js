// Orthodox Companion — Reading Plan
// Plan: New Testament — 90 Days (plan-nt-90.js)
// Variable: PLAN_NT_90
// Days: 90 (~3 chapters/day)
// Coverage: All 27 NT books — 260 chapters in 90 days
// Sequence: Matthew · Mark · Luke · John · Acts · Romans · 1–2 Corinthians ·
//           Galatians · Ephesians · Philippians · Colossians · 1–2 Thessalonians ·
//           1–2 Timothy · Titus · Philemon · Hebrews · James · 1–2 Peter ·
//           1–2–3 John · Jude · Revelation
// Ideal for Great Lent or any 90-day season of intensified reading.
// Index 0 is unused — plan is 1-indexed.

const PLAN_NT_90 = [
  null, // index 0 unused

  // ══════════════════════════════════════════════════════
  //  MATTHEW  (Days 1–10, 28 chapters)
  // ══════════════════════════════════════════════════════

  // Day 1 — The genealogy; the Annunciation to Joseph; the birth of Christ; the Magi
  { nt: { ref: "Mt 1–3", book: "MAT", ch: 1 } },

  // Day 2 — The Temptation; calling of the disciples; the Sermon on the Mount begins
  { nt: { ref: "Mt 4–6", book: "MAT", ch: 4 } },

  // Day 3 — The Sermon concludes; do not judge; ask, seek, knock; build on the rock
  { nt: { ref: "Mt 7–9", book: "MAT", ch: 7 } },

  // Day 4 — The Twelve sent out; John the Baptist; the easy yoke; Sabbath controversies
  { nt: { ref: "Mt 10–12", book: "MAT", ch: 10 } },

  // Day 5 — Parables of the Kingdom; John beheaded; feeding of the five thousand
  { nt: { ref: "Mt 13–15", book: "MAT", ch: 13 } },

  // Day 6 — Peter's confession; the Transfiguration; the greatest in the Kingdom; forgiveness
  { nt: { ref: "Mt 16–18", book: "MAT", ch: 16 } },

  // Day 7 — Marriage; the rich young ruler; the triumphal entry; the cleansing of the Temple
  { nt: { ref: "Mt 19–21", book: "MAT", ch: 19 } },

  // Day 8 — The wedding banquet; render to Caesar; the Olivet Discourse
  { nt: { ref: "Mt 22–24", book: "MAT", ch: 22 } },

  // Day 9 — Parables: ten virgins, the talents; the Last Supper; Gethsemane; the betrayal
  { nt: { ref: "Mt 25–26", book: "MAT", ch: 25 } },

  // Day 10 — The trials; the crucifixion; the burial; the Resurrection; the Great Commission
  { nt: { ref: "Mt 27–28", book: "MAT", ch: 27 } },

  // ══════════════════════════════════════════════════════
  //  MARK  (Days 11–16, 16 chapters)
  // ══════════════════════════════════════════════════════

  // Day 11 — The beginning of the Gospel; baptism; the four called; healings at Capernaum; Levi called
  { nt: { ref: "Mk 1–3", book: "MRK", ch: 1 } },

  // Day 12 — The Sower; the storm stilled; the Gerasene demoniac; Jairus's daughter; the mission of the Twelve
  { nt: { ref: "Mk 4–6", book: "MRK", ch: 4 } },

  // Day 13 — The Syrophoenician woman; Peter's confession; the Transfiguration; the epileptic boy
  { nt: { ref: "Mk 7–9", book: "MRK", ch: 7 } },

  // Day 14 — The rich young ruler; blind Bartimaeus; the triumphal entry; the wicked tenants; render to Caesar
  { nt: { ref: "Mk 10–12", book: "MRK", ch: 10 } },

  // Day 15 — The Olivet Discourse; the widow's mite; watch and be ready; the anointing at Bethany; the Last Supper
  { nt: { ref: "Mk 13–14", book: "MRK", ch: 13 } },

  // Day 16 — The crucifixion; the burial; the Resurrection; the Great Commission
  { nt: { ref: "Mk 15–16", book: "MRK", ch: 15 } },

  // ══════════════════════════════════════════════════════
  //  LUKE  (Days 17–24, 24 chapters)
  // ══════════════════════════════════════════════════════

  // Day 17 — The Annunciation; the Magnificat; the birth of John; the Nativity; the Baptism of Christ
  { nt: { ref: "Lk 1–3", book: "LUK", ch: 1 } },

  // Day 18 — The Temptation; rejection at Nazareth; the miraculous catch; the healing of the leper
  { nt: { ref: "Lk 4–6", book: "LUK", ch: 4 } },

  // Day 19 — The centurion's servant; the widow of Nain; the sinful woman; the Sower; the storm; Jairus
  { nt: { ref: "Lk 7–9", book: "LUK", ch: 7 } },

  // Day 20 — The seventy sent out; the Good Samaritan; Mary and Martha; the Lord's Prayer; woes to the Pharisees
  { nt: { ref: "Lk 10–12", book: "LUK", ch: 10 } },

  // Day 21 — Repentance; the narrow door; the great banquet; counting the cost; the lost sheep, coin, and sons
  { nt: { ref: "Lk 13–15", book: "LUK", ch: 13 } },

  // Day 22 — Lazarus and the rich man; the ten lepers; the persistent widow; the Pharisee and tax collector
  { nt: { ref: "Lk 16–18", book: "LUK", ch: 16 } },

  // Day 23 — Zacchaeus; the triumphal entry; weeping over Jerusalem; the wicked tenants; the Olivet Discourse
  { nt: { ref: "Lk 19–21", book: "LUK", ch: 19 } },

  // Day 24 — The Last Supper; Gethsemane; the trials; the crucifixion; the road to Emmaus; the Ascension
  { nt: { ref: "Lk 22–24", book: "LUK", ch: 22 } },

  // ══════════════════════════════════════════════════════
  //  JOHN  (Days 25–31, 21 chapters)
  // ══════════════════════════════════════════════════════

  // Day 25 — In the beginning was the Word; the Wedding at Cana; you must be born again
  { nt: { ref: "Jn 1–3", book: "JHN", ch: 1 } },

  // Day 26 — The Woman at the Well; the healing at Bethesda; the Bread of Life discourse
  { nt: { ref: "Jn 4–6", book: "JHN", ch: 4 } },

  // Day 27 — Living water; I am the light of the world; Before Abraham was, I AM
  { nt: { ref: "Jn 7–9", book: "JHN", ch: 7 } },

  // Day 28 — I am the Good Shepherd; the raising of Lazarus; I am the resurrection and the life
  { nt: { ref: "Jn 10–12", book: "JHN", ch: 10 } },

  // Day 29 — The washing of feet; the new commandment; I am the way, the truth, and the life
  { nt: { ref: "Jn 13–15", book: "JHN", ch: 13 } },

  // Day 30 — The Paraclete; sorrow turned to joy; the arrest; I find no fault in him
  { nt: { ref: "Jn 16–18", book: "JHN", ch: 16 } },

  // Day 31 — The crucifixion; It is finished; the Resurrection; doubting Thomas; Feed my sheep
  { nt: { ref: "Jn 19–21", book: "JHN", ch: 19 } },

  // ══════════════════════════════════════════════════════
  //  ACTS  (Days 32–40, 28 chapters)
  // ══════════════════════════════════════════════════════

  // Day 32 — The Ascension; Pentecost; Peter's sermon; three thousand baptized
  { nt: { ref: "Acts 1–3", book: "ACT", ch: 1 } },

  // Day 33 — Peter before the Sanhedrin; the Church prays; Ananias and Sapphira; the seven deacons
  { nt: { ref: "Acts 4–6", book: "ACT", ch: 4 } },

  // Day 34 — Stephen's speech and martyrdom; Philip in Samaria; the Ethiopian eunuch; Saul's conversion
  { nt: { ref: "Acts 7–9", book: "ACT", ch: 7 } },

  // Day 35 — Peter's vision; Cornelius; Gentiles receive the Holy Spirit; Herod persecutes the Church
  { nt: { ref: "Acts 10–12", book: "ACT", ch: 10 } },

  // Day 36 — First missionary journey; the Council at Jerusalem; the decree to the Gentiles
  { nt: { ref: "Acts 13–15", book: "ACT", ch: 13 } },

  // Day 37 — Timothy joins; Macedonia; Lydia baptized; Paul and Silas in prison; the Athenian speech
  { nt: { ref: "Acts 16–18", book: "ACT", ch: 16 } },

  // Day 38 — Apollos; the silversmiths' riot at Ephesus; Paul's farewell to the Ephesian elders
  { nt: { ref: "Acts 19–21", book: "ACT", ch: 19 } },

  // Day 39 — Paul arrested; his defense before the crowd; before the Sanhedrin; before Felix and Festus
  { nt: { ref: "Acts 22–24", book: "ACT", ch: 22 } },

  // Day 40 — Paul before Agrippa; the voyage; the shipwreck; Paul arrives in Rome
  { nt: { ref: "Acts 25–28", book: "ACT", ch: 25 } },

  // ══════════════════════════════════════════════════════
  //  ROMANS  (Days 41–45, 16 chapters)
  // ══════════════════════════════════════════════════════

  // Day 41 — The power of the Gospel; the wrath of God; Jews and Gentiles both guilty
  { nt: { ref: "Rom 1–3", book: "ROM", ch: 1 } },

  // Day 42 — Justification by faith; Abraham; peace with God; sin reigned, grace abounds more
  { nt: { ref: "Rom 4–7", book: "ROM", ch: 4 } },

  // Day 43 — Life in the Spirit; nothing can separate us from the love of God; the mystery of Israel
  { nt: { ref: "Rom 8–10", book: "ROM", ch: 8 } },

  // Day 44 — All Israel will be saved; living sacrifices; love one another; honor governing authorities
  { nt: { ref: "Rom 11–13", book: "ROM", ch: 11 } },

  // Day 45 — The strong bear with the weak; the mystery now revealed; glory to God forever
  { nt: { ref: "Rom 14–16", book: "ROM", ch: 14 } },

  // ══════════════════════════════════════════════════════
  //  1 CORINTHIANS  (Days 46–50, 16 chapters)
  // ══════════════════════════════════════════════════════

  // Day 46 — The wisdom of the cross; divisions; God's wisdom hidden in mystery; the Lord's temple
  { nt: { ref: "1 Cor 1–3", book: "1CO", ch: 1 } },

  // Day 47 — Paul's apostleship; immorality; lawsuits among believers; marriage and celibacy; food offered to idols
  { nt: { ref: "1 Cor 4–7", book: "1CO", ch: 4 } },

  // Day 48 — Apostolic rights; Israel's warnings; the Lord's Supper; worship in order
  { nt: { ref: "1 Cor 8–11", book: "1CO", ch: 8 } },

  // Day 49 — Spiritual gifts; the Body of Christ; the greatest of these is love; tongues and prophecy
  { nt: { ref: "1 Cor 12–14", book: "1CO", ch: 12 } },

  // Day 50 — The Resurrection of Christ and of the dead; the last enemy; greetings and closing
  { nt: { ref: "1 Cor 15–16", book: "1CO", ch: 15 } },

  // ══════════════════════════════════════════════════════
  //  2 CORINTHIANS  (Days 51–54, 13 chapters)
  // ══════════════════════════════════════════════════════

  // Day 51 — Comfort in affliction; ministers of the new covenant; the fragrance of Christ
  { nt: { ref: "2 Cor 1–3", book: "2CO", ch: 1 } },

  // Day 52 — Treasure in clay jars; the ministry of reconciliation; now is the day of salvation
  { nt: { ref: "2 Cor 4–6", book: "2CO", ch: 4 } },

  // Day 53 — Godly sorrow; the generosity of Macedonia; Paul defends his apostleship
  { nt: { ref: "2 Cor 7–10", book: "2CO", ch: 7 } },

  // Day 54 — Paul's sufferings; the thorn in the flesh; power is made perfect in weakness
  { nt: { ref: "2 Cor 11–13", book: "2CO", ch: 11 } },

  // ══════════════════════════════════════════════════════
  //  GALATIANS  (Days 55–56, 6 chapters)
  // ══════════════════════════════════════════════════════

  // Day 55 — No other Gospel; Paul's call; justified by faith, not by works of the Law
  { nt: { ref: "Gal 1–3", book: "GAL", ch: 1 } },

  // Day 56 — Heirs through faith; freedom in Christ; the fruit of the Spirit; bear one another's burdens
  { nt: { ref: "Gal 4–6", book: "GAL", ch: 4 } },

  // ══════════════════════════════════════════════════════
  //  EPHESIANS  (Days 57–58, 6 chapters)
  // ══════════════════════════════════════════════════════

  // Day 57 — Every spiritual blessing; saved by grace through faith; the mystery of the Church
  { nt: { ref: "Eph 1–3", book: "EPH", ch: 1 } },

  // Day 58 — Walk worthy; put on the new man; wives and husbands; the full armor of God
  { nt: { ref: "Eph 4–6", book: "EPH", ch: 4 } },

  // ══════════════════════════════════════════════════════
  //  PHILIPPIANS  (Day 59, 4 chapters)
  // ══════════════════════════════════════════════════════

  // Day 59 — For me to live is Christ; the mind of Christ; I can do all things through Him who strengthens me
  { nt: { ref: "Phil 1–4", book: "PHP", ch: 1 } },

  // ══════════════════════════════════════════════════════
  //  COLOSSIANS  (Day 60, 4 chapters)
  // ══════════════════════════════════════════════════════

  // Day 60 — The preeminence of Christ; fullness in Him; set your mind on things above; do all in the name of Christ
  { nt: { ref: "Col 1–4", book: "COL", ch: 1 } },

  // ══════════════════════════════════════════════════════
  //  1 THESSALONIANS  (Days 61–62, 5 chapters)
  // ══════════════════════════════════════════════════════

  // Day 61 — Paul's thanksgiving; sanctification; brotherly love; comfort one another with these words
  { nt: { ref: "1 Th 1–3", book: "1TH", ch: 1 } },

  // Day 62 — Walk in a manner worthy of God; the coming of the Lord; rejoice always; pray without ceasing
  { nt: { ref: "1 Th 4–5", book: "1TH", ch: 4 } },

  // ══════════════════════════════════════════════════════
  //  2 THESSALONIANS  (Day 63, 3 chapters)
  // ══════════════════════════════════════════════════════

  // Day 63 — The Day of the Lord; the man of lawlessness; stand firm and hold to the traditions; pray for us
  { nt: { ref: "2 Th 1–3", book: "2TH", ch: 1 } },

  // ══════════════════════════════════════════════════════
  //  1 TIMOTHY  (Days 64–65, 6 chapters)
  // ══════════════════════════════════════════════════════

  // Day 64 — Charge to Timothy; prayer for all men; qualifications of bishops and deacons
  { nt: { ref: "1 Tim 1–3", book: "1TI", ch: 1 } },

  // Day 65 — The good minister; widows, elders, and slaves; godliness with contentment; fight the good fight
  { nt: { ref: "1 Tim 4–6", book: "1TI", ch: 4 } },

  // ══════════════════════════════════════════════════════
  //  2 TIMOTHY  (Day 66, 4 chapters)
  // ══════════════════════════════════════════════════════

  // Day 66 — Fan into flame the gift of God; preach the word; I have kept the faith; the crown of righteousness
  { nt: { ref: "2 Tim 1–4", book: "2TI", ch: 1 } },

  // ══════════════════════════════════════════════════════
  //  TITUS  (Day 67, 3 chapters)
  // ══════════════════════════════════════════════════════

  // Day 67 — Qualifications of elders; sound doctrine; the grace of God has appeared to all men
  { nt: { ref: "Tit 1–3", book: "TIT", ch: 1 } },

  // ══════════════════════════════════════════════════════
  //  PHILEMON + HEBREWS  (Days 68–72, 14 chapters)
  // ══════════════════════════════════════════════════════

  // Day 68 — Receive Onesimus no longer as a slave but as a dear brother
  // The Son superior to angels; the great High Priest who sympathizes with our weakness
  { nt: { ref: "Phlm; Heb 1–2", book: "PHM", ch: 1 } },

  // Day 69 — Do not harden your hearts; the Sabbath rest; Melchizedek; the mature teaching
  { nt: { ref: "Heb 3–5", book: "HEB", ch: 3 } },

  // Day 70 — The new covenant; the earthly sanctuary; Christ offered once for all
  { nt: { ref: "Heb 6–8", book: "HEB", ch: 6 } },

  // Day 71 — The blood of the new covenant; draw near with a true heart; the great cloud of witnesses
  { nt: { ref: "Heb 9–11", book: "HEB", ch: 9 } },

  // Day 72 — Endure discipline; a kingdom that cannot be shaken; show hospitality; Jesus Christ the same
  { nt: { ref: "Heb 12–13", book: "HEB", ch: 12 } },

  // ══════════════════════════════════════════════════════
  //  JAMES  (Days 73–74, 5 chapters)
  // ══════════════════════════════════════════════════════

  // Day 73 — Count it all joy; ask in faith; faith without works is dead; tame the tongue
  { nt: { ref: "Jas 1–3", book: "JAS", ch: 1 } },

  // Day 74 — Quarrels and covetousness; draw near to God; the prayer of faith heals
  { nt: { ref: "Jas 4–5", book: "JAS", ch: 4 } },

  // ══════════════════════════════════════════════════════
  //  1 PETER  (Days 75–76, 5 chapters)
  // ══════════════════════════════════════════════════════

  // Day 75 — Born again to a living hope; a chosen people, a royal priesthood; suffering for righteousness
  { nt: { ref: "1 Pet 1–3", book: "1PE", ch: 1 } },

  // Day 76 — Arm yourselves with the mind of Christ; elders shepherd the flock; resist the devil
  { nt: { ref: "1 Pet 4–5", book: "1PE", ch: 4 } },

  // ══════════════════════════════════════════════════════
  //  2 PETER  (Day 77, 3 chapters)
  // ══════════════════════════════════════════════════════

  // Day 77 — Partakers of the divine nature; false teachers; the Day of the Lord; grow in grace and knowledge
  { nt: { ref: "2 Pet 1–3", book: "2PE", ch: 1 } },

  // ══════════════════════════════════════════════════════
  //  1 JOHN  (Days 78–79, 5 chapters)
  // ══════════════════════════════════════════════════════

  // Day 78 — God is light; walk in the light; do not love the world; the spirit of antichrist
  { nt: { ref: "1 Jn 1–3", book: "1JO", ch: 1 } },

  // Day 79 — God is love; perfect love casts out fear; we love because He first loved us
  { nt: { ref: "1 Jn 4–5", book: "1JO", ch: 4 } },

  // ══════════════════════════════════════════════════════
  //  2 JOHN · 3 JOHN · JUDE  (Day 80)
  // ══════════════════════════════════════════════════════

  // Day 80 — Walk in truth and love; beware of deceivers
  // Gaius commended; contend earnestly for the faith once delivered to the saints
  { nt: { ref: "2 Jn; 3 Jn; Jude", book: "2JO", ch: 1 } },

  // ══════════════════════════════════════════════════════
  //  REVELATION  (Days 81–90, 22 chapters)
  // ══════════════════════════════════════════════════════

  // Day 81 — Letters to the seven churches: Ephesus, Smyrna, Pergamum
  { nt: { ref: "Rev 1–3", book: "REV", ch: 1 } },

  // Day 82 — The throne room of heaven; the Lamb who was slain; the sealed scroll opened
  { nt: { ref: "Rev 4–5", book: "REV", ch: 4 } },

  // Day 83 — The six seals; the great multitude before the throne; the trumpet judgments begin
  { nt: { ref: "Rev 6–8", book: "REV", ch: 6 } },

  // Day 84 — The remaining trumpets; the two witnesses; the seventh trumpet: the kingdom has come
  { nt: { ref: "Rev 9–11", book: "REV", ch: 9 } },

  // Day 85 — The woman clothed with the sun; the dragon; the beast from the sea and from the earth
  { nt: { ref: "Rev 12–13", book: "REV", ch: 12 } },

  // Day 86 — The Lamb on Mount Zion; the harvest of the earth; the seven bowls of wrath
  { nt: { ref: "Rev 14–16", book: "REV", ch: 14 } },

  // Day 87 — The great harlot; Babylon is fallen; the marriage supper of the Lamb is announced
  { nt: { ref: "Rev 17–18", book: "REV", ch: 17 } },

  // Day 88 — The Word of God rides out; the beast defeated; Satan bound; the thousand years; the last judgment
  { nt: { ref: "Rev 19–20", book: "REV", ch: 19 } },

  // Day 89 — The new heaven and the new earth; the holy city, the new Jerusalem descends
  { nt: { ref: "Rev 21", book: "REV", ch: 21 } },

  // Day 90 — The river of life; the tree of life; I am coming soon; Amen, come Lord Jesus
  { nt: { ref: "Rev 22", book: "REV", ch: 22 } },
];
