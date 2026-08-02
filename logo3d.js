/* ============================================================
   বঙ্গধ্বনি — Modern Interactive Branding Engine
   Handles typewriter tagline, visitor counter, and subtle hover animations
   ============================================================ */

(function () {
  'use strict';

  /* ── TYPEWRITER TAGLINE ──────────────────────────────────── */
  function initTypewriter(el) {
    if (!el) return;
    const phrases = [
      'সনাতন বঙ্গের সনাতন ধ্বনি',
      'সত্যের সন্ধানে নিরলস',
      'বাংলার কণ্ঠস্বর',
    ];
    let pi = 0, ci = 0, deleting = false;

    function type() {
      const phrase = phrases[pi];

      if (!deleting) {
        el.textContent = phrase.slice(0, ci++);
        if (ci > phrase.length) {
          deleting = true;
          setTimeout(type, 2200);
          return;
        }
        setTimeout(type, 85);
      } else {
        el.textContent = phrase.slice(0, ci--);
        if (ci < 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
          ci = 0;
          setTimeout(type, 400);
          return;
        }
        setTimeout(type, 45);
      }
    }

    setTimeout(type, 800);
  }

  /* ── MAIN INIT ───────────────────────────────────────────── */
  function init() {
    const typeEl = document.querySelector('.typewriter-tagline');
    if (typeEl) initTypewriter(typeEl);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
