// Orthodox Companion — Reading Plan
// Plan: Wisdom Literature — 30 Days (plan-wisdom.js)
// Variable: PLAN_WISDOM
// Days: 30
// Coverage: Job (days 1–7) · Proverbs (days 8–13) · Ecclesiastes (days 14–15)
//           Song of Songs (day 16) · Wisdom of Solomon (days 17–19) · Sirach (days 20–30)
// Total: ~163 chapters (~5 chapters/day)
// Index 0 is unused — plan is 1-indexed.

const PLAN_WISDOM = [
  null, // index 0 unused

  // ══════════════════════════════════════════════════════
  //  JOB  (Days 1–7, 42 chapters)
  // ══════════════════════════════════════════════════════

  // Day 1 — The blameless man; the heavenly court; Job's first test; he does not sin
  { ot: { ref: "Job 1–6", book: "JOB", ch: 1 } },

  // Day 2 — Job's lament deepens; Bildad and Zophar speak; God is greater than man
  { ot: { ref: "Job 7–12", book: "JOB", ch: 7 } },

  // Day 3 — If only there were a mediator; Job clings to his hope; the second cycle begins
  { ot: { ref: "Job 13–18", book: "JOB", ch: 13 } },

  // Day 4 — I know that my Redeemer lives; why do the wicked prosper?
  { ot: { ref: "Job 19–24", book: "JOB", ch: 19 } },

  // Day 5 — Job's final oath of innocence; wisdom is hidden from the living
  { ot: { ref: "Job 25–31", book: "JOB", ch: 25 } },

  // Day 6 — Elihu's four speeches; God speaks through the storm
  { ot: { ref: "Job 32–37", book: "JOB", ch: 32 } },

  // Day 7 — The voice from the whirlwind; where were you when I laid the foundations?
  // Job humbled and restored; the Lord gives Job twice as much as before
  { ot: { ref: "Job 38–42", book: "JOB", ch: 38 } },

  // ══════════════════════════════════════════════════════
  //  PROVERBS  (Days 8–13, 31 chapters)
  // ══════════════════════════════════════════════════════

  // Day 8 — The fear of the Lord is the beginning of wisdom; Lady Wisdom calls in the streets
  { ot: { ref: "Prov 1–5", book: "PRO", ch: 1 } },

  // Day 9 — Seven things the Lord hates; the diligent hand makes rich; a wise son gladdens his father
  { ot: { ref: "Prov 6–10", book: "PRO", ch: 6 } },

  // Day 10 — A good name is better than riches; pride goes before a fall
  { ot: { ref: "Prov 11–15", book: "PRO", ch: 11 } },

  // Day 11 — The plans of the heart belong to man; the Lord weighs the spirit
  // Pleasant words are a honeycomb; gray hair is a crown of glory
  { ot: { ref: "Prov 16–20", book: "PRO", ch: 16 } },

  // Day 12 — Train up a child in the way he should go; do not remove the ancient landmark
  // The Proverbs of Solomon compiled by the men of Hezekiah
  { ot: { ref: "Prov 21–25", book: "PRO", ch: 21 } },

  // Day 13 — The words of Agur: I am the most ignorant of men
  // Who can find a virtuous woman? Her worth is far above rubies
  { ot: { ref: "Prov 26–31", book: "PRO", ch: 26 } },

  // ══════════════════════════════════════════════════════
  //  ECCLESIASTES  (Days 14–15, 12 chapters)
  // ══════════════════════════════════════════════════════

  // Day 14 — Vanity of vanities, all is vanity; the Preacher seeks wisdom; there is a time for everything
  { ot: { ref: "Eccl 1–6", book: "ECC", ch: 1 } },

  // Day 15 — A good name is better than precious ointment; there is no partiality with God
  // Fear God and keep His commandments, for this is the whole duty of man
  { ot: { ref: "Eccl 7–12", book: "ECC", ch: 7 } },

  // ══════════════════════════════════════════════════════
  //  SONG OF SONGS  (Day 16, 8 chapters)
  // ══════════════════════════════════════════════════════

  // Day 16 — The great love poem of Scripture; the soul's longing for union with God
  // I am my beloved's, and my beloved is mine; love is as strong as death
  { ot: { ref: "Song 1–8", book: "SNG", ch: 1 } },

  // ══════════════════════════════════════════════════════
  //  WISDOM OF SOLOMON  (Days 17–19, 19 chapters)
  // ══════════════════════════════════════════════════════

  // Day 17 — Love righteousness; the souls of the righteous are in God's hand
  // Wisdom herself speaks; she is the radiance of the eternal light
  { ot: { ref: "Wis 1–6", book: "WIS", ch: 1 } },

  // Day 18 — Solomon's prayer for wisdom; wisdom in the history of Israel
  // She guided the patriarchs; wisdom preserved Noah, Abraham, and Jacob
  { ot: { ref: "Wis 7–12", book: "WIS", ch: 7 } },

  // Day 19 — The folly of idolatry; God's mercy shown through the Exodus
  // The elements served the righteous; You did not abandon Your people
  { ot: { ref: "Wis 13–19", book: "WIS", ch: 13 } },

  // ══════════════════════════════════════════════════════
  //  SIRACH (ECCLESIASTICUS)  (Days 20–30, 51 chapters)
  // ══════════════════════════════════════════════════════

  // Day 20 — Wisdom comes from the Lord; fear of the Lord is glory and gladness
  // Honor your father; almsgiving atones for sin
  { ot: { ref: "Sir 1–5", book: "SIR", ch: 1 } },

  // Day 21 — Do not be ashamed of wisdom; friendship and faithful counsel
  // The discipline of the tongue; diligence in your calling
  { ot: { ref: "Sir 6–10", book: "SIR", ch: 6 } },

  // Day 22 — Give to the poor without grudging; examine yourself before judging
  // The mercy of the Lord is great; He forgives all who repent
  { ot: { ref: "Sir 11–15", book: "SIR", ch: 11 } },

  // Day 23 — God sees all; the wonders of creation testify to the Creator
  // A physician's work is from God; honor the doctor
  { ot: { ref: "Sir 16–20", book: "SIR", ch: 16 } },

  // Day 24 — Reproving a friend; the danger of the tongue; the bee and Lady Wisdom
  // Do not be ashamed to confess your sins
  { ot: { ref: "Sir 21–25", book: "SIR", ch: 21 } },

  // Day 25 — A good wife is a great gift; wisdom in household management
  // The fear of the Lord surpasses all; the day of death is better than birth
  { ot: { ref: "Sir 26–30", book: "SIR", ch: 26 } },

  // Day 26 — Rich and poor before God; table manners and feasting rightly
  // Do not delay turning to the Lord; a stubborn heart will be punished
  { ot: { ref: "Sir 31–35", book: "SIR", ch: 31 } },

  // Day 27 — Prayer for the people of God; gather all the tribes of Jacob
  // The craftsman's art; yet he who devotes himself to the Law of the Most High is greater
  { ot: { ref: "Sir 36–39", book: "SIR", ch: 36 } },

  // Day 28 — The joys and sorrows of life; the wonders of God in nature
  // Thunder, lightning, snow, and hail proclaim His glory
  { ot: { ref: "Sir 40–43", book: "SIR", ch: 40 } },

  // Day 29 — The Praise of the Fathers: Enoch, Noah, Abraham, Moses, Aaron, Phinehas, David
  { ot: { ref: "Sir 44–47", book: "SIR", ch: 44 } },

  // Day 30 — Hezekiah, Isaiah, Josiah, Zerubbabel, Nehemiah; the final exhortation
  // Come to me, you who are untaught; submit your neck to her yoke
  { ot: { ref: "Sir 48–51", book: "SIR", ch: 48 } },
];
