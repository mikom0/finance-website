/* ================================================================
   mcq.js — MCQ Quiz Module
   Modes: per-topic, full random interleaved, weak topics
   Tracks wrong answers → localStorage "weak_ids"
================================================================ */

(function() {
  'use strict';

  const LS_MCQ  = 'mcq_results';  // { correct: N, total: N, wrongIds: [id,...] }
  const LS_WEAK = 'weak_ids';

  let questions   = [];   // current filtered question set
  let currentIdx  = 0;
  let score       = 0;
  let answered    = [];   // array of { id, correct: bool }
  let selectedTopic = 'All';
  let selectedType  = 'All';
  let quizMode    = 'topic';  // 'topic' | 'full' | 'weak'
  let weakIds     = new Set();
  let sessionActive = false;

  /* ── Load / save ─────────────────────────────────────────── */
  function loadState() {
    try {
      const r = localStorage.getItem(LS_MCQ);
      if (r) { /* historical data, not directly used in session */ }
      const w = localStorage.getItem(LS_WEAK);
      if (w) weakIds = new Set(JSON.parse(w));
    } catch(e) {}
  }

  function saveResult(qId, isCorrect) {
    try {
      if (!isCorrect) {
        weakIds.add(qId);
        localStorage.setItem(LS_WEAK, JSON.stringify([...weakIds]));
      }
      // Update nav badge
      const wb = document.getElementById('nav-weak-badge');
      if (wb) wb.textContent = weakIds.size > 0 ? weakIds.size : '';
      if (typeof window.updateDashboard === 'function') window.updateDashboard();
    } catch(e) {}
  }

  /* ── Build question set ───────────────────────────────────── */
  function buildQuestions() {
    let qs = MCQ_DATA;
    if (quizMode === 'weak') {
      qs = qs.filter(q => weakIds.has(q.id));
    } else {
      if (selectedTopic !== 'All') qs = qs.filter(q => q.topic === selectedTopic);
      if (selectedType  !== 'All') qs = qs.filter(q => q.type  === selectedType);
    }
    questions = shuffle([...qs]);
    currentIdx = 0;
    score = 0;
    answered = [];
    sessionActive = true;
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /* ── Render shell ────────────────────────────────────────── */
  function render() {
    const root = document.getElementById('mcq-root');
    if (!root) return;

    const topics = ['All', ...new Set(MCQ_DATA.map(q => q.topic))];
    const types  = ['All', 'conceptual', 'numerical', 'formula', 'error-id'];

    root.innerHTML = `
      <div class="mcq-controls">
        <div class="mcq-mode-tabs">
          <button class="mcq-tab ${quizMode==='topic'?'active':''}" data-mode="topic">By Topic</button>
          <button class="mcq-tab ${quizMode==='full'?'active':''}"  data-mode="full">Full Random</button>
          <button class="mcq-tab ${quizMode==='weak'?'active':''}"  data-mode="weak">Weak Topics</button>
        </div>
        <div class="mcq-filter-row" id="mcq-filter-row" ${quizMode==='weak'?'style="display:none"':''}>
          <select class="fc-select" id="mcq-topic-select">
            ${topics.map(t => `<option value="${t}" ${t===selectedTopic?'selected':''}>${t}</option>`).join('')}
          </select>
          <select class="fc-select" id="mcq-type-select">
            ${types.map(t => `<option value="${t}" ${t===selectedType?'selected':''}>${t.charAt(0).toUpperCase()+t.slice(1)}</option>`).join('')}
          </select>
          <button class="btn btn-primary" id="mcq-start-btn">Start Quiz</button>
        </div>
      </div>

      <div id="mcq-question-area">
        <div class="mcq-empty" id="mcq-empty" style="display:none">
          <p>No questions match the current filters. Try selecting "All" or a different topic.</p>
        </div>
      </div>

      <div class="mcq-results-panel hidden" id="mcq-results-panel">
        <div class="mcq-results-inner">
          <h2 class="mcq-results-title">Quiz Complete!</h2>
          <div class="mcq-score-display" id="mcq-score-display"></div>
          <div class="mcq-results-actions">
            <button class="btn btn-primary" id="mcq-retry-btn">Try Again</button>
            <button class="btn btn-secondary" id="mcq-review-btn">Review Answers</button>
          </div>
          <div class="mcq-review-list hidden" id="mcq-review-list"></div>
        </div>
      </div>
    `;

    attachControls();

    // Auto-start if weak mode and questions exist
    if (quizMode === 'weak') {
      buildQuestions();
      if (questions.length === 0) {
        document.getElementById('mcq-empty').style.display = 'block';
      } else {
        renderQuestion();
      }
    } else {
      buildQuestions();
      renderQuestion();
    }
  }

  /* ── Render single question ───────────────────────────────── */
  function renderQuestion() {
    const area = document.getElementById('mcq-question-area');
    const panel = document.getElementById('mcq-results-panel');
    if (!area) return;

    panel.classList.add('hidden');
    document.getElementById('mcq-empty').style.display = 'none';

    if (questions.length === 0) {
      document.getElementById('mcq-empty').style.display = 'block';
      return;
    }

    if (currentIdx >= questions.length) {
      showResults();
      return;
    }

    const q = questions[currentIdx];
    const progress = `${currentIdx + 1} / ${questions.length}`;
    const pct = ((currentIdx) / questions.length) * 100;

    area.innerHTML = `
      <div class="mcq-header-row">
        <span class="mcq-progress-label">${progress}</span>
        <span class="mcq-score-label">Score: <strong>${score}</strong></span>
        <span class="mcq-topic-tag">${q.topic} · ${q.type}</span>
      </div>
      <div class="mcq-progress-track"><div class="mcq-progress-fill" style="width:${pct}%"></div></div>
      <div class="mcq-question-card" id="mcq-card">
        <div class="mcq-question-text" id="mcq-q-text">${q.question}</div>
        <div class="mcq-options" id="mcq-options">
          ${q.options.map((opt, i) => `
            <button class="mcq-option" data-idx="${i}">
              <span class="mcq-option-letter">${String.fromCharCode(65+i)}</span>
              <span class="mcq-option-text">${opt}</span>
            </button>
          `).join('')}
        </div>
        <div class="mcq-explanation hidden" id="mcq-explanation">
          <span class="mcq-explanation-icon">💡</span>
          <span id="mcq-explanation-text"></span>
        </div>
        <div class="mcq-next-row hidden" id="mcq-next-row">
          <button class="btn btn-primary" id="mcq-next-btn">
            ${currentIdx < questions.length - 1 ? 'Next Question →' : 'Finish Quiz'}
          </button>
        </div>
      </div>
    `;

    attachQuestionEvents(q);

    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([area]).catch(() => {});
    }
  }

  function attachQuestionEvents(q) {
    const optBtns = document.querySelectorAll('.mcq-option');
    optBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        if (this.classList.contains('selected') || this.classList.contains('correct') || this.classList.contains('incorrect')) return;
        const chosen = parseInt(this.dataset.idx);
        const isCorrect = chosen === q.correct;

        // Disable all options
        optBtns.forEach(b => b.disabled = true);

        // Style selected and correct
        this.classList.add(isCorrect ? 'correct' : 'incorrect');
        optBtns[q.correct].classList.add('correct');

        // Update score
        if (isCorrect) score++;
        answered.push({ id: q.id, correct: isCorrect });
        saveResult(q.id, isCorrect);

        // Show explanation
        const expDiv = document.getElementById('mcq-explanation');
        const expText = document.getElementById('mcq-explanation-text');
        if (expDiv && expText) {
          expText.innerHTML = q.explanation;
          expDiv.classList.remove('hidden');
          if (window.MathJax && MathJax.typesetPromise) {
            MathJax.typesetPromise([expDiv]).catch(() => {});
          }
        }

        // Show next button
        const nextRow = document.getElementById('mcq-next-row');
        if (nextRow) nextRow.classList.remove('hidden');
      });
    });

    const nextBtn = document.getElementById('mcq-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIdx++;
        renderQuestion();
      });
    }
  }

  /* ── Results ──────────────────────────────────────────────── */
  function showResults() {
    const area  = document.getElementById('mcq-question-area');
    const panel = document.getElementById('mcq-results-panel');
    if (!panel) return;

    area.innerHTML = '';
    panel.classList.remove('hidden');

    const total = questions.length;
    const pct   = total > 0 ? Math.round((score / total) * 100) : 0;
    const grade = pct >= 80 ? '🎉 Excellent!' : pct >= 60 ? '👍 Good effort' : '📚 Keep practising';

    document.getElementById('mcq-score-display').innerHTML = `
      <div class="mcq-big-score">${score} / ${total}</div>
      <div class="mcq-pct">${pct}%</div>
      <div class="mcq-grade">${grade}</div>
    `;

    document.getElementById('mcq-retry-btn').addEventListener('click', () => {
      buildQuestions();
      renderQuestion();
      panel.classList.add('hidden');
    });

    document.getElementById('mcq-review-btn').addEventListener('click', () => {
      const reviewList = document.getElementById('mcq-review-list');
      reviewList.classList.toggle('hidden');
      if (!reviewList.classList.contains('hidden')) {
        renderReviewList(reviewList);
      }
    });
  }

  function renderReviewList(container) {
    container.innerHTML = answered.map(a => {
      const q = questions.find(x => x.id === a.id);
      if (!q) return '';
      const icon = a.correct ? '✅' : '❌';
      return `
        <div class="mcq-review-item ${a.correct?'correct':'incorrect'}">
          <div class="mcq-review-q">${icon} ${q.question}</div>
          <div class="mcq-review-answer">
            <strong>Correct answer:</strong> ${String.fromCharCode(65+q.correct)}) ${q.options[q.correct]}
          </div>
          <div class="mcq-review-exp">${q.explanation}</div>
        </div>
      `;
    }).join('');

    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([container]).catch(() => {});
    }
  }

  /* ── Control event listeners ─────────────────────────────── */
  function attachControls() {
    // Mode tabs
    document.querySelectorAll('.mcq-tab').forEach(tab => {
      tab.addEventListener('click', function() {
        quizMode = this.dataset.mode;
        document.querySelectorAll('.mcq-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const filterRow = document.getElementById('mcq-filter-row');
        if (filterRow) filterRow.style.display = quizMode === 'weak' ? 'none' : '';
        buildQuestions();
        renderQuestion();
        document.getElementById('mcq-results-panel').classList.add('hidden');
      });
    });

    const topicSel = document.getElementById('mcq-topic-select');
    const typeSel  = document.getElementById('mcq-type-select');
    const startBtn = document.getElementById('mcq-start-btn');

    if (topicSel) topicSel.addEventListener('change', e => { selectedTopic = e.target.value; });
    if (typeSel)  typeSel.addEventListener('change',  e => { selectedType  = e.target.value; });
    if (startBtn) startBtn.addEventListener('click', () => {
      buildQuestions();
      renderQuestion();
      document.getElementById('mcq-results-panel').classList.add('hidden');
    });
  }

  /* ── Public init ─────────────────────────────────────────── */
  window.initMCQ = function() {
    loadState();
    render();
  };

})();
