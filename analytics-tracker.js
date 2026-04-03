/**
 * Orthodox Companion — Analytics Tracker
 * Tracks site-level events and posts to the Cloudflare Worker /log-event endpoint.
 * Add to every page: <script src="/analytics-tracker.js"></script>
 */
(function () {
  'use strict';

  const WORKER_URL = 'https://silent-disk-1140.holt-kevin13.workers.dev/log-event';
  const PAGE = window.location.pathname.replace(/\/+$/, '') || '/index';

  // ── Session ID (persists across pages within one browser visit) ─────────────
  let sessionId = sessionStorage.getItem('oc_session');
  if (!sessionId) {
    sessionId = 'sess_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem('oc_session', sessionId);
  }

  // ── Visitor type (new vs returning) ─────────────────────────────────────────
  const isReturning = !!localStorage.getItem('oc_visited');
  localStorage.setItem('oc_visited', '1');
  const visitorType = isReturning ? 'returning' : 'new';

  // ── Core send function ───────────────────────────────────────────────────────
  function send(eventType, data) {
    const payload = Object.assign({
      session_id:   sessionId,
      visitor_type: visitorType,
      event_type:   eventType,
      page:         PAGE,
    }, data || {});

    fetch(WORKER_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'omit',
      keepalive: true,
    }).catch(function () {});
  }

  // ── Page view + load time ────────────────────────────────────────────────────
  window.addEventListener('load', function () {
    var loadTime = Math.round(performance.now());
    send('page_view', { load_time_ms: loadTime });
  });

  // ── Scroll depth (25 / 50 / 75 / 100%) ──────────────────────────────────────
  var depthFired = {};
  window.addEventListener('scroll', function () {
    var scrolled = Math.round(
      (window.scrollY + window.innerHeight) / Math.max(document.body.scrollHeight, 1) * 100
    );
    [25, 50, 75, 100].forEach(function (d) {
      if (scrolled >= d && !depthFired[d]) {
        depthFired[d] = true;
        send('scroll_depth', { scroll_depth: d });
      }
    });
  }, { passive: true });

  // ── JavaScript error tracking ────────────────────────────────────────────────
  window.onerror = function (message, source, line) {
    send('js_error', {
      error_message: String(message).slice(0, 300),
      error_file:    String(source || '').slice(0, 200),
      error_line:    line || null,
    });
    return false;
  };

  window.addEventListener('unhandledrejection', function (e) {
    var msg = e.reason && e.reason.message ? e.reason.message : String(e.reason || 'unknown');
    send('js_error', {
      error_message: ('Promise rejection: ' + msg).slice(0, 300),
      error_file:    PAGE,
      error_line:    null,
    });
  });

  // ── Click tracking (delegated) ───────────────────────────────────────────────
  var lastContentOpened = null; // for funnel tracking
  var clickHandled      = false;

  document.addEventListener('click', function (e) {
    clickHandled = false;

    // Content opens — saint
    var saintEl = e.target.closest('[data-saint-id]');
    if (saintEl) {
      send('content_open', {
        entity_type: 'saint',
        entity_id:   saintEl.dataset.saintId,
        entity_name: saintEl.dataset.saintName || null,
      });
      lastContentOpened = saintEl.dataset.saintId;
      clickHandled = true;
      return;
    }

    // Content opens — feast
    var feastEl = e.target.closest('[data-feast-id]');
    if (feastEl) {
      send('content_open', {
        entity_type: 'feast',
        entity_id:   feastEl.dataset.feastId,
        entity_name: feastEl.dataset.feastName || null,
      });
      lastContentOpened = feastEl.dataset.feastId;
      clickHandled = true;
      return;
    }

    // Content opens — topic
    var topicEl = e.target.closest('[data-topic-id]');
    if (topicEl) {
      send('content_open', {
        entity_type: 'topic',
        entity_id:   topicEl.dataset.topicId,
        entity_name: topicEl.dataset.topicName || null,
      });
      lastContentOpened = topicEl.dataset.topicId;
      clickHandled = true;
      return;
    }

    // Content opens — church father
    var fatherEl = e.target.closest('[data-father-id]');
    if (fatherEl) {
      send('content_open', {
        entity_type: 'father',
        entity_id:   fatherEl.dataset.fatherId,
        entity_name: fatherEl.dataset.fatherName || null,
      });
      clickHandled = true;
      return;
    }

    // Companion open
    var companionEl = e.target.closest('[data-companion-trigger], #companion-btn, .companion-btn');
    if (companionEl) {
      send('companion_open', {
        extra: lastContentOpened ? JSON.stringify({ from_content: lastContentOpened }) : null,
      });
      // Funnel: content → companion
      if (lastContentOpened) {
        send('funnel_content_to_companion', { entity_id: lastContentOpened });
        lastContentOpened = null;
      }
      clickHandled = true;
      return;
    }

    // Internal navigation — anchor tags
    var linkEl = e.target.closest('a[href]');
    if (linkEl) {
      try {
        var dest = new URL(linkEl.getAttribute('href'), window.location.origin);
        if (dest.origin === window.location.origin) {
          send('navigation', {
            from_page:   PAGE,
            to_page:     dest.pathname,
            entity_name: linkEl.textContent.trim().slice(0, 100) || null,
          });
        }
      } catch (err) {}
      clickHandled = true;
      return;
    }

    // Nav menu clicks
    var navEl = e.target.closest('.nav-link, .nav-item, .mega-menu a, .dropdown-item');
    if (navEl) {
      send('nav_click', {
        entity_name: navEl.textContent.trim().slice(0, 100) || null,
      });
      clickHandled = true;
      return;
    }

    // Button clicks (not already handled)
    var btnEl = e.target.closest('button');
    if (btnEl) {
      clickHandled = true;
      return;
    }

    // Dead click — something was clicked that looks interactive but matched nothing
    var style = window.getComputedStyle(e.target);
    if (style.cursor === 'pointer') {
      send('dead_click', {
        extra: JSON.stringify({
          tag:   e.target.tagName,
          class: e.target.className ? String(e.target.className).slice(0, 100) : '',
          id:    e.target.id || '',
        }),
      });
    }
  }, true);

  // ── Search tracking ──────────────────────────────────────────────────────────
  var lastSearchTerm = null;
  var lastSearchTime = 0;

  function trackSearch(term) {
    if (!term) return;
    var now = Date.now();
    // Debounce — don't fire same term twice within 2 seconds
    if (term === lastSearchTerm && now - lastSearchTime < 2000) return;
    lastSearchTerm = term;
    lastSearchTime = now;
    send('search', { search_term: term.slice(0, 200) });
  }

  document.addEventListener('submit', function (e) {
    var input = e.target.querySelector('input[type="search"], input[type="text"], #search-input, .search-input, [name="q"]');
    if (input && input.value.trim()) trackSearch(input.value.trim());
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    var el = e.target;
    if (el.tagName !== 'INPUT') return;
    if (el.type !== 'search' && el.type !== 'text') return;
    if (!el.value.trim()) return;
    if (el.id && (el.id.toLowerCase().includes('search') || el.placeholder && el.placeholder.toLowerCase().includes('search'))) {
      trackSearch(el.value.trim());
    }
  });

  // ── Account events (dispatched by auth-nav.js) ───────────────────────────────
  document.addEventListener('oc:signup', function () {
    send('account_signup', {});
  });

  document.addEventListener('oc:login', function () {
    send('account_login', {});
  });

  // ── Bible reader ─────────────────────────────────────────────────────────────
  document.addEventListener('oc:bible_view', function (e) {
    send('bible_view', {
      entity_name: (e.detail && e.detail.passage) ? String(e.detail.passage).slice(0, 200) : null,
    });
  });

  // ── Reading plan selection ───────────────────────────────────────────────────
  document.addEventListener('oc:reading_plan', function (e) {
    send('reading_plan_select', {
      entity_name: (e.detail && e.detail.plan) ? String(e.detail.plan).slice(0, 200) : null,
    });
  });

  // ── Blog post open ───────────────────────────────────────────────────────────
  document.addEventListener('oc:blog_open', function (e) {
    send('blog_open', {
      entity_name: (e.detail && e.detail.title) ? String(e.detail.title).slice(0, 200) : null,
    });
  });

  // ── Public API — pages can call window.OCAnalytics.send() directly ───────────
  window.OCAnalytics = { send: send };

})();
