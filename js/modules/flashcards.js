/* ================================================================
   flashcards.js — Flashcard UI Module
   Spaced repetition: "Got it" cards move to REVIEW pool (shown less);
   "Review Again" cards stay in ACTIVE pool.
   State persisted in localStorage under key "fc_state".
================================================================ */

(function() {
  'use strict';

  /* ── Constants ─────────────────────────────────────────── */
  const LS_KEY = 'fc_state';   // { known: Set<id>, weakIds: Set<id> }
  const LS_WEAK = 'weak_ids';  // shared weak-topic store

  /* ── State ─────────────────────────────────────────────── */
  let allCards = [];     // filtered/shuffled working deck
  let currentIdx = 0;
  let isFlipped = false;
  let selectedTopic = 'All';
  let selectedDiff  = 'All';
  let knownIds = new Set();
  let weakIds  = new Set();

  /* ── Load / save localStorage ───────────────────────────── */
  function loadState() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        knownIds = new Set(s.known || []);
      }
      const rawW = localStorage.getItem(LS_WEAK);
      if (rawW) weakIds = new Set(JSON.parse(rawW));
    } catch(e) { /* ignore */ }
  }

  function saveState() {
    localStorage.setItem(LS_KEY, JSON.stringify({ known: [...knownIds] }));
    localStorage.setItem(LS_WEAK, JSON.stringify([...weakIds]));
    // Update dashboard badge
    if (typeof window.updateDashboard === 'function') window.updateDashboard();
    // Update nav weak badge
    const wb = document.getElementById('nav-weak-badge');
    if (wb) wb.textContent = weakIds.size > 0 ? weakIds.size : '';
    // Update nav due badge
    const db = document.getElementById('nav-due-badge');
    if (db) {
      const due = FLASHCARD_DATA.filter(c => !knownIds.has(c.id)).length;
      db.textContent = due > 0 ? due : '';
    }
  }

  /* ── Build deck ──────────────────────────────────────────── */
  function buildDeck() {
    let cards = FLASHCARD_DATA;
    if (selectedTopic !== 'All') cards = cards.filter(c => c.topic === selectedTopic);
    if (selectedDiff  !== 'All') cards = cards.filter(c => c.difficulty === selectedDiff);
    // Shuffle
    allCards = shuffle([...cards]);
    currentIdx = 0;
    isFlipped = false;
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /* ── Render ──────────────────────────────────────────────── */
  function render() {
    const root = document.getElementById('flashcard-root');
    if (!root) return;

    const topics = ['All', ...new Set(FLASHCARD_DATA.map(c => c.topic))];
    const diffs  = ['All', 'Foundational', 'Applied', 'Exam-Standard'];

    root.innerHTML = `
      <div class="fc-controls">
        <div class="fc-filter-row">
          <div class="fc-filter-group">
            <label class="fc-filter-label">Topic</label>
            <select class="fc-select" id="fc-topic-select">
              ${topics.map(t => `<option value="${t}" ${t===selectedTopic?'selected':''}>${t}</option>`).join('')}
            </select>
          </div>
          <div class="fc-filter-group">
            <label class="fc-filter-label">Difficulty</label>
            <select class="fc-select" id="fc-diff-select">
              ${diffs.map(d => `<option value="${d}" ${d===selectedDiff?'selected':''}>${d}</option>`).join('')}
            </select>
          </div>
          <button class="btn btn-secondary" id="fc-shuffle-btn">Shuffle</button>
          <button class="btn btn-ghost" id="fc-reset-btn">Reset Progress</button>
        </div>
        <div class="fc-stats-row">
          <span class="fc-stat"><span class="fc-stat-num" id="fc-remaining"></span> remaining</span>
          <span class="fc-stat fc-stat-known"><span class="fc-stat-num" id="fc-known-count"></span> known</span>
          <span class="fc-stat fc-stat-total"><span class="fc-stat-num" id="fc-total-count"></span> total</span>
        </div>
      </div>

      <div class="fc-scene" id="fc-scene">
        <div class="fc-wrapper" id="fc-wrapper">
          <div class="fc-face fc-front" id="fc-front"></div>
          <div class="fc-face fc-back"  id="fc-back"></div>
        </div>
      </div>

      <div class="fc-nav-row">
        <button class="btn btn-ghost" id="fc-prev-btn">← Prev</button>
        <div class="fc-progress-wrap">
          <div class="fc-progress-bar" id="fc-progress-bar"></div>
        </div>
        <button class="btn btn-ghost" id="fc-next-btn">Next →</button>
      </div>

      <div class="fc-rating-row hidden" id="fc-rating-row">
        <button class="btn btn-success" id="fc-got-it-btn">Got it ✓</button>
        <button class="btn btn-warning" id="fc-review-btn">Review Again ↺</button>
      </div>

      <div class="fc-empty hidden" id="fc-empty">
        <p>🎉 All cards in this set are marked as known! Shuffle or change filters.</p>
      </div>
    `;

    attachEvents();
    updateCard();
    updateStats();
  }

  function updateCard() {
    const front   = document.getElementById('fc-front');
    const back    = document.getElementById('fc-back');
    const wrapper = document.getElementById('fc-wrapper');
    const ratingRow = document.getElementById('fc-rating-row');
    const empty   = document.getElementById('fc-empty');
    if (!front || !back) return;

    if (allCards.length === 0) {
      document.getElementById('fc-scene').classList.add('hidden');
      document.getElementById('fc-nav-row').classList.add('hidden');
      empty.classList.remove('hidden');
      return;
    }
    document.getElementById('fc-scene').classList.remove('hidden');
    document.getElementById('fc-nav-row').classList.remove('hidden');
    empty.classList.add('hidden');

    const card = allCards[currentIdx];
    const topicLabel = card.topic.replace('W','Week ').replace('-',' — ');

    front.innerHTML = `
      <div class="fc-topic-badge">${topicLabel} · ${card.difficulty}</div>
      <div class="fc-question">${card.front}</div>
      <div class="fc-flip-hint">Click to reveal answer</div>
    `;
    back.innerHTML = `
      <div class="fc-topic-badge">${topicLabel} · ${card.difficulty}</div>
      <div class="fc-answer">${card.back}</div>
    `;

    // Reset flip state
    isFlipped = false;
    wrapper.classList.remove('flipped');
    ratingRow.classList.add('hidden');

    // Update progress bar
    const pct = allCards.length > 1 ? (currentIdx / (allCards.length - 1)) * 100 : 100;
    const pb = document.getElementById('fc-progress-bar');
    if (pb) pb.style.width = pct + '%';

    // Re-run MathJax
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([front, back]).catch(() => {});
    }
  }

  function updateStats() {
    const inScope = allCards.length;
    const known = allCards.filter(c => knownIds.has(c.id)).length;

    const remEl = document.getElementById('fc-remaining');
    const knEl  = document.getElementById('fc-known-count');
    const totEl = document.getElementById('fc-total-count');
    if (remEl) remEl.textContent = inScope - known;
    if (knEl)  knEl.textContent  = known;
    if (totEl) totEl.textContent = inScope;
  }

  /* ── Events ──────────────────────────────────────────────── */
  function attachEvents() {
    const wrapper = document.getElementById('fc-wrapper');
    const ratingRow = document.getElementById('fc-rating-row');

    // Flip card
    wrapper.addEventListener('click', () => {
      isFlipped = !isFlipped;
      wrapper.classList.toggle('flipped', isFlipped);
      if (isFlipped) ratingRow.classList.remove('hidden');
      else ratingRow.classList.add('hidden');
    });

    // Navigation
    document.getElementById('fc-prev-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentIdx > 0) { currentIdx--; updateCard(); }
    });
    document.getElementById('fc-next-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentIdx < allCards.length - 1) { currentIdx++; updateCard(); }
    });

    // Ratings
    document.getElementById('fc-got-it-btn').addEventListener('click', () => {
      const card = allCards[currentIdx];
      knownIds.add(card.id);
      weakIds.delete(card.id);
      saveState();
      advanceCard();
      updateStats();
    });
    document.getElementById('fc-review-btn').addEventListener('click', () => {
      const card = allCards[currentIdx];
      weakIds.add(card.id);
      knownIds.delete(card.id);
      saveState();
      advanceCard();
      updateStats();
    });

    // Filters
    document.getElementById('fc-topic-select').addEventListener('change', (e) => {
      selectedTopic = e.target.value;
      buildDeck();
      updateCard();
      updateStats();
    });
    document.getElementById('fc-diff-select').addEventListener('change', (e) => {
      selectedDiff = e.target.value;
      buildDeck();
      updateCard();
      updateStats();
    });

    // Shuffle
    document.getElementById('fc-shuffle-btn').addEventListener('click', () => {
      buildDeck();
      updateCard();
      updateStats();
    });

    // Reset
    document.getElementById('fc-reset-btn').addEventListener('click', () => {
      if (confirm('Reset all flashcard progress? This clears "known" cards.')) {
        knownIds.clear();
        saveState();
        buildDeck();
        updateCard();
        updateStats();
      }
    });

    // Keyboard
    document.addEventListener('keydown', handleKeydown);
  }

  function handleKeydown(e) {
    if (document.querySelector('#page-flashcards.active') === null) return;
    switch(e.key) {
      case 'ArrowRight': case 'ArrowDown':
        e.preventDefault();
        if (currentIdx < allCards.length - 1) { currentIdx++; updateCard(); }
        break;
      case 'ArrowLeft': case 'ArrowUp':
        e.preventDefault();
        if (currentIdx > 0) { currentIdx--; updateCard(); }
        break;
      case ' ':
        e.preventDefault();
        const wrapper = document.getElementById('fc-wrapper');
        const ratingRow = document.getElementById('fc-rating-row');
        if (wrapper) {
          isFlipped = !isFlipped;
          wrapper.classList.toggle('flipped', isFlipped);
          if (ratingRow) {
            if (isFlipped) ratingRow.classList.remove('hidden');
            else ratingRow.classList.add('hidden');
          }
        }
        break;
      case '1':
        const got = document.getElementById('fc-got-it-btn');
        if (got) got.click();
        break;
      case '2':
        const rev = document.getElementById('fc-review-btn');
        if (rev) rev.click();
        break;
    }
  }

  function advanceCard() {
    if (currentIdx < allCards.length - 1) {
      currentIdx++;
    } else if (allCards.length > 1) {
      currentIdx = 0;
    }
    updateCard();
  }

  /* ── Public init ─────────────────────────────────────────── */
  window.initFlashcards = function() {
    loadState();
    buildDeck();
    render();
    saveState(); // update badges on init
  };

})();
