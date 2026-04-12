/* ================================================================
   dashboard.js — Dashboard Module
   Shows progress bars, topic mastery, streak, quickstart buttons.
================================================================ */

(function() {
  'use strict';

  const TOPICS = [
    { key:'W1-Finance', label:'W1 — Finance Foundations' },
    { key:'W1-TVM',     label:'W1 — Time Value of Money' },
    { key:'W2-Bonds',   label:'W2 — Bonds & Yield Curves' },
    { key:'W2-Stocks',  label:'W2 — Stock Valuation' },
    { key:'W3-CashFlows', label:'W3 — Free Cash Flows' },
    { key:'W3-Rules',   label:'W3 — Capital Budgeting' },
    { key:'W4-Risk',    label:'W4 — Risk & Diversification' },
    { key:'W4-CAPM',    label:'W4 — CAPM & WACC' },
    { key:'W5-MM',      label:'W5 — MM Propositions' },
    { key:'W5-Limits',  label:'W5 — Capital Structure Limits' }
  ];

  function getProgress() {
    // Flashcard progress
    let knownIds = new Set();
    try {
      const r = localStorage.getItem('fc_state');
      if (r) knownIds = new Set((JSON.parse(r).known || []));
    } catch(e) {}

    // Weak IDs
    let weakIds = new Set();
    try {
      const w = localStorage.getItem('weak_ids');
      if (w) weakIds = new Set(JSON.parse(w));
    } catch(e) {}

    // Checkpoint results
    let cpResults = {};
    try {
      const c = localStorage.getItem('cp_results');
      if (c) cpResults = JSON.parse(c);
    } catch(e) {}

    return { knownIds, weakIds, cpResults };
  }

  function render() {
    const root = document.getElementById('dashboard-root');
    if (!root) return;

    const { knownIds, weakIds, cpResults } = getProgress();

    const totalFC   = FLASHCARD_DATA.length;
    const knownFC   = FLASHCARD_DATA.filter(c => knownIds.has(c.id)).length;
    const totalMCQ  = MCQ_DATA.length;
    const totalLA   = LONG_ANSWER_DATA.length;
    const weakCount = weakIds.size;

    // Checkpoint summary
    const cpWeeks   = [1,2,3,4,5];
    const cpPassed  = cpWeeks.filter(w => cpResults[`w${w}`]?.passed).length;

    // Overall progress (cards known / total)
    const overallPct = totalFC > 0 ? Math.round((knownFC / totalFC) * 100) : 0;

    root.innerHTML = `
      <!-- Overall Progress Bar -->
      <div class="dash-overall-card">
        <div class="dash-overall-header">
          <span class="dash-overall-title">Overall Mastery</span>
          <span class="dash-overall-pct">${overallPct}%</span>
        </div>
        <div class="dash-overall-track">
          <div class="dash-overall-fill" style="width:${overallPct}%"></div>
        </div>
        <div class="dash-overall-detail">${knownFC} / ${totalFC} flashcards marked "known"</div>
      </div>

      <!-- Stats Grid -->
      <div class="dash-stats-grid">
        <div class="dash-stat-card">
          <div class="dash-stat-icon">🃏</div>
          <div class="dash-stat-num">${knownFC}<span class="dash-stat-denom">/${totalFC}</span></div>
          <div class="dash-stat-label">Cards Known</div>
        </div>
        <div class="dash-stat-card">
          <div class="dash-stat-icon">✅</div>
          <div class="dash-stat-num">${totalMCQ}<span class="dash-stat-denom"> Qs</span></div>
          <div class="dash-stat-label">MCQ Bank</div>
        </div>
        <div class="dash-stat-card">
          <div class="dash-stat-icon">📝</div>
          <div class="dash-stat-num">${totalLA}<span class="dash-stat-denom"> Qs</span></div>
          <div class="dash-stat-label">Essay Practice</div>
        </div>
        <div class="dash-stat-card ${weakCount > 0 ? 'dash-stat-warn' : ''}">
          <div class="dash-stat-icon">⚡</div>
          <div class="dash-stat-num">${weakCount}</div>
          <div class="dash-stat-label">Weak Topics</div>
        </div>
        <div class="dash-stat-card">
          <div class="dash-stat-icon">📋</div>
          <div class="dash-stat-num">${cpPassed}<span class="dash-stat-denom">/5</span></div>
          <div class="dash-stat-label">Checkpoints Passed</div>
        </div>
      </div>

      <!-- Checkpoints Status -->
      <div class="dash-section-title">Weekly Checkpoints</div>
      <div class="dash-cp-row">
        ${cpWeeks.map(w => {
          const res = cpResults[`w${w}`];
          const cls = res ? (res.passed ? 'dash-cp-pass' : 'dash-cp-fail') : 'dash-cp-todo';
          const icon = res ? (res.passed ? '✅' : '❌') : '○';
          return `<div class="dash-cp-chip ${cls}" title="Week ${w}${res?' — '+res.score+'/'+res.total:' — Not attempted'}">
            <span class="dash-cp-icon">${icon}</span>
            <span class="dash-cp-week">W${w}</span>
          </div>`;
        }).join('')}
      </div>

      <!-- Topic Progress Grid -->
      <div class="dash-section-title">Topic Mastery — Flashcards</div>
      <div class="dash-topic-grid">
        ${TOPICS.map(t => {
          const topicCards = FLASHCARD_DATA.filter(c => c.topic === t.key);
          const known = topicCards.filter(c => knownIds.has(c.id)).length;
          const pct   = topicCards.length > 0 ? Math.round((known/topicCards.length)*100) : 0;
          const cls   = pct >= 80 ? 'topic-mastered' : pct >= 40 ? 'topic-progress' : 'topic-start';
          return `
            <div class="dash-topic-card ${cls}">
              <div class="dash-topic-header">
                <span class="dash-topic-name">${t.label}</span>
                <span class="dash-topic-pct">${pct}%</span>
              </div>
              <div class="dash-topic-track">
                <div class="dash-topic-fill" style="width:${pct}%"></div>
              </div>
              <div class="dash-topic-count">${known}/${topicCards.length} cards</div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Quick Start Buttons -->
      <div class="dash-section-title">Quick Start</div>
      <div class="dash-quickstart-grid">
        <button class="dash-qs-btn" data-section="flashcards">
          <span class="dash-qs-icon">🃏</span>
          <span class="dash-qs-label">Flashcards</span>
          <span class="dash-qs-sub">${totalFC - knownFC} due</span>
        </button>
        <button class="dash-qs-btn" data-section="mcq">
          <span class="dash-qs-icon">✅</span>
          <span class="dash-qs-label">MCQ Quiz</span>
          <span class="dash-qs-sub">${totalMCQ} questions</span>
        </button>
        <button class="dash-qs-btn" data-section="long-answer">
          <span class="dash-qs-icon">📝</span>
          <span class="dash-qs-label">Essay Practice</span>
          <span class="dash-qs-sub">${totalLA} questions</span>
        </button>
        <button class="dash-qs-btn" data-section="checkpoints">
          <span class="dash-qs-icon">📋</span>
          <span class="dash-qs-label">Checkpoints</span>
          <span class="dash-qs-sub">${5 - cpPassed} remaining</span>
        </button>
        ${weakCount > 0 ? `
          <button class="dash-qs-btn dash-qs-warn" data-section="weak-topics">
            <span class="dash-qs-icon">⚡</span>
            <span class="dash-qs-label">Weak Topics</span>
            <span class="dash-qs-sub">${weakCount} to drill</span>
          </button>
        ` : ''}
        <button class="dash-qs-btn" data-section="formula-sheet">
          <span class="dash-qs-icon">∑</span>
          <span class="dash-qs-label">Formula Sheet</span>
          <span class="dash-qs-sub">${FORMULA_DATA.length} formulas</span>
        </button>
      </div>
    `;

    // Quick start navigation
    root.querySelectorAll('.dash-qs-btn[data-section]').forEach(btn => {
      btn.addEventListener('click', function() {
        const section = this.dataset.section;
        const navLink = document.querySelector(`.nav-link[data-section="${section}"]`);
        if (navLink) navLink.click();
      });
    });
  }

  /* ── Public API ──────────────────────────────────────────── */
  window.initDashboard = function() {
    render();
  };

  window.updateDashboard = function() {
    if (document.getElementById('page-dashboard')?.classList.contains('active')) {
      render();
    }
  };

})();
