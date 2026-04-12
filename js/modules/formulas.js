/* ================================================================
   formulas.js — Interactive Formula Sheet Module
   Click variable chip → modal definition
   Toggle button → show intuition text
================================================================ */

(function() {
  'use strict';

  let showIntuition = false;
  let selectedTopic = 'All';

  /* ── Render ──────────────────────────────────────────────── */
  function render() {
    const root = document.getElementById('formula-root');
    if (!root) return;

    const topics = ['All', ...new Set(FORMULA_DATA.map(f => f.topic))];

    root.innerHTML = `
      <div class="formula-controls">
        <div class="formula-filter-row">
          <div class="fc-filter-group">
            <label class="fc-filter-label">Topic</label>
            <select class="fc-select" id="fml-topic-select">
              ${topics.map(t => `<option value="${t}" ${t===selectedTopic?'selected':''}>${t}</option>`).join('')}
            </select>
          </div>
          <button class="btn btn-secondary" id="fml-intuition-btn">
            ${showIntuition ? 'Hide Intuition' : 'Show Intuition'}
          </button>
        </div>
      </div>
      <div class="formula-grid" id="formula-grid"></div>
    `;

    document.getElementById('fml-topic-select').addEventListener('change', e => {
      selectedTopic = e.target.value;
      renderGrid();
    });

    document.getElementById('fml-intuition-btn').addEventListener('click', function() {
      showIntuition = !showIntuition;
      this.textContent = showIntuition ? 'Hide Intuition' : 'Show Intuition';
      renderGrid();
    });

    renderGrid();
  }

  function renderGrid() {
    const grid = document.getElementById('formula-grid');
    if (!grid) return;

    let formulas = FORMULA_DATA;
    if (selectedTopic !== 'All') formulas = formulas.filter(f => f.topic === selectedTopic);

    if (formulas.length === 0) {
      grid.innerHTML = '<div class="la-empty">No formulas in this topic.</div>';
      return;
    }

    grid.innerHTML = formulas.map(f => {
      const topicLabel = f.topic.replace(/W(\d)-(.+)/, 'Week $1 — $2');
      const varChips = f.variables.map(v =>
        `<button class="formula-var-chip" data-formula-id="${f.id}" data-symbol="${encodeURIComponent(v.symbol)}" data-definition="${encodeURIComponent(v.definition)}">${v.symbol}</button>`
      ).join('');

      return `
        <div class="formula-card" id="fcard-${f.id}">
          <div class="formula-card-header">
            <span class="formula-topic-tag">${topicLabel}</span>
            <h3 class="formula-name">${f.name}</h3>
          </div>
          <div class="formula-latex" id="fml-latex-${f.id}">\\[${f.latex}\\]</div>
          <div class="formula-vars">
            <span class="formula-vars-label">Variables:</span>
            ${varChips}
          </div>
          <div class="formula-intuition-text ${showIntuition ? 'visible' : ''}">
            <strong>Intuition:</strong> ${f.intuition}
          </div>
        </div>
      `;
    }).join('');

    // Attach chip click events
    grid.querySelectorAll('.formula-var-chip').forEach(chip => {
      chip.addEventListener('click', function() {
        const symbol = decodeURIComponent(this.dataset.symbol);
        const definition = decodeURIComponent(this.dataset.definition);
        showModal(symbol, definition);
      });
    });

    // Typeset
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([grid]).catch(() => {});
    }
  }

  /* ── Modal ───────────────────────────────────────────────── */
  function showModal(symbol, definition) {
    const backdrop = document.getElementById('modal-backdrop');
    const title    = document.getElementById('modal-title');
    const body     = document.getElementById('modal-body');
    if (!backdrop || !title || !body) return;

    title.textContent = symbol;
    body.innerHTML = `<p>${definition}</p>`;
    backdrop.classList.remove('hidden');

    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([body]).catch(() => {});
    }
  }

  /* ── Public init ─────────────────────────────────────────── */
  window.initFormulas = function() {
    render();
  };

})();
