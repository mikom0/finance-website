/* ================================================================
   longAnswer.js — Long Answer / Essay Practice Module
   Expandable accordion with model answers and mark schemes.
   Elaborative interrogation "why" prompts shown after reveal.
================================================================ */

(function() {
  'use strict';

  let selectedTopic = 'All';
  let selectedDiff  = 'All';
  let openId = null;

  /* ── Render ──────────────────────────────────────────────── */
  function render() {
    const root = document.getElementById('long-answer-root');
    if (!root) return;

    const topics = ['All', ...new Set(LONG_ANSWER_DATA.map(q => q.topic))];
    const diffs  = ['All', 'Foundational', 'Applied', 'Exam-Standard'];

    root.innerHTML = `
      <div class="la-controls">
        <div class="la-filter-row">
          <div class="fc-filter-group">
            <label class="fc-filter-label">Topic</label>
            <select class="fc-select" id="la-topic-select">
              ${topics.map(t => `<option value="${t}" ${t===selectedTopic?'selected':''}>${t}</option>`).join('')}
            </select>
          </div>
          <div class="fc-filter-group">
            <label class="fc-filter-label">Difficulty</label>
            <select class="fc-select" id="la-diff-select">
              ${diffs.map(d => `<option value="${d}" ${d===selectedDiff?'selected':''}>${d}</option>`).join('')}
            </select>
          </div>
          <button class="btn btn-ghost" id="la-collapse-btn">Collapse All</button>
        </div>
        <div class="la-count-row">
          <span id="la-count-label"></span>
        </div>
      </div>
      <div class="la-list" id="la-list"></div>
    `;

    document.getElementById('la-topic-select').addEventListener('change', e => {
      selectedTopic = e.target.value;
      renderList();
    });
    document.getElementById('la-diff-select').addEventListener('change', e => {
      selectedDiff = e.target.value;
      renderList();
    });
    document.getElementById('la-collapse-btn').addEventListener('click', () => {
      openId = null;
      renderList();
    });

    renderList();
  }

  function renderList() {
    const list = document.getElementById('la-list');
    const countLabel = document.getElementById('la-count-label');
    if (!list) return;

    let items = LONG_ANSWER_DATA;
    if (selectedTopic !== 'All') items = items.filter(q => q.topic === selectedTopic);
    if (selectedDiff  !== 'All') items = items.filter(q => q.difficulty === selectedDiff);

    if (countLabel) countLabel.textContent = `${items.length} question${items.length !== 1 ? 's' : ''}`;

    if (items.length === 0) {
      list.innerHTML = '<div class="la-empty">No questions match these filters.</div>';
      return;
    }

    list.innerHTML = items.map((q, i) => {
      const isOpen = q.id === openId;
      const topicLabel = q.topic.replace(/W(\d)-(.+)/, 'Week $1 — $2');
      const diffColor = { 'Foundational':'fc-diff-found', 'Applied':'fc-diff-app', 'Exam-Standard':'fc-diff-exam' }[q.difficulty] || '';
      const totalPts = q.markScheme.reduce((s, m) => s + m.pts, 0);

      return `
        <div class="la-item ${isOpen?'open':''}" id="la-item-${q.id}">
          <div class="la-header" data-id="${q.id}">
            <div class="la-header-left">
              <span class="la-num">${String(i+1).padStart(2,'0')}</span>
              <div class="la-header-text">
                <span class="la-topic-badge ${diffColor}">${topicLabel} · ${q.difficulty}</span>
                <span class="la-question-preview">${q.question.substring(0,120)}${q.question.length>120?'…':''}</span>
              </div>
            </div>
            <div class="la-header-right">
              <span class="la-pts-badge">${totalPts} pts</span>
              <span class="la-chevron">${isOpen?'▲':'▼'}</span>
            </div>
          </div>
          ${isOpen ? renderBody(q) : ''}
        </div>
      `;
    }).join('');

    // Attach header click events
    list.querySelectorAll('.la-header').forEach(h => {
      h.addEventListener('click', function() {
        const id = this.dataset.id;
        openId = openId === id ? null : id;
        renderList();
        // Scroll to item
        setTimeout(() => {
          const el = document.getElementById(`la-item-${id}`);
          if (el) el.scrollIntoView({ behavior:'smooth', block:'nearest' });
        }, 50);
        // Typeset new content
        if (window.MathJax && MathJax.typesetPromise) {
          MathJax.typesetPromise([list]).catch(() => {});
        }
      });
    });

    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([list]).catch(() => {});
    }
  }

  function renderBody(q) {
    const msRows = q.markScheme.map(m => `
      <tr>
        <td class="ms-pts">${m.pts}</td>
        <td class="ms-element">${m.element}</td>
      </tr>
    `).join('');

    return `
      <div class="la-body">
        <div class="la-question-full">
          <h3 class="la-q-label">Question</h3>
          <p class="la-q-text">${q.question}</p>
        </div>

        <div class="la-mark-scheme">
          <h3 class="la-ms-label">Mark Scheme</h3>
          <table class="ms-table">
            <thead><tr><th>Pts</th><th>Element</th></tr></thead>
            <tbody>${msRows}</tbody>
          </table>
        </div>

        <div class="la-model-answer">
          <h3 class="la-ma-label">Model Answer</h3>
          <div class="la-ma-text">${q.modelAnswer}</div>
        </div>

        <div class="la-why-prompt">
          <div class="la-why-icon">🤔</div>
          <div>
            <strong>Elaborative Interrogation:</strong>
            <p>${q.whyPrompt}</p>
          </div>
        </div>
      </div>
    `;
  }

  /* ── Public init ─────────────────────────────────────────── */
  window.initLongAnswer = function() {
    render();
  };

})();
