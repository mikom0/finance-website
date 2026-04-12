/* ================================================================
   weakTopics.js — Weak Topics Drill Module
   Auto-populated from wrong answers across all modes.
   Mixes flashcards and MCQs tagged as weak.
================================================================ */

(function() {
  'use strict';

  const LS_WEAK = 'weak_ids';

  let weakIds   = new Set();
  let drillItems = [];  // mixed cards+questions
  let currentIdx = 0;
  let isFlipped  = false;
  let score      = 0;
  let answered   = [];
  let mode       = 'quiz';  // 'quiz' (MCQ-style) | 'flash' (flashcard-style)

  /* ── Load state ──────────────────────────────────────────── */
  function loadState() {
    try {
      const w = localStorage.getItem(LS_WEAK);
      if (w) weakIds = new Set(JSON.parse(w));
    } catch(e) {}
  }

  function saveState() {
    localStorage.setItem(LS_WEAK, JSON.stringify([...weakIds]));
    const wb = document.getElementById('nav-weak-badge');
    if (wb) wb.textContent = weakIds.size > 0 ? weakIds.size : '';
    if (typeof window.updateDashboard === 'function') window.updateDashboard();
  }

  /* ── Build drill set ─────────────────────────────────────── */
  function buildDrill() {
    drillItems = [];
    if (mode === 'quiz') {
      const mcqWeak = MCQ_DATA.filter(q => weakIds.has(q.id));
      drillItems = shuffle([...mcqWeak]);
    } else {
      const fcWeak = FLASHCARD_DATA.filter(c => weakIds.has(c.id));
      drillItems = shuffle([...fcWeak]);
    }
    currentIdx = 0;
    score = 0;
    answered = [];
    isFlipped = false;
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /* ── Main render ─────────────────────────────────────────── */
  function render() {
    const root = document.getElementById('weak-topics-root');
    if (!root) return;

    root.innerHTML = `
      <div class="wt-controls">
        <div class="wt-mode-row">
          <button class="mcq-tab ${mode==='quiz'?'active':''}" data-mode="quiz">Quiz Mode (MCQ)</button>
          <button class="mcq-tab ${mode==='flash'?'active':''}" data-mode="flash">Flashcard Mode</button>
        </div>
        <div class="wt-summary-row">
          <span class="wt-count" id="wt-count-label"></span>
          <button class="btn btn-ghost" id="wt-clear-btn">Clear Weak List</button>
        </div>
      </div>
      <div id="wt-content-area"></div>
    `;

    root.querySelectorAll('.mcq-tab[data-mode]').forEach(tab => {
      tab.addEventListener('click', function() {
        mode = this.dataset.mode;
        root.querySelectorAll('.mcq-tab[data-mode]').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        buildDrill();
        renderContent();
      });
    });

    document.getElementById('wt-clear-btn').addEventListener('click', () => {
      if (confirm('Clear all weak topics? This will remove all items from the weak topics drill.')) {
        weakIds.clear();
        saveState();
        buildDrill();
        renderContent();
      }
    });

    buildDrill();
    renderContent();
  }

  function renderContent() {
    const area = document.getElementById('wt-content-area');
    const countLabel = document.getElementById('wt-count-label');
    if (!area) return;

    if (countLabel) {
      const total = mode === 'quiz'
        ? MCQ_DATA.filter(q => weakIds.has(q.id)).length
        : FLASHCARD_DATA.filter(c => weakIds.has(c.id)).length;
      countLabel.textContent = `${total} weak item${total !== 1 ? 's' : ''} in ${mode === 'quiz' ? 'MCQ' : 'flashcard'} bank`;
    }

    if (drillItems.length === 0) {
      area.innerHTML = `
        <div class="wt-empty">
          <div class="wt-empty-icon">🌟</div>
          <h3>No Weak Topics Yet!</h3>
          <p>Weak topics are auto-populated when you answer questions incorrectly in the Quiz, Flashcards, or Checkpoints. Get studying and come back here to drill your weak spots.</p>
          <button class="btn btn-primary" onclick="document.querySelector('[data-section=mcq]').click()">Go to Quiz</button>
        </div>
      `;
      return;
    }

    if (mode === 'quiz') {
      renderQuizItem(area);
    } else {
      renderFlashItem(area);
    }
  }

  /* ── MCQ Drill ───────────────────────────────────────────── */
  function renderQuizItem(area) {
    if (currentIdx >= drillItems.length) {
      renderQuizResults(area);
      return;
    }

    const q   = drillItems[currentIdx];
    const pct = (currentIdx / drillItems.length) * 100;

    area.innerHTML = `
      <div class="mcq-header-row">
        <span class="mcq-progress-label">${currentIdx+1}/${drillItems.length}</span>
        <span class="mcq-score-label">Score: <strong>${score}</strong></span>
        <span class="mcq-topic-tag wt-topic-badge">${q.topic}</span>
      </div>
      <div class="mcq-progress-track"><div class="mcq-progress-fill" style="width:${pct}%"></div></div>
      <div class="mcq-question-card">
        <div class="mcq-question-text">${q.question}</div>
        <div class="mcq-options" id="wt-options">
          ${q.options.map((opt, i) => `
            <button class="mcq-option" data-idx="${i}">
              <span class="mcq-option-letter">${String.fromCharCode(65+i)}</span>
              <span class="mcq-option-text">${opt}</span>
            </button>
          `).join('')}
        </div>
        <div class="mcq-explanation hidden" id="wt-explanation"></div>
        <div class="mcq-next-row hidden" id="wt-next-row">
          <button class="btn btn-success wt-mastered-btn" id="wt-mastered-btn">Mastered ✓ — Remove</button>
          <button class="btn btn-primary" id="wt-next-btn">
            ${currentIdx < drillItems.length-1 ? 'Next →' : 'Finish'}
          </button>
        </div>
      </div>
    `;

    attachQuizEvents(q, area);

    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([area]).catch(() => {});
    }
  }

  function attachQuizEvents(q, area) {
    const optBtns = area.querySelectorAll('.mcq-option');
    optBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        if (this.disabled) return;
        const chosen = parseInt(this.dataset.idx);
        const isCorrect = chosen === q.correct;

        optBtns.forEach(b => b.disabled = true);
        this.classList.add(isCorrect ? 'correct' : 'incorrect');
        optBtns[q.correct].classList.add('correct');

        if (isCorrect) score++;
        answered.push({ id: q.id, correct: isCorrect });

        const expDiv = document.getElementById('wt-explanation');
        if (expDiv) {
          expDiv.innerHTML = `<span class="mcq-explanation-icon">💡</span> ${q.explanation}`;
          expDiv.classList.remove('hidden');
        }

        const nextRow = document.getElementById('wt-next-row');
        if (nextRow) nextRow.classList.remove('hidden');

        // Show mastered button only if answered correctly
        const masteredBtn = document.getElementById('wt-mastered-btn');
        if (masteredBtn && !isCorrect) masteredBtn.style.display = 'none';

        if (window.MathJax && MathJax.typesetPromise) {
          MathJax.typesetPromise([expDiv]).catch(() => {});
        }
      });
    });

    const masteredBtn = document.getElementById('wt-mastered-btn');
    if (masteredBtn) {
      masteredBtn.addEventListener('click', () => {
        weakIds.delete(q.id);
        saveState();
        currentIdx++;
        renderQuizItem(area);
      });
    }

    const nextBtn = document.getElementById('wt-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIdx++;
        renderQuizItem(area);
      });
    }
  }

  function renderQuizResults(area) {
    const total = drillItems.length;
    const pct   = total > 0 ? Math.round(score/total*100) : 0;

    area.innerHTML = `
      <div class="cp-results">
        <div class="cp-results-icon">${pct >= 80 ? '🎯' : '📖'}</div>
        <h2 class="cp-results-title">Drill Complete</h2>
        <div class="cp-results-score">${score}/${total} (${pct}%)</div>
        <p>${pct >= 80 ? 'Great work — you\'re improving on your weak topics!' : 'Keep drilling — repetition is key to retention.'}</p>
        <div class="cp-results-actions">
          <button class="btn btn-primary" id="wt-restart-btn">Drill Again</button>
        </div>
      </div>
    `;

    document.getElementById('wt-restart-btn').addEventListener('click', () => {
      buildDrill();
      renderContent();
    });
  }

  /* ── Flashcard Drill ─────────────────────────────────────── */
  function renderFlashItem(area) {
    if (drillItems.length === 0) {
      renderContent();
      return;
    }

    const card = drillItems[currentIdx];
    const pct  = (currentIdx / drillItems.length) * 100;
    const topicLabel = card.topic.replace('W','Week ').replace('-',' — ');

    area.innerHTML = `
      <div class="mcq-header-row">
        <span class="mcq-progress-label">${currentIdx+1}/${drillItems.length}</span>
        <span class="mcq-topic-tag wt-topic-badge">${topicLabel}</span>
        <span></span>
      </div>
      <div class="mcq-progress-track"><div class="mcq-progress-fill" style="width:${pct}%"></div></div>
      <div class="fc-scene" style="margin: 1.5rem 0;">
        <div class="fc-wrapper" id="wt-fc-wrapper">
          <div class="fc-face fc-front">
            <div class="fc-topic-badge">${topicLabel} · ${card.difficulty}</div>
            <div class="fc-question">${card.front}</div>
            <div class="fc-flip-hint">Click to reveal</div>
          </div>
          <div class="fc-face fc-back">
            <div class="fc-topic-badge">${topicLabel} · ${card.difficulty}</div>
            <div class="fc-answer">${card.back}</div>
          </div>
        </div>
      </div>
      <div class="fc-rating-row hidden" id="wt-rating-row">
        <button class="btn btn-success" id="wt-mastered-fc">Mastered ✓ — Remove</button>
        <button class="btn btn-warning" id="wt-keep-fc">Still Weak ↺</button>
      </div>
    `;

    const wrapper    = document.getElementById('wt-fc-wrapper');
    const ratingRow  = document.getElementById('wt-rating-row');

    wrapper.addEventListener('click', () => {
      isFlipped = !isFlipped;
      wrapper.classList.toggle('flipped', isFlipped);
      if (isFlipped) ratingRow.classList.remove('hidden');
      else ratingRow.classList.add('hidden');
    });

    document.getElementById('wt-mastered-fc').addEventListener('click', () => {
      weakIds.delete(card.id);
      saveState();
      // Remove from drillItems
      drillItems.splice(currentIdx, 1);
      if (currentIdx >= drillItems.length && drillItems.length > 0) currentIdx = 0;
      isFlipped = false;
      renderFlashItem(area);
      const countLabel = document.getElementById('wt-count-label');
      if (countLabel) {
        const total = FLASHCARD_DATA.filter(c => weakIds.has(c.id)).length;
        countLabel.textContent = `${total} weak item${total !== 1 ? 's' : ''} in flashcard bank`;
      }
    });

    document.getElementById('wt-keep-fc').addEventListener('click', () => {
      if (currentIdx < drillItems.length - 1) currentIdx++;
      else currentIdx = 0;
      isFlipped = false;
      renderFlashItem(area);
    });

    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([area]).catch(() => {});
    }
  }

  /* ── Public init ─────────────────────────────────────────── */
  window.initWeakTopics = function() {
    loadState();
    render();
  };

})();
