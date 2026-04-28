// Orthodox Companion — Reading Plan
// Plan: Gospels — 60 Days (plan-gospels.js)
// Variable: PLAN_GOSPELS
// Days: 60
// Coverage: Matthew (days 1–18) · Mark (days 19–27) · Luke (days 28–43) · John (days 44–60)
// Total: 89 chapters across the four Gospels
// Index 0 is unused — plan is 1-indexed.

const PLAN_GOSPELS = [
  null, // index 0 unused

  // ══════════════════════════════════════════════════════
  //  MATTHEW  (Days 1–18, 28 chapters)
  // ══════════════════════════════════════════════════════

  // Day 1 — The genealogy and birth of Jesus Christ
  { nt: { ref: "Mt 1", book: "MAT", ch: 1 }, note: "The genealogy and birth of Jesus Christ" },

  // Day 2 — The Magi; the flight to Egypt; the massacre of the innocents
  { nt: { ref: "Mt 2", book: "MAT", ch: 2 }, note: "The Magi; the flight to Egypt; the massacre of the innocents" },

  // Day 3 — John the Baptist; the Baptism of Christ; the Temptation
  { nt: { ref: "Mt 3", book: "MAT", ch: 3 }, note: "John the Baptist; the Baptism of Christ; the Temptation" },

  // Day 4 — The calling of the disciples; the Sermon on the Mount begins
  { nt: { ref: "Mt 4", book: "MAT", ch: 4 }, note: "The calling of the disciples; the Sermon on the Mount begins" },

  // Day 5 — The Beatitudes; salt and light; the fulfillment of the Law
  { nt: { ref: "Mt 5", book: "MAT", ch: 5 }, note: "The Beatitudes; salt and light; the fulfillment of the Law" },

  // Day 6 — The Lord's Prayer; fasting; treasures in heaven; do not worry
  { nt: { ref: "Mt 6", book: "MAT", ch: 6 }, note: "The Lord's Prayer; fasting; treasures in heaven; do not worry" },

  // Day 7 — Do not judge; ask, seek, knock; the narrow gate; build on the rock
  { nt: { ref: "Mt 7", book: "MAT", ch: 7 }, note: "Do not judge; ask, seek, knock; the narrow gate; build on the rock" },

  // Day 8 — The healing of the leper; the centurion's faith; Peter's mother-in-law
  { nt: { ref: "Mt 8", book: "MAT", ch: 8 }, note: "The healing of the leper; the centurion's faith; Peter's mother-in-law" },

  // Day 9 — The healing of the paralytic; Matthew called; fasting and the bridegroom
  { nt: { ref: "Mt 9", book: "MAT", ch: 9 }, note: "The healing of the paralytic; Matthew called; fasting and the bridegroom" },

  // Day 10 — The twelve sent out; instructions for mission; fear not
  { nt: { ref: "Mt 10–11", book: "MAT", ch: 10 }, note: "The twelve sent out; instructions for mission; fear not" },

  // Day 11 — Woes on the cities; Come to me, all you who are weary
  // The Sabbath controversy; the Pharisees blaspheme; Jonah's sign
  { nt: { ref: "Mt 12", book: "MAT", ch: 12 }, note: "Woes on the cities; Come to me, all you who are weary" },

  // Day 12 — Parables of the Kingdom: the Sower, Tares, Mustard Seed, Pearl
  // John the Baptist beheaded; the feeding of the five thousand
  { nt: { ref: "Mt 13–14", book: "MAT", ch: 13 }, note: "Parables of the Kingdom: the Sower, Tares, Mustard Seed, Pearl" },

  // Day 13 — Traditions of the elders; the Canaanite woman; feeding of the four thousand
  // The demand for a sign; the leaven of the Pharisees; Peter's confession at Caesarea Philippi
  { nt: { ref: "Mt 15–16", book: "MAT", ch: 15 }, note: "Traditions of the elders; the Canaanite woman; feeding of the four thousand" },

  // Day 14 — The Transfiguration; healing the epileptic boy; the Temple tax
  // Greatness in the Kingdom; the lost sheep; forgiveness seventy times seven
  { nt: { ref: "Mt 17–18", book: "MAT", ch: 17 }, note: "The Transfiguration; healing the epileptic boy; the Temple tax" },

  // Day 15 — Marriage and divorce; the rich young ruler; the first shall be last
  // The triumphal entry; the cleansing of the Temple; the cursing of the fig tree
  { nt: { ref: "Mt 19–20", book: "MAT", ch: 19 }, note: "Marriage and divorce; the rich young ruler; the first shall be last" },

  // Day 16 — The parable of the two sons; the wicked tenants; the wedding banquet
  // Render to Caesar; the greatest commandment; David's son
  { nt: { ref: "Mt 21–22", book: "MAT", ch: 21 }, note: "The parable of the two sons; the wicked tenants; the wedding banquet" },

  // Day 17 — The seven woes against the scribes and Pharisees
  // The Olivet Discourse: signs of the end; the faithful servant
  { nt: { ref: "Mt 23–24", book: "MAT", ch: 23 }, note: "The seven woes against the scribes and Pharisees" },

  // Day 18 — Parables: the ten virgins, the talents; the judgment of the nations
  // The Last Supper; Gethsemane; the betrayal; the trial; the denial
  // The crucifixion; the burial; the Resurrection; the Great Commission
  { nt: { ref: "Mt 25–28", book: "MAT", ch: 25 }, note: "Parables: the ten virgins, the talents; the judgment of the nations" },

  // ══════════════════════════════════════════════════════
  //  MARK  (Days 19–27, 16 chapters)
  // ══════════════════════════════════════════════════════

  // Day 19 — The beginning of the Gospel; baptism; calling of the four; Capernaum healings
  { nt: { ref: "Mk 1", book: "MRK", ch: 1 }, note: "The beginning of the Gospel; baptism; calling of the four; Capernaum healings" },

  // Day 20 — The paralytic lowered through the roof; Levi called; new wine in new wineskins
  // The man with the withered hand; the Twelve named; the Beelzebul controversy
  { nt: { ref: "Mk 2–3", book: "MRK", ch: 2 }, note: "The paralytic lowered through the roof; Levi called; new wine in new wineskins" },

  // Day 21 — The Sower; the lamp under the bushel; the storm stilled
  // The Gerasene demoniac; Jairus's daughter; the woman with the hemorrhage
  { nt: { ref: "Mk 4–5", book: "MRK", ch: 4 }, note: "The Sower; the lamp under the bushel; the storm stilled" },

  // Day 22 — The rejection at Nazareth; the mission of the Twelve; Herod and the Baptist
  // Walking on water; the Syrophoenician woman; the deaf-mute healed
  { nt: { ref: "Mk 6–7", book: "MRK", ch: 6 }, note: "The rejection at Nazareth; the mission of the Twelve; Herod and the Baptist" },

  // Day 23 — The Pharisees demand a sign; the leaven of the Pharisees
  // Peter's confession; the first Passion prediction; the Transfiguration
  // The healing at the foot of the mountain; a second Passion prediction
  { nt: { ref: "Mk 8–9", book: "MRK", ch: 8 }, note: "The Pharisees demand a sign; the leaven of the Pharisees" },

  // Day 24 — Marriage and divorce; the rich young ruler; a third Passion prediction
  // Blind Bartimaeus; the triumphal entry; the cleansing of the Temple
  { nt: { ref: "Mk 10–11", book: "MRK", ch: 10 }, note: "Marriage and divorce; the rich young ruler; a third Passion prediction" },

  // Day 25 — The wicked tenants; render to Caesar; the greatest commandment
  // The Olivet Discourse: watch and be ready
  { nt: { ref: "Mk 12–13", book: "MRK", ch: 12 }, note: "The wicked tenants; render to Caesar; the greatest commandment" },

  // Day 26 — The anointing at Bethany; the Last Supper; Gethsemane; the arrest; the trials
  { nt: { ref: "Mk 14", book: "MRK", ch: 14 }, note: "The anointing at Bethany; the Last Supper; Gethsemane; the arrest; the trials" },

  // Day 27 — The crucifixion; the burial; the Resurrection; the Great Commission
  { nt: { ref: "Mk 15–16", book: "MRK", ch: 15 }, note: "The crucifixion; the burial; the Resurrection; the Great Commission" },

  // ══════════════════════════════════════════════════════
  //  LUKE  (Days 28–43, 24 chapters)
  // ══════════════════════════════════════════════════════

  // Day 28 — The preface; the Annunciation; the Magnificat; the birth of John the Baptist
  { nt: { ref: "Lk 1", book: "LUK", ch: 1 }, note: "The preface; the Annunciation; the Magnificat; the birth of John the Baptist" },

  // Day 29 — The Nativity; the shepherds; the Presentation; the Nunc Dimittis; the boy Jesus
  { nt: { ref: "Lk 2", book: "LUK", ch: 2 }, note: "The Nativity; the shepherds; the Presentation; the Nunc Dimittis; the boy Jesus" },

  // Day 30 — John's preaching; the Baptism; the genealogy of Jesus
  { nt: { ref: "Lk 3", book: "LUK", ch: 3 }, note: "John's preaching; the Baptism; the genealogy of Jesus" },

  // Day 31 — The Temptation; preaching in Galilee; the rejection at Nazareth; healings at Capernaum
  { nt: { ref: "Lk 4", book: "LUK", ch: 4 }, note: "The Temptation; preaching in Galilee; the rejection at Nazareth; healings at Capernaum" },

  // Day 32 — The miraculous catch of fish; the healing of the leper; the paralytic lowered down
  { nt: { ref: "Lk 5", book: "LUK", ch: 5 }, note: "The miraculous catch of fish; the healing of the leper; the paralytic lowered down" },

  // Day 33 — The twelve chosen; the Sermon on the Plain; Blessed are you; love your enemies
  { nt: { ref: "Lk 6", book: "LUK", ch: 6 }, note: "The twelve chosen; the Sermon on the Plain; Blessed are you; love your enemies" },

  // Day 34 — The centurion's servant; the widow of Nain; John's question; the sinful woman anoints Christ
  { nt: { ref: "Lk 7", book: "LUK", ch: 7 }, note: "The centurion's servant; the widow of Nain; John's question; the sinful woman anoints Christ" },

  // Day 35 — The women who followed Jesus; the Sower; the stilling of the storm
  // Jairus's daughter; the mission of the Twelve; the feeding of the five thousand; Peter's confession
  { nt: { ref: "Lk 8–9", book: "LUK", ch: 8 }, note: "The women who followed Jesus; the Sower; the stilling of the storm" },

  // Day 36 — The seventy sent out; the Good Samaritan; Mary and Martha
  // The Lord's Prayer; the friend at midnight; ask, seek, knock; woes to the Pharisees
  { nt: { ref: "Lk 10–11", book: "LUK", ch: 10 }, note: "The seventy sent out; the Good Samaritan; Mary and Martha" },

  // Day 37 — Fear not; the rich fool; watch and be ready; division and discernment
  // The call to repentance; the mustard seed; the narrow door; lament over Jerusalem
  { nt: { ref: "Lk 12–13", book: "LUK", ch: 12 }, note: "Fear not; the rich fool; watch and be ready; division and discernment" },

  // Day 38 — The great banquet; counting the cost; the lost sheep, coin, and sons
  // The dishonest steward; Lazarus and the rich man
  { nt: { ref: "Lk 14–16", book: "LUK", ch: 14 }, note: "The great banquet; counting the cost; the lost sheep, coin, and sons" },

  // Day 39 — Forgiveness and faith; the ten lepers; the Kingdom does not come with observation
  // The persistent widow; the Pharisee and the tax collector; the rich young ruler
  { nt: { ref: "Lk 17–18", book: "LUK", ch: 17 }, note: "Forgiveness and faith; the ten lepers; the Kingdom does not come with observation" },

  // Day 40 — Zacchaeus; the parable of the minas; the triumphal entry; weeping over Jerusalem
  // The cleansing of the Temple; the wicked tenants; render to Caesar
  { nt: { ref: "Lk 19–20", book: "LUK", ch: 19 }, note: "Zacchaeus; the parable of the minas; the triumphal entry; weeping over Jerusalem" },

  // Day 41 — The Olivet Discourse; the widow's two mites; signs and endurance
  { nt: { ref: "Lk 21", book: "LUK", ch: 21 }, note: "The Olivet Discourse; the widow's two mites; signs and endurance" },

  // Day 42 — The Last Supper; the dispute about greatness; Gethsemane; the arrest; the trials
  { nt: { ref: "Lk 22", book: "LUK", ch: 22 }, note: "The Last Supper; the dispute about greatness; Gethsemane; the arrest; the trials" },

  // Day 43 — The crucifixion; the burial; the Resurrection; the road to Emmaus; the Ascension
  { nt: { ref: "Lk 23–24", book: "LUK", ch: 23 }, note: "The crucifixion; the burial; the Resurrection; the road to Emmaus; the Ascension" },

  // ══════════════════════════════════════════════════════
  //  JOHN  (Days 44–60, 21 chapters)
  // ══════════════════════════════════════════════════════

  // Day 44 — In the beginning was the Word; the Word became flesh; the witness of John
  { nt: { ref: "Jn 1", book: "JHN", ch: 1 }, note: "In the beginning was the Word; the Word became flesh; the witness of John" },

  // Day 45 — The Wedding at Cana; the first sign; the cleansing of the Temple
  { nt: { ref: "Jn 2", book: "JHN", ch: 2 }, note: "The Wedding at Cana; the first sign; the cleansing of the Temple" },

  // Day 46 — Nicodemus; you must be born again; God so loved the world
  { nt: { ref: "Jn 3", book: "JHN", ch: 3 }, note: "Nicodemus; you must be born again; God so loved the world" },

  // Day 47 — The Woman at the Well; living water; worship in spirit and truth
  { nt: { ref: "Jn 4", book: "JHN", ch: 4 }, note: "The Woman at the Well; living water; worship in spirit and truth" },

  // Day 48 — The healing at Bethesda; the Father and the Son
  { nt: { ref: "Jn 5", book: "JHN", ch: 5 }, note: "The healing at Bethesda; the Father and the Son" },

  // Day 49 — The Bread of Life discourse; This is the work of God
  { nt: { ref: "Jn 6", book: "JHN", ch: 6 }, note: "The Bread of Life discourse; This is the work of God" },

  // Day 50 — The Feast of Tabernacles; rivers of living water; division over Christ
  { nt: { ref: "Jn 7", book: "JHN", ch: 7 }, note: "The Feast of Tabernacles; rivers of living water; division over Christ" },

  // Day 51 — I am the light of the world; the woman taken in adultery; Before Abraham was, I AM
  { nt: { ref: "Jn 8", book: "JHN", ch: 8 }, note: "I am the light of the world; the woman taken in adultery; Before Abraham was, I AM" },

  // Day 52 — The man born blind; sin, sight, and judgment
  { nt: { ref: "Jn 9", book: "JHN", ch: 9 }, note: "The man born blind; sin, sight, and judgment" },

  // Day 53 — I am the Good Shepherd; one flock, one shepherd; I and the Father are one
  { nt: { ref: "Jn 10", book: "JHN", ch: 10 }, note: "I am the Good Shepherd; one flock, one shepherd; I and the Father are one" },

  // Day 54 — The raising of Lazarus; I am the resurrection and the life
  { nt: { ref: "Jn 11", book: "JHN", ch: 11 }, note: "The raising of Lazarus; I am the resurrection and the life" },

  // Day 55 — The anointing at Bethany; the triumphal entry; the grain of wheat; the hour has come
  { nt: { ref: "Jn 12", book: "JHN", ch: 12 }, note: "The anointing at Bethany; the triumphal entry; the grain of wheat; the hour has come" },

  // Day 56 — The washing of feet; the new commandment; the betrayal foretold
  // I am the way, the truth, and the life; the promise of the Paraclete
  { nt: { ref: "Jn 13–14", book: "JHN", ch: 13 }, note: "The washing of feet; the new commandment; the betrayal foretold" },

  // Day 57 — I am the true vine; abide in my love; the hatred of the world
  // The Paraclete convicts the world; sorrow turns to joy
  { nt: { ref: "Jn 15–16", book: "JHN", ch: 15 }, note: "I am the true vine; abide in my love; the hatred of the world" },

  // Day 58 — The High Priestly Prayer: that they may be one as We are one
  { nt: { ref: "Jn 17", book: "JHN", ch: 17 }, note: "The High Priestly Prayer: that they may be one as We are one" },

  // Day 59 — The arrest; Annas and Caiaphas; Peter's denial; Pilate: I find no fault in him
  // The crucifixion; It is finished; the burial
  { nt: { ref: "Jn 18–19", book: "JHN", ch: 18 }, note: "The arrest; Annas and Caiaphas; Peter's denial; Pilate: I find no fault in him" },

  // Day 60 — The Resurrection; Mary Magdalene; the empty tomb; doubting Thomas; Feed my sheep
  { nt: { ref: "Jn 20–21", book: "JHN", ch: 20 }, note: "The Resurrection; Mary Magdalene; the empty tomb; doubting Thomas; Feed my sheep" },
];
