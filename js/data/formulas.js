/* ================================================================
   formulas.js — Interactive Formula Sheet Data
   Each entry: { id, topic, name, latex, variables[], intuition }
   variables: [{ symbol, definition }]
================================================================ */

const FORMULA_DATA = [

/* ── WEEK 1: TIME VALUE OF MONEY ─────────────────────────── */
{
  id:'f001',
  topic:'W1-TVM',
  name:'Future Value (Single Sum)',
  latex:'FV = PV \\times (1 + r)^t',
  variables:[
    {symbol:'FV', definition:'Future value — what a cash flow is worth at a future date'},
    {symbol:'PV', definition:'Present value — what a future cash flow is worth today'},
    {symbol:'r', definition:'Periodic interest (discount) rate; must match the compounding period'},
    {symbol:'t', definition:'Number of compounding periods (years, months, etc.)'}
  ],
  intuition:'Every extra period multiplies wealth by (1+r). At 10%/year, £100 doubles every 7.3 years (Rule of 72: 72/10). The exponent captures the compounding — earning interest on interest.'
},
{
  id:'f002',
  topic:'W1-TVM',
  name:'Present Value (Single Sum)',
  latex:'PV = \\frac{FV}{(1 + r)^t}',
  variables:[
    {symbol:'FV', definition:'Future value — the cash amount at time t'},
    {symbol:'r', definition:'Discount rate (opportunity cost of capital per period)'},
    {symbol:'t', definition:'Number of periods until the cash flow occurs'}
  ],
  intuition:'Discounting is the inverse of compounding. Dividing by (1+r)^t shrinks future cash flows — the farther away and the higher r, the smaller the PV. Long-horizon cash flows are nearly worthless at high discount rates.'
},
{
  id:'f003',
  topic:'W1-TVM',
  name:'Perpetuity PV',
  latex:'PV = \\frac{C}{r}',
  variables:[
    {symbol:'C', definition:'Constant cash flow received every period, forever'},
    {symbol:'r', definition:'Discount rate per period (must be constant)'}
  ],
  intuition:'An infinite stream of £C/year is worth only C/r because later payments have negligible PV. A perpetuity paying £100/year at r=5% is worth £2,000 — same logic as a government bond with no maturity.'
},
{
  id:'f004',
  topic:'W1-TVM',
  name:'Growing Perpetuity PV (Gordon Growth)',
  latex:'PV = \\frac{C_1}{r - g}',
  variables:[
    {symbol:'C_1', definition:'First cash flow (received one period from now)'},
    {symbol:'r', definition:'Discount rate — must exceed g or formula is undefined'},
    {symbol:'g', definition:'Constant perpetual growth rate of cash flows'}
  ],
  intuition:'Growth extends the value but also makes later payments bigger. The denominator (r−g) is the "net discount rate." If r=10% and g=4%, the formula behaves like a perpetuity at 6%. Used for stock valuation (DDM) and terminal value calculations.'
},
{
  id:'f005',
  topic:'W1-TVM',
  name:'Annuity PV',
  latex:'PV = C \\times \\frac{1 - (1+r)^{-t}}{r}',
  variables:[
    {symbol:'C', definition:'Constant cash flow received each period'},
    {symbol:'r', definition:'Discount rate per period'},
    {symbol:'t', definition:'Total number of payments'}
  ],
  intuition:'An annuity is a perpetuity minus a deferred perpetuity starting at t+1. The bracket [1−(1+r)^{−t}]/r is the PVIFA (present value interest factor of an annuity). Used for mortgages, car loans, and bond valuation.'
},
{
  id:'f006',
  topic:'W1-TVM',
  name:'Annuity FV',
  latex:'FV = C \\times \\frac{(1+r)^t - 1}{r}',
  variables:[
    {symbol:'C', definition:'Constant periodic deposit (end of period)'},
    {symbol:'r', definition:'Periodic interest rate'},
    {symbol:'t', definition:'Number of periods'}
  ],
  intuition:'Saving the same amount every year. The last payment compounds zero times; the first payment compounds t−1 times. The FVIFA is the sum of this geometric series. Used for retirement saving calculations.'
},
{
  id:'f007',
  topic:'W1-TVM',
  name:'Effective Annual Rate (EAR)',
  latex:'EAR = \\left(1 + \\frac{r_{stated}}{m}\\right)^m - 1',
  variables:[
    {symbol:'r_{stated}', definition:'Stated (nominal / APR) annual interest rate'},
    {symbol:'m', definition:'Number of compounding periods per year (12=monthly, 365=daily)'}
  ],
  intuition:'More frequent compounding means earning interest on interest more often. A 12% APR compounded monthly actually earns 12.68% EAR. Always convert to EAR before comparing rates with different compounding frequencies.'
},

/* ── WEEK 2: BONDS ─────────────────────────────────────────── */
{
  id:'f008',
  topic:'W2-Bonds',
  name:'Bond Price (Flat / Clean)',
  latex:'P = \\sum_{t=1}^{T} \\frac{C}{(1+y)^t} + \\frac{F}{(1+y)^T}',
  variables:[
    {symbol:'P', definition:'Current bond price (per £100 face value conventionally)'},
    {symbol:'C', definition:'Periodic coupon payment = coupon rate × face value'},
    {symbol:'y', definition:'Yield to maturity (YTM) — the IRR of the bond cash flows'},
    {symbol:'F', definition:'Face value (par value) repaid at maturity'},
    {symbol:'T', definition:'Total number of periods until maturity'}
  ],
  intuition:'Bond price = PV of all future cash flows at YTM. If YTM > coupon rate, bond trades at a discount (P < F); if YTM < coupon rate, at a premium. As YTM rises, P falls (inverse relationship).'
},
{
  id:'f009',
  topic:'W2-Bonds',
  name:'Spot Rate to Price Relationship',
  latex:'P = \\frac{C}{(1+s_1)} + \\frac{C}{(1+s_2)^2} + \\cdots + \\frac{C+F}{(1+s_T)^T}',
  variables:[
    {symbol:'s_t', definition:'Spot rate for maturity t — the yield on a zero-coupon bond maturing at t'},
    {symbol:'C', definition:'Coupon payment'},
    {symbol:'F', definition:'Face value'}
  ],
  intuition:'Each cash flow should be discounted at its own maturity-matched spot rate. This is arbitrage-free pricing. Using a single YTM is a weighted average approximation; spot rates are the theoretically correct discount rates.'
},
{
  id:'f010',
  topic:'W2-Bonds',
  name:'Forward Rate from Spot Rates',
  latex:'(1+s_2)^2 = (1+s_1)^1 \\times (1+f_{1,2})^1',
  variables:[
    {symbol:'s_1', definition:'One-year spot rate today'},
    {symbol:'s_2', definition:'Two-year spot rate today'},
    {symbol:'f_{1,2}', definition:'One-year forward rate starting in year 1 (the implied year-2 rate)'}
  ],
  intuition:'No-arbitrage: investing for 2 years at s₂ must equal investing 1 year at s₁ then rolling over at the forward rate f₁,₂. Forward rates are the market\'s "implied forecast" of future short rates (under Pure Expectations Theory).'
},
{
  id:'f011',
  topic:'W2-Bonds',
  name:'Modified Duration (Price Sensitivity)',
  latex:'\\frac{\\Delta P}{P} \\approx -D^* \\times \\Delta y',
  variables:[
    {symbol:'D^*', definition:'Modified duration = Macaulay Duration / (1+y/m); measured in years'},
    {symbol:'\\Delta y', definition:'Change in yield (e.g., 0.01 = 100 basis points)'},
    {symbol:'\\Delta P/P', definition:'Percentage change in bond price'}
  ],
  intuition:'Duration is the bond\'s price elasticity to yield changes. A 5-year modified duration means a 1% yield rise causes ≈5% price fall. Longer maturity and lower coupon → higher duration → more interest rate risk. Convexity corrects for the curvature that duration misses.'
},

/* ── WEEK 2: STOCKS ─────────────────────────────────────────── */
{
  id:'f012',
  topic:'W2-Stocks',
  name:'Dividend Discount Model (Gordon Growth)',
  latex:'P_0 = \\frac{D_1}{r_E - g}',
  variables:[
    {symbol:'P_0', definition:'Intrinsic stock price today'},
    {symbol:'D_1', definition:'Expected dividend one period from now = D_0 × (1+g)'},
    {symbol:'r_E', definition:'Required return on equity (cost of equity)'},
    {symbol:'g', definition:'Perpetual constant dividend growth rate; g = ROE × b (retention ratio)'}
  ],
  intuition:'Stock price = PV of all future dividends as a growing perpetuity. The denominator (r_E − g) amplifies: a small change in g dramatically affects P₀, making DDM sensitive to growth assumptions. Only valid when r_E > g.'
},
{
  id:'f013',
  topic:'W2-Stocks',
  name:'Sustainable Growth Rate',
  latex:'g = ROE \\times b',
  variables:[
    {symbol:'g', definition:'Sustainable growth rate — how fast dividends and earnings can grow given current ROE and retention'},
    {symbol:'ROE', definition:'Return on equity = Net Income / Book Equity'},
    {symbol:'b', definition:'Retention (plowback) ratio = 1 − dividend payout ratio'}
  ],
  intuition:'The firm can only grow as fast as it earns on reinvested capital. If ROE=15% and it retains 40%, g=6%. If ROE < cost of equity, growth destroys value — pay out more instead of reinvesting.'
},
{
  id:'f014',
  topic:'W2-Stocks',
  name:'NPVGO Decomposition',
  latex:'P_0 = \\frac{EPS_1}{r_E} + NPVGO',
  variables:[
    {symbol:'EPS_1', definition:'Expected earnings per share next period'},
    {symbol:'r_E', definition:'Required return on equity'},
    {symbol:'EPS_1 / r_E', definition:'No-growth value: stock price if all earnings paid as dividends forever'},
    {symbol:'NPVGO', definition:'Net present value of growth opportunities — value from reinvesting earnings above the cost of capital'}
  ],
  intuition:'Stock price = value of existing assets (as a bond-like perpetuity) + value of future investment opportunities. NPVGO > 0 only when ROE > r_E. Tech stocks derive most value from NPVGO; utility stocks from EPS/r_E.'
},
{
  id:'f015',
  topic:'W2-Stocks',
  name:'P/E Ratio and Growth',
  latex:'\\frac{P_0}{EPS_1} = \\frac{1 - b}{r_E - g} = \\frac{1}{r_E} + \\frac{NPVGO}{EPS_1}',
  variables:[
    {symbol:'P_0/EPS_1', definition:'Forward P/E ratio'},
    {symbol:'b', definition:'Retention ratio'},
    {symbol:'r_E', definition:'Required return on equity'},
    {symbol:'g', definition:'Sustainable growth rate = ROE × b'}
  ],
  intuition:'High-P/E stocks are either low-risk (low r_E) or high-growth (large NPVGO). A P/E of 25 at r_E=8% implies NPVGO = 25 − 1/0.08 = 25 − 12.5 = 12.5×EPS from growth. P/E alone doesn\'t tell you if a stock is cheap.'
},

/* ── WEEK 3: CAPITAL BUDGETING ──────────────────────────────── */
{
  id:'f016',
  topic:'W3-Rules',
  name:'Net Present Value',
  latex:'NPV = -C_0 + \\sum_{t=1}^{T} \\frac{FCF_t}{(1+WACC)^t}',
  variables:[
    {symbol:'C_0', definition:'Initial investment (outflow at t=0)'},
    {symbol:'FCF_t', definition:'Free cash flow at time t — the incremental after-tax cash flow from the project'},
    {symbol:'WACC', definition:'Weighted average cost of capital — risk-adjusted discount rate'},
    {symbol:'T', definition:'Project life in periods'}
  ],
  intuition:'NPV measures value added in today\'s pounds. NPV > 0 → accept (earns more than cost of capital). NPV is the only investment rule that always maximises shareholder wealth. All other rules (IRR, payback) are approximations or proxies.'
},
{
  id:'f017',
  topic:'W3-Rules',
  name:'Internal Rate of Return',
  latex:'0 = -C_0 + \\sum_{t=1}^{T} \\frac{FCF_t}{(1+IRR)^t}',
  variables:[
    {symbol:'IRR', definition:'Discount rate at which NPV = 0; the project\'s "own" rate of return'},
    {symbol:'C_0', definition:'Initial investment'},
    {symbol:'FCF_t', definition:'Free cash flow at time t'}
  ],
  intuition:'IRR is the break-even discount rate. Accept if IRR > WACC (equivalent to NPV > 0 for normal cash flows). Fails for: multiple sign changes (multiple IRRs), mutually exclusive projects (wrong ranking), and when reinvestment at IRR is unrealistic.'
},
{
  id:'f018',
  topic:'W3-Rules',
  name:'Profitability Index',
  latex:'PI = \\frac{NPV + C_0}{C_0} = 1 + \\frac{NPV}{C_0}',
  variables:[
    {symbol:'PI', definition:'Profitability index — NPV per pound of initial investment'},
    {symbol:'NPV', definition:'Net present value of the project'},
    {symbol:'C_0', definition:'Initial capital outlay'}
  ],
  intuition:'PI ranks projects by value created per pound spent. Critical under capital rationing where budget is limited. PI > 1 ↔ NPV > 0. Correct ranking for divisible projects under a single-period budget constraint.'
},
{
  id:'f019',
  topic:'W3-Rules',
  name:'Equivalent Annual Cost (EAC)',
  latex:'EAC = \\frac{NPV_{costs}}{PVIFA(r, t)}',
  variables:[
    {symbol:'EAC', definition:'Equivalent annual cost — annual cost of owning/operating the asset over its life'},
    {symbol:'NPV_{costs}', definition:'PV of all costs (purchase, maintenance, salvage) over the asset\'s life'},
    {symbol:'PVIFA(r,t)', definition:'Present value interest factor of annuity at rate r for t periods'}
  ],
  intuition:'Converts a lump-sum PV of costs into a level annual charge. Used to compare machines with different lives without the "common life" assumption. Always choose the machine with the lower EAC — it\'s cheaper per year on a like-for-like basis.'
},

/* ── WEEK 3: FREE CASH FLOWS ─────────────────────────────── */
{
  id:'f020',
  topic:'W3-CashFlows',
  name:'Free Cash Flow (Full Formula)',
  latex:'FCF = EBIT(1-T_c) - \\Delta NWC - Net\\ CAPEX',
  variables:[
    {symbol:'EBIT(1-T_c)', definition:'After-tax operating profit = NOPAT (adds back depreciation effect since EBIT is after depreciation)'},
    {symbol:'\\Delta NWC', definition:'Change in net working capital = change in (current assets − current liabilities); positive = cash used'},
    {symbol:'Net\\ CAPEX', definition:'Net capital expenditure = gross capex − depreciation (or: ending PPE − beginning PPE)'}
  ],
  intuition:'FCF is cash generated for ALL capital providers (debt + equity), before financing payments. Unlike net income, FCF ignores non-cash charges and financing. A firm can have positive net income but negative FCF if investing heavily in working capital or fixed assets.'
},
{
  id:'f021',
  topic:'W3-CashFlows',
  name:'Operating Cash Flow (OCF)',
  latex:'OCF = EBIT(1-T_c) + Depreciation',
  variables:[
    {symbol:'EBIT', definition:'Earnings before interest and taxes'},
    {symbol:'T_c', definition:'Corporate tax rate'},
    {symbol:'Depreciation', definition:'Non-cash charge added back (it reduced EBIT but was not a cash outflow)'}
  ],
  intuition:'The "tax shield" formulation: OCF = Sales×(1−T) − Cash Costs×(1−T) + T×Dep. Depreciation saves taxes worth T×Dep each year. This is why accelerated depreciation incentivises investment — front-loading the tax shield increases PV.'
},
{
  id:'f022',
  topic:'W3-CashFlows',
  name:'Depreciation Tax Shield',
  latex:'PV(DTS) = T_c \\times \\frac{Dep}{r}',
  variables:[
    {symbol:'T_c', definition:'Corporate tax rate'},
    {symbol:'Dep', definition:'Annual depreciation (straight-line perpetuity assumed for simplicity)'},
    {symbol:'r', definition:'Discount rate'}
  ],
  intuition:'Each year the firm deducts Dep from taxable income, saving T_c×Dep in tax. For a perpetuity: PV = T_c×Dep/r. For a finite life project, use PV of annuity instead. The higher the tax rate and the faster the depreciation, the more valuable the shield.'
},

/* ── WEEK 4: RISK & CAPM ──────────────────────────────────── */
{
  id:'f023',
  topic:'W4-Risk',
  name:'Portfolio Expected Return',
  latex:'E[R_p] = \\sum_{i=1}^{N} w_i E[R_i]',
  variables:[
    {symbol:'w_i', definition:'Portfolio weight of asset i (fraction of total portfolio value); weights sum to 1'},
    {symbol:'E[R_i]', definition:'Expected return on asset i'}
  ],
  intuition:'Portfolio expected return is simply the weighted average of individual expected returns. No diversification benefit here — diversification helps with risk (variance), not with expected return directly.'
},
{
  id:'f024',
  topic:'W4-Risk',
  name:'Two-Asset Portfolio Variance',
  latex:'\\sigma_p^2 = w_1^2\\sigma_1^2 + w_2^2\\sigma_2^2 + 2w_1 w_2 \\sigma_1 \\sigma_2 \\rho_{12}',
  variables:[
    {symbol:'w_1, w_2', definition:'Portfolio weights of assets 1 and 2'},
    {symbol:'\\sigma_1, \\sigma_2', definition:'Standard deviations of assets 1 and 2'},
    {symbol:'\\rho_{12}', definition:'Correlation coefficient between assets 1 and 2 (−1 ≤ ρ ≤ 1)'},
    {symbol:'\\sigma_p^2', definition:'Portfolio variance'}
  ],
  intuition:'The cross term (2w₁w₂σ₁σ₂ρ) captures comovement. If ρ < 1, portfolio variance < weighted average variance → diversification benefit. If ρ = −1: minimum variance portfolio can achieve σ_p = 0. If ρ = +1: no diversification benefit.'
},
{
  id:'f025',
  topic:'W4-Risk',
  name:'CAPM Expected Return',
  latex:'E[R_i] = R_f + \\beta_i \\times (E[R_m] - R_f)',
  variables:[
    {symbol:'E[R_i]', definition:'Expected return on security i'},
    {symbol:'R_f', definition:'Risk-free rate (e.g., 3-month T-bill)'},
    {symbol:'\\beta_i', definition:'Beta of security i — systematic risk relative to the market portfolio'},
    {symbol:'E[R_m] - R_f', definition:'Market risk premium (MRP) — historical average ≈ 5–7% in UK/US'}
  ],
  intuition:'CAPM says: expected return = compensation for time (R_f) + compensation for risk (β × MRP). Only beta (systematic risk) is priced — idiosyncratic risk is free to diversify away. The Security Market Line plots E[R] vs β as a straight line.'
},
{
  id:'f026',
  topic:'W4-Risk',
  name:'Beta Definition',
  latex:'\\beta_i = \\frac{Cov(R_i, R_m)}{Var(R_m)} = \\frac{\\sigma_{iM}}{\\sigma_M^2}',
  variables:[
    {symbol:'Cov(R_i, R_m)', definition:'Covariance of stock i\'s return with the market return'},
    {symbol:'Var(R_m)', definition:'Variance of the market return'},
    {symbol:'\\sigma_{iM}', definition:'Covariance between stock i and the market'}
  ],
  intuition:'Beta measures how much stock i moves per unit of market movement. β=1: moves with market. β=2: amplifies market moves (e.g., leveraged equity). β=0: uncorrelated with market (like gold sometimes). β can be negative (e.g., gold, volatility products) — provides insurance, hence commanded low/negative return premium.'
},
{
  id:'f027',
  topic:'W4-CAPM',
  name:'Beta Levering (Hamada Equation)',
  latex:'\\beta_L = \\beta_U \\left[1 + (1-T_c) \\frac{D}{E}\\right]',
  variables:[
    {symbol:'\\beta_L', definition:'Levered beta — beta of equity in the actual capital structure'},
    {symbol:'\\beta_U', definition:'Unlevered beta (asset beta) — beta if firm were all-equity financed'},
    {symbol:'T_c', definition:'Corporate tax rate'},
    {symbol:'D/E', definition:'Debt-to-equity ratio (market values)'}
  ],
  intuition:'Financial leverage amplifies equity risk. Even if business risk (β_U) is fixed, equity holders bear the residual: as D rises, equity holders face magnified swings. The (1−T_c) factor accounts for the fact that the tax shield partially offsets leverage risk. To compare betas across firms with different leverage, always unlever first.'
},
{
  id:'f028',
  topic:'W4-CAPM',
  name:'Unlevering Beta',
  latex:'\\beta_U = \\frac{\\beta_L}{1 + (1-T_c) \\frac{D}{E}}',
  variables:[
    {symbol:'\\beta_L', definition:'Observed (levered) equity beta from market data'},
    {symbol:'T_c', definition:'Corporate tax rate'},
    {symbol:'D/E', definition:'Current debt-to-equity ratio at market values'}
  ],
  intuition:'Strip out financial leverage to find the pure business risk. Used when evaluating a new project in a different industry: find comparable pure-play firms, unlever their betas, average them, then re-lever at your target capital structure.'
},

/* ── WEEK 4: WACC ─────────────────────────────────────────── */
{
  id:'f029',
  topic:'W4-CAPM',
  name:'WACC (Weighted Average Cost of Capital)',
  latex:'WACC = \\frac{E}{V} r_E + \\frac{D}{V} r_D (1 - T_c)',
  variables:[
    {symbol:'E/V', definition:'Equity as fraction of total firm value (market value weights)'},
    {symbol:'D/V', definition:'Debt as fraction of total firm value (market value weights)'},
    {symbol:'r_E', definition:'Cost of equity (from CAPM or DDM)'},
    {symbol:'r_D', definition:'Pre-tax cost of debt (YTM on outstanding debt)'},
    {symbol:'T_c', definition:'Corporate tax rate — (1−T_c) captures the tax deductibility of interest'},
    {symbol:'V', definition:'Total firm value = E + D (market values)'}
  ],
  intuition:'WACC is the blended, after-tax required return on ALL capital. It\'s used to discount FCF (which is pre-financing). The tax shield appears via (1−T_c): each pound of interest saves T_c in corporate tax, reducing the effective cost of debt. Always use MARKET VALUE weights, not book value.'
},

/* ── WEEK 5: MM PROPOSITIONS ────────────────────────────── */
{
  id:'f030',
  topic:'W5-MM',
  name:'MM Proposition I (No Tax)',
  latex:'V_L = V_U',
  variables:[
    {symbol:'V_L', definition:'Value of levered firm (with debt)'},
    {symbol:'V_U', definition:'Value of unlevered firm (all-equity)'}
  ],
  intuition:'In perfect markets (no taxes, no bankruptcy costs, no information asymmetry), capital structure is irrelevant. The firm\'s total value = PV of operating cash flows; HOW you slice it between debt and equity doesn\'t change the pie size.'
},
{
  id:'f031',
  topic:'W5-MM',
  name:'MM Proposition I (With Corporate Tax)',
  latex:'V_L = V_U + T_c \\times D',
  variables:[
    {symbol:'V_L', definition:'Value of levered firm'},
    {symbol:'V_U', definition:'Value of unlevered firm'},
    {symbol:'T_c', definition:'Corporate tax rate'},
    {symbol:'D', definition:'Market value of outstanding debt (assumed permanent)'}
  ],
  intuition:'Debt generates an annual interest tax shield = T_c × r_D × D. Capitalised as a perpetuity (discounting at r_D): PV = T_c × D. Every pound of debt adds T_c pence in value. Implies 100% debt is optimal — motivates Trade-Off Theory to add distress costs.'
},
{
  id:'f032',
  topic:'W5-MM',
  name:'MM Proposition II (No Tax)',
  latex:'r_E = r_0 + (r_0 - r_D) \\frac{D}{E}',
  variables:[
    {symbol:'r_E', definition:'Required return on levered equity'},
    {symbol:'r_0', definition:'Required return on unlevered equity (or assets) — the WACC in no-tax world'},
    {symbol:'r_D', definition:'Required return on debt (cost of debt)'},
    {symbol:'D/E', definition:'Debt-to-equity ratio'}
  ],
  intuition:'As the firm takes on debt, equity becomes riskier (residual claimant). Equity holders demand more return. But the WACC stays constant at r_0 — the cheaper debt is exactly offset by more expensive equity. There is no free lunch from leverage in a no-tax world.'
},
{
  id:'f033',
  topic:'W5-MM',
  name:'MM Proposition II (With Corporate Tax)',
  latex:'r_E = r_0 + (r_0 - r_D)(1-T_c)\\frac{D}{E}',
  variables:[
    {symbol:'r_E', definition:'Required return on levered equity (with taxes)'},
    {symbol:'r_0', definition:'Unlevered cost of equity'},
    {symbol:'r_D', definition:'Cost of debt'},
    {symbol:'T_c', definition:'Corporate tax rate'},
    {symbol:'D/E', definition:'Debt-to-equity ratio'}
  ],
  intuition:'The slope of r_E vs D/E is (r_0 − r_D)(1−T_c) — flatter than the no-tax slope. Taxes absorb some of the leverage risk. WACC falls as leverage rises (cheaper net-of-tax debt partially offsets rising r_E). Differs from no-tax: now there IS a benefit from leverage through the tax shield.'
},
{
  id:'f034',
  topic:'W5-MM',
  name:'WACC with Tax Shield (MM)',
  latex:'WACC = r_0 \\left(1 - T_c \\frac{D}{V_L}\\right)',
  variables:[
    {symbol:'r_0', definition:'Unlevered cost of equity (would be WACC with zero debt)'},
    {symbol:'T_c', definition:'Corporate tax rate'},
    {symbol:'D/V_L', definition:'Leverage ratio (debt as fraction of total levered firm value)'}
  ],
  intuition:'This MM-derived WACC falls as leverage rises, reflecting the tax shield benefit. At D=0: WACC=r_0. At D=V_L (100% debt): WACC=r_0×(1−T_c). Contrasts with Trade-Off Theory WACC, which has a U-shape due to distress costs pushing WACC up at high leverage.'
},

/* ── WEEK 5: TRADE-OFF & BEYOND ─────────────────────────── */
{
  id:'f035',
  topic:'W5-Limits',
  name:'Trade-Off Theory Value',
  latex:'V_L = V_U + PV(Tax\\ Shield) - PV(Distress\\ Costs)',
  variables:[
    {symbol:'V_U', definition:'Unlevered firm value'},
    {symbol:'PV(Tax\\ Shield)', definition:'Present value of all expected future interest tax shields'},
    {symbol:'PV(Distress\\ Costs)', definition:'PV of expected financial distress and bankruptcy costs (direct + indirect)'}
  ],
  intuition:'Firms balance the marginal benefit of the tax shield (rises with D) against the rising probability and cost of financial distress (also rises with D). Optimal leverage is where marginal tax benefit = marginal distress cost — the interior maximum of V_L.'
},
{
  id:'f036',
  topic:'W5-Limits',
  name:'APV (Adjusted Present Value)',
  latex:'APV = NPV_U + PV(Side\\ Effects)',
  variables:[
    {symbol:'NPV_U', definition:'NPV of project discounted at unlevered cost r_0 (as if all-equity financed)'},
    {symbol:'PV(Side\\ Effects)', definition:'PV of all financing side effects, primarily PV(tax shield) = T_c×D for perpetual debt'}
  ],
  intuition:'APV separates investment value from financing value. Useful when capital structure changes over time (e.g., LBOs with debt amortisation), when the debt schedule is fixed rather than proportional to value. If D/V constant, APV and WACC give identical results.'
},
{
  id:'f037',
  topic:'W5-Limits',
  name:'DuPont ROE Identity',
  latex:'ROE = \\underbrace{\\frac{NI}{Sales}}_{Profit\\ Margin} \\times \\underbrace{\\frac{Sales}{Assets}}_{Asset\\ Turnover} \\times \\underbrace{\\frac{Assets}{Equity}}_{Equity\\ Multiplier}',
  variables:[
    {symbol:'NI/Sales', definition:'Net profit margin — how much of each revenue pound becomes profit'},
    {symbol:'Sales/Assets', definition:'Asset turnover — revenue generated per pound of assets; efficiency measure'},
    {symbol:'Assets/Equity', definition:'Equity multiplier = 1 + D/E; leverage factor — amplifies ROE but increases risk'}
  ],
  intuition:'DuPont decomposes ROE into three drivers: profitability, efficiency, leverage. A firm can achieve high ROE via any combination. Two firms with identical ROE may have very different risk profiles: a retailer achieves it via turnover; a bank via leverage. Comparing individual DuPont components reveals whether ROE improvement is sustainable.'
},

/* ── CROSS-TOPIC ─────────────────────────────────────────── */
{
  id:'f038',
  topic:'W4-CAPM',
  name:'Sharpe Ratio',
  latex:'Sharpe = \\frac{E[R_p] - R_f}{\\sigma_p}',
  variables:[
    {symbol:'E[R_p]', definition:'Expected portfolio return'},
    {symbol:'R_f', definition:'Risk-free rate'},
    {symbol:'\\sigma_p', definition:'Portfolio standard deviation (total risk)'}
  ],
  intuition:'Excess return per unit of TOTAL risk. Used to compare mutual funds and portfolios. The tangency portfolio on the efficient frontier (with risk-free asset) has the highest Sharpe Ratio of all risky portfolios. The CML has slope = Sharpe Ratio of the market portfolio.'
},
{
  id:'f039',
  topic:'W4-Risk',
  name:'Capital Market Line (CML)',
  latex:'E[R_p] = R_f + \\frac{E[R_m]-R_f}{\\sigma_m} \\sigma_p',
  variables:[
    {symbol:'R_f', definition:'Risk-free rate'},
    {symbol:'E[R_m]', definition:'Expected market return'},
    {symbol:'\\sigma_m', definition:'Standard deviation of market portfolio'},
    {symbol:'\\sigma_p', definition:'Standard deviation of the efficient portfolio'}
  ],
  intuition:'The CML describes ALL efficient portfolios (risk-free + tangency portfolio combinations). Any portfolio ON the CML is efficient; most funds plot BELOW it. The SML (CAPM) describes individual assets/portfolios using beta (systematic risk), not total risk.'
},
{
  id:'f040',
  topic:'W3-CashFlows',
  name:'WACC (Full 5-Step)',
  latex:'WACC = \\frac{E}{V}r_E + \\frac{D}{V}r_D(1-T_c) + \\frac{P}{V}r_P',
  variables:[
    {symbol:'E/V, D/V, P/V', definition:'Market value weights: equity, debt, preferred stock as fractions of total capital'},
    {symbol:'r_E', definition:'Cost of equity (CAPM or DDM)'},
    {symbol:'r_D', definition:'Pre-tax cost of debt (YTM)'},
    {symbol:'r_P', definition:'Cost of preferred stock (usually Div_P / P_P)'},
    {symbol:'T_c', definition:'Corporate tax rate (applies only to debt, not preferred)'}
  ],
  intuition:'The full WACC includes all capital sources. Preferred dividends are NOT tax-deductible (unlike interest), so no (1−T_c) on preferred. All weights must sum to 1. Always use MARKET values for weights — book values overweight old cheap debt and underweight equity for growing firms.'
}

]; // end FORMULA_DATA
