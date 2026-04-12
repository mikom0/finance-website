/* ================================================================
   checkpoints.js — Weekly Checkpoint Module
   15–20 questions per week, pass mark 80%.
   Results saved to localStorage "cp_results" keyed by week.
================================================================ */

(function() {
  'use strict';

  const LS_CP   = 'cp_results';   // { w1: {score,total,passed,date}, ... }
  const LS_WEAK = 'weak_ids';

  let currentWeek = null;
  let questions   = [];
  let currentIdx  = 0;
  let score       = 0;
  let answered    = [];
  let weakIds     = new Set();
  let cpResults   = {};

  /* ── Load / save ─────────────────────────────────────────── */
  function loadState() {
    try {
      const r = localStorage.getItem(LS_CP);
      if (r) cpResults = JSON.parse(r);
      const w = localStorage.getItem(LS_WEAK);
      if (w) weakIds = new Set(JSON.parse(w));
    } catch(e) {}
  }

  function saveResult(week, sc, total) {
    cpResults[`w${week}`] = {
      score: sc,
      total: total,
      passed: sc / total >= 0.8,
      date: new Date().toLocaleDateString()
    };
    localStorage.setItem(LS_CP, JSON.stringify(cpResults));
    if (typeof window.updateDashboard === 'function') window.updateDashboard();
  }

  /* ── Main render (week selector) ──────────────────────────── */
  function render() {
    const root = document.getElementById('checkpoint-root');
    if (!root) return;

    const weeks = [...new Set(CHECKPOINT_DATA.map(q => q.week))].sort();

    root.innerHTML = `
      <div class="cp-week-grid" id="cp-week-grid">
        ${weeks.map(w => {
          const res = cpResults[`w${w}`];
          const count = CHECKPOINT_DATA.filter(q => q.week === w).length;
          const statusClass = res ? (res.passed ? 'cp-passed' : 'cp-failed') : '';
          const statusIcon  = res ? (res.passed ? '✅' : '❌') : '○';
          const scoreText   = res ? `${res.score}/${res.total} (${Math.round(res.score/res.total*100)}%)` : `${count} questions`;
          return `
            <div class="cp-week-card ${statusClass}" data-week="${w}">
              <div class="cp-week-icon">${statusIcon}</div>
              <div class="cp-week-info">
                <h3 class="cp-week-title">Week ${w}</h3>
                <p class="cp-week-score">${scoreText}</p>
                ${res ? `<p class="cp-week-date">${res.date}</p>` : ''}
              </div>
              <button class="btn btn-primary cp-start-btn" data-week="${w}">
                ${res ? 'Retry' : 'Start'}
              </button>
            </div>
          `;
        }).join('')}
      </div>
      <div id="cp-quiz-area" style="display:none"></div>
    `;

    root.querySelectorAll('.cp-start-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        startWeek(parseInt(this.dataset.week));
      });
    });
  }

  function startWeek(week) {
    currentWeek = week;
    questions = shuffle(CHECKPOINT_DATA.filter(q => q.week === week));
    currentIdx = 0;
    score = 0;
    answered = [];

    const root = document.getElementById('checkpoint-root');
    document.getElementById('cp-week-grid').style.display = 'none';
    document.getElementById('cp-quiz-area').style.display = 'block';
    renderQuestion();
  }

  /* ── Render single question ───────────────────────────────── */
  function renderQuestion() {
    const area = document.getElementById('cp-quiz-area');
    if (!area) return;

    if (currentIdx >= questions.length) {
      showResults();
      return;
    }

    const q   = questions[currentIdx];
    const pct = (currentIdx / questions.length) * 100;
    const passThreshold = Math.ceil(questions.length * 0.8);

    area.innerHTML = `
      <div class="cp-quiz-header">
        <button class="btn btn-ghost cp-back-btn" id="cp-back-btn">← Back to Weeks</button>
        <span class="cp-week-label">Week ${currentWeek} Checkpoint</span>
        <span class="cp-progress-text">${currentIdx + 1}/${questions.length} · Pass: ${passThreshold}+</span>
      </div>
      <div class="mcq-progress-track" style="margin-bottom:1.5rem">
        <div class="mcq-progress-fill" style="width:${pct}%"></div>
      </div>
      <div class="cp-question-card">
        <div class="mcq-topic-tag" style="margin-bottom:0.75rem">${q.topic}</div>
        <div class="mcq-question-text" id="cp-q-text">${q.question}</div>
        <div class="mcq-options" id="cp-options">
          ${q.options.map((opt, i) => `
            <button class="mcq-option" data-idx="${i}">
              <span class="mcq-option-letter">${String.fromCharCode(65+i)}</span>
              <span class="mcq-option-text">${opt}</span>
            </button>
          `).join('')}
        </div>
        <div class="mcq-explanation hidden" id="cp-explanation"></div>
        <div class="mcq-next-row hidden" id="cp-next-row">
          <button class="btn btn-primary" id="cp-next-btn">
            ${currentIdx < questions.length - 1 ? 'Next →' : 'Finish'}
          </button>
        </div>
      </div>
    `;

    document.getElementById('cp-back-btn').addEventListener('click', () => {
      render();
      document.getElementById('cp-week-grid').style.display = '';
      document.getElementById('cp-quiz-area').style.display = 'none';
    });

    attachCPQuestionEvents(q);

    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([area]).catch(() => {});
    }
  }

  function attachCPQuestionEvents(q) {
    const optBtns = document.querySelectorAll('#cp-options .mcq-option');
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

        if (!isCorrect) {
          weakIds.add(q.id);
          localStorage.setItem(LS_WEAK, JSON.stringify([...weakIds]));
          const wb = document.getElementById('nav-weak-badge');
          if (wb) wb.textContent = weakIds.size > 0 ? weakIds.size : '';
        }

        const expDiv = document.getElementById('cp-explanation');
        if (expDiv) {
          expDiv.innerHTML = `<span class="mcq-explanation-icon">💡</span> ${q.explanation}`;
          expDiv.classList.remove('hidden');
          if (window.MathJax && MathJax.typesetPromise) {
            MathJax.typesetPromise([expDiv]).catch(() => {});
          }
        }

        const nextRow = document.getElementById('cp-next-row');
        if (nextRow) nextRow.classList.remove('hidden');
      });
    });

    const nextBtn = document.getElementById('cp-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIdx++;
        renderQuestion();
      });
    }
  }

  /* ── Results ──────────────────────────────────────────────── */
  function showResults() {
    const area = document.getElementById('cp-quiz-area');
    if (!area) return;

    const total  = questions.length;
    const pct    = Math.round((score / total) * 100);
    const passed = pct >= 80;

    saveResult(currentWeek, score, total);

    area.innerHTML = `
      <div class="cp-results">
        <div class="cp-results-icon">${passed ? '🎉' : '📚'}</div>
        <h2 class="cp-results-title">Week ${currentWeek} — ${passed ? 'PASSED' : 'Not Passed'}</h2>
        <div class="cp-results-score">${score} / ${total} (${pct}%)</div>
        <p class="cp-results-subtitle">Pass mark: 80% (${Math.ceil(total*0.8)}/${total})</p>
        ${!passed ? '<p class="cp-results-tip">Review weak topics and try again — wrong answers added to Weak Topics drill.</p>' : ''}
        <div class="cp-results-actions">
          <button class="btn btn-primary" id="cp-retry-btn">Retry Week ${currentWeek}</button>
          <button class="btn btn-secondary" id="cp-back-btn2">Back to Weeks</button>
        </div>
        <div class="cp-review-section">
          <h3>Answer Review</h3>
          ${answered.map((a, i) => {
            const q = questions[i];
            if (!q) return '';
            const icon = a.correct ? '✅' : '❌';
            return `
              <div class="mcq-review-item ${a.correct?'correct':'incorrect'}">
                <div class="mcq-review-q">${icon} ${q.question}</div>
                <div class="mcq-review-answer"><strong>Correct:</strong> ${String.fromCharCode(65+q.correct)}) ${q.options[q.correct]}</div>
                <div class="mcq-review-exp">${q.explanation}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    document.getElementById('cp-retry-btn').addEventListener('click', () => startWeek(currentWeek));
    document.getElementById('cp-back-btn2').addEventListener('click', () => {
      render();
      document.getElementById('cp-week-grid').style.display = '';
      document.getElementById('cp-quiz-area').style.display = 'none';
    });

    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([area]).catch(() => {});
    }
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /* ── Public init ─────────────────────────────────────────── */
  window.initCheckpoints = function() {
    loadState();
    render();
  };

  /* ── Expose results for dashboard ─────────────────────────── */
  window.getCheckpointResults = function() {
    return cpResults;
  };

})();
