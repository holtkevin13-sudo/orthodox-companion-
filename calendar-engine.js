/**
 * Orthodox Companion — Calendar Engine
 * ─────────────────────────────────────
 * Provides liturgical data for any date using:
 *   1. ICS-derived data (Greek Orthodox Archdiocese, New Calendar)
 *   2. Pascha calculator (Meeus/Jones/Butcher, Julian→Gregorian)
 *   3. Moveable feast offsets from Pascha base year 2026
 *
 * Usage:
 *   await OrthodoxCalendar.init();           // load data once
 *   const day = OrthodoxCalendar.getDay('2026-04-12');  // returns day object
 *   const days = OrthodoxCalendar.getMonth(2026, 3);    // April = month 3
 */

const OrthodoxCalendar = (() => {
  // ── Config ────────────────────────────────────────────────
  const SLIM_DATA_URL = 'calendar-data-slim.json';
  const FULL_DATA_URL = 'calendar-data.json';
  const PASCHA_BASE_YEAR = 2026;

  // ── Internal state ────────────────────────────────────────
  let _slim = null;   // loaded once on init
  let _full = null;   // loaded on demand for readings
  let _paschaCache = {};

  // ── Pascha Calculator ─────────────────────────────────────
  // Meeus/Jones/Butcher for Orthodox (Julian base + 13-day offset → Gregorian)
  function calcPascha(year) {
    if (_paschaCache[year]) return _paschaCache[year];
    const a = year % 4;
    const b = year % 7;
    const c = year % 19;
    const d = (19 * c + 15) % 30;
    const e = (2 * a + 4 * b - d + 34) % 7;
    const month = Math.floor((d + e + 114) / 31);
    const day   = ((d + e + 114) % 31) + 1;
    // Julian date — add 13 days to get Gregorian
    const julian = new Date(year, month - 1, day);
    julian.setDate(julian.getDate() + 13);
    _paschaCache[year] = julian;
    return julian;
  }

  // ── Date utilities ────────────────────────────────────────
  function toDateStr(d) {
    const y  = d.getFullYear();
    const mo = String(d.getMonth() + 1).padStart(2, '0');
    const da = String(d.getDate()).padStart(2, '0');
    return `${y}-${mo}-${da}`;
  }

  function mmdd(d) {
    return `${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  }

  function addDays(d, n) {
    const r = new Date(d);
    r.setDate(r.getDate() + n);
    return r;
  }

  function diffDays(a, b) {
    // a - b in days
    return Math.round((a - b) / 86400000);
  }

  // ── Liturgical Season ─────────────────────────────────────
  function getLiturgicalSeason(date, paschaDate) {
    const d = diffDays(date, paschaDate);

    if (d === 0)                 return 'Holy Pascha';
    if (d >= 1  && d <= 6)      return 'Bright Week';
    if (d >= 7  && d <= 38)     return 'Paschal Season';
    if (d === 39)                return 'Holy Ascension';
    if (d >= 40 && d <= 48)     return 'Post-Ascension';
    if (d === 49)                return 'Holy Pentecost';
    if (d >= 50 && d <= 56)     return 'Post-Pentecost';
    if (d >= 57 && d <= 56)     return 'Apostles Fast'; // handled below

    // Pre-Lent (Triodion)
    if (d >= -70 && d <= -49)   return 'Pre-Lenten Season';
    if (d >= -48 && d <= -8)    return 'Great Lent';
    if (d >= -7  && d <= -1)    return 'Holy Week';

    // Apostles Fast: Pascha+57 → June 28
    const juneDate = new Date(paschaDate.getFullYear(), 5, 28);
    const apostlesStart = addDays(paschaDate, 57);
    if (date >= apostlesStart && date <= juneDate) return 'Apostles Fast';

    // Fixed fasting seasons by calendar date
    const mo = date.getMonth() + 1; // 1-based
    const da = date.getDate();
    // Dormition Fast: Aug 1-14
    if (mo === 8 && da >= 1 && da <= 14)  return 'Dormition Fast';
    // Nativity Fast: Nov 15 – Dec 24
    if ((mo === 11 && da >= 15) || (mo === 12 && da <= 24)) return 'Nativity Fast';
    // After Nativity: Dec 25 – Jan 4
    if ((mo === 12 && da >= 25) || (mo === 1 && da <= 4))   return 'Nativity Season';
    // Theophany period: Jan 5-14
    if (mo === 1 && da >= 5 && da <= 14)  return 'Theophany Season';

    return 'Ordinary Time';
  }

  // ── Fasting Rule Override ─────────────────────────────────
  // Great feasts lift fasting even on Wed/Fri
  const GREAT_FEAST_MMDD = [
    '01-06','01-07','01-25','02-02','03-25',
    '08-06','08-15','09-08','09-14','12-25','12-26'
  ];
  function getSeasonFasting(date, paschaDate, dataFasting) {
    // If ICS supplied a specific rule, trust it
    if (dataFasting && dataFasting !== 'No Restriction') return dataFasting;
    const d = diffDays(date, paschaDate);
    const dow = date.getDay(); // 0=Sun, 3=Wed, 5=Fri
    const md = mmdd(date);

    // Bright Week — fast-free
    if (d >= 0 && d <= 6) return 'Fast Free';
    // Holy Week — strict fast
    if (d >= -7 && d <= -1) return 'Strict Fast';
    // Great Lent — strict fast Mon/Tue/Thu, Wine&Oil Wed/Fri/Sat, no restriction Sun
    if (d >= -48 && d <= -8) {
      if (dow === 0) return 'No Restriction';
      if (dow === 7) return 'Wine and Oil'; // Sat
      if (dow === 3 || dow === 5) return 'Strict Fast'; // Wed, Fri
      return 'Strict Fast'; // Mon, Tue, Thu in Lent
    }
    // Regular Wed/Fri fast
    if (dow === 3 || dow === 5) {
      if (GREAT_FEAST_MMDD.includes(md)) return 'Fish Allowed';
      return 'Strict Fast';
    }
    return dataFasting || 'No Restriction';
  }

  // ── Core lookup ───────────────────────────────────────────
  function getEntry(dateStr, dataSet) {
    if (!dataSet) return null;
    const [y, mo, da] = dateStr.split('-').map(Number);
    const date = new Date(y, mo - 1, da);
    const paschaDate = calcPascha(y);
    const offset = diffDays(date, new Date(PASCHA_BASE_YEAR, 3, 12)); // base: 2026-04-12

    // Calculate THIS year's Pascha offset
    const yearPaschaOffset = diffDays(date, paschaDate);

    // Try moveable feast first (use year-specific offset)
    // We map current year's offset to base year offset
    const basePascha = new Date(PASCHA_BASE_YEAR, 3, 12);
    const baseEquiv  = addDays(basePascha, yearPaschaOffset);
    const baseOffset = diffDays(baseEquiv, basePascha);
    const moveableKey = String(baseOffset);
    const moveableEntry = dataSet.moveable[moveableKey];

    // Try fixed feast (mm-dd)
    const md = `${String(mo).padStart(2,'0')}-${String(da).padStart(2,'0')}`;
    const fixedEntry = dataSet.fixed[md];

    // Merge: moveable takes precedence for summary; fixed fills in if no moveable
    let entry = {};
    if (moveableEntry && fixedEntry) {
      // Both — moveable wins for liturgical content but note the fixed feast too
      entry = { ...fixedEntry, ...moveableEntry };
      // Merge saints lists
      const allSaints = [
        ...(moveableEntry.saints_feasts || []),
        ...(fixedEntry.saints_feasts || []).filter(s => !moveableEntry.saints_feasts?.includes(s))
      ];
      entry.saints_feasts = allSaints;
      entry.has_fixed_feast = true;
    } else if (moveableEntry) {
      entry = { ...moveableEntry };
    } else if (fixedEntry) {
      entry = { ...fixedEntry };
    } else {
      // No data — build minimal entry
      entry = {
        summary: date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
        saints_feasts: [],
        fasting: 'No Restriction',
        feast_rank: 'Regular',
        sunday_name: '',
        epistle_ref: '',
        gospel_ref: '',
        matins_ref: '',
      };
    }

    // Add computed fields
    entry.date            = dateStr;
    entry.weekday         = date.toLocaleDateString('en-US', { weekday: 'long' });
    entry.is_sunday       = date.getDay() === 0;
    entry.liturgical_season = getLiturgicalSeason(date, paschaDate);
    entry.fasting         = getSeasonFasting(date, paschaDate, entry.fasting);
    entry.pascha_year     = toDateStr(paschaDate);
    entry.pascha_offset   = yearPaschaOffset;

    return entry;
  }

  // ── Public API ────────────────────────────────────────────
  return {
    /**
     * Load the slim data file. Call once on page init.
     * @param {string} [baseUrl=''] prefix for data file URLs
     */
    async init(baseUrl = '') {
      if (_slim) return; // already loaded
      try {
        const res = await fetch(baseUrl + SLIM_DATA_URL);
        _slim = await res.json();
      } catch (e) {
        console.error('OrthodoxCalendar: failed to load calendar-data-slim.json', e);
        _slim = { meta: {}, fixed: {}, moveable: {} };
      }
    },

    /**
     * Load the full data (readings text). Called lazily when a reading is opened.
     */
    async loadFull(baseUrl = '') {
      if (_full) return;
      try {
        const res = await fetch(baseUrl + FULL_DATA_URL);
        _full = await res.json();
      } catch (e) {
        console.error('OrthodoxCalendar: failed to load calendar-data.json', e);
        _full = { meta: {}, fixed: {}, moveable: {} };
      }
    },

    /**
     * Get liturgical data for a single date.
     * @param {string} dateStr  'YYYY-MM-DD'
     * @returns {object} day entry
     */
    getDay(dateStr) {
      return getEntry(dateStr, _slim);
    },

    /**
     * Get full reading texts for a date (loads full data if needed).
     * @param {string} dateStr  'YYYY-MM-DD'
     * @param {string} [baseUrl='']
     * @returns {Promise<object>} day entry with full reading texts
     */
    async getDayWithReadings(dateStr, baseUrl = '') {
      await this.loadFull(baseUrl);
      return getEntry(dateStr, _full);
    },

    /**
     * Get all days in a calendar month.
     * @param {number} year
     * @param {number} month  0-based (0=January)
     * @returns {object[]} array of day entries
     */
    getMonth(year, month) {
      const days = [];
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      for (let d = 1; d <= daysInMonth; d++) {
        const ds = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
        days.push(getEntry(ds, _slim));
      }
      return days;
    },

    /**
     * Get a week of days starting from a date.
     * @param {string} startDateStr  'YYYY-MM-DD' (any day; will align to Sunday)
     * @returns {object[]} 7 day entries Sun→Sat
     */
    getWeek(dateStr) {
      const [y, mo, da] = dateStr.split('-').map(Number);
      const d = new Date(y, mo - 1, da);
      const sunday = new Date(d);
      sunday.setDate(d.getDate() - d.getDay());
      const days = [];
      for (let i = 0; i < 7; i++) {
        const cur = new Date(sunday);
        cur.setDate(sunday.getDate() + i);
        days.push(getEntry(toDateStr(cur), _slim));
      }
      return days;
    },

    /**
     * Calculate Orthodox Pascha for any year.
     * @param {number} year
     * @returns {Date} Gregorian date of Pascha
     */
    getPascha(year) {
      return calcPascha(year);
    },

    /**
     * Today's date string.
     */
    today() {
      return toDateStr(new Date());
    },

    isLoaded() {
      return !!_slim;
    }
  };
})();

// Make available as module export for React Native / Node
if (typeof module !== 'undefined' && module.exports) {
  module.exports = OrthodoxCalendar;
}
