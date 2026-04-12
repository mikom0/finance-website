/* ================================================================
   LONG ANSWER DATA — 42 questions with model answers
   Format: { id, topic, difficulty, question, markScheme[], modelAnswer, whyPrompt }
   ================================================================ */

const LONG_ANSWER_DATA = [
{
  id:'la001', topic:'W5-MM', difficulty:'Exam-Standard',
  question:'Derive MM Proposition I (no taxes) using all three arguments. State each argument clearly and explain the economic logic.',
  markScheme:[
    {pts:2, element:'Pie argument: real assets generate fixed CFs; capital structure divides but cannot change total'},
    {pts:2, element:'Zero-NPV financial transactions: securities trade at fair value in perfect markets; no value created'},
    {pts:4, element:'Homemade leverage proof: construct two strategies (buy levered equity vs. buy unlevered + borrow) with identical payoffs → identical cost → V_L = V_U'},
    {pts:2, element:'Correct conclusion: V_L = V_U; firm value independent of capital structure in perfect markets'}
  ],
  modelAnswer:`<b>Argument 1 — The Pie Analogy:</b>
A firm's real assets generate a fixed stream of cash flows (EBIT) regardless of how the firm is financed. Capital structure merely divides these cash flows between debt holders (interest) and equity holders (residual). Since the total pie is determined by real investments — not by how it is sliced — total firm value V = D + E cannot be changed by capital structure.

<b>Argument 2 — Zero-NPV Financial Transactions:</b>
In perfect capital markets, all financial securities are correctly priced at their fair value. Issuing debt and equity are zero-NPV transactions — you receive fair value and give up fair value. No value is created or destroyed by the financing choice itself.

<b>Argument 3 — Homemade Leverage (No-Arbitrage Proof):</b>
Consider two firms identical in operations but different in capital structure: Firm U (unlevered, V_U) and Firm L (levered, debt D at r_D, equity E_L).

<u>Strategy A:</u> Invest 10% of levered firm equity → Cost: 0.10 × E_L → Payoff: 0.10 × (EBIT − r_D × D)

<u>Strategy B:</u> Buy 10% of unlevered firm + borrow 10% × D at r_D → Cost: 0.10 × V_U − 0.10 × D → Payoff: 0.10 × EBIT − 0.10 × r_D × D (identical to Strategy A)

Since payoffs are identical, costs must be equal by no-arbitrage:
0.10 × E_L = 0.10 × (V_U − D) → E_L + D = V_U → <b>V_L = V_U ✓</b>

Economic logic: investors can create leverage (or undo it) on their personal accounts at the same cost as the firm. Therefore the firm provides no incremental value by being levered.`,
  whyPrompt:'Why does homemade leverage only work if borrowing/lending is available at the same R_f for everyone? What happens when this assumption is violated (e.g. margin constraints)?'
},

{
  id:'la002', topic:'W5-MM', difficulty:'Exam-Standard',
  question:'Explain Trade-Off Theory. When does increasing debt increase firm value, and when does it decrease firm value? What determines the optimal capital structure D*?',
  markScheme:[
    {pts:2, element:'Starting point: MM + taxes → V_L = V_U + tD; tax shield increases with debt'},
    {pts:2, element:'Costs of financial distress (direct + indirect, 2 examples each)'},
    {pts:2, element:'Expected distress cost = Probability × Cost; increases convexly with D'},
    {pts:2, element:'Optimal D*: marginal tax benefit = marginal expected distress cost'},
    {pts:2, element:'Predictions: no 0% or 100% debt; revert to target; tangibility/stability matter'}
  ],
  modelAnswer:`<b>Foundation — MM with taxes:</b>
With corporate taxes, V_L = V_U + t×D. The government subsidises interest payments (tax-deductible), so each additional £ of debt adds t×£ of value. This alone would suggest 100% debt is optimal — unrealistic.

<b>Adding Distress Costs:</b>
V_L = V_U + t×D − PV(Expected Distress Costs)

Expected distress cost = Probability of distress × Cost if distressed

As D/V rises:
• Probability of distress increases (more fixed interest obligations relative to cash flows)
• Cost if distressed is large — both direct (legal fees, fire-sales) and indirect (customer flight, supplier tightening, employee attrition, underinvestment)

<b>Optimal D*:</b>
Where the marginal tax benefit of an extra £ of debt exactly equals the marginal increase in expected distress costs. Graphically, V_L peaks at D* then declines as distress costs dominate.

<b>Predictions:</b>
1. Firms should use some debt (forgoing tax shield is wasteful)
2. Firms should not use 100% debt (distress costs too large)
3. Firms with tangible assets (good collateral, value preserved in distress) → higher D*
4. Firms with stable cash flows → lower distress probability → higher D*
5. Firms drift from D* and gradually correct back (partial adjustment)

<b>Empirical fit:</b> Works well across industries (consistent with observed leverage patterns). Fails within industries (too many zero-leverage firms that should be borrowing for tax shield → Pecking Order needed).`,
  whyPrompt:'Why do indirect costs of distress (customer flight, employee departure) typically exceed direct costs? Give a quantitative intuition for why they matter more.'
},

{
  id:'la003', topic:'W3-Rules', difficulty:'Exam-Standard',
  question:'Compare NPV and IRR as capital budgeting rules. When do they agree? Identify all four cases where IRR fails and explain why NPV is superior in each case.',
  markScheme:[
    {pts:2, element:'NPV definition and reinvestment at r; IRR definition and reinvestment at IRR'},
    {pts:1, element:'Agreement case: independent project, normal cash flows, single IRR'},
    {pts:2, element:'Case 1: Financing project — rule flips; test with positive initial CF'},
    {pts:2, element:'Case 2: Multiple IRRs from multiple sign changes; no unique answer'},
    {pts:2, element:'Case 3: Scale problem — IRR favours small; incremental IRR fixes'},
    {pts:2, element:'Case 4: Timing problem — IRR favours early CFs; cross-over rate concept'},
    {pts:1, element:'Conclusion: when conflict exists, always follow NPV'}
  ],
  modelAnswer:`<b>Agreement:</b> For independent projects with conventional cash flow profiles (−,+,+,...,+) and a single sign change, IRR and NPV give identical accept/reject decisions. IRR > r ⟺ NPV > 0.

<b>Case 1 — Financing Projects:</b>
If initial CF is positive (e.g. borrow £1,000 now, repay £1,100), IRR = 10%. If r = 8%, NPV = −18 < 0 → REJECT. But IRR > r → should accept? No — the NPV-IRR rule FLIPS for financing projects. Accept when IRR < r. Identified by: positive CF at t=0.

<b>Case 2 — Multiple IRRs:</b>
Multiple sign changes → multiple IRRs by Descartes' rule. No unique answer. E.g. (−100, +240, −143) → IRRs at ~20% and ~43%. Impossible to apply the "IRR > r" rule. Solution: use NPV.

<b>Case 3 — Scale Problem:</b>
Small: (−1000, +2000) IRR=100%, NPV=£818. Large: (−2000, +3500) IRR=75%, NPV=£1,182 at r=10%.
IRR picks Small (wrong). NPV picks Large (correct). Fix: compute incremental IRR of (Large−Small) = (−1000,+1500), IRR=50% > 10% → choose Large.

<b>Case 4 — Timing Problem:</b>
Slow: (−100,10,35,100) IRR=15.4%, NPV=£13. Fast: (−100,60,60,10) IRR=18%, NPV=£12.
IRR picks Fast (wrong). NPV picks Slow (correct). Root cause: IRR assumes reinvestment at IRR (18% for Fast) — optimistic. NPV assumes reinvestment at r=10% — realistic. Cross-over rate ≈ 11.5%.

<b>Conclusion:</b> NPV is always correct. It measures £ value added directly, uses realistic reinvestment assumption, and has no pathological cases. Use IRR only as a secondary check.`,
  whyPrompt:'Why does the reinvestment assumption cause NPV and IRR to disagree specifically on the TIMING problem but not the SCALE problem?'
},

{
  id:'la004', topic:'W3-CashFlows', difficulty:'Applied',
  question:'A firm is evaluating a 5-year project. Explain how to construct the Free Cash Flows from scratch, covering: (a) operating cash flow, (b) NWC changes, (c) CAPEX, and (d) terminal value. What are the most common errors?',
  markScheme:[
    {pts:2, element:'OCF = EBIT×(1−t) + Dep (both formulations); why depreciation is added back'},
    {pts:2, element:'ΔNWC: always use change not level; increase = cash outflow; recovered at end'},
    {pts:2, element:'CAPEX at t=0 (and during project if relevant); after-tax salvage at end'},
    {pts:2, element:'Terminal value: liquidation vs. continuation; choose one'},
    {pts:2, element:'Common errors: sunk costs, omitting opportunity costs, including interest, forgetting NWC recovery'}
  ],
  modelAnswer:`<b>(a) Operating Cash Flow (OCF):</b>
OCF = EBIT×(1−t) + Depreciation
     = (Revenue − COGS − SG&A − Dep)×(1−t) + Dep

Equivalent form: EBITDA×(1−t) + Dep×t [separates operating profit from depreciation tax shield]

Key: depreciation is non-cash — reduces taxable profit (creating the tax shield) but must be added back to convert accounting profit to cash flow.

<b>(b) NWC Changes:</b>
NWC = AR + Inventory − AP
FCF impact: −ΔNWC (increase in NWC = cash outflow)
ΔNWC = NWC(t) − NWC(t−1) — use the CHANGE, not the level
Terminal year: recover full NWC (+ΔNWC_final, or simply add back cumulative NWC investment)

<b>(c) CAPEX:</b>
At t=0: full investment outflow
Terminal year salvage: MV − (MV−BV)×t (capital gain/loss tax adjustment)
If BV=0: after-tax salvage = MV×(1−t)

<b>(d) Terminal Value:</b>
Liquidation: after-tax salvage + NWC recovery (for finite projects)
Continuation: CV = FCF_{T+1}/(WACC−g), discount back T periods (for ongoing businesses)

<b>Common Errors:</b>
• Including sunk costs (already spent — irrelevant)
• Omitting opportunity costs (foregone alternatives)
• Including interest in FCF (double-counts with WACC)
• Using NWC level not change
• Forgetting NWC recovery at end (understates NPV)
• Using wrong year's NWC for first ΔNWC`,
  whyPrompt:'Why does the OCF formula EBITDA×(1−t) + Dep×t explicitly show the depreciation tax shield? When would accelerated depreciation significantly increase NPV?'
},

{
  id:'la005', topic:'W5-Limits', difficulty:'Exam-Standard',
  question:'Apply WACC end-to-end: given E=$3,000m, D=$1,500m, β_L=1.0, R_f=6%, MRP=8%, r_D=10%, t=35%. Compute r_E, WACC, and NPV for a project costing $50m with $10m/yr FCF forever.',
  markScheme:[
    {pts:2, element:'r_E = R_f + β×MRP = 6% + 1.0×8% = 14%'},
    {pts:2, element:'WACC = (E/V)×r_E + (D/V)×r_D×(1−t) = 0.667×14% + 0.333×10%×0.65 = 11.5%'},
    {pts:2, element:'V = FCF/WACC = 10/0.115 = $86.96m'},
    {pts:2, element:'NPV = V − Investment = 86.96 − 50 = $36.96m → ACCEPT'},
    {pts:2, element:'Correct identification of market value weights; correct tax treatment'}
  ],
  modelAnswer:`<b>Step 1 — Cost of Equity via CAPM:</b>
r_E = R_f + β_L × MRP = 6% + 1.0 × 8% = 14%

<b>Step 2 — WACC:</b>
V = E + D = 3,000 + 1,500 = $4,500m
E/V = 3,000/4,500 = 0.667; D/V = 1,500/4,500 = 0.333

WACC = (E/V)×r_E + (D/V)×r_D×(1−t)
     = 0.667×14% + 0.333×10%×0.65
     = 9.33% + 2.17% = <b>11.5%</b>

<b>Step 3 — Project Valuation:</b>
FCF = $10m/yr forever → perpetuity
V(project) = FCF/WACC = 10/0.115 = <b>$86.96m</b>

<b>Step 4 — NPV:</b>
NPV = V − Investment = 86.96 − 50 = <b>$36.96m → ACCEPT ✓</b>

<b>Key notes:</b>
• Use market value weights (given: E=$3,000m, D=$1,500m at market value)
• FCF excludes interest — WACC handles the tax shield
• WACC with taxes (11.5%) < unlevered r₀ — tax shield benefits are captured in discount rate`,
  whyPrompt:'What would happen to the NPV if the firm used book value weights instead of market value weights? In which direction would WACC be biased?'
},

{
  id:'la006', topic:'W4-CAPM', difficulty:'Exam-Standard',
  question:'Explain CAPM assumptions and their implications. For each assumption, identify one real-world violation and discuss how it affects CAPM\'s predictions.',
  markScheme:[
    {pts:2, element:'Assumption 1: Perfect markets (no taxes, transaction costs, same R_f borrowing/lending)'},
    {pts:2, element:'Assumption 2: Mean-variance optimisers — only care about E[R] and σ'},
    {pts:2, element:'Assumption 3: Homogeneous expectations — same inputs for all investors'},
    {pts:2, element:'Real-world violations for each (taxes, behavioural biases, heterogeneous beliefs)'},
    {pts:2, element:'Implications: market portfolio not truly observable; beta is an imperfect risk measure; CAPM tends to misprice small caps, value stocks'}
  ],
  modelAnswer:`<b>Assumption 1 — Perfect Capital Markets:</b>
No taxes, no transaction costs, and the same R_f for borrowing and lending for all investors.
Violation: Taxes exist (capital gains ≠ ordinary income taxation); borrowing rates (margin rates) exceed lending rates (T-bill yields); transaction costs differ by investor size.
Impact: CAPM understates required returns for illiquid securities; leverage is not symmetrically accessible → CML kinks at the market portfolio rather than being a single straight line.

<b>Assumption 2 — Mean-Variance Optimisers:</b>
All investors care only about expected return and standard deviation. They hold efficient portfolios.
Violation: Behavioural biases (loss aversion, overconfidence, home bias) cause investors to hold concentrated, inefficient portfolios. Many investors hold insufficient diversification.
Impact: If investors don't diversify, idiosyncratic risk may be partially priced — CAPM underestimates required returns for undiversified investors.

<b>Assumption 3 — Homogeneous Expectations:</b>
All investors share identical estimates of returns, variances, and correlations.
Violation: Investors disagree significantly (heterogeneous beliefs). Some have private information.
Impact: The market portfolio is not uniquely optimal — different investors have different tangent portfolios. Observable market prices aggregate heterogeneous beliefs; beta estimates vary by data period.

<b>Empirical failures of CAPM:</b>
• Small-cap premium: small stocks earn more than CAPM predicts (size factor)
• Value premium: high book-to-market stocks outperform (value factor)
• Momentum: past winners continue to outperform
• These have led to multi-factor models (Fama-French 3-factor, Carhart 4-factor)`,
  whyPrompt:'If CAPM is empirically imperfect, why do most practitioners still use it for estimating the cost of equity? What are the alternatives and their limitations?'
},

{
  id:'la007', topic:'W2-Bonds', difficulty:'Exam-Standard',
  question:'A yield curve is inverted (short-term rates > long-term rates). Interpret this under each of the three yield curve theories. Be specific about what each theory predicts.',
  markScheme:[
    {pts:2, element:'Expectations Theory: unambiguously predicts interest rates will fall in the future'},
    {pts:2, element:'Liquidity Premium Theory: rates must fall by more than the premium to explain inversion; unambiguous signal of falling rates (asymmetric inference rule)'},
    {pts:2, element:'Market Segmentation Theory: excess demand at long end (pension funds), low demand at short end; no inference about future rates'},
    {pts:2, element:'Historical context: inverted yield curves have preceded most recessions'},
    {pts:2, element:'Key distinction: ET and LPT make predictions about future rates; MST does not'}
  ],
  modelAnswer:`<b>Expectations Theory (ET):</b>
ET says the yield curve shape reflects only expected future short-term rates. An inverted curve means the market consensus is that short-term rates will fall significantly in the future. Long-term investors are "locking in" today's long rates before they fall — driving up long-bond prices and reducing long-yields below short yields.
Inference: rate cuts expected → typically associated with economic slowdown/recession.

<b>Liquidity Premium Theory (LPT):</b>
LPT adds a positive liquidity (term) premium to expected future short rates for long bonds. An upward slope is ambiguous — it could be just the premium with flat expected rates. A downward slope is unambiguous: the premium is always positive, so for long yields to be LOWER than short yields, expected future short rates must fall by more than the entire premium.
Inference: strong signal that rates will fall — even stronger than ET's prediction.

<b>Market Segmentation Theory (MST):</b>
MST says each maturity is a separate market. An inverted curve simply means excess demand (relative supply shortage) at the long end, pushing long-bond prices up and yields down, while the short end has excess supply. Pension funds and insurance companies buying long-dated bonds drive down long yields.
Inference: NO inference about future rate levels — just supply/demand within each segment.

<b>Summary:</b>
ET → rates falling. LPT → rates falling strongly. MST → no prediction about future rates.
An inverted US yield curve has preceded every recession since 1955 — consistent with ET/LPT interpretation.`,
  whyPrompt:'Why does LPT say the downward-sloping curve is a stronger signal than ET does? What is the asymmetry, and why does it arise from the existence of the premium?'
},

{
  id:'la008', topic:'W1-Finance', difficulty:'Applied',
  question:'Given the following data, perform a full DuPont analysis and interpret the result: NI=£86, Sales=£2,262, Total Assets=£1,879, Equity=£805, Debt=£1,074.',
  markScheme:[
    {pts:1, element:'Profit Margin = NI/Sales = 3.8%'},
    {pts:1, element:'Asset Turnover = Sales/Assets = 1.2×'},
    {pts:1, element:'Financial Leverage = Assets/Equity = 2.33×'},
    {pts:2, element:'ROE = 3.8% × 1.2 × 2.33 = 10.7% (verified)'},
    {pts:2, element:'Interpretation: which driver dominates; leverage magnification of ROA'},
    {pts:3, element:'Discussion of profitability-turnover trade-off; leverage effect'}
  ],
  modelAnswer:`<b>DuPont Decomposition:</b>
ROE = Profit Margin × Asset Turnover × Equity Multiplier
    = (NI/Sales) × (Sales/Assets) × (Assets/Equity)
    = (86/2,262) × (2,262/1,879) × (1,879/805)
    = 3.8% × 1.204 × 2.334
    = <b>10.7%</b> ✓

<b>Interpretation:</b>
• Profit Margin (3.8%): Low operating efficiency — only 3.8p of every £1 revenue becomes net income. Suggests thin margins, possibly a competitive low-barrier industry or high cost structure.
• Asset Turnover (1.2×): Moderate — generates £1.20 of revenue per £1 of assets. Not capital-intensive.
• Equity Multiplier (2.33×): Significant leverage — for every £1 of equity, there are £2.33 of assets (D/E = 133%). This amplifies ROA into ROE.

<b>ROA = NI/Assets = 86/1,879 = 4.6%</b>
ROE = ROA × (1 + D/E) = 4.6% × 2.33 = 10.7% ✓

<b>Key insight:</b> The firm's 10.7% ROE is achieved despite a modest 4.6% ROA, primarily due to leverage (the equity multiplier of 2.33). If the firm reduces leverage, ROE would fall toward 4.6%. Shareholders benefit from leverage but also bear higher financial risk — the two are inseparable.`,
  whyPrompt:'How could the firm improve its ROE without increasing leverage? Which DuPont driver would you target, and what operational changes would this require?'
},

{
  id:'la009', topic:'W5-Limits', difficulty:'Exam-Standard',
  question:'Explain Pecking Order Theory. What does it predict about firm behaviour, and how do these predictions differ from Trade-Off Theory?',
  markScheme:[
    {pts:2, element:'Cause: information asymmetry; equity issuance signals overvaluation'},
    {pts:2, element:'Hierarchy: internal funds → safe debt → risky debt → convertibles → equity'},
    {pts:2, element:'Predictions: no target D/E; profitable firms use less debt; zero-leverage explained; path-dependence'},
    {pts:2, element:'Contrast with Trade-Off: opposite prediction for profitable firms; zero-leverage anomaly resolved'},
    {pts:2, element:'Empirical support: 70% internal financing; −3% equity issuance effect'}
  ],
  modelAnswer:`<b>Cause — Information Asymmetry:</b>
Managers know the firm's true value; outside investors do not. If managers try to sell equity when they know the firm is overvalued, rational investors recognise this signal. A firm issuing equity implicitly reveals it believes equity is overpriced → price falls ≈−3% on announcement.

<b>The Hierarchy:</b>
1. Internal funds (retained earnings/cash) — no adverse selection, no costs
2. Investment-grade debt — senior claim, price insensitive to private firm information
3. High-yield (risky) debt — more equity-like, more information-sensitive
4. Convertibles
5. Equity — maximum adverse selection; last resort

<b>Predictions vs. Trade-Off:</b>

| Prediction | Trade-Off | Pecking Order |
|---|---|---|
| Target D/E | Yes — revert to optimal D* | No — leverage reflects history |
| Profitable firms | More debt (higher taxes, use shield) | Less debt (more internal funds) |
| Zero-leverage firms | Anomaly (forgoing tax shield) | Explained (no need to issue) |
| Leverage over time | Mean-reverts | Path-dependent |

<b>Empirical Support:</b>
~70% of corporate investment financed internally. Stock price drops ≈−3% for industrial equity issuance, ≈0% for debt. Consistent with adverse selection model.

<b>Limitation:</b> Pure Pecking Order also has anomalies — some firms issue equity even when not required. Reality likely involves both theories operating simultaneously.`,
  whyPrompt:'If Pecking Order predicts NO target D/E, how would a CFO respond to a credit analyst asking "what is your target leverage ratio?" Is this realistic, or do most firms have implicit targets?'
},

{
  id:'la010', topic:'W5-MM', difficulty:'Exam-Standard',
  question:'Explain all three agency costs of debt with worked examples. For each, identify who loses value and what mechanism could prevent it.',
  markScheme:[
    {pts:3, element:'Risk shifting: equity convex payoff; near-insolvency gamble example with numbers; prevented by asset covenants'},
    {pts:3, element:'Underinvestment: positive-NPV project rejected; example with numbers; prevented by debt-equity swap'},
    {pts:3, element:'Asset stripping: liquidate assets, special dividend; prevented by dividend restriction covenants'},
    {pts:1, element:'Overall: these are costs of high leverage → reduce optimal D*'}
  ],
  modelAnswer:`<b>1. Risk Shifting (Excessive Risk-Taking):</b>
Near insolvency: V=50, D=100. Two choices:
• Safe: invest £20, V rises to 60. Shareholders get max(60−100,0)=£0. Vote NO.
• Gamble: 10% chance V=200, 90% chance V=0. E[V]=20 (negative NPV vs. cost 0). But: 10% chance equity=100, 90% chance 0 → E[equity]=10 > 0. Vote YES.

Shareholders vote for the negative-NPV gamble because they hold a call option on firm value. Creditors bear the downside; shareholders keep the upside.
Prevention: restrictive investment covenants; collateral requirements.

<b>2. Underinvestment (Debt Overhang):</b>
V=50, D=100. Safe project: invest £20, V rises from 50 to 80. Project NPV = +£10.
Equity gain: max(80−100,0)−max(50−100,0) = 0−0 = £0. Shareholders fund project and get nothing.
Vote NO — positive-NPV project is rejected because all benefits go to creditors.

Prevention: creditor-approved covenant permitting project with ring-fenced proceeds; debt-for-equity swap reducing D below V.

<b>3. Asset Stripping (Milking the Property):</b>
Firm has assets worth £150 but debt of £200. Management sells liquid assets (equipment, property) for £100 and immediately pays a special dividend of £100 to equity holders. Creditors now face assets of only £50 against £200 debt — worse than before.

Prevention: dividend restriction covenants (limit dividends to current earnings); asset sale restrictions; cross-collateralisation.

<b>Overall Effect:</b> These agency costs increase with leverage → reduce optimal D* below the tax-shield-only optimum of Trade-Off Theory.`,
  whyPrompt:'Why are agency costs of debt most severe for growth firms with intangible assets? What specific feature of their capital structure makes each agency cost worse?'
},

{
  id:'la011', topic:'W5-Limits', difficulty:'Exam-Standard',
  question:'When should a firm choose debt over equity, and vice versa? Write a synthesising answer that draws on MM (both versions), Trade-Off Theory, Agency Theory, and Pecking Order Theory.',
  markScheme:[
    {pts:2, element:'MM no taxes: irrelevant — any structure works'},
    {pts:2, element:'MM+taxes: debt preferred (tax shield) → pure debt if distress costs zero'},
    {pts:2, element:'Trade-Off adds: optimal D* where marginal shield = marginal distress cost'},
    {pts:2, element:'Agency costs add: growth firms/intangibles → less debt; mature/tangible → more'},
    {pts:2, element:'Pecking Order: internal first, then debt, equity last — no single optimal D/E'},
    {pts:2, element:'Synthesis: real-world capital structure reflects all four, industry-specific'}
  ],
  modelAnswer:`<b>Perfect World (MM no taxes):</b> Capital structure is irrelevant. V_L = V_U. Choose either.

<b>Adding Corporate Taxes (MM+taxes):</b> Debt is preferred — interest is tax-deductible, dividends are not. V_L = V_U + t×D. Pure debt is optimal (unrealistic).

<b>Adding Distress Costs (Trade-Off):</b> Optimal interior D* exists. Use debt if:
• Assets are tangible (good collateral, value preserved in distress)
• Cash flows are stable and predictable
• Tax rate is high (larger shield)

Use less debt if:
• Assets are intangible (IP, brands, human capital — lose value rapidly in distress)
• Cash flows are volatile (high probability of distress)
• Sector faces large indirect distress costs (aircraft, defence where customer confidence is vital)

<b>Adding Agency Costs:</b>
Use less debt if: growth firm with positive-NPV projects (debt overhang prevents them)
Use more debt if: mature firm with free cash flow problem (Jensen: debt disciplines management)

<b>Adding Information Asymmetry (Pecking Order):</b>
Prefer internal funds → then debt → equity last.
Good firms avoid equity (cheap equity signals overvaluation).
Profitable firms use less external capital of all types.

<b>Synthesis:</b>
In practice: a mature, cash-generative, tangible-asset firm (e.g. utility, real estate) → high leverage appropriate (tax shield, tangible collateral, low distress costs, discipline benefit).
A high-growth technology firm → low leverage appropriate (intangible assets, high distress costs, debt overhang would hamper investment).`,
  whyPrompt:'How would you advise a firm that has been all-equity for 10 years and is now generating large free cash flows in excess of positive-NPV investment opportunities?'
},

{
  id:'la012', topic:'W5-Limits', difficulty:'Exam-Standard',
  question:'Explain why β_L > β_U for the same firm. Derive the relationship between levered and unlevered beta. When is the difference largest?',
  markScheme:[
    {pts:2, element:'Intuition: equity is residual claim on all variability; leverage amplifies systematic risk'},
    {pts:3, element:'Derivation: β_U = (E/V)×β_L + (D/V)×β_D; rearrangement to β_L = β_U×(1+D/E)−β_D×(D/E)'},
    {pts:2, element:'Special case: β_D=0 → β_L = β_U×(1+D/E)'},
    {pts:3, element:'Numerical example showing amplification at high leverage'}
  ],
  modelAnswer:`<b>Intuition:</b>
The firm's total market risk (β_U) is shared between debt and equity holders. Equity is the residual claim — it bears ALL the variability in firm value, but equity holders own only a fraction (E/V < 1) of the total firm. On a proportional basis, equity holders' risk per unit of investment is amplified by leverage.

Analogy: if firm value fluctuates by ±10% and D/E=1 (50% each), equity fluctuates by ±20% (E bears all variability on half the base).

<b>Derivation:</b>
Total firm risk = weighted average of debt and equity risks:
β_U = (E/V) × β_L + (D/V) × β_D

Rearranging: <b>β_L = [β_U − (D/V)×β_D] / (E/V) = β_U×(V/E) − β_D×(D/E)</b>
           = β_U × (1+D/E) − β_D × (D/E)

If β_D = 0 (investment-grade, risk-free debt): <b>β_L = β_U × (1 + D/E)</b>

<b>Numerical example (β_U = 0.80):</b>
D/E = 0:   β_L = 0.80 (all-equity baseline)
D/E = 0.5: β_L = 0.80 × 1.5 = 1.20
D/E = 2.0: β_L = 0.80 × 3.0 = 2.40
D/E = 4.0: β_L = 0.80 × 5.0 = 4.00

<b>Difference largest when:</b>
• D/E is high (highly leveraged firm)
• β_D is low (safe debt — more of the firm's risk falls to equity)
• β_U itself is high (amplification of an already high base risk)`,
  whyPrompt:'Why must you unlever a comparable firm\'s β_L before re-levering at your own D/E when estimating WACC? What specific error would result from using the comparable\'s β_L directly?'
},

{
  id:'la013', topic:'W3-Rules', difficulty:'Applied',
  question:'Compare the Payback Period and NPV methods. Under what circumstances might a rational manager prefer Payback despite its theoretical flaws?',
  markScheme:[
    {pts:2, element:'Payback: simple calculation; ignores TVM; ignores post-payback CFs; arbitrary cutoff'},
    {pts:2, element:'NPV: theoretically correct; measures value; reinvests at r; no pathological cases'},
    {pts:3, element:'Rational use of Payback: expropriation risk, illiquid capital markets, high macro uncertainty (Mozambique research)'},
    {pts:3, element:'Discussion of when speed of capital recovery matters more than precise value maximisation'}
  ],
  modelAnswer:`<b>NPV — The Theoretically Correct Method:</b>
NPV = Σ CF_t/(1+r)^t − Investment
Captures time value of money, uses all cash flows, reinvests at cost of capital (realistic), directly measures value added. No ambiguity.

<b>Payback Period — Intuitive but Flawed:</b>
Simple accumulation: how many years until cumulative CF ≥ Investment?
Flaws: (1) ignores time value of money; (2) ignores all cash flows after the cutoff; (3) arbitrary cutoff (2 years? 3 years?).

Example showing flaw: Project A payback=2yr (£100, £50, £60, then £0/yr). Project B payback=2yr (£100, £50, £60, then £500/yr). Payback says equivalent. NPV clearly prefers B.

<b>When Payback is Rational:</b>
Custodio's research on Mozambican CFOs: >90% use payback. Rational because:

1. <b>Expropriation risk:</b> Government may nationalise assets or change property rights. A manager needs capital back before this happens — long-horizon payoffs are unreliable.

2. <b>Illiquid/underdeveloped capital markets:</b> If you cannot borrow more, quick capital recovery enables reinvestment in the next project.

3. <b>Macro uncertainty:</b> Discount rates in emerging markets are volatile. NPV calculations sensitive to rate assumptions may be less meaningful than a simple "do I get my money back in 3 years?" heuristic.

4. <b>Agency/audit simplicity:</b> Payback is auditable and easy to explain to non-financial managers.

<b>Conclusion:</b> Payback is a liquidity and risk metric, not a value metric. It answers "how quickly do I recover capital?" not "does this create value?" In stable, low-risk environments, NPV is superior. In high-uncertainty, capital-constrained, politically risky environments, payback may be the more relevant criterion.`,
  whyPrompt:'Could you design a capital budgeting rule that captures both the NPV\'s value accuracy and Payback\'s capital recovery speed? What would such a rule look like?'
},

{
  id:'la014', topic:'W3-CashFlows', difficulty:'Applied',
  question:'What is the depreciation tax shield, and why does it increase NPV? Why does accelerated depreciation increase NPV more than straight-line, all else equal?',
  markScheme:[
    {pts:2, element:'Definition: Dep × t = cash saving from reduced tax; non-cash charge reduces taxable income'},
    {pts:2, element:'Effect on OCF: OCF = EBIT×(1−t) + Dep = EBITDA×(1−t) + Dep×t'},
    {pts:2, element:'Why accelerated increases NPV: same total shield, but front-loaded → higher PV of savings'},
    {pts:2, element:'Magnitude of effect depends on discount rate and project life'},
    {pts:2, element:'Numerical illustration'}
  ],
  modelAnswer:`<b>What is the Depreciation Tax Shield?</b>
Depreciation is a non-cash accounting expense. It reduces taxable income, thereby reducing taxes paid — a real cash saving.

Annual Tax Shield = Depreciation × tax rate

Example: Dep = £50,000/yr, t = 30%:
Tax Shield = £15,000/yr → real additional cash flow to the firm each year.

<b>Effect on OCF:</b>
OCF = EBIT×(1−t) + Depreciation = Revenue−Cost−Dep)×(1−t) + Dep
    = (Revenue−Cost)×(1−t) + Dep×t

The Dep×t term is the explicit depreciation tax shield. Higher depreciation → higher OCF.

<b>Why Accelerated Depreciation Increases NPV More:</b>
Total depreciation over asset life is fixed at the purchase cost. Total tax shield is the same regardless of depreciation method.

However, NPV cares about TIMING. Accelerated depreciation front-loads the deductions:
• Year 1: higher depreciation → larger tax shield → more cash today
• Year 5: lower depreciation → smaller shield → less cash later

PV of early cash flows > PV of late cash flows. Therefore, front-loading the shield via accelerated depreciation produces a higher NPV.

Numerical example: £100k asset, t=30%, r=10%
Straight-line (£20k/yr): PV of shields = 6k × AF(10%,5) = 6k × 3.791 = £22,746
Accelerated (Year 1: £40k, Year 2: £30k, Year 3: £20k, Year 4: £7k, Year 5: £3k):
Total shields same (£30k) but PV = 12k/1.1 + 9k/1.21 + 6k/1.331 + 2.1k/1.464 + 0.9k/1.611 ≈ £24,900 > £22,746`,
  whyPrompt:'As the discount rate approaches zero, does the advantage of accelerated depreciation disappear? What does this tell you about when it matters most in practice?'
},

{
  id:'la015', topic:'W2-Bonds', difficulty:'Applied',
  question:'Explain the difference between spot rates and forward rates. How are forward rates derived from spot rates? What do they tell us about expectations?',
  markScheme:[
    {pts:2, element:'Spot rates: agreed today, investment starts now, matures at T'},
    {pts:2, element:'Forward rates: agreed today, investment starts in future'},
    {pts:2, element:'No-arbitrage derivation: (1+s_{T+N})^{T+N} = (1+s_T)^T × (1+f)^N'},
    {pts:2, element:'Worked numerical example'},
    {pts:2, element:'What they tell us: ET says f = expected future spot rates; LPT adds premium'}
  ],
  modelAnswer:`<b>Spot Rates:</b>
A spot rate s_T is the rate agreed today for an investment starting now and maturing at time T. Observed directly from zero-coupon government bond prices: s_T = (F/P)^(1/T) − 1.

<b>Forward Rates:</b>
A forward rate f_{T,T+N} is agreed today for an investment starting at time T and maturing at T+N — locked in now, but the cash is not deployed until T. Used in derivatives, FRAs (Forward Rate Agreements).

<b>No-Arbitrage Derivation:</b>
Two strategies must deliver the same return to prevent arbitrage:
1. Invest for T+N years at spot rate s_{T+N}: grows to (1+s_{T+N})^{T+N}
2. Invest for T years at s_T, then reinvest for N years at f_{T,T+N}: grows to (1+s_T)^T × (1+f)^N

No arbitrage: (1+s_{T+N})^{T+N} = (1+s_T)^T × (1+f_{T,T+N})^N

Solving: f_{T,T+N} = [(1+s_{T+N})^{T+N} / (1+s_T)^T]^(1/N) − 1

<b>Worked example (s₁=3%, s₂=4%, s₃=5%):</b>
f₁₂ = (1.04)²/(1.03) − 1 = 5.01%
f₂₃ = (1.05)³/(1.04)² − 1 = 7.03%
f₁₃ = [(1.05)³/(1.03)]^0.5 − 1 = 6.02%

<b>What forward rates tell us:</b>
Under Expectations Theory: f_{T,T+N} = E[s_{T,T+N}] — the market's forecast of future short rates.
Under Liquidity Premium Theory: f_{T,T+N} = E[s_{T,T+N}] + premium — overstates expected future rates.
Implication: you cannot read forward rates as pure forecasts of future spot rates without knowing the term premium.`,
  whyPrompt:'A fixed-income investor observes that the 2-year forward rate 1-year ahead is 7%. Should she take this as a forecast of where 1-year rates will be in one year? What additional information would she need?'
},

{
  id:'la016', topic:'W4-Risk', difficulty:'Applied',
  question:'Explain portfolio diversification. Why can some risk be diversified away but not all? What are the implications for pricing risky assets?',
  markScheme:[
    {pts:2, element:'Portfolio variance formula: includes covariance terms — diversification benefit'},
    {pts:2, element:'Diversifiable (idiosyncratic) vs. non-diversifiable (systematic) risk distinction'},
    {pts:2, element:'As n → ∞, Var_p → average covariance (not zero)'},
    {pts:2, element:'Pricing implication: only systematic risk priced; idiosyncratic risk earns no premium'},
    {pts:2, element:'Empirical example (airlines + oil) or numerical illustration'}
  ],
  modelAnswer:`<b>Portfolio Variance and Diversification:</b>
For a two-asset portfolio: Var(R_p) = x₁²σ₁² + x₂²σ₂² + 2x₁x₂Cov(R₁,R₂)

When Corr < +1, the covariance term is smaller than in the perfect-correlation case, so Var(R_p) < (weighted average σ)². This is the diversification benefit.

<b>What Diversifies Away?</b>
Idiosyncratic (firm-specific) risk: CEO fraud, product recall, worker strike — affects one firm while others are unaffected. In a large portfolio, half the idiosyncratic shocks are positive and half negative → they cancel out.

What CANNOT be diversified: Systematic (market) risk — recessions, interest rate changes, geopolitical crises — affect all firms simultaneously. No matter how many stocks you hold, if the market falls 20%, a diversified portfolio also falls approximately 20%.

<b>Mathematical Floor:</b>
Var(equally-weighted portfolio) = (1/n)×avg(σ²) + (1−1/n)×avg(Cov)
As n→∞: Var_p → avg(Cov) > 0 (irreducible market risk)

<b>Pricing Implication (Foundation of CAPM):</b>
Rational investors hold diversified portfolios → they bear NO idiosyncratic risk. Idiosyncratic risk is free to eliminate. Only systematic risk (β) is inescapable → only β commands a return premium.

CAPM: E[R_i] = R_f + β_i × MRP — required return depends only on β, NOT on total σ.

<b>Example:</b> Campbell Soup (σ=26%, β=0.536): high total risk but low systematic risk → required return only 7.2%, not 12%+ which σ alone might suggest.`,
  whyPrompt:'If idiosyncratic risk is "free" to eliminate through diversification, why do we observe so many undiversified investors (e.g. founders holding concentrated positions)? Does this affect pricing?'
},

{
  id:'la017', topic:'W2-Stocks', difficulty:'Applied',
  question:'Explain the NPVGO model. What determines whether a firm\'s stock price is dominated by its earnings power vs. its growth opportunities? Use Apple as an example.',
  markScheme:[
    {pts:2, element:'P₀ = EPS/R + NPVGO: cash cow value + value of future investment opportunities'},
    {pts:2, element:'NPVGO > 0 iff ROE > R; ROE < R → growth destroys value'},
    {pts:2, element:'Apple: $250 price, $74.70 cash cow, $175.30 NPVGO (≈70% growth)'},
    {pts:2, element:'Implication for P/E: high P/E reflects high NPVGO, not necessarily overvaluation'},
    {pts:2, element:'Implied g ≈ 9.6% — discussion of sustainability concern'}
  ],
  modelAnswer:`<b>The NPVGO Model:</b>
P₀ = EPS/R + NPVGO

• EPS/R = "cash cow" value: what the firm is worth if it pays out ALL earnings forever, never reinvesting (zero growth).
• NPVGO = present value of all future opportunities to invest at ROE > R.

<b>When is NPVGO positive?</b>
NPVGO > 0 iff ROE > R (cost of equity)
Each £ reinvested earns ROE% but costs R% → creates value.
If ROE < R: retention destroys value → better to pay out → NPVGO < 0 or zero.

<b>Apple Example (P₀=$250, EPS=$7.47, R=10%):</b>
Cash cow = 7.47/0.10 = $74.70 (what Apple is worth if it stops growing)
NPVGO = 250 − 74.70 = $175.30 (≈70% of Apple's market cap is pure growth expectation)

This means: only 30% of Apple's value reflects current earning power; 70% reflects markets' belief in extraordinary future reinvestment opportunities.

<b>Implied growth rate:</b>
R = D₁/P₀ + g → g = R − D₁/P₀ = 10% − 1.04/250 ≈ 9.6%
A perpetual growth rate of 9.6% is extremely high (well above GDP growth) — implies investors expect exceptional performance far into the future.

<b>Implication for P/E:</b>
P/E = 250/7.47 ≈ 33×. High P/E doesn't mean overvaluation — it means the market values future growth highly. If Apple's ROE remains > R for decades, the high price is justified.`,
  whyPrompt:'What are the risks of relying on a high NPVGO valuation? What happens to Apple\'s stock price if its ROE falls toward the required return R?'
},

{
  id:'la018', topic:'W3-CashFlows', difficulty:'Foundational',
  question:'What are the six rules for estimating project cash flows? For each rule, give a specific example of how violating it leads to an incorrect NPV decision.',
  markScheme:[
    {pts:1, element:'Rule 1: cash flows not accounting — example of adding back depreciation'},
    {pts:1, element:'Rule 2: sunk costs irrelevant — example with prior spending'},
    {pts:1, element:'Rule 3: opportunity costs — example with owned asset'},
    {pts:1, element:'Rule 4: incremental only — example with allocated overhead'},
    {pts:1, element:'Rule 5: side effects — example of cannibalism'},
    {pts:1, element:'Rule 6: after-tax — example with pre-tax error'},
    {pts:4, element:'Quality of examples and explanation of NPV distortion for each'}
  ],
  modelAnswer:`<b>Rule 1 — Cash flows, not accounting earnings:</b>
Error: using net income without adding back depreciation. Violation: understates OCF because depreciation is non-cash. OCF = EBIT×(1−t) + Dep. Adding back £20k dep adds £20k/yr to FCF.

<b>Rule 2 — Sunk costs are irrelevant:</b>
Error: including £250k prior test marketing cost in CAPEX. Violation: the NPV is reduced by £250k — but this money is already gone regardless. The true incremental cost is only future expenditure.

<b>Rule 3 — Opportunity costs must be included:</b>
Error: assuming company-owned warehouse is "free" (no cash payment). Violation: NPV is overstated by the PV of foregone £50k/yr rental income. The warehouse has a real cost — its best alternative use.

<b>Rule 4 — Incremental cash flows only:</b>
Error: allocating head office overhead (£30k/yr fixed cost) to the project. Violation: if this overhead exists regardless of the project, including it understates incremental profit. Only costs that genuinely change should be included.

<b>Rule 5 — Side effects and externalities:</b>
Error: ignoring cannibalism. New chocolate product steals £20k/yr from existing product line. Violation: NPV of new product is overstated by PV(£20k/yr) — the full impact on the firm is not reflected.

<b>Rule 6 — All cash flows are after-tax:</b>
Error: using pre-tax revenues and costs. Violation: NPV is overstated if tax payments are ignored. Every cash flow should be stated as its after-tax equivalent — a £100k revenue generates only £70k cash with t=30%.`,
  whyPrompt:'Which of the six rules is most frequently violated in practice? Why does that particular rule tend to trip up analysts more than the others?'
},

{
  id:'la019', topic:'W3-Rules', difficulty:'Applied',
  question:'Explain the EAC (Equivalent Annual Cost) method. When should you use it and when does it give incorrect answers? Work through an example with Machine A (10-yr life) and Machine B (5-yr life).',
  markScheme:[
    {pts:2, element:'EAC definition: annualised NPV; EAC = NPV/AF(r,T)'},
    {pts:2, element:'When to use: unequal project lives; projects are repeatable'},
    {pts:3, element:'Worked example: EAC(A)=−$751, EAC(B)=−$764; choose A'},
    {pts:3, element:'When it fails: non-repeatable projects; changing technology; demand shifts'}
  ],
  modelAnswer:`<b>What is EAC?</b>
EAC converts a project's total NPV into a single equivalent annual cost (or benefit):
EAC = NPV / Annuity Factor(r, T)
where AF = (1/r) × [1 − 1/(1+r)^T]

Choose the project with the LOWER (less negative) EAC = lower annual equivalent cost.

<b>Why use EAC for unequal lives?</b>
If Machine A lasts 10 years and Machine B lasts 5 years, NPV comparison is unfair — you'd replace B twice in 10 years. EAC converts both to an annual cost, implicitly assuming infinite replacement chain.

<b>Worked Example:</b>
Machine A: purchase $4,000, operating cost $100/yr, 10 years, r=10%
NPV(A) = −4,000 − 100/0.10×[1−1/(1.10)^10] = −4,000 − 614 = −$4,614
EAC(A) = −4,614 / 6.1446 = <b>−$751/yr</b>

Machine B: purchase $1,000, operating cost $500/yr, 5 years, r=10%
NPV(B) = −1,000 − 500/0.10×[1−1/(1.10)^5] = −1,000 − 1,895 = −$2,895
EAC(B) = −2,895 / 3.7908 = <b>−$764/yr</b>

<b>Decision:</b> EAC(A)=−$751 > EAC(B)=−$764 → choose A ✓

<b>When EAC fails:</b>
1. Projects are not repeatable (technology will be obsolete)
2. Demand is expected to end before the longer project finishes
3. Projects differ in quality/output (compare like-for-like)
4. Replacement cost will change over time (inflation, technological improvement)
In these cases: use explicit NPV with an appropriate planning horizon and realistic terminal value.`,
  whyPrompt:'If a newer, better machine will be available in 5 years, why might choosing Machine B (5-yr life) be correct even though its EAC is higher? How would you incorporate this into the analysis?'
},

{
  id:'la020', topic:'W4-CAPM', difficulty:'Exam-Standard',
  question:'Explain the 5-step procedure for estimating WACC when a project has different business risk from the firm\'s existing operations. Work through the numerical example in detail.',
  markScheme:[
    {pts:1, element:'Step 1: find β_D of industry comparables using CAPM'},
    {pts:1, element:'Step 2: unlever β_L to get β_U (pure business risk of comparable)'},
    {pts:1, element:'Step 3: find β_D of project using project\'s own debt cost'},
    {pts:1, element:'Step 4: re-lever β_U at project\'s target D/E'},
    {pts:1, element:'Step 5: apply CAPM to get r_E, then compute WACC'},
    {pts:3, element:'Numerical example with correct arithmetic: β_U=1.125, β_L=1.4375, r_E=17.5%, WACC=13.83%'},
    {pts:2, element:'Explanation of why this is necessary (comparable\'s β_L embeds wrong financial structure)'}
  ],
  modelAnswer:`<b>Why 5 Steps Are Needed:</b>
If you use a comparable company's β_L directly, you import both their business risk AND their financial structure. Since your project may have different D/E, you need to separate them: first extract pure business risk (unlever), then add your own financial risk (re-lever).

<b>Numerical Example:</b>
Industry data: β_L=1.5, r_D(industry)=9%, D/E(industry)=0.5
Project data: r_D(project)=10%, D/E(project)=0.5, R_f=6%, MRP=8%, t=40%

<b>Step 1:</b> β_D(industry) = (r_D − R_f) / MRP = (9%−6%) / 8% = 0.375

<b>Step 2:</b> β_U = (E/V)×β_L + (D/V)×β_D = (1/1.5)×1.5 + (0.5/1.5)×0.375 = 1.0 + 0.125 = 1.125

<b>Step 3:</b> β_D(project) = (10%−6%) / 8% = 0.50

<b>Step 4:</b> β_L(project) = β_U×(1+D/E) − β_D×(D/E) = 1.125×1.5 − 0.50×0.5 = 1.6875 − 0.25 = 1.4375

<b>Step 5:</b> r_E = 6% + 1.4375×8% = 6% + 11.5% = 17.5%
E/V = 1/1.5 = 0.667; D/V = 0.5/1.5 = 0.333
WACC = 0.667×17.5% + 0.333×10%×0.60 = 11.67% + 2.00% = <b>13.83%</b>

This is higher than the firm's existing WACC (≈11.5%) because the project involves greater business risk.`,
  whyPrompt:'What error would you make if you simply used the industry β_L=1.5 directly in CAPM without any adjustment? In what direction would your WACC be biased?'
},

{
  id:'la021', topic:'W1-TVM', difficulty:'Applied',
  question:'A firm must choose between three investments. Investment A: £1,000 today. Investment B: £900 in 2 years. Investment C: £800 in 1 year + £250 in 3 years. At r=8%, which is best? Show all steps.',
  markScheme:[
    {pts:2, element:'PV of A = £1,000 (already at t=0)'},
    {pts:2, element:'PV of B = 900/(1.08)² = £771.60'},
    {pts:2, element:'PV of C = 800/1.08 + 250/1.08³ = £741 + £198.45 = £939.45'},
    {pts:2, element:'Correct ranking: A > C > B; choose A (highest cost, but if these are costs/outflows, choose B)'},
    {pts:2, element:'Discussion: if costs, choose B; if benefits/investments, choose A'}
  ],
  modelAnswer:`<b>All amounts must be compared at the same point in time — convert everything to PV at t=0:</b>

PV(A) = £1,000 (already at t=0; no discounting needed)

PV(B) = £900 / (1.08)² = £900 / 1.1664 = <b>£771.60</b>

PV(C) = £800 / (1.08)¹ + £250 / (1.08)³
      = £800 / 1.08 + £250 / 1.2597
      = £740.74 + £198.45 = <b>£939.19</b>

<b>Ranking by PV:</b> A (£1,000) > C (£939) > B (£772)

<b>Interpretation depends on context:</b>
• If these are COSTS (outflows): choose B — pays least in present value terms. Deferring payment is valuable.
• If these are BENEFITS (inflows): choose A — receives most value today.

<b>Key lesson:</b> Direct comparison of nominal amounts (£1,000 vs £900 vs £800+£250) is misleading. Only after discounting to a common date can amounts be legitimately compared. The time value of money makes £900 in 2 years worth only £772 today at 8%.`,
  whyPrompt:'As r increases, which investment\'s PV falls most rapidly, and why? What does this tell you about the relationship between discount rate and the value of deferred cash flows?'
},

{
  id:'la022', topic:'W4-Risk', difficulty:'Applied',
  question:'Explain the efficient frontier concept. Why is 100% Coca-Cola potentially inefficient when Intel is available? What happens to the frontier when you add a risk-free asset?',
  markScheme:[
    {pts:2, element:'Efficient portfolio: max E[R] for given σ, or min σ for given E[R]'},
    {pts:2, element:'Coke alone dominated: 20% Intel + 80% Coke has higher return AND lower σ'},
    {pts:2, element:'Diversification benefit from combining assets with Corr < 1'},
    {pts:2, element:'Adding risk-free asset: straight line from R_f tangent to frontier = CML'},
    {pts:2, element:'All investors hold T + some R_f (long or short) = CAPM foundation'}
  ],
  modelAnswer:`<b>Efficient Frontier:</b>
The set of portfolios offering the highest E[R] for each level of σ (or lowest σ for each E[R]). Inefficient portfolios are dominated — there exists another portfolio with either higher return or lower risk (or both).

<b>Why 100% Coca-Cola is Inefficient:</b>
Coca-Cola alone has E[R]=8.5%, σ=20%. Intel has E[R]=26%, σ=50%. By itself, Intel seems much riskier.

However, combining 20% Intel + 80% Coke:
E[R_p] = 0.2×26% + 0.8×8.5% = 5.2% + 6.8% = 12.0% > 8.5% (Coke alone)
And with low enough correlation, σ_p < 20% (Coke alone!)

100% Coke is dominated by this combination on BOTH dimensions → it is inefficient. Adding even a small amount of a higher-return asset can improve risk-return simultaneously through diversification.

<b>Adding the Risk-Free Asset:</b>
With R_f available, the achievable set becomes linear. All combinations of R_f and any risky portfolio T lie on a straight line (Capital Allocation Line):
E[R] = R_f + (E[R_T]−R_f)/σ_T × σ

The optimal line from R_f is the one tangent to the risky frontier — it has the steepest slope (highest Sharpe Ratio). The tangency portfolio T is the unique efficient risky portfolio.

<b>Implication (CAPM):</b> All rational investors hold T + some R_f. With homogeneous expectations, T = Market Portfolio. This is the foundation of CAPM.`,
  whyPrompt:'If the efficient frontier already represents all "best" portfolios, why does adding the risk-free asset improve achievable risk-return combinations? What would happen if no risk-free asset existed?'
}

,{
  id:'la023',
  topic:'W5-MM',
  difficulty:'Exam-Standard',
  question:'Derive MM Proposition II with corporate taxes. Show how the expression for levered equity cost r_E = r_0 + (r_0 − r_D)(D/E)(1 − T_c) differs from the no-tax version. What does this imply for WACC as leverage increases?',
  markScheme:[
    {pts:3,element:'State MM Prop II no-tax: r_E = r_0 + (r_0 − r_D)×(D/E); WACC constant at r_0'},
    {pts:4,element:'Derive with taxes: total firm value V_L = V_U + T_c×D; WACC = r_0×(1 − T_c×D/V_L); falls as leverage rises'},
    {pts:3,element:'r_E with taxes: r_E = r_0 + (r_0 − r_D)×(D/E)×(1 − T_c); slope flatter than no-tax'},
    {pts:3,element:'Explain why WACC falls: tax shield worth T_c×r_D×D per year, capitalised at r_D = T_c×D saving; net cost of debt is r_D×(1−T_c)'},
    {pts:2,element:'Limitation: more debt raises r_D and r_E (financial distress); WACC eventually rises → optimal leverage exists'}
  ],
  modelAnswer:`<b>MM Prop II No-Tax (Baseline):</b>
With no taxes, V_L = V_U, and WACC = r_0 regardless of leverage:
r_E = r_0 + (r_0 − r_D) × D/E

As D/E rises, r_E rises linearly to offset the cheaper debt — WACC stays constant.

<b>With Corporate Taxes:</b>
Debt generates an annual tax shield = T_c × r_D × D.
Capitalised (assuming perpetuity): PV(tax shield) = T_c × D.
∴ V_L = V_U + T_c × D → firm value rises with leverage.

WACC now equals:
WACC = r_0 × (1 − T_c × D/V_L)

This falls as D/V_L rises. The formula for levered equity cost becomes:
r_E = r_0 + (r_0 − r_D) × (D/E) × (1 − T_c)

The slope of r_E vs D/E is (r_0 − r_D)(1 − T_c) — <b>flatter</b> than the no-tax slope (r_0 − r_D).

<b>Why the Difference?</b>
In the no-tax world, equity bears all extra risk from leverage. With taxes, part of the leverage benefit accrues to the government (via the tax shield reducing net cost), so equity holders face less incremental risk per unit of D/E.

<b>WACC Implication:</b>
Because the after-tax cost of debt = r_D × (1 − T_c), adding cheap debt (net of tax) reduces WACC. Under MM with taxes only, WACC → 0 at 100% debt — firms should borrow as much as possible. But this ignores financial distress costs, which eventually raise r_D and r_E, causing WACC to bottom out at an interior optimum.`,
  whyPrompt:'Why does the tax shield discount rate matter? Some argue PV(tax shield) should be discounted at r_0 (not r_D) if leverage is rebalanced. How would this change the formula?'
},
{
  id:'la024',
  topic:'W2-Bonds',
  difficulty:'Applied',
  question:'A 5-year bond has face value £1,000, coupon rate 6% (annual), and is currently priced at £950. Calculate the YTM. Then explain: if market yields rise to 8%, what happens to the bond price? Quantify it.',
  markScheme:[
    {pts:3,element:'YTM setup: 950 = 60/[1+y] + 60/[1+y]² + ... + 1060/[1+y]⁵; solve iteratively ≈ 7.13%'},
    {pts:2,element:'Inverse relationship: yields rise → prices fall; intuition via discounting'},
    {pts:4,element:'Price at 8%: P = Σ 60/(1.08)^t + 1000/(1.08)^5 = 239.71 + 680.58 = £920.15 (or close)'},
    {pts:2,element:'Percentage change: (920.15−950)/950 ≈ −3.1%; confirms duration-based approximation'},
    {pts:2,element:'Mention duration/convexity: longer maturity/lower coupon → greater price sensitivity'}
  ],
  modelAnswer:`<b>YTM Calculation:</b>
The bond pays £60 annual coupon + £1,000 at maturity (year 5). Current price = £950.

Set up: 950 = Σ_{t=1}^{5} 60/(1+y)^t + 1000/(1+y)^5

Trial y = 7%: PV = 60×4.100 + 1000/1.403 = 246.0 + 712.9 = £958.9 (too high)
Trial y = 7.5%: PV = 60×4.045 + 1000/1.436 = 242.7 + 696.6 = £939.3 (too low)

Interpolating: y ≈ 7% + 0.5%×(958.9−950)/(958.9−939.3) = 7% + 0.5%×0.454 = <b>7.23%</b>

<b>Price at 8% Yield:</b>
P = 60×(1−1/1.08⁵)/0.08 + 1000/1.08⁵
= 60×3.993 + 1000/1.469
= 239.6 + 680.6
= <b>£920.2</b>

Change: (920.2 − 950)/950 = <b>−3.1%</b>

<b>Intuition:</b>
When yields rise above the coupon rate, investors demand compensation by paying less. The bond's fixed cash flows become less valuable relative to new bonds offering 8%.

<b>Duration:</b>
Approximate price change ≈ −Duration × Δy/(1+y).
Modified duration ≈ 4.2 years → ΔP ≈ −4.2 × 0.0077 × 950 ≈ −£30.7 ≈ −3.2%. Close to actual change, with the small residual due to convexity.`,
  whyPrompt:'A zero-coupon bond of equal maturity would fall by more in price than this coupon bond when yields rise. Why? What does this reveal about the relationship between coupon rate and interest rate sensitivity?'
},
{
  id:'la025',
  topic:'W4-Risk',
  difficulty:'Applied',
  question:'Stock A has expected return 12%, standard deviation 20%. Stock B has expected return 8%, standard deviation 15%. The correlation between A and B is 0.3. Calculate the expected return and standard deviation of a portfolio with 60% in A and 40% in B. Explain what would change if correlation were −1.',
  markScheme:[
    {pts:2,element:'E[R_p] = 0.6×12% + 0.4×8% = 10.4%'},
    {pts:5,element:'σ_p² = (0.6)²(0.20)² + (0.4)²(0.15)² + 2(0.6)(0.4)(0.20)(0.15)(0.3) = 0.0144+0.0036+0.00432 = 0.02232; σ_p = 14.94%'},
    {pts:2,element:'Compare to weighted average σ: 0.6×20+0.4×15 = 18% → diversification reduces risk by 3ppts'},
    {pts:3,element:'ρ=−1: minimum variance portfolio has σ_p=0 at some weight; show w_A = σ_B/(σ_A+σ_B) = 15/35 = 42.9%'},
    {pts:3,element:'Explain: perfect negative correlation → all risk cancellable; maximum diversification benefit'}
  ],
  modelAnswer:`<b>Expected Return:</b>
E[R_p] = w_A × E[R_A] + w_B × E[R_B]
= 0.6 × 12% + 0.4 × 8%
= 7.2% + 3.2% = <b>10.4%</b>

<b>Portfolio Variance:</b>
σ_p² = w_A²σ_A² + w_B²σ_B² + 2w_Aw_Bσ_Aσ_Bρ_{AB}
= (0.6)²(0.20)² + (0.4)²(0.15)² + 2(0.6)(0.4)(0.20)(0.15)(0.3)
= 0.36×0.04 + 0.16×0.0225 + 2×0.24×0.03×0.3
= 0.0144 + 0.0036 + 0.00432
= <b>0.02232</b>

σ_p = √0.02232 = <b>14.94%</b>

<b>Diversification Benefit:</b>
Weighted average σ = 0.6×20% + 0.4×15% = 18%
Portfolio σ = 14.94% → reduced by 3.06 ppts purely from diversification (ρ < 1).

<b>If ρ = −1:</b>
σ_p² = (w_A σ_A − w_B σ_B)² (simplifying with ρ=−1)
Setting σ_p = 0: w_A σ_A = w_B σ_B = (1−w_A) σ_B
w_A = σ_B/(σ_A + σ_B) = 15%/(20%+15%) = 15/35 = <b>42.9%</b>

At this weight, σ_p = 0 — a riskless portfolio from two risky assets!
E[R_p] = 0.429×12% + 0.571×8% = 5.14%+4.57% = 9.71%

This would dominate the risk-free rate in many markets, illustrating why perfect negative correlation (if it existed) would eliminate all risk.`,
  whyPrompt:'If you can already construct a zero-variance portfolio from two risky assets when ρ=−1, does CAPM still hold? Does beta still measure the relevant risk?'
},
{
  id:'la026',
  topic:'W2-Stocks',
  difficulty:'Applied',
  question:'A firm currently pays a dividend of £2.00. Dividends are expected to grow at 15% for 3 years, then settle to 4% forever. The required return is 12%. Calculate the intrinsic value of the stock using the differential growth DDM, being precise about timing.',
  markScheme:[
    {pts:2,element:'Identify: g1=15% for years 1–3; g2=4% forever from year 4 onwards'},
    {pts:3,element:'Calculate D1=2.30, D2=2.645, D3=3.042 (all correctly timed: divide by (1.12)^1 etc.)'},
    {pts:3,element:'Terminal value at END of year 3: TV3 = D4/(r−g2) = D3×1.04/(0.12−0.04) = 3.042×1.04/0.08 = 39.55'},
    {pts:3,element:'PV of dividends: PV(D1)+PV(D2)+PV(D3) = 2.054+2.108+2.164 = 6.33'},
    {pts:2,element:'PV of TV: 39.55/1.12³ = 28.15; Total P0 = 6.33+28.15 = £34.48'},
    {pts:2,element:'Common error discussion: using D3 instead of D4 in TV formula; or not dividing TV by (1.12)^3'}
  ],
  modelAnswer:`<b>Phase 1 — High-Growth Dividends (Years 1–3):</b>
D0 = £2.00 (just paid)
D1 = 2.00 × 1.15 = £2.300
D2 = 2.30 × 1.15 = £2.645
D3 = 2.645 × 1.15 = £3.042

<b>Phase 2 — Terminal Value at End of Year 3:</b>
D4 = D3 × 1.04 = 3.042 × 1.04 = £3.164

Gordon Growth Model kicks in from year 4:
TV₃ = D4 / (r − g₂) = 3.164 / (0.12 − 0.04) = 3.164 / 0.08 = <b>£39.55</b>

(TV₃ is the value at the END of year 3 of all dividends from year 4 onwards.)

<b>PV of Phase 1 Cash Flows:</b>
PV(D1) = 2.300/1.12¹ = £2.054
PV(D2) = 2.645/1.12² = £2.108
PV(D3) = 3.042/1.12³ = £2.164
Sum = <b>£6.326</b>

<b>PV of Terminal Value:</b>
PV(TV) = 39.55/1.12³ = 39.55/1.4049 = <b>£28.15</b>

<b>Intrinsic Value:</b>
P₀ = 6.326 + 28.15 = <b>£34.48</b>

<b>Timing Trap:</b>
The Gordon Growth formula TV = D_{t+1}/(r−g) gives a value as of time t (one period before the first constant-growth dividend). Here TV₃ is valued as of t=3, so it must be discounted back 3 periods. Using D3 instead of D4 in the formula under-prices the stock by undervaluing the perpetuity starting point.`,
  whyPrompt:'Why is 80%+ of this stock\'s value coming from the terminal value, not the first three dividends? Does this make DDM reliable or fragile? How sensitive is P₀ to small changes in g₂?'
},
{
  id:'la027',
  topic:'W3-Rules',
  difficulty:'Applied',
  question:'A project costs £500,000 today, generates FCF of £80,000/year for 10 years, and has a salvage value of £50,000 at the end of year 10. WACC = 10%. Calculate NPV and IRR. Perform a simple sensitivity analysis on WACC (±2%). What is the NPV break-even WACC?',
  markScheme:[
    {pts:3,element:'NPV: −500k + 80k×PVIFA(10%,10) + 50k/1.1^10 = −500k+491.6k+19.3k = +£10.9k'},
    {pts:3,element:'IRR: set NPV=0 and solve iteratively; answer ≈ 10.56%'},
    {pts:3,element:'Sensitivity: at 8% → NPV = −500+537.0+23.2 = +£60.2k; at 12% → NPV = −500+452.0+16.1 = −£31.9k'},
    {pts:2,element:'Break-even WACC ≈ 10.56% (= IRR); explain this is the exact definition of IRR'},
    {pts:2,element:'Discuss: small positive NPV at WACC=10% means project barely worth it; sensitive to WACC estimates'}
  ],
  modelAnswer:`<b>Base Case NPV (WACC = 10%):</b>
PVIFA(10%,10) = (1 − 1/1.1^10)/0.10 = (1 − 0.3855)/0.10 = 6.1446
PV(annuity) = 80,000 × 6.1446 = £491,566
PV(salvage) = 50,000/1.1^10 = 50,000/2.5937 = £19,277
NPV = −500,000 + 491,566 + 19,277 = <b>+£10,843</b>

<b>IRR:</b>
At IRR, NPV = 0:
500,000 = 80,000 × PVIFA(r,10) + 50,000/(1+r)^10

Trial r=10%: NPV = +£10,843 (above zero → IRR > 10%)
Trial r=11%: PV = 80,000×5.889 + 50,000/2.839 = 471,100 + 17,610 = 488,710; NPV = −£11,290

Interpolating: IRR ≈ 10% + 1%×(10,843/(10,843+11,290)) = 10% + 0.49% = <b>10.49%</b>

<b>Sensitivity Analysis:</b>

| WACC | PV(Ann.) | PV(Salv.) | NPV |
|------|----------|-----------|-----|
| 8% | 80k×6.710=536,800 | 50k/2.159=23,160 | +£59,960 |
| 10% | 491,566 | 19,277 | +£10,843 |
| 12% | 80k×5.650=452,000 | 50k/3.106=16,100 | −£31,900 |

NPV swings from +£60k to −£32k over a ±2% range — very sensitive given the thin base-case margin.

<b>Break-Even WACC:</b>
This is exactly the IRR ≈ 10.49%. The IRR is defined as the discount rate at which NPV = 0.

<b>Managerial Implication:</b>
With WACC of 10% and IRR of 10.49%, there is only a 0.49% margin of safety. Any upward revision to the cost of capital (e.g., market conditions tighten) would flip the project to negative NPV. Management should revisit whether WACC is correctly estimated and consider downside scenarios before committing.`,
  whyPrompt:'If the IRR and NPV break-even WACC are the same thing by definition, why do analysts sometimes present both? What additional information does knowing the IRR margin (IRR − WACC) convey beyond the NPV alone?'
},
{
  id:'la028',
  topic:'W3-CashFlows',
  difficulty:'Exam-Standard',
  question:'Explain what "cash conversion cycle" (CCC) means and why it matters for firm value. A firm has: inventory days = 45, receivables days = 30, payables days = 20. What is the CCC? If the firm reduces inventory days to 35 by improving supply chain, and daily COGS is £10,000, estimate the cash released.',
  markScheme:[
    {pts:3,element:'CCC = DIO + DSO − DPO = 45+30−20 = 55 days; define each component correctly'},
    {pts:3,element:'Explain: CCC is days of operating cycle financed by firm (not suppliers); shorter CCC frees cash'},
    {pts:2,element:'Cash released = reduction in inventory days × daily COGS = 10 days × £10,000 = £100,000'},
    {pts:3,element:'NPV link: £100k freed = one-off positive cash flow; reduction in NWC = positive FCF in that period'},
    {pts:2,element:'Caveats: shorter inventory may risk stockouts; DPO increase may harm supplier relations'}
  ],
  modelAnswer:`<b>Cash Conversion Cycle:</b>
CCC = Days Inventory Outstanding (DIO) + Days Sales Outstanding (DSO) − Days Payable Outstanding (DPO)

Each component:
- DIO = Average Inventory / (COGS/365): how long goods sit before sold
- DSO = Average Receivables / (Revenue/365): how long before customers pay
- DPO = Average Payables / (COGS/365): how long the firm takes to pay suppliers (free financing)

For this firm:
CCC = 45 + 30 − 20 = <b>55 days</b>

The firm must finance 55 days of operating costs from its own resources (or bank borrowing). DPO reduces this because suppliers effectively lend for 20 days.

<b>Why It Matters for Firm Value:</b>
CCC directly determines NWC. Higher CCC → more NWC required → cash tied up in operations → lower FCF → lower firm value (all else equal).

FCF = EBIT(1−T) − ΔNWC − Net CAPEX
Any reduction in NWC (negative ΔNWC) increases FCF in that period.

<b>Cash Released from Supply Chain Improvement:</b>
Inventory days falls from 45 to 35 → reduction of 10 days
Cash released = 10 × £10,000 = <b>£100,000</b>

This is a one-time cash inflow as inventory unwinds. The new steady-state NWC is £100,000 lower permanently, meaning the firm's ongoing financing needs are reduced.

<b>Caveats:</b>
1. Lower inventory → higher stockout risk (lost sales, customer dissatisfaction)
2. Extending DPO too aggressively → damages supplier relationships, may cause suppliers to raise prices
3. Aggressive DSO reduction (chasing receivables faster) → may lose customers to competitors with more lenient terms
4. Must balance CCC reduction against operating risk`,
  whyPrompt:'If reducing CCC releases cash and improves FCF, why don\'t all firms minimise their CCC as aggressively as possible? What is the optimal CCC?'
},
{
  id:'la029',
  topic:'W4-CAPM',
  difficulty:'Exam-Standard',
  question:'A firm\'s asset beta (β_U) is 0.8. It has £400m debt and £600m equity outstanding; corporate tax rate = 30%. Calculate the equity beta (β_L). The risk-free rate is 3% and market risk premium is 6%. What required return should be used to evaluate a new project in this firm\'s core business?',
  markScheme:[
    {pts:3,element:'Hamada equation: β_L = β_U × [1 + (1−T)×D/E] = 0.8×[1+0.7×(400/600)] = 0.8×1.467 = 1.173'},
    {pts:3,element:'CAPM: r_E = 3% + 1.173×6% = 3% + 7.04% = 10.04%'},
    {pts:3,element:'WACC needed: r_D needed (not given) — explain logic; if r_D=5%: WACC = 0.6×10.04%+0.4×5%×0.7=7.03%'},
    {pts:3,element:'For project in core business: use asset beta / unlevered cost of capital r_0, not levered WACC, if project has different leverage; WACC is firm-level, not project-level unless leverage same'},
    {pts:2,element:'Practical answer: use WACC as approximation; note caveat about divisional betas for diversified firms'}
  ],
  modelAnswer:`<b>Equity Beta (Hamada Equation):</b>
β_L = β_U × [1 + (1 − T_c) × D/E]
= 0.8 × [1 + (1 − 0.30) × (400/600)]
= 0.8 × [1 + 0.70 × 0.667]
= 0.8 × [1 + 0.467]
= 0.8 × 1.467
= <b>1.173</b>

The equity beta exceeds the asset beta because leverage amplifies equity holders' systematic risk.

<b>Required Return on Equity (CAPM):</b>
r_E = R_f + β_L × (R_m − R_f)
= 3% + 1.173 × 6%
= 3% + 7.04%
= <b>10.04%</b>

<b>Appropriate Discount Rate for New Project:</b>
For a project in the firm's core business (same risk class as existing assets), use the firm's WACC:

WACC = (E/V) × r_E + (D/V) × r_D × (1 − T_c)

With V = 400 + 600 = 1,000m:
- E/V = 0.60, D/V = 0.40

Assuming r_D = 5% (investment-grade):
WACC = 0.60 × 10.04% + 0.40 × 5% × (1 − 0.30)
= 6.02% + 1.40%
= <b>7.42%</b>

<b>Key Caveat:</b>
WACC is the correct hurdle rate only if the new project has the same business risk AND same capital structure as the firm as a whole. For a diversified firm with multiple divisions, each division should use its own divisional beta (estimated from comparable pure-play firms). Using firm WACC for a low-risk division would reject good projects; for a high-risk division, it would accept bad ones.`,
  whyPrompt:'You used the firm\'s overall leverage ratio to lever up beta. But if the new project is financed differently from the firm\'s average — say it\'s funded 70% debt — should you use a different beta or WACC? Walk through the correct procedure.'
},
{
  id:'la030',
  topic:'W3-Rules',
  difficulty:'Applied',
  question:'A firm faces capital rationing with a budget of £1,000,000. Four mutually exclusive projects are available. Explain the correct way to allocate capital and identify any pitfalls with simply picking the highest NPV projects.',
  markScheme:[
    {pts:3,element:'With divisible projects: use Profitability Index (PI = NPV/Investment); rank by PI and allocate budget'},
    {pts:3,element:'With indivisible (all-or-nothing) projects: enumerate all feasible combinations within budget; pick highest total NPV combination'},
    {pts:3,element:'Pitfall of highest NPV: a £900k project with NPV £100k worse than £500k+£400k combo; must consider what leftover cash does'},
    {pts:3,element:'Multi-period rationing: LP formulation; single-period rationing: PI ranking works if projects divisible'},
    {pts:2,element:'Correct example: four projects with NPV/Investment calculated; show PI ranking gives different answer from NPV ranking'}
  ],
  modelAnswer:`Suppose four projects (all-or-nothing, budget = £1,000,000):

| Project | Investment | NPV | PI = NPV/Inv |
|---------|-----------|-----|--------------|
| A | £600k | £180k | 0.300 |
| B | £500k | £140k | 0.280 |
| C | £400k | £100k | 0.250 |
| D | £300k | £72k | 0.240 |

<b>Naïve NPV Ranking:</b>
Top NPV = A (£180k). Then B (£140k). But A+B = £1,100k > budget.
Next: A+C = £1,000k → Total NPV = £180k+£100k = £280k ✓
Or: B+C+D... but B+C+D = £1,200k > budget.
So naïve approach might pick A+C.

<b>Profitability Index Ranking:</b>
PI order: A(0.30) > B(0.28) > C(0.25) > D(0.24)

If divisible: allocate to A first (£600k), then B with remaining £400k (80% of B):
NPV = £180k + 0.8×£140k = £180k+£112k = £292k

If indivisible: enumerate all feasible combos:
- A+C: £280k (£1,000k budget exact)
- B+C+D would exceed budget
- A+D: £180k+£72k = £252k (£900k used, £100k idle)
- B+C: £140k+£100k = £240k
- Best: <b>A+C = £280k</b>

<b>Key Pitfall:</b>
Simply picking the single highest-NPV project (A=£180k) leaves £400k idle (assuming 0% return), giving total NPV of only £180k vs £280k for A+C.

The correct approach is to maximise total NPV across all combinations that fit within the budget. PI ranking provides a shortcut for divisible projects; enumeration is needed for indivisible ones.

<b>Multi-Period Rationing:</b>
If capital is rationed across multiple periods, a linear programming formulation is required — PI ranking breaks down when investment decisions in period 1 affect available capital in period 2.`,
  whyPrompt:'Capital rationing implicitly assumes the firm cannot raise more capital. But if a positive-NPV project exists, why can\'t the firm simply borrow to fund it? Does capital rationing imply market imperfections?'
},
{
  id:'la031',
  topic:'W5-Limits',
  difficulty:'Exam-Standard',
  question:'Compare dividends and share buybacks as methods of returning cash to shareholders. Under MM dividend irrelevance assumptions, does the method matter? What market imperfections cause firms to prefer one over the other?',
  markScheme:[
    {pts:3,element:'MM irrelevance: with perfect markets, investors create homemade dividends; total return identical regardless of payout form; firm value unchanged'},
    {pts:3,element:'Taxes: in many jurisdictions, capital gains taxed lower than dividends → buybacks tax-preferred for high-bracket shareholders'},
    {pts:2,element:'Signalling: dividends sticky — cut signals distress; buyback signals undervaluation or excess cash without commitment'},
    {pts:3,element:'Clientele effect: income investors prefer dividends; growth investors prefer buybacks; firm attracts matching clientele'},
    {pts:2,element:'Agency: dividends reduce free cash, limiting empire-building; Jensen free cash flow hypothesis'},
    {pts:2,element:'Flexibility: buybacks more flexible (can skip without stigma); dividends set expectations that are costly to disappoint'}
  ],
  modelAnswer:`<b>MM Dividend Irrelevance (Perfect Markets):</b>
Under MM assumptions (no taxes, no transaction costs, no information asymmetry), dividend policy is irrelevant. An investor wanting cash can sell shares ("homemade dividend"); one not wanting cash can reinvest dividends. Both methods deliver the same total return.

<b>Why Real-World Firms Differ:</b>

<b>1. Taxes:</b>
In most jurisdictions, dividends are taxed as income; capital gains (from buybacks) at lower rates and deferred until sale. High-bracket investors prefer buybacks. Institutional investors (tax-exempt) may be indifferent.

<b>2. Signalling:</b>
Dividends are sticky — a cut is interpreted as management distress signal, punishing the stock price severely. Buybacks carry no such commitment and can be halted without stigma. However, buybacks signal management believes stock is undervalued.

<b>3. Clientele Effect:</b>
Retirees and income funds need regular cash flow → dividend-paying stocks. Growth investors in high tax brackets → no-dividend stocks. Firms develop a clientele and changing policy disrupts it.

<b>4. Agency and Free Cash Flow:</b>
Jensen (1986): excess free cash flow enables empire-building by self-serving managers. Dividends reduce available cash, disciplining management. Dividends thus have value in high-FCF, low-growth firms.

<b>5. Flexibility:</b>
Buybacks are opportunistic — firms repurchase when they believe stock is cheap. Dividends create expectations; failing to maintain them destroys more value than the cash itself.

<b>Empirical Evidence:</b>
US firms increasingly prefer buybacks; they now exceed dividend payouts in aggregate. European firms still more dividend-oriented due to tax treatment and investor preferences.`,
  whyPrompt:'If investors can construct homemade dividends by selling shares (as MM argues), why do stock prices fall sharply when a firm cuts its dividend? Does the evidence support MM or the signalling theory?'
},
{
  id:'la032',
  topic:'W2-Bonds',
  difficulty:'Exam-Standard',
  question:'Explain the three theories of the yield curve (Pure Expectations, Liquidity Preference, Market Segmentation). A yield curve is currently inverted (long rates < short rates). What does each theory predict is causing this? Which theory best explains the "normal" upward slope?',
  markScheme:[
    {pts:3,element:'Pure Expectations: long rates = geometric average of expected future short rates; forward rates = market\'s unbiased prediction; inverted curve → markets expect rates to fall'},
    {pts:3,element:'Liquidity Preference: long rates include a liquidity premium over expected short rates (investors prefer liquidity); normal upward slope even with flat rate expectations'},
    {pts:3,element:'Market Segmentation: separate supply/demand in each maturity segment; institutional constraints (pension funds want long; banks want short); curve shape determined by relative demands'},
    {pts:3,element:'Inverted curve interpretation per theory: PE=rate cuts expected; LP=premium insufficient to overcome strong rate-cut expectations; MS=unusual demand for long-dated bonds'},
    {pts:2,element:'Best for "normal" slope: Liquidity Preference explains upward slope even with no rate change expectations; Pure Expectations alone predicts flat curve if rates expected unchanged'}
  ],
  modelAnswer:`<b>1. Pure Expectations Theory:</b>
Long-term rates are geometric averages of current and expected future short-term rates. The 2-year rate = [(1+r₁)(1+E[r₁→₂])]^(1/2) − 1.

Forward rates = expected future spot rates (unbiased expectations).

Inverted curve → markets expect short-term rates to fall. (e.g., the Fed will cut rates as recession approaches.)
Normal upward curve → markets expect rates to rise over time.

<b>2. Liquidity Preference Theory:</b>
Investors prefer short-term bonds (more liquid, less price risk). To hold long-term bonds, they require a liquidity premium LP_t > 0.

Long rate = expectation component + liquidity premium
⇒ Even if rates expected unchanged, yield curve slopes upward due to LP.

Inverted curve → rate-cut expectations are so strong they overwhelm the positive liquidity premium.

<b>3. Market Segmentation Theory:</b>
Different investors/borrowers are confined to specific maturity segments by regulation, mandate, or preference. Yield in each segment determined by that segment's supply/demand.
- Pension funds: mandated to hold long-dated bonds → buy long → drives long yields down
- Banks: prefer short maturities → drives short yields down only if short supply high

Inverted curve → heavy institutional demand for long bonds (e.g., regulatory requirements after pension reform) combined with high short-term supply (government T-bill issuance).

<b>Best Explanation for Normal Upward Slope:</b>
Liquidity Preference Theory. It predicts upward slope even with no rate change expectations, via a positive and increasing liquidity premium. Pure Expectations alone predicts a flat curve when rates expected unchanged — inconsistent with the empirically observed typical upward slope.`,
  whyPrompt:'Forward rates derived from spot rates are sometimes called "implied forecasts." But under the Liquidity Preference Theory, forward rates ≠ expected future spot rates. How should a treasurer interpret a forward rate when deciding whether to borrow short or long?'
},
{
  id:'la033',
  topic:'W1-Finance',
  difficulty:'Applied',
  question:'Explain the principal-agent problem in corporate finance. Give three concrete examples of how managers (agents) may act against shareholders (principals) interests. For each, describe a governance mechanism that partially mitigates it.',
  markScheme:[
    {pts:2,element:'Define agency problem: separation of ownership (shareholders) and control (managers); manager\'s utility ≠ shareholder\'s utility'},
    {pts:2,element:'Example 1: empire building / overinvestment in negative NPV acquisitions → mitigate with concentrated ownership or debt covenants'},
    {pts:2,element:'Example 2: excessive perks / expense accounts (shirking/perquisite consumption) → mitigate with monitoring, performance-based pay'},
    {pts:2,element:'Example 3: short-termism (cutting R&D to hit quarterly EPS targets) → mitigate with long-dated stock options, ESG/multi-year KPIs'},
    {pts:3,element:'Agency costs: monitoring costs + bonding costs + residual loss; born by shareholders in efficient market through lower share price'},
    {pts:2,element:'Note: perfect contracts impossible → residual agency costs always remain; corporate governance is second-best solution'}
  ],
  modelAnswer:`<b>The Principal-Agent Problem:</b>
Shareholders own the firm but delegate day-to-day decisions to managers. Managers have their own interests (salary, job security, prestige) which may diverge from shareholder wealth maximisation.

Agency costs = Monitoring costs (audits, board oversight) + Bonding costs (golden handcuffs, covenants) + Residual loss (unavoidable divergence of decisions from shareholder optimum).

In an efficient market, shareholders anticipate agency problems and pay a lower price for shares, bearing the cost themselves.

<b>Example 1: Empire Building (Overinvestment)</b>
Managers prefer larger firms (higher compensation, prestige, reduced bankruptcy risk via diversification). They may acquire companies at inflated premiums or invest in negative-NPV projects to grow assets under management.
<i>Mitigation:</i> Debt covenants restricting acquisitions; activist shareholders; independent board with M&A veto; performance-based pay tied to ROIC not revenue.

<b>Example 2: Perquisite Consumption (Shirking)</b>
Managers extract value via lavish offices, jets, expense accounts — reducing firm profitability without benefiting shareholders.
<i>Mitigation:</i> Audit committees monitoring discretionary spending; equity ownership giving managers "skin in the game"; board compensation committees benchmarking pay.

<b>Example 3: Short-Termism</b>
Managers facing short tenure cut profitable long-term R&D, maintenance, and brand investment to hit quarterly EPS targets, boosting the stock price for near-term options vesting.
<i>Mitigation:</i> Long-dated restricted stock units (RSUs) vesting over 5–7 years; clawback provisions; mandatory share-holding requirements after vesting; shareholder approval of pay schemes.

<b>Fundamental Limit:</b>
Complete contracting is impossible — contracts cannot anticipate every contingency. Residual agency costs always remain. Corporate governance is a second-best solution that reduces but cannot eliminate the agency wedge.`,
  whyPrompt:'You mentioned debt covenants as a solution to overinvestment. But we also learned that debt creates its own agency problems (underinvestment, asset substitution). Is there an optimal governance structure that minimises total agency costs? Or are we just trading one set of problems for another?'
},
{
  id:'la034',
  topic:'W4-CAPM',
  difficulty:'Applied',
  question:'What is systematic versus idiosyncratic (unsystematic) risk? Give two examples of each for a pharmaceutical company. Why does diversification eliminate only one type? What does this imply about the risk premium demanded by the market?',
  markScheme:[
    {pts:3,element:'Systematic: correlated with market/economy; cannot be diversified away; examples: recession reducing all drug spending, interest rate hike affecting PV of future earnings'},
    {pts:3,element:'Idiosyncratic: firm/industry specific; diversified away in large portfolio; examples: trial failure of blockbuster drug, CEO resignation scandal'},
    {pts:3,element:'Why diversification works: idiosyncratic returns average to zero across many stocks (covariances → 0 for uncorrelated risks); systematic risk remains because all stocks move together'},
    {pts:3,element:'Market risk premium: rational diversified investors hold only systematic risk → demand premium only for beta, not total volatility → CAPM: E[R] = R_f + β×MRP'},
    {pts:2,element:'Implication: two firms with equal total variance but different betas will have different required returns; undiversified investor incorrectly penalises low-beta/high-idiosyncratic firm'}
  ],
  modelAnswer:`<b>Systematic Risk (Market Risk):</b>
Risk that affects the entire economy or market — cannot be eliminated by diversification because all assets are exposed simultaneously.

Pharmaceutical company examples:
1. Recession → lower consumer spending on non-essential drugs; reduced insurance coverage; all pharma stocks fall together
2. Interest rate rise → higher discount rates reduce PV of all firms' future cash flows, especially high-growth pharma with long payoff horizons

<b>Idiosyncratic Risk (Unsystematic Risk):</b>
Risk specific to one firm or sector — not correlated with market movements. Disappears in a diversified portfolio as gains/losses in individual stocks average out.

Pharmaceutical company examples:
1. Phase III clinical trial failure → this firm's stock crashes, but unrelated to AstraZeneca or Novartis
2. CEO resignation due to fraud investigation → company-specific scandal; market index unaffected

<b>Why Diversification Eliminates Only Idiosyncratic Risk:</b>
Portfolio variance = Σᵢ wᵢ²σᵢ² + Σᵢ≠ⱼ wᵢwⱼσᵢσⱼρᵢⱼ

As N → ∞ with equal weights (wᵢ = 1/N):
- Firm-specific variance terms → 0 (weight² × finite variance → 0)
- Covariance terms remain: N²×(1/N²)×average_covariance = average_covariance

The irreducible variance is the average covariance — the systematic component. All stocks share exposure to macro factors (GDP, interest rates, inflation), so their covariances are positive and non-diversifiable.

<b>Implication for Risk Pricing:</b>
A rational, fully-diversified investor holds only systematic risk. They will demand a return premium only for beta exposure (systematic risk), not for total volatility. Idiosyncratic risk is "free" to eliminate. Therefore:

E[Rᵢ] = Rᶠ + βᵢ × (E[Rₘ] − Rᶠ)

A firm with β=0.5 but high total volatility (idiosyncratic) will have the same required return as another firm with β=0.5 and low total volatility. The market does not compensate investors for bearing diversifiable risk.`,
  whyPrompt:'If the market does not compensate for idiosyncratic risk, why do some investors — like Warren Buffett — hold highly concentrated portfolios with only 10–15 stocks? Are they irrational, or is something else going on?'
},
{
  id:'la035',
  topic:'W1-TVM',
  difficulty:'Applied',
  question:'You need £500,000 in 20 years for retirement. You plan to invest a fixed amount at the end of each year. The expected annual return is 7%. Calculate the required annual investment. Then recalculate if you delay starting by 5 years (invest for 15 years instead). What is the cost of delay?',
  markScheme:[
    {pts:3,element:'FV of annuity: 500,000 = PMT × [(1.07^20 − 1)/0.07]; FVIFA = 40.995; PMT = 500,000/40.995 = £12,196/yr'},
    {pts:3,element:'15-year version: FVIFA(7%,15) = (1.07^15−1)/0.07 = (2.759−1)/0.07 = 25.129; PMT = 500,000/25.129 = £19,898/yr'},
    {pts:2,element:'Annual cost of delay: £19,898 − £12,196 = £7,702/year more (63% higher annual payment)'},
    {pts:2,element:'Total payments comparison: 20yr total = 20×12,196 = £243,920; 15yr = 15×19,898 = £298,470; extra paid = £54,550'},
    {pts:2,element:'Intuition: 5 fewer years of compounding is disproportionately costly due to exponential growth in later years'}
  ],
  modelAnswer:`<b>Required Annual Investment — 20-Year Plan:</b>
FV of ordinary annuity: FV = PMT × [(1+r)ⁿ − 1] / r

500,000 = PMT × [(1.07^20 − 1) / 0.07]
1.07^20 = 3.8697
FVIFA = (3.8697 − 1) / 0.07 = 2.8697 / 0.07 = 40.995

PMT = 500,000 / 40.995 = <b>£12,196 per year</b>

<b>Required Annual Investment — 15-Year Plan (Delayed Start):</b>
1.07^15 = 2.7590
FVIFA(7%,15) = (2.7590 − 1) / 0.07 = 1.7590 / 0.07 = 25.128

PMT = 500,000 / 25.128 = <b>£19,898 per year</b>

<b>Cost of the 5-Year Delay:</b>
- Extra annual payment: £19,898 − £12,196 = <b>£7,702/year more</b> (63% higher)
- Total invested over 20 years at £12,196/yr: £12,196 × 20 = £243,920
- Total invested over 15 years at £19,898/yr: £19,898 × 15 = £298,470
- Extra cash required: £298,470 − £243,920 = <b>£54,550</b>

You pay £54,550 more in total contributions AND have a harder monthly budget to maintain — just for waiting 5 years.

<b>Why the Delay Is So Costly:</b>
Compound growth is nonlinear. The last 5 years of a 20-year investment (years 16–20) contribute disproportionately to the final value because those years apply compounding to a large accumulated base. Losing those years cannot be linearly compensated by larger annual contributions — you must pay much more to generate the same terminal wealth.`,
  whyPrompt:'The calculation assumes a constant 7% real return. If inflation runs at 3%, what is the real return? And what nominal target should you set if you want £500,000 in today\'s purchasing power in 20 years?'
},
{
  id:'la036',
  topic:'W2-Stocks',
  difficulty:'Applied',
  question:'Explain the NPVGO model for stock valuation. A firm earns EPS = £4, has a required return r = 12%, and reinvests 40% of earnings at a 15% return on equity. Calculate the current stock price and decompose it into its "no-growth" and "growth opportunity" components.',
  markScheme:[
    {pts:2,element:'NPVGO formula: P = EPS/r + NPVGO; first term = no-growth value (all-payout perpetuity)'},
    {pts:2,element:'g = retention ratio × ROE = 0.4 × 15% = 6%'},
    {pts:3,element:'Gordon Growth: P = D1/(r−g) = EPS×(1−b)/(r−g) = 4×0.6/(0.12−0.06) = 2.4/0.06 = £40'},
    {pts:3,element:'No-growth value = EPS/r = 4/0.12 = £33.33; NPVGO = 40 − 33.33 = £6.67'},
    {pts:2,element:'Interpret: £33.33 from existing assets (like a bond), £6.67 from future investments earning above r'},
    {pts:2,element:'If ROE = r = 12%: g = 4.8%, P = 4×0.6/(0.12−0.048) = 2.4/0.072 = £33.33 = EPS/r → growth adds zero NPV when ROE=r'}
  ],
  modelAnswer:`<b>NPVGO Model:</b>
Any stock price can be decomposed into:
P₀ = (No-growth value) + NPVGO
P₀ = EPS/r + NPVGO

Where EPS/r is the value of existing assets if all earnings were paid out as dividends forever (a perpetuity), and NPVGO is the present value of all future growth opportunities.

<b>This Firm's Parameters:</b>
- EPS = £4, r = 12%
- Retention ratio b = 40%, ROE = 15%
- Payout ratio = 1 − b = 60%
- Sustainable growth rate g = b × ROE = 0.40 × 15% = <b>6%</b>

<b>Stock Price (Gordon Growth Model):</b>
D₁ = EPS × (1 − b) = £4 × 0.60 = £2.40
P₀ = D₁ / (r − g) = 2.40 / (0.12 − 0.06) = 2.40 / 0.06 = <b>£40.00</b>

<b>Decomposition:</b>
No-growth value = EPS/r = £4/0.12 = £33.33
NPVGO = £40.00 − £33.33 = <b>£6.67</b>

33% / 17% split: £33.33 from existing assets, £6.67 from reinvestment.

<b>Why NPVGO > 0:</b>
The firm earns ROE = 15% on reinvested capital, but investors only require r = 12%. Each £1 of reinvested earnings generates £0.15 return on a £1 investment with required value £0.12/0.12 = £1 → NPVGO is positive.

<b>Zero-NPVGO Case:</b>
If ROE = r = 12%: g = 0.40×12% = 4.8%
P₀ = 2.40/(0.12−0.048) = 2.40/0.072 = £33.33 = EPS/r

Growth creates no value when the firm earns exactly its cost of capital on reinvested earnings — consistent with value additivity.`,
  whyPrompt:'Apple\'s stock price historically implied a massive NPVGO component (sometimes >80% of price). What risk does this create for investors? What would happen to the price if the market revised down its view of Apple\'s future growth opportunities?'
},
{
  id:'la037',
  topic:'W3-CashFlows',
  difficulty:'Applied',
  question:'A firm is considering a £200,000 machine with a 5-year life and no salvage value. Annual pre-tax savings = £60,000. Tax rate = 25%, straight-line depreciation. Calculate annual OCF, total FCF in each year (including initial investment), and NPV at 10% discount rate.',
  markScheme:[
    {pts:2,element:'Annual depreciation = 200,000/5 = £40,000'},
    {pts:3,element:'OCF = (Savings − Dep)(1−T) + Dep = (60,000−40,000)×0.75 + 40,000 = 15,000+40,000 = £55,000'},
    {pts:2,element:'Alternatively: OCF = Savings×(1−T) + T×Dep = 45,000+10,000 = £55,000 (same)'},
    {pts:2,element:'FCF: Year 0 = −£200,000; Years 1–5 = +£55,000'},
    {pts:3,element:'NPV = −200,000 + 55,000×PVIFA(10%,5) = −200,000 + 55,000×3.7908 = −200,000+208,494 = +£8,494'},
    {pts:2,element:'Accept since NPV > 0; identify depreciation tax shield = T×Dep = 0.25×40,000 = £10,000/yr worth £37,908 PV'}
  ],
  modelAnswer:`<b>Annual Depreciation:</b>
Straight-line over 5 years: £200,000 / 5 = <b>£40,000/year</b>

<b>Annual OCF (Two Methods — Same Answer):</b>

Method 1 — Bottom-up:
EBIT = Savings − Depreciation = £60,000 − £40,000 = £20,000
Tax = £20,000 × 25% = £5,000
NOPAT = £15,000
OCF = NOPAT + Depreciation = £15,000 + £40,000 = <b>£55,000</b>

Method 2 — Tax-shield approach:
OCF = Savings × (1 − T) + T × Depreciation
= £60,000 × 0.75 + 0.25 × £40,000
= £45,000 + £10,000
= <b>£55,000</b> ✓

<b>Free Cash Flows:</b>
Year 0: −£200,000 (initial investment)
Years 1–5: +£55,000 each (constant OCF, no NWC change, no further CAPEX)

<b>NPV Calculation:</b>
PVIFA(10%, 5) = [1 − 1/(1.10)^5] / 0.10 = [1 − 0.6209] / 0.10 = 3.7908

NPV = −200,000 + 55,000 × 3.7908
= −200,000 + 208,494
= <b>+£8,494</b>

Decision: Accept. NPV > 0 → project adds shareholder value.

<b>Value of Depreciation Tax Shield:</b>
Annual shield = T × Depreciation = 0.25 × £40,000 = £10,000/year
PV of shields = £10,000 × 3.7908 = <b>£37,908</b>

Without the tax shield (OCF = £45,000):
NPV = −200,000 + 45,000 × 3.7908 = −200,000 + 170,586 = −£29,414

The project would be rejected without the tax shield — illustrating how the depreciation deduction can be the deciding factor in marginal investment decisions.`,
  whyPrompt:'This project uses straight-line depreciation. If the government offers accelerated depreciation (e.g., 100% first-year write-off), by how much does the NPV improve? Why does accelerated depreciation increase investment incentives even though total tax paid is the same?'
},
{
  id:'la038',
  topic:'W5-MM',
  difficulty:'Exam-Standard',
  question:'Explain the underinvestment (debt overhang) and asset substitution (risk-shifting) problems caused by risky debt. Use numerical examples for each. How do these agency costs of debt affect a firm\'s optimal capital structure?',
  markScheme:[
    {pts:4,element:'Underinvestment: with senior debt, NPV-positive project gains all go to creditors → equity holders decline to invest; numerical example with payoff tables showing equity value stays zero even after +NPV investment'},
    {pts:4,element:'Asset substitution: equity = call option on firm value; shareholders prefer high-variance assets even if lower expected value; numerical example showing E gains even as total V falls'},
    {pts:3,element:'Optimal structure implication: both costs rise with leverage → add to financial distress costs → shift the WACC curve / trade-off framework; imply interior optimal D/E even without taxes'},
    {pts:2,element:'Mitigations: protective covenants restrict asset sales/investments; convertible debt aligns incentives; monitoring; collateral requirements'}
  ],
  modelAnswer:`<b>1. Underinvestment (Debt Overhang) — Myers (1977):</b>

Suppose a firm has debt with face value £1,000 due. Firm value without new project = £600 (debt worth £600, equity = 0).

New project: costs £100 equity injection today; increases firm value by £200 (NPV = +£100).
After investment: Firm value = £800. Debt claim = min(800, 1000) = £800. Equity = £0.

Equity holders invest £100 and receive £0 gain — all benefit goes to creditors!
∴ Rational equity holders refuse positive-NPV investment → value destroyed.

This is debt overhang: the "overhang" of existing debt captures all gains from new investment, so equity holders (who must fund it) refuse. Firms near distress underinvest as a result.

<b>2. Asset Substitution (Risk Shifting) — Jensen & Meckling (1976):</b>

Equity = call option on firm assets (payoff = max(V − D, 0)). Option value rises with asset volatility.

Example: Firm has debt D = £500. Two available investment strategies:

| Strategy | Low State (50%) | High State (50%) | E[V] | E[Equity] |
|----------|----------------|-----------------|------|-----------|
| Safe | £600 | £700 | £650 | £150 |
| Risky | £200 | £1,000 | £600 | £250 |

Safe: E[V]=£650 > Risky: E[V]=£600. But Risky gives E[Equity]=£250 vs Safe £150.
In low state of Risky, creditors take full loss (get £200 < £500 owed).

Equity holders choose the risky strategy even though it destroys firm value — because the downside falls on creditors. This is risk-shifting / asset substitution.

<b>Effect on Optimal Capital Structure:</b>
Both agency costs increase with leverage:
- More debt → larger overhang → more underinvestment
- More debt → deeper "out of the money" equity call → stronger incentive to risk-shift

These costs reduce firm value as leverage rises, adding to financial distress costs in the Trade-Off Theory framework. The optimal D/E balances: tax shield benefits (rising in D) against: financial distress costs + underinvestment costs + asset substitution costs (all rising in D).

<b>Mitigations:</b>
- Negative pledge clauses (restrict new debt issuance)
- Investment restrictions in covenants
- Convertible debt (aligns creditor/equity incentives)
- Collateralised lending limits asset substitution
- Short maturities force frequent refinancing (renegotiation)`,
  whyPrompt:'Convertible bonds are sometimes proposed as a solution to both underinvestment and asset substitution. Walk through the mechanism: why does convertibility reduce each problem? What downside does it create for the firm?'
},
{
  id:'la039',
  topic:'W3-Rules',
  difficulty:'Applied',
  question:'Project A costs £10,000 today, generates £6,000 in year 1 and £6,000 in year 2. Project B costs £10,000 today, generates £0 in year 1 and £13,500 in year 2. WACC = 10%. Calculate NPV and IRR for both. Which should be chosen, and why does IRR give a different ranking to NPV?',
  markScheme:[
    {pts:2,element:'NPV_A = −10,000 + 6,000/1.1 + 6,000/1.21 = −10,000+5,455+4,959 = +£414'},
    {pts:2,element:'NPV_B = −10,000 + 0/1.1 + 13,500/1.21 = −10,000+0+11,157 = +£1,157'},
    {pts:3,element:'IRR_A: 10,000 = 6,000/(1+r)+6,000/(1+r)² → IRR_A ≈ 13.07%'},
    {pts:3,element:'IRR_B: 10,000 = 13,500/(1+r)² → (1+r)² = 1.35 → r = √1.35−1 = 16.14%; IRR_B > IRR_A'},
    {pts:3,element:'NPV says B; IRR says B too — actually consistent here. Key issue: if IRR_A > IRR_B, explain crossover rate and reinvestment assumption problem for general case'},
    {pts:2,element:'Explain: IRR implicitly assumes cash flows reinvested at IRR; NPV assumes reinvestment at WACC (more realistic); when rankings conflict, NPV dominates'}
  ],
  modelAnswer:`<b>NPV Calculations:</b>

NPV_A = −10,000 + 6,000/1.10 + 6,000/1.21
= −10,000 + 5,454.5 + 4,958.7
= <b>+£413</b>

NPV_B = −10,000 + 0/1.10 + 13,500/1.21
= −10,000 + 0 + 11,157
= <b>+£1,157</b>

NPV ranking: B > A. Choose Project B.

<b>IRR Calculations:</b>

IRR_A: Solve 10,000 = 6,000/(1+r) + 6,000/(1+r)²
Let x = 1/(1+r): 6,000x² + 6,000x − 10,000 = 0 → x = 0.884 → r = <b>13.07%</b>

IRR_B: Solve 10,000 = 13,500/(1+r)²
(1+r)² = 13,500/10,000 = 1.35
1+r = 1.1619 → r = <b>16.19%</b>

IRR ranking: B(16.19%) > A(13.07%) — same ranking here. Both say choose B.

<b>Why IRR and NPV Rankings Can Conflict (General Case):</b>
In this example, both methods agree. But they often conflict when:

1. Projects have different cash flow timing (front-loaded vs back-loaded). The NPV profile of each project crosses at the "crossover rate." Below the crossover rate, the back-loaded project may have higher NPV; IRR favours the front-loaded one.

2. Reinvestment assumption: IRR implicitly assumes intermediate cash flows are reinvested at the IRR itself. For IRR = 20%, this means reinvesting year-1 cash at 20% — unrealistically optimistic if WACC = 10%. NPV assumes reinvestment at WACC (the realistic marginal rate). When reinvestment at WACC is realistic, NPV gives the correct ranking.

3. Scale differences: IRR ignores project size (10% return on £1m vs 15% on £100k).

<b>Rule:</b> When NPV and IRR conflict, always follow NPV. It directly measures value added in pounds, with the correct reinvestment assumption.`,
  whyPrompt:'Some practitioners use Modified IRR (MIRR), which explicitly assumes reinvestment at WACC. Does MIRR always agree with NPV? Are there remaining cases where MIRR ranking could differ from NPV ranking?'
},
{
  id:'la040',
  topic:'W1-Finance',
  difficulty:'Foundational',
  question:'What is the goal of the firm in finance theory? How does this differ from accounting profit maximisation? Give a concrete example where maximising accounting profit leads to value destruction for shareholders.',
  markScheme:[
    {pts:3,element:'Finance goal: maximise NPV of future cash flows = maximise shareholder wealth = maximise firm market value (not book value)'},
    {pts:2,element:'Accounting profit issues: accrual basis ≠ cash; ignores time value; ignores risk; can be manipulated'},
    {pts:3,element:'Concrete example: defer maintenance to boost current profit (reduces future CF); or accept project with positive EPS accretion but negative NPV (earnings dilutive in long run)'},
    {pts:2,element:'EPS accretion trap: acquisition that adds to EPS but pays too much (NPV negative) destroys value'},
    {pts:2,element:'Market insight: share price = PV of expected future FCF; investors see through accounting manipulation in the long run (efficient markets hypothesis)'}
  ],
  modelAnswer:`<b>Finance Goal: Maximise Firm Value (= NPV of All Future Free Cash Flows)</b>

In corporate finance, the firm's objective is to maximise the market value of shareholders' equity, equivalent to maximising the NPV of all future expected free cash flows discounted at the risk-adjusted cost of capital. This is also called shareholder wealth maximisation.

<b>Why Not Accounting Profit?</b>

Accounting profit (EBIT, EPS, net income) fails as an objective because:
1. <b>Timing ignored:</b> £1m profit today and £1m in 10 years are treated equally; time value disregarded
2. <b>Risk ignored:</b> high-variance profit is equivalent to low-variance profit in accounting, but not to investors
3. <b>Accrual ≠ Cash:</b> revenue recognised before cash received; expenses matched to periods, not cash outflows
4. <b>Manipulation:</b> depreciation method, revenue recognition timing, capitalisation vs expensing — all change reported profit without changing underlying economics

<b>Concrete Example: Deferred Maintenance</b>
A plant requires £5m maintenance this year. Deferring it saves £5m → EPS rises.
But deferred maintenance increases probability of equipment failure, future maintenance costs, production downtime, and possibly insurance claims.
Rational DCF analysis: PV(future costs from deferral) > £5m → NPV negative decision → shareholder value destroyed, even though today's EPS rose.

<b>EPS Accretion Trap (Acquisitions):</b>
Firm A (P/E = 20x, EPS = £2) acquires Firm B (P/E = 10x, EPS = £1) in an all-share deal. The combined firm has higher EPS than A alone ("accretion"). But if A overpaid, the NPV of the acquisition is negative — wealth transferred from A's shareholders to B's. Despite the accretion, A's stock price should fall. Boards that celebrate EPS accretion while ignoring NPV are optimising the wrong metric.`,
  whyPrompt:'If the stock market is efficient and share prices reflect true firm value, does this mean managers should always focus exclusively on the current share price? Could myopic share price optimisation also destroy long-run value?'
},
{
  id:'la041',
  topic:'W4-Risk',
  difficulty:'Exam-Standard',
  question:'Explain the Arbitrage Pricing Theory (APT). How does it differ from CAPM? Write the two-factor APT equation. If Factor 1 is the market return and Factor 2 is unexpected inflation, interpret the meaning of each factor loading (β) for a retail company.',
  markScheme:[
    {pts:3,element:'APT: expected return linear in multiple systematic factors; derived from no-arbitrage condition; Ross (1976)'},
    {pts:3,element:'Two-factor: E[R_i] = R_f + β_{i1}×(E[F1]−R_f) + β_{i2}×λ₂; λ is risk premium per unit of factor exposure'},
    {pts:3,element:'Difference from CAPM: APT multi-factor; doesn\'t require market portfolio to be mean-variance efficient; testable without true market portfolio; CAPM is special case with one factor'},
    {pts:3,element:'Retail firm interpretation: β₁ (market) = systematic economic sensitivity; β₂ (inflation) = exposure to inflation surprise; retail may have negative inflation β (consumer spending falls with unexpected inflation shock)'},
    {pts:2,element:'Limitation: APT doesn\'t specify which factors matter; empirical models (Fama-French) add size, value, momentum factors'}
  ],
  modelAnswer:`<b>Arbitrage Pricing Theory (APT) — Ross (1976):</b>
APT assumes returns are generated by a linear factor model:
R_i = E[R_i] + β_{i1}F₁ + β_{i2}F₂ + ... + ε_i

where F_k are unexpected changes in systematic factors (zero mean), β_{ik} are factor loadings (sensitivities), and ε_i is idiosyncratic noise (uncorrelated across firms).

The no-arbitrage condition implies:
<b>E[R_i] = R_f + β_{i1}λ₁ + β_{i2}λ₂</b>

where λ_k is the market price of risk for factor k (risk premium per unit of factor exposure).

<b>Two-Factor Model:</b>
E[R_i] = R_f + β_{i,Mkt}×(E[R_m]−R_f) + β_{i,Infl}×λ_{Infl}

<b>Retail Company Interpretation:</b>
- β_{i,Mkt} = 1.2: the retailer's returns are 1.2× as sensitive to market movements as the average stock. In a strong economy (bull market), this firm gains 20% more; in downturns, falls 20% more. Driven by cyclicality of consumer discretionary spending.
- β_{i,Infl} = −0.5: when inflation surprises upward (unexpected rise), this firm loses 0.5× the inflation shock return. Mechanism: unexpected inflation squeezes real consumer purchasing power → lower real retail spending → weaker revenues. May also reflect pricing power limits.

<b>APT vs. CAPM:</b>
| | CAPM | APT |
|--|------|-----|
| Factors | One (market) | Multiple |
| Derivation | Equilibrium (all investors mean-variance) | No-arbitrage only |
| Market portfolio | Must be mean-variance efficient | No such requirement |
| Identification | Well-defined | Factors must be specified by researcher |

CAPM is a special case of APT with one factor. APT is more general but empirically requires factor identification. In practice, Fama-French 3-factor (market, size, value) and 5-factor models are widely used extensions.`,
  whyPrompt:'APT says any factor that earns a risk premium must be systematic (non-diversifiable). But empirical work finds a momentum factor that seems to contradict standard risk theory. Does momentum\'s existence challenge APT, or can APT accommodate it?'
},
{
  id:'la042',
  topic:'W5-Limits',
  difficulty:'Exam-Standard',
  question:'A firm has a D/E ratio of 0.5, corporate tax rate of 30%, and currently pays 6% on its debt. Its unlevered cost of capital (r_0) is 9%. Using both the MM with-tax WACC formula and the WACC from the Adjusted Present Value (APV) framework, show that both approaches value a project identically. Explain when APV is more useful than WACC.',
  markScheme:[
    {pts:3,element:'WACC: E/V = 2/3, D/V = 1/3; WACC = 2/3×r_E + 1/3×6%×0.7; r_E = r_0+(r_0−r_D)(D/E)(1−T) = 9%+(9%−6%)×0.5×0.7 = 9%+1.05%=10.05%; WACC = 2/3×10.05%+1/3×4.2% = 6.70%+1.40% = 8.10%'},
    {pts:3,element:'APV: NPV_U using r_0=9%; PV(tax shield) = T_c×D each period; APV = NPV_U + PV(tax shield)'},
    {pts:3,element:'Show equivalence: for a permanent project, both give same answer by construction; APV = V_U + T_c×D; WACC already embeds tax shield in reduced discount rate'},
    {pts:3,element:'When APV preferred: changing capital structure (LBO, debt paydown schedule); project-specific financing; tax shields not proportional to value; foreign projects with differential tax treatment'},
    {pts:2,element:'WACC limitation: assumes constant D/V ratio (debt rebalanced to maintain leverage); unrealistic for LBOs or project finance with fixed debt schedules'}
  ],
  modelAnswer:`<b>WACC Approach:</b>
D/E = 0.5, so E = 2 parts, D = 1 part → E/V = 2/3, D/V = 1/3.

Step 1 — Levered equity cost (Prop II with taxes):
r_E = r_0 + (r_0 − r_D)(D/E)(1 − T_c)
= 9% + (9% − 6%) × 0.5 × (1 − 0.30)
= 9% + 3% × 0.5 × 0.70
= 9% + 1.05%
= <b>10.05%</b>

Step 2 — WACC:
WACC = (E/V)r_E + (D/V)r_D(1−T_c)
= (2/3)(10.05%) + (1/3)(6%)(0.70)
= 6.70% + 1.40%
= <b>8.10%</b>

<b>APV Approach:</b>
APV = V_unlevered + PV(financing side effects)

For a £1,000 project with r_0 = 9% (perpetuity for simplicity):
- V_U = £1,000 / 9% × annual unlevered cash flow = base NPV discounted at r_0
- If D/V = 1/3, D = 1/3 × V_L → annual tax shield = T_c × r_D × D = 0.30 × 6% × D
- PV(tax shields) = T_c × D (when shields discounted at r_D, for perpetual debt)

For equivalent £1,000 project (perpetual annual CF = £X):
WACC approach: V_L = X/0.081
APV approach: V_U = X/0.09; V_L = V_U + T_c × D = V_U + 0.30 × D

Since D = V_L/3 and V_L = X/0.081 → D = X/(3×0.081) = X/0.243
V_L = X/0.09 + 0.30 × X/0.243 = 11.11X + 1.235X = 12.35X
X/0.081 = 12.35X ✓ → both give the same V_L.

<b>When APV Is More Useful:</b>
1. <b>Leveraged buyouts (LBOs):</b> Debt is paid down on a fixed schedule (amortising) — D/V ratio changes over time. WACC assumes constant leverage (debt rebalanced). APV can model each year's specific tax shield.
2. <b>Project finance:</b> Off-balance-sheet debt tied to specific project cashflows, not firm value.
3. <b>Cross-border projects:</b> Tax shields in a different jurisdiction; differential withholding taxes on interest.
4. <b>Interest tax shields at risk:</b> If firm may enter tax loss (can't use shield), APV allows probabilistic discounting of shields at r_D or r_0 depending on certainty.

WACC assumes the tax shield scales with firm value (D rebalanced); APV treats it as a separate, explicitly modelled cash flow.`,
  whyPrompt:'WACC and APV give identical answers only under specific assumptions about how debt is managed. What happens to the equivalence if the firm has net operating losses (NOLs) and can\'t immediately use its interest deductions? Which method handles this more naturally?'
}

]; // end LONG_ANSWER_DATA
