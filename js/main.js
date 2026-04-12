/* ================================================================
   main.js — Application Bootstrap & SPA Router
   Handles: navigation, dark mode, hamburger, streak counter,
            modal management, toast notifications.
================================================================ */

(function() {
  'use strict';

  /* ── Module init map ─────────────────────────────────────── */
  const SECTION_INITS = {
    'dashboard':     () => window.initDashboard?.(),
    'flashcards':    () => window.initFlashcards?.(),
    'mcq':           () => window.initMCQ?.(),
    'long-answer':   () => window.initLongAnswer?.(),
    'formula-sheet': () => window.initFormulas?.(),
    'checkpoints':   () => window.initCheckpoints?.(),
    'weak-topics':   () => window.initWeakTopics?.()
  };

  // Track which sections have been initialised
  const initialised = new Set();

  /* ── SPA Router ──────────────────────────────────────────── */
  function navigateTo(sectionId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Activate target page
    const page = document.getElementById(`page-${sectionId}`);
    if (!page) return;
    page.classList.add('active');

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(l => {
      l.classList.toggle('active', l.dataset.section === sectionId);
    });

    // Close sidebar on mobile
    closeSidebar();

    // Lazy-init section module
    if (!initialised.has(sectionId) && SECTION_INITS[sectionId]) {
      SECTION_INITS[sectionId]();
      initialised.add(sectionId);
    }

    // Update URL hash without triggering a scroll
    history.replaceState(null, '', `#${sectionId}`);
  }

  /* ── Nav link click events ───────────────────────────────── */
  function attachNavLinks() {
    document.querySelectorAll('.nav-link[data-section]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navigateTo(this.dataset.section);
      });
    });
  }

  /* ── Hamburger / Sidebar ─────────────────────────────────── */
  function attachSidebar() {
    const hamburger = document.getElementById('hamburger-btn');
    const sidebar   = document.getElementById('sidebar');
    const overlay   = document.getElementById('sidebar-overlay');

    if (hamburger) {
      hamburger.addEventListener('click', () => {
        const isOpen = sidebar.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
        if (overlay) overlay.classList.toggle('active', isOpen);
      });
    }

    if (overlay) {
      overlay.addEventListener('click', closeSidebar);
    }
  }

  function closeSidebar() {
    const sidebar  = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger-btn');
    const overlay  = document.getElementById('sidebar-overlay');
    if (sidebar)   sidebar.classList.remove('open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    if (overlay)   overlay.classList.remove('active');
  }

  /* ── Dark Mode ───────────────────────────────────────────── */
  function attachThemeToggle() {
    const btn  = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    const body = document.body;

    // Restore saved preference
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      body.classList.replace('light-mode', 'dark-mode');
      if (icon) icon.textContent = '☀️';
    }

    if (btn) {
      btn.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        if (isDark) {
          body.classList.replace('dark-mode', 'light-mode');
          if (icon) icon.textContent = '🌙';
          localStorage.setItem('theme', 'light');
        } else {
          body.classList.replace('light-mode', 'dark-mode');
          if (icon) icon.textContent = '☀️';
          localStorage.setItem('theme', 'dark');
        }
      });
    }
  }

  /* ── Study Streak ────────────────────────────────────────── */
  function updateStreak() {
    const today = new Date().toDateString();
    let { streak = 0, lastDate = '' } = JSON.parse(localStorage.getItem('streak_data') || '{}');

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastDate === today) {
      // Already visited today, streak unchanged
    } else if (lastDate === yesterday.toDateString()) {
      // Consecutive day
      streak++;
    } else if (lastDate !== today) {
      // Streak broken or first visit
      streak = lastDate ? 1 : 1;
    }

    localStorage.setItem('streak_data', JSON.stringify({ streak, lastDate: today }));

    const countEl = document.getElementById('streak-count');
    if (countEl) countEl.textContent = streak;
  }

  /* ── Modal ───────────────────────────────────────────────── */
  function attachModal() {
    const backdrop = document.getElementById('modal-backdrop');
    const closeBtn = document.getElementById('modal-close-btn');

    if (backdrop) {
      backdrop.addEventListener('click', function(e) {
        if (e.target === backdrop) closeModal();
      });
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeModal();
    });
  }

  function closeModal() {
    const backdrop = document.getElementById('modal-backdrop');
    if (backdrop) backdrop.classList.add('hidden');
  }

  /* ── Toast ───────────────────────────────────────────────── */
  window.showToast = function(message, duration = 2500) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
  };

  /* ── Nav badges on load ──────────────────────────────────── */
  function updateNavBadges() {
    try {
      const fcState = JSON.parse(localStorage.getItem('fc_state') || '{}');
      const knownIds = new Set(fcState.known || []);
      const due = FLASHCARD_DATA.filter(c => !knownIds.has(c.id)).length;
      const dueEl = document.getElementById('nav-due-badge');
      if (dueEl) dueEl.textContent = due > 0 ? due : '';

      const weakIds = new Set(JSON.parse(localStorage.getItem('weak_ids') || '[]'));
      const weakEl = document.getElementById('nav-weak-badge');
      if (weakEl) weakEl.textContent = weakIds.size > 0 ? weakIds.size : '';
    } catch(e) {}
  }

  /* ── Handle hash on load & popstate ─────────────────────── */
  function handleHash() {
    const hash = window.location.hash.replace('#', '') || 'dashboard';
    const validSections = Object.keys(SECTION_INITS);
    const target = validSections.includes(hash) ? hash : 'dashboard';
    navigateTo(target);
  }

  window.addEventListener('popstate', handleHash);

  /* ── Bootstrap ───────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function() {
    attachNavLinks();
    attachSidebar();
    attachThemeToggle();
    attachModal();
    updateStreak();
    updateNavBadges();
    handleHash();  // Navigate to correct section (default: dashboard)
  });

})();
