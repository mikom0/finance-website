/* ================================================================
   FLASHCARD DATA — 210+ cards across all 10 topics
   Format: { id, topic, difficulty, front, back }
   Topics: W1-Finance | W1-TVM | W2-Bonds | W2-Stocks |
           W3-CashFlows | W3-Rules | W4-Risk | W4-CAPM |
           W5-MM | W5-Limits
   Difficulties: Foundational | Applied | Exam-Standard
   ================================================================ */

const FLASHCARD_DATA = [

  /* ══════════════════════════════════════════════════════════════
     WEEK 1A — CORPORATE FINANCE & RATIO ANALYSIS
  ══════════════════════════════════════════════════════════════ */
  {
    id:'fc001', topic:'W1-Finance', difficulty:'Foundational',
    front:'What are the two core decisions in corporate finance?',
    back:'<b>1. Investment Decision</b> (capital budgeting): which long-term projects to undertake — evaluated via projected FCF and a discount rate; accept if NPV > 0.<br><br><b>2. Financing Decision</b> (capital structure): how to fund those investments — via equity, debt, or hybrid instruments.<br><br>These are analytically <span class="highlight">separable</span> (Separating Principle).'
  },
  {
    id:'fc002', topic:'W1-Finance', difficulty:'Foundational',
    front:'What does the "pie analogy" tell us about investment vs. financing?',
    back:'<b>Investment decision = grows the pie.</b> Taking positive-NPV projects adds value equal to NPV — the pie gets bigger.<br><br><b>Financing decision = slices the pie.</b> Capital structure just divides existing cash flows between debt holders and equity holders — it doesn\'t grow them (in perfect markets).'
  },
  {
    id:'fc003', topic:'W1-Finance', difficulty:'Foundational',
    front:'What is the balance sheet mapping to investment/financing?',
    back:'<b>Left side (Assets)</b> = Invested Capital = NWC + Long-term assets<br><br><b>Right side (Claims)</b> = Capital providers = Long-term debt + Equity<br><br>The left shows WHERE capital is deployed; the right shows WHERE it came from. Both sides must balance: Assets = Debt + Equity.'
  },
  {
    id:'fc004', topic:'W1-Finance', difficulty:'Foundational',
    front:'Primary vs. secondary financial markets — what is the key difference?',
    back:'<b>Primary market:</b> firm issues new securities (IPO, bond issuance) — firm receives the proceeds.<br><br><b>Secondary market:</b> investors trade existing securities among themselves — firm receives NO proceeds, but secondary markets are essential for <span class="highlight">liquidity</span>, which reduces the cost of capital in primary markets.'
  },
  {
    id:'fc005', topic:'W1-Finance', difficulty:'Foundational',
    front:'Why is depreciation added back in cash flow calculations?',
    back:'Depreciation is a <span class="highlight">non-cash charge</span> — it reduces reported accounting profit but no cash leaves the firm.<br><br>For DCF/FCF, we care about actual cash. So:<br>OCF = EBIT×(1−t) + Depreciation<br><br>EBITDA strips depreciation out for the same reason — it\'s a better proxy for operating cash generation than EBIT.'
  },
  {
    id:'fc006', topic:'W1-Finance', difficulty:'Foundational',
    front:'Current Ratio — formula and what it measures',
    back:'<b>Current Ratio = Current Assets / Current Liabilities</b><br><br>Worked example: 761/486 = <span class="highlight">1.63</span><br><br>Measures short-term liquidity — can the firm pay its near-term obligations? A ratio above 1 means CA exceeds CL. Too low = liquidity risk; too high = inefficient use of working capital.'
  },
  {
    id:'fc007', topic:'W1-Finance', difficulty:'Foundational',
    front:'Quick Ratio — formula and how it differs from Current Ratio',
    back:'<b>Quick Ratio = (Current Assets − Inventory) / Current Liabilities</b><br><br>Worked: (761 − 269)/486 = <span class="highlight">1.01</span><br><br>Excludes inventory because inventory may not be quickly convertible to cash. More conservative liquidity measure. Also called the "acid test ratio".'
  },
  {
    id:'fc008', topic:'W1-Finance', difficulty:'Foundational',
    front:'Cash Ratio formula and interpretation',
    back:'<b>Cash Ratio = Cash / Current Liabilities</b><br><br>Worked: 140/486 = <span class="highlight">0.29</span><br><br>Most conservative liquidity measure — only counts actual cash (and near-cash equivalents). A firm could have a healthy current ratio but a very low cash ratio if most CA are tied up in receivables and inventory.'
  },
  {
    id:'fc009', topic:'W1-Finance', difficulty:'Applied',
    front:'Debt/Assets and Debt/Equity leverage ratios — formulas and worked values',
    back:'<b>Debt/Assets</b> = Total Debt / Total Assets = (486+588)/1879 = <span class="highlight">57%</span><br><br><b>Debt/Equity</b> = Total Debt / Equity = (486+588)/805 = <span class="highlight">133%</span><br><br>Higher ratios = higher financial leverage = more risk for equity holders and more interest burden. Watch for: use TOTAL debt (current + long-term), not just long-term.'
  },
  {
    id:'fc010', topic:'W1-Finance', difficulty:'Applied',
    front:'Interest Coverage Ratio — formula and interpretation',
    back:'<b>Interest Coverage = EBIT / Interest Expense</b><br><br>Worked: 219/49 = <span class="highlight">4.5×</span><br><br>Measures how many times over the firm can cover its interest from operating earnings. Below 1.5× is dangerous — the firm struggles to service debt from operations. Often called "times interest earned."'
  },
  {
    id:'fc011', topic:'W1-Finance', difficulty:'Applied',
    front:'Inventory Turnover — formula, worked value, and days conversion',
    back:'<b>Inventory Turnover = COGS / Inventory</b> = 1655/269 = <span class="highlight">6.2×</span><br><br><b>Days Inventory = 365 / Inventory Turnover</b> = 365/6.2 = <span class="highlight">59 days</span><br><br>How quickly the firm sells its stock. Low turnover = slow-moving inventory (cash tied up). Use COGS (not revenue) in numerator.'
  },
  {
    id:'fc012', topic:'W1-Finance', difficulty:'Applied',
    front:'Receivables Turnover and Days Receivable',
    back:'<b>Receivables Turnover = Revenue / Accounts Receivable</b> = 2262/294 = <span class="highlight">7.7×</span><br><br><b>Days Receivable = 365 / 7.7</b> = <span class="highlight">47 days</span><br><br>How quickly customers pay. Longer collection period = more cash tied up in receivables. Compare to industry norms and to the firm\'s own payment terms.'
  },
  {
    id:'fc013', topic:'W1-Finance', difficulty:'Applied',
    front:'Total Asset Turnover — formula and interpretation',
    back:'<b>Total Asset Turnover = Revenue / Total Assets</b> = 2262/1879 = <span class="highlight">1.2×</span><br><br>How efficiently the firm uses its total asset base to generate revenue. Low-turnover industries (e.g. capital-intensive manufacturing) often compensate with high margins. High-turnover industries (retail, fast food) survive on thin margins.'
  },
  {
    id:'fc014', topic:'W1-Finance', difficulty:'Applied',
    front:'ROA, ROE, ROI — formulas and worked values',
    back:'<b>ROA = Net Income / Total Assets</b> = 86/1879 = <span class="highlight">4.6%</span><br><br><b>ROE = Net Income / Equity</b> = 86/805 = <span class="highlight">10.7%</span><br><br><b>ROI = EBIT / Invested Capital</b> = 219/(873+761−486) = <span class="highlight">15.7%</span><br><br>ROI uses EBIT (pre-interest, pre-tax) and invested capital (fixed assets + NWC) — measures pure business return independently of capital structure.'
  },
  {
    id:'fc015', topic:'W1-Finance', difficulty:'Applied',
    front:'DuPont Identity — formula and three drivers of ROE',
    back:'<b>ROE = Profit Margin × Asset Turnover × Financial Leverage</b><br>= (NI/Sales) × (Sales/Assets) × (Assets/Equity)<br><br>Worked: 3.8% × 1.2 × 2.33 = <span class="highlight">10.7%</span> ✓<br><br>Also: ROE = ROA × (1 + D/E)<br><br><b>Three drivers:</b><br>1. Operating efficiency (profit margin)<br>2. Asset use efficiency (turnover)<br>3. Capital structure leverage'
  },
  {
    id:'fc016', topic:'W1-Finance', difficulty:'Exam-Standard',
    front:'Profitability-turnover trade-off — what is it and why does it arise?',
    back:'<b>High barriers to entry</b> → large asset bases required (low turnover) + pricing power (high margins). E.g. pharmaceutical, luxury brands.<br><br><b>Low barriers to entry</b> → lean balance sheets (high turnover) + compressed margins due to competition. E.g. discount retail.<br><br>DuPont shows these two effects can offset each other in ROA — a firm can achieve similar ROA through either route.'
  },
  {
    id:'fc017', topic:'W1-Finance', difficulty:'Applied',
    front:'Cash Conversion Cycle (CCC) — formula and significance',
    back:'<b>CCC = Days Inventory + Days Receivable − Days Payable</b><br><br>= 59 + 47 − 47 = <span class="highlight">59 days</span><br><br>The number of days cash is tied up in the operating cycle before being recovered. Shorter CCC = more efficient. Growing NWC is a real <span class="highlight">cash drain</span> — a profitable business can fail if NWC growth outpaces available funding.'
  },
  {
    id:'fc018', topic:'W1-Finance', difficulty:'Foundational',
    front:'What is ROS (Return on Sales / Profit Margin)?',
    back:'<b>Profit Margin (ROS) = Net Income / Revenue</b> = 86/2262 = <span class="highlight">3.8%</span><br><br>Measures how much of each £ of revenue becomes profit after all expenses. Affected by: pricing power, cost control, tax rate, interest burden. Used in DuPont as the "operating efficiency" component.'
  },

  /* ══════════════════════════════════════════════════════════════
     WEEK 1B — TIME VALUE OF MONEY
  ══════════════════════════════════════════════════════════════ */
  {
    id:'fc019', topic:'W1-TVM', difficulty:'Foundational',
    front:'Why is £1 today worth more than £1 in the future? (3 reasons)',
    back:'1. <span class="highlight">Inflation</span> — purchasing power of money erodes over time<br>2. <span class="highlight">Opportunity cost</span> — £1 today can be invested to earn a return<br>3. <span class="highlight">Risk</span> — a promise of future payment may not be honoured<br><br>Therefore, cash flows at different times cannot be directly compared — you must compound or discount to a common date.'
  },
  {
    id:'fc020', topic:'W1-TVM', difficulty:'Foundational',
    front:'Future Value formula — multi-period',
    back:'<b>FV = C₀ × (1+r)^T</b><br><br>Where: C₀ = cash flow today, r = rate per period, T = number of periods<br><br>Example: £100 at 10% for 5 years → FV = 100 × (1.10)⁵ = <span class="highlight">£161.05</span><br><br>Vs. simple interest: £100 + 5×£10 = £150 — compound interest earns £11.05 more (the compounding effect).'
  },
  {
    id:'fc021', topic:'W1-TVM', difficulty:'Foundational',
    front:'Present Value formula and solving for r',
    back:'<b>PV = C_T / (1+r)^T</b><br><br>Divides future cash flow by the compound discount factor.<br><br><b>Solving for r:</b> r = (FV/PV)^(1/T) − 1<br><br>Example: PV = £100, FV = £161.05, T = 5 → r = (161.05/100)^(0.2) − 1 = <span class="highlight">10%</span>'
  },
  {
    id:'fc022', topic:'W1-TVM', difficulty:'Applied',
    front:'Sub-annual compounding and EAR — formulas',
    back:'<b>Sub-annual FV</b> = C₀ × (1 + r/m)^(m×T)<br>where m = compounding periods per year<br><br><b>EAR</b> = (1 + r/m)^m − 1<br><br>Example: 12% nominal, semi-annual (m=2):<br>EAR = (1.06)² − 1 = <span class="highlight">12.36%</span><br><br>EAR > nominal whenever m > 1. The more frequent the compounding, the higher the EAR. Key rule: <span class="highlight">match rate and period units</span>.'
  },
  {
    id:'fc023', topic:'W1-TVM', difficulty:'Foundational',
    front:'Perpetuity PV formula',
    back:'<b>PV = C / r</b><br><br>Conditions: constant cash flow C, paid forever, discount rate r.<br><br>Derivation: PV = C/(1+r) + C/(1+r)² + ... = C/r (geometric series)<br><br>Example: £50/yr forever at r=5% → PV = 50/0.05 = <span class="highlight">£1,000</span>'
  },
  {
    id:'fc024', topic:'W1-TVM', difficulty:'Applied',
    front:'Growing Perpetuity PV formula — formula and key condition',
    back:'<b>PV = C₁ / (r − g)</b><br><br>Where C₁ = first cash flow (one period from now), g = constant growth rate, r = discount rate<br><br><b>Key condition: r > g</b> (otherwise PV is infinite)<br>g cannot permanently exceed economy-wide growth — conceptually bounded.<br><br>Example: C₁=£10, g=3%, r=8% → PV = 10/(0.08−0.03) = <span class="highlight">£200</span>'
  },
  {
    id:'fc025', topic:'W1-TVM', difficulty:'Applied',
    front:'Annuity PV formula',
    back:'<b>PV = (C/r) × [1 − 1/(1+r)^T]</b><br><br>Constant cash flow C for T periods, discount rate r.<br><br>Think of it as: PV(perpetuity) − PV(perpetuity starting at T+1)<br>= C/r − C/r × 1/(1+r)^T<br><br>Example: £400/month, 7%/12 monthly rate, 36 months<br>PV = (400/0.005833) × [1−1/(1.005833)^36] = <span class="highlight">£13,147</span>'
  },
  {
    id:'fc026', topic:'W1-TVM', difficulty:'Applied',
    front:'Growing Annuity PV formula',
    back:'<b>PV = [C/(r−g)] × [1 − ((1+g)/(1+r))^T]</b><br><br>Growing cash flow C (first payment), growth rate g, for T periods.<br><br>Example: pension £20,000/yr growing 3%, 40 years, r=10%:<br>PV = [20000/(0.10−0.03)] × [1 − (1.03/1.10)^40]<br>= 285,714 × 0.929 = <span class="highlight">£265,311</span>'
  },
  {
    id:'fc027', topic:'W1-TVM', difficulty:'Exam-Standard',
    front:'Deferred growing perpetuity — the timing TRAP',
    back:'<b>PV = C/(r−g) gives the value ONE PERIOD BEFORE the first cash flow.</b><br><br>If first CF is at t=2: C/(r−g) gives value at t=1, not t=0.<br>Must discount one more period: PV₀ = [C/(r−g)] / (1+r)<br><br>Example: C=£15, g=5%, r=10%, first CF at t=2:<br>PV at t=1 = 15/0.05 = £300<br>PV at t=0 = 300/1.10 = <span class="highlight">£272.73</span><br><br><b>Always draw the timeline!</b>'
  },
  {
    id:'fc028', topic:'W1-TVM', difficulty:'Applied',
    front:'Mortgage example: £250,000 at 6% nominal semi-annual over 5 years',
    back:'Step 1: Semi-annual rate = 6%/2 = 3%<br>Step 2: 5 years × 2 = 10 periods<br>Step 3: Use annuity formula, solve for C:<br><br>250,000 = C/0.03 × [1 − 1/(1.03)^10]<br>250,000 = C × 8.5302<br><b>C = £29,307.60 per semester</b><br><br>Note: early payments are mostly interest; capital repayment accelerates in later periods — explains why balance barely falls in early years of a 25-year mortgage.'
  },
  {
    id:'fc029', topic:'W1-TVM', difficulty:'Foundational',
    front:'Nominal rate vs. EAR — which is "real" cost?',
    back:'<b>Nominal rate</b>: stated annual rate (may be compounded m times/year)<br><b>EAR</b>: effective annual rate — what you actually earn/pay per year<br><br>EAR = (1 + r_nom/m)^m − 1<br><br><b>EAR is the true cost</b> because it captures the compounding effect. Always use EAR for annual comparisons. Use monthly rate (r/12) when payments are monthly.'
  },
  {
    id:'fc030', topic:'W1-TVM', difficulty:'Foundational',
    front:'Perpetuity vs. Growing Perpetuity — when does each apply?',
    back:'<table style="font-size:0.85rem;width:100%"><tr><th>Type</th><th>Formula</th><th>Condition</th></tr><tr><td>Perpetuity</td><td>C/r</td><td>Constant C, infinite</td></tr><tr><td>Growing Perpetuity</td><td>C₁/(r−g)</td><td>r &gt; g, infinite</td></tr><tr><td>Annuity</td><td>(C/r)×[1−1/(1+r)^T]</td><td>Constant C, finite T</td></tr><tr><td>Growing Annuity</td><td>[C/(r−g)]×[1−((1+g)/(1+r))^T]</td><td>Growing C, finite T</td></tr></table>'
  },

  /* ══════════════════════════════════════════════════════════════
     WEEK 2 — BONDS
  ══════════════════════════════════════════════════════════════ */
  {
    id:'fc031', topic:'W2-Bonds', difficulty:'Foundational',
    front:'Key bond terms: Face Value, Coupon Rate, YTM, Maturity',
    back:'<b>Face/Par Value (F)</b>: amount repaid at maturity (typically £100 or £1,000)<br><b>Coupon Rate (c)</b>: annual interest as % of face; Coupon Payment = c × F<br><b>YTM (y)</b>: discount rate making NPV of bond = 0 — the bond\'s IRR<br><b>Maturity (T)</b>: years until repayment<br><br>US bonds: semi-annual coupons (halve rate, double periods)<br>European bonds: annual coupons'
  },
  {
    id:'fc032', topic:'W2-Bonds', difficulty:'Applied',
    front:'General bond pricing formula',
    back:'<b>P = (C/y) × [1 − 1/(1+y)^T] + F/(1+y)^T</b><br><br>= PV of annuity (coupon payments) + PV of ZCB (face value redemption)<br><br>Example: 10yr, 6.375% coupon, F=£100, y=5%:<br>P = (6.375/0.05)×[1−1/(1.05)^10] + 100/(1.05)^10<br>= 49.20 + 61.39 = <span class="highlight">£110.61</span> (premium bond ✓)'
  },
  {
    id:'fc033', topic:'W2-Bonds', difficulty:'Foundational',
    front:'Zero-coupon bond pricing formula',
    back:'<b>P = F / (1+y)^T</b><br><br>No intermediate coupons — just a single payment of F at maturity.<br><br>Solving for YTM: <b>y = (F/P)^(1/T) − 1</b><br><br>Example: 30-year ZCB, F=£100, y=6%:<br>P = 100/(1.06)^30 = <span class="highlight">£17.41</span><br><br>ZCBs have the highest duration and are most sensitive to interest rate changes.'
  },
  {
    id:'fc034', topic:'W2-Bonds', difficulty:'Foundational',
    front:'Price-yield relationship — three key rules',
    back:'1. <b>Inverse relationship:</b> when yield rises, price falls; when yield falls, price rises<br><br>2. <b>Par bond:</b> coupon rate = YTM → P = F (price equals face value)<br><br>3. <b>Premium bond:</b> coupon rate > YTM → P > F<br>   <b>Discount bond:</b> coupon rate < YTM → P < F<br><br><span class="highlight">Exam shortcut:</span> if asked whether price > or < par, just compare coupon rate to YTM — no calculation needed.'
  },
  {
    id:'fc035', topic:'W2-Bonds', difficulty:'Foundational',
    front:'YTM — what is it conceptually?',
    back:'YTM = the discount rate that sets the NPV of the bond investment = 0.<br><br>Equivalently, it\'s the bond\'s <span class="highlight">IRR</span>.<br><br><b>YTM ≠ expected return</b> because:<br>1. It assumes no default (credit risk ignored)<br>2. It assumes coupons reinvested at YTM (often not possible)<br><br>For coupon bonds: can\'t solve algebraically — requires trial and error or Excel. Exam will NOT ask you to solve algebraically for coupon bonds.'
  },
  {
    id:'fc036', topic:'W2-Bonds', difficulty:'Applied',
    front:'Spot rates — definition and how to extract them',
    back:'<b>Spot rate (r_T)</b>: rate agreed today for an investment starting <i>now</i> and maturing at time T. Extracted from zero-coupon government bond prices.<br><br><b>Formula:</b> r_T = (F/P)^(1/T) − 1<br><br>Used to price bonds via: P = C/(1+r₁) + C/(1+r₂)² + ... + (C+F)/(1+r_T)^T<br><br>Each cash flow is discounted at its <i>own</i> spot rate — more accurate than a single flat YTM.'
  },
  {
    id:'fc037', topic:'W2-Bonds', difficulty:'Applied',
    front:'Bond pricing with spot rates — worked example',
    back:'Given: r₁=3%, r₂=4%, r₃=5%; coupon=£4.50, F=£100<br><br>P = 4.50/(1.03) + 4.50/(1.04)² + 104.50/(1.05)³<br>= 4.369 + 4.157 + 90.24<br>= <span class="highlight">£98.77</span> (discount bond since coupon rate < spot rates)<br><br>Note: using a single flat YTM would give a slightly different (less accurate) price.'
  },
  {
    id:'fc038', topic:'W2-Bonds', difficulty:'Applied',
    front:'Forward rate formula — derive from no-arbitrage',
    back:'<b>No-arbitrage:</b> (1+s_{T+N})^{T+N} = (1+s_T)^T × (1+f_{T,T+N})^N<br><br><b>General:</b> f_{T,T+N} = [(1+s_{T+N})^{T+N} / (1+s_T)^T]^(1/N) − 1<br><br>Example (s₁=3%, s₂=4%, s₃=5%):<br>f₁₂ = (1.04)²/(1.03) − 1 ≈ <span class="highlight">5.01%</span><br>f₂₃ = (1.05)³/(1.04)² − 1 ≈ <span class="highlight">7.03%</span><br>f₁₃ = [(1.05)³/(1.03)]^(0.5) − 1 ≈ <span class="highlight">6.02%</span>'
  },
  {
    id:'fc039', topic:'W2-Bonds', difficulty:'Exam-Standard',
    front:'Three concepts: spot rates vs. forward rates vs. future spot rates',
    back:'<b>Spot rates (s_T)</b>: known today; rate for investment starting NOW, maturing at T<br><br><b>Forward rates (f_{T,T+N})</b>: agreed today (locked in by no-arbitrage); rate for investment <i>starting in the future</i><br><br><b>Future spot rates (~s_T)</b>: unknown today; what spot rates will actually be in the future — denoted with a tilde (∼)<br><br>Expectations Theory says: forward rates = expected future spot rates. Liquidity Premium Theory says: forward rates = expected future spot rates <i>plus</i> a premium.'
  },
  {
    id:'fc040', topic:'W2-Bonds', difficulty:'Applied',
    front:'Expectations Theory vs. Liquidity Premium Theory — yield curve inference',
    back:'<b>Expectations Theory:</b><br>↑ slope → rates expected to rise<br>↓ slope → rates expected to fall<br>No risk premium<br><br><b>Liquidity Premium Theory:</b><br>↑ slope → ambiguous (may be premium only, or rates rising, or both)<br>↓ slope → rates unambiguously expected to fall (premium can\'t explain it)<br><br><span class="highlight">Asymmetry rule:</span> downward slope is the unambiguous signal under LPT — the premium alone can\'t produce an inverted curve.'
  },
  {
    id:'fc041', topic:'W2-Bonds', difficulty:'Applied',
    front:'Market Segmentation Theory — how does it explain yield curve shape?',
    back:'Different investors have different maturity preferences (e.g. pension funds prefer long bonds; banks prefer short). Yield curve reflects <span class="highlight">supply and demand</span> within each maturity segment independently.<br><br>An upward slope → excess demand for short bonds (low rates) + low demand for long bonds (high rates).<br><br>No concept of risk premium. Rates in one segment don\'t directly affect another.'
  },
  {
    id:'fc042', topic:'W2-Bonds', difficulty:'Foundational',
    front:'Yield curve shapes — name them and describe each',
    back:'<b>Normal (upward-sloping)</b>: most common; long rates > short rates<br><b>Inverted (downward-sloping)</b>: short rates > long rates; historically associated with recessions<br><b>Flat</b>: rates similar across all maturities<br><b>Humped</b>: intermediate maturities have highest rates<br><br>An inverted curve is often interpreted (under Expectations Theory) as the market expecting short rates to fall — implying economic slowdown anticipated.'
  },

  /* ══════════════════════════════════════════════════════════════
     WEEK 2 — STOCKS (EQUITY VALUATION)
  ══════════════════════════════════════════════════════════════ */
  {
    id:'fc043', topic:'W2-Stocks', difficulty:'Foundational',
    front:'DDM foundation — what determines a stock\'s price?',
    back:'P₀ = PV of all future dividends<br><br>Unlike bonds, there is no contractual obligation to pay dividends. Returns come from:<br>1. Dividend yield: D/P₀<br>2. Capital gains yield: (P₁−P₀)/P₀<br><br>Required return R = D₁/P₀ + g<br><br>The DDM is the fundamental framework: a stock is worth the present value of the income stream it provides.'
  },
  {
    id:'fc044', topic:'W2-Stocks', difficulty:'Foundational',
    front:'Constant Growth DDM (Gordon Growth Model) — formula and conditions',
    back:'<b>P₀ = D₁ / (R − g)</b><br><br>Where: D₁ = next year\'s dividend, R = required return, g = constant growth rate<br><br><b>Conditions:</b> R > g. If g ≥ R, the formula gives negative or infinite price — nonsensical. Also, g cannot permanently exceed the economy-wide growth rate.<br><br>Example (Big D, Inc.): D₁=£0.50, g=2%, R=15%<br>P₀ = 0.50/(0.15−0.02) = <span class="highlight">£3.85</span>'
  },
  {
    id:'fc045', topic:'W2-Stocks', difficulty:'Applied',
    front:'Differential growth DDM — worked example',
    back:'D₁=$2, g₁=8% for 2 yrs, then g₂=4% perpetuity, R=12%<br><br>D₁=$2.00, D₂=$2.16, D₃=$2.333<br>D₄=$2.333×1.04=$2.426 (first under g₂)<br>P₃=D₄/(R−g₂)=2.426/0.08=<b>$30.32</b><br><br>P₀ = 2/1.12 + 2.16/1.12² + (2.333+30.32)/1.12³<br>= 1.786 + 1.722 + 23.23 = <span class="highlight">~$26.74</span><br><br>Timing trap: Gordon at year N gives value at year N — NOT year 0.'
  },
  {
    id:'fc046', topic:'W2-Stocks', difficulty:'Applied',
    front:'Growth rate formula: g = ?',
    back:'<b>g = Retention Ratio × ROE</b><br>= (1 − Payout Ratio) × ROE<br><br>Logic: each £ retained earns ROE; if the firm retains fraction b of earnings, growth = b × ROE.<br><br>Example: payout=30%, ROE=20% → g = 0.70 × 20% = <span class="highlight">14%</span><br><br>If ROE > R: retain to grow (positive NPV reinvestment)<br>If ROE < R: pay out (growth destroys value)'
  },
  {
    id:'fc047', topic:'W2-Stocks', difficulty:'Applied',
    front:'NPVGO Model — formula and Apple example',
    back:'<b>P₀ = EPS/R + NPVGO</b><br><br>EPS/R = cash cow value (zero growth, 100% payout)<br>NPVGO = value of all future positive-NPV reinvestment<br><br>Example (EPS=£5, payout=30%, R=16%, ROE=20%):<br>D₁=1.50, g=14%, P₀=1.50/0.02=£75<br>Cash cow=5/0.16=£31.25; NPVGO=£43.75<br><br>Apple (P₀=$250, EPS=$7.47, R=10%):<br>Cash cow=$74.70; NPVGO=<span class="highlight">$175.30</span> (~70% of price is growth value)'
  },
  {
    id:'fc048', topic:'W2-Stocks', difficulty:'Applied',
    front:'P/E ratio — formula and drivers',
    back:'<b>P/E = P₀/EPS = Payout Ratio / (R − g)</b><br><br>P/E <b>rises</b> with: higher payout ratio, higher growth rate g<br>P/E <b>falls</b> with: higher discount rate R<br><br>Cross-firm P/E comparisons only valid if risk, payout, and growth profiles are similar.<br><br>Leverage effect: more debt → higher interest → lower EPS → higher P/E (all else equal)<br><br>Market P/E ≈72× at lecture time (historically elevated); pre-GFC ≈30×'
  },
  {
    id:'fc049', topic:'W2-Stocks', difficulty:'Exam-Standard',
    front:'When should a firm retain earnings vs. pay dividends?',
    back:'<b>Retain if ROE > R</b> (required return): reinvesting earns more than the cost of capital → positive NPV → NPVGO > 0 → stock price rises.<br><br><b>Pay out if ROE < R</b>: reinvesting earns less than the cost of capital → NPVGO < 0 → retaining destroys value; shareholders better off receiving dividends.<br><br>Corollary: a zero-growth, 100% payout stock is worth EPS/R. Any growth only adds value if ROE > R.'
  },

  /* ══════════════════════════════════════════════════════════════
     WEEK 3A — CAPITAL BUDGETING: CASH FLOWS
  ══════════════════════════════════════════════════════════════ */
  {
    id:'fc050', topic:'W3-CashFlows', difficulty:'Foundational',
    front:'Six Rules for project cash flows — name them all',
    back:'1. <b>Cash flows, not accounting earnings</b> (add back depreciation)<br>2. <b>Sunk costs are irrelevant</b> (spent, irrecoverable — exclude)<br>3. <b>Opportunity costs must be included</b> (market value of resources used)<br>4. <b>Incremental cash flows only</b> (with-project vs. without-project)<br>5. <b>Side effects and externalities matter</b> (cannibalism, synergies)<br>6. <b>All cash flows are after-tax</b> (EBIT×(1−t), after-tax salvage)'
  },
  {
    id:'fc051', topic:'W3-CashFlows', difficulty:'Applied',
    front:'FCF formula and its components',
    back:'<b>FCF = OCF − ΔNWC − CAPEX</b><br>(plus terminal items in final year)<br><br><b>OCF</b> = EBIT×(1−t) + Depreciation<br>      = EBITDA×(1−t) + Depreciation×t (tax shield form)<br><br><b>NWC</b> = AR + Inventory − AP<br><b>ΔNWC</b>: increase = cash use (subtract); decrease = cash source (add)<br><br><b>Interest is NEVER included in FCF</b> — financing is handled via WACC.'
  },
  {
    id:'fc052', topic:'W3-CashFlows', difficulty:'Applied',
    front:'Depreciation Tax Shield — formula and intuition',
    back:'<b>Depreciation Tax Shield = Depreciation × tax rate</b><br><br>Example: Dep=£50, t=30% → shield = <span class="highlight">£15</span><br><br>Why: depreciation reduces taxable income → less tax paid → more after-tax cash flows.<br><br><b>Why accelerated depreciation increases NPV:</b> same total tax saving, but front-loaded → higher PV of tax savings, especially when discount rates are high.'
  },
  {
    id:'fc053', topic:'W3-CashFlows', difficulty:'Applied',
    front:'After-tax salvage value — formula',
    back:'<b>After-tax salvage = MV − (MV − BV) × t</b><br><br>Where MV = market value at sale, BV = book value (cost − accumulated depreciation)<br><br>If MV > BV: capital gain → tax liability reduces proceeds<br>If MV < BV: capital loss → tax saving increases effective proceeds<br>If MV = BV: no tax effect; after-tax salvage = MV<br><br>Example: MV=£30k, BV=£0, t=30%<br>After-tax = 30k − (30k−0)×0.30 = <span class="highlight">£21k</span>'
  },
  {
    id:'fc054', topic:'W3-CashFlows', difficulty:'Exam-Standard',
    front:'NWC in capital budgeting — three key rules',
    back:'1. <b>Always use the CHANGE (ΔNWC)</b>, not the level. If NWC rises from £100 to £150, the cash cost is £50 — not £150.<br><br>2. <b>NWC increase = cash outflow</b> (use of cash). NWC decrease = cash inflow (release of cash).<br><br>3. <b>NWC is always fully recovered</b> at end of project. Forgetting this understates NPV.<br><br>NWC = AR + Inventory − AP. Growing revenues → growing NWC → real funding need.'
  },
  {
    id:'fc055', topic:'W3-CashFlows', difficulty:'Applied',
    front:'Terminal value — two methods',
    back:'<b>Method 1 — Liquidation:</b><br>After-tax salvage = MV − (MV−BV)×t<br>Add NWC recovery. Use when firm winds down.<br><br><b>Method 2 — Continuation (Gordon Growth):</b><br>CV_T = FCF_{T+1}/(R−g)<br>Discount CV_T back to t=0.<br>FCF_{T+1} = EBIT_T×(1−t)×(1+g) − Net Fixed Assets×g − NWC×g<br><br><b>NEVER apply both</b> — pick one and be consistent. Don\'t use CAPEX in continuation — it\'s already in the denominator via NFA×g.'
  },
  {
    id:'fc056', topic:'W3-CashFlows', difficulty:'Exam-Standard',
    front:'Chocolate Factory — key numbers and NPV/IRR',
    back:'CAPEX: £100k machinery + £150k land (opp. cost). Test marketing £250k = SUNK COST (excluded).<br>Tax=30%, S-L dep over 5yr = £20k/yr. WACC=7.7%<br>NWC = 10% of next year\'s revenue; recovered Year 5.<br>Salvage: MV=£30k, BV=0 → after-tax £21k. Land: £150k.<br><br><b>NPV ≈ £79–84k; IRR ≈ 16.4%</b><br><br>Common trap: =NPV(rate, CF0:CF5) discounts CF0 by one extra period — wrong. Correct: =NPV(rate, CF1:CF5) + CF0'
  },
  {
    id:'fc057', topic:'W3-CashFlows', difficulty:'Foundational',
    front:'Sunk cost example — what is it and why exclude?',
    back:'A <b>sunk cost</b> is money already spent that cannot be recovered regardless of the decision taken.<br><br>Example: £250k spent on test marketing before deciding to build the chocolate factory. This is irrelevant to the NPV calculation — whether you proceed or not, that £250k is gone.<br><br>Common mistake: including past R&D costs, feasibility study costs, or market research in project cash flows. <span class="highlight">Only future incremental cash flows matter.</span>'
  },
  {
    id:'fc058', topic:'W3-CashFlows', difficulty:'Applied',
    front:'Inflation rule in capital budgeting',
    back:'<b>Nominal cash flows → use nominal (market) discount rate</b><br><b>Real cash flows → use real discount rate</b><br><br>Never mix: nominal CFs with real rate (overstates NPV) or real CFs with nominal rate (understates NPV).<br><br>Conversion: (1+r_nominal) = (1+r_real) × (1+inflation)<br><br>In practice: project revenues/costs usually forecasted in nominal terms, so use nominal WACC.'
  },

  /* ══════════════════════════════════════════════════════════════
     WEEK 3B — CAPITAL BUDGETING: INVESTMENT RULES
  ══════════════════════════════════════════════════════════════ */
  {
    id:'fc059', topic:'W3-Rules', difficulty:'Foundational',
    front:'NPV rule — formula and why it is the gold standard',
    back:'<b>NPV = Σ CF_t/(1+r)^t − Investment</b><br><br>Accept if NPV > 0. Directly measures £ value added.<br><br>Why it is best:<br>1. Uses cash flows, not accounting profit<br>2. Captures time value of money<br>3. Reinvestment at r (cost of capital) — realistic<br>4. No ambiguity; no multiple solutions<br>5. Directly additive across projects (NPV additivity)'
  },
  {
    id:'fc060', topic:'W3-Rules', difficulty:'Foundational',
    front:'Payback Period — three problems with it',
    back:'<b>Payback</b>: years until Σ CF ≥ Investment (no discounting)<br><br>Problems:<br>1. <b>Ignores time value of money</b> (£100 in year 3 treated same as £100 in year 1)<br>2. <b>Ignores all cash flows after payback</b> (a great long-term project looks bad)<br>3. <b>Arbitrary cutoff</b> (who decides 3 years is the right threshold?)<br><br>Despite flaws: >90% of Mozambican CFOs use it — rational when expropriation risk is high and capital recovery speed matters most.'
  },
  {
    id:'fc061', topic:'W3-Rules', difficulty:'Applied',
    front:'IRR decision rule and its reinvestment assumption',
    back:'Solve: <b>Σ CF_t/(1+IRR)^t = 0</b><br>Accept if IRR > r (cost of capital)<br><br><b>Reinvestment assumption:</b> IRR implicitly assumes intermediate cash flows are reinvested at the IRR itself.<br><br>If IRR is 40% but the firm\'s actual reinvestment opportunities earn only r=10%, IRR overstates true return. NPV\'s assumption (reinvestment at r) is more realistic and is the root cause of NPV-IRR conflicts.'
  },
  {
    id:'fc062', topic:'W3-Rules', difficulty:'Applied',
    front:'IRR Failure Case 1 — Financing Project (NPV-IRR flip)',
    back:'A <b>financing project</b> has cash inflow at t=0 followed by outflows — the opposite of a normal investment.<br><br>The NPV-IRR relationship FLIPS: the project\'s NPV is positive when IRR < r (not > r).<br><br>Example: receive £1,000 now, pay £1,100 in year 1. IRR=10%. If r=8%, NPV = −1100/1.08+1000 = −$18 < 0 → REJECT (you\'re borrowing at 10% when cost is 8%).<br><br>Test: positive initial CF → financing project → apply INVERTED rule.'
  },
  {
    id:'fc063', topic:'W3-Rules', difficulty:'Applied',
    front:'IRR Failure Case 2 — Multiple IRRs',
    back:'If cash flows change sign more than once, there may be <b>multiple IRRs</b> (one per sign change, by Descartes\' rule).<br><br>Example: −100, +240, −143 (two sign changes → up to two IRRs: ~20% and ~43%)<br><br>Real example: nuclear decommissioning — big initial outflow, positive operating CFs, then massive end-of-life decommissioning cost (−CF again).<br><br>Solution: <span class="highlight">use NPV</span>. IRR gives no unique answer in this case.'
  },
  {
    id:'fc064', topic:'W3-Rules', difficulty:'Applied',
    front:'IRR Failure Case 3 — Scale Problem (worked example)',
    back:'<b>IRR ignores project scale</b> — it\'s a rate, not a £ amount.<br><br>Small: (−1000, +2000) → IRR=100%, NPV=£818<br>Large: (−2000, +3500) → IRR=75%, NPV=£1,182 (at r=10%)<br><br>IRR picks Small (wrong). NPV picks Large (correct ✓)<br><br><b>Fix:</b> compute incremental cash flows L−S = (−1000,+1500); IRR=50%>10% → accept the increment → choose Large. Incremental IRR > r means the larger project is worth the extra investment.'
  },
  {
    id:'fc065', topic:'W3-Rules', difficulty:'Applied',
    front:'IRR Failure Case 4 — Timing Problem (worked example)',
    back:'<b>IRR favours projects with earlier CFs</b> because reinvestment at high IRR amplifies early returns unrealistically.<br><br>Slow: (−100, 10, 35, 100) → IRR=15.4%, NPV=£13 at r=10%<br>Fast: (−100, 60, 60, 10) → IRR=18%, NPV=£12 at r=10%<br><br>IRR picks Fast (wrong). NPV picks Slow (correct ✓).<br>Cross-over rate = 11.5% — at rates below this, Slow is better; above this, Fast is better.<br><br>Fix: incremental IRR or just use NPV.'
  },
  {
    id:'fc066', topic:'W3-Rules', difficulty:'Applied',
    front:'Profitability Index — formula, rule, and unique advantage',
    back:'<b>PI = PV(future CFs) / Initial Investment = 1 + NPV/Investment</b><br><br>Accept if PI > 1 (equivalent to NPV > 0)<br><br><b>Unique advantage: capital rationing</b><br>When budget is constrained, rank by PI to maximise total NPV per £ of scarce capital.<br><br>Example: Budget £20m<br>B (£10m, PI=4.53) + C (£10m, PI=4.34) → combined NPV=£68.7m<br>vs. A alone (£20m, PI=3.52, NPV=£50.5m) ✓'
  },
  {
    id:'fc067', topic:'W3-Rules', difficulty:'Applied',
    front:'Equivalent Annual Cost (EAC) — formula and when to use',
    back:'<b>EAC = NPV / Annuity Factor(r, T)</b><br>where Annuity Factor = (1/r)×[1−1/(1+r)^T]<br><br>Use when comparing projects with UNEQUAL lives.<br>Choose the project with the <b>lower (less negative) EAC</b> = lower annual cost.<br><br>Machine A: NPV=−$4,614, T=10yr, r=10% → AF=6.1446 → EAC=<b>−$751/yr</b><br>Machine B: NPV=−$2,895, T=5yr, r=10% → AF=3.7908 → EAC=<b>−$764/yr</b><br><b>Choose A</b> ✓'
  },
  {
    id:'fc068', topic:'W3-Rules', difficulty:'Exam-Standard',
    front:'Sensitivity vs. Scenario vs. Break-even analysis — differences',
    back:'<b>Sensitivity analysis:</b> vary one input at a time (hold others constant). Steeper NPV slope → more sensitive to that variable.<br><br><b>Scenario analysis:</b> vary multiple inputs simultaneously (correlated scenarios). E.g. "optimistic" = high price + low cost + low rate → NPV≈£300k.<br><br><b>Break-even analysis:</b> find input value making NPV = 0. Excel: Goal Seek. Manual: set NPV=0, solve for OCF, then back-solve for Q or price.<br><br>All three assess <span class="highlight">risk</span> of the project.'
  },
  {
    id:'fc069', topic:'W3-Rules', difficulty:'Applied',
    front:'Incremental IRR method — 4 steps',
    back:'1. Subtract one project\'s cash flows from the other<br>2. Ensure the incremental stream starts with a negative CF (if not, flip — but flip the IRR rule too)<br>3. Compute IRR of the incremental stream<br>4. If Incremental IRR > r → prefer the project you subtracted FROM<br><br>Cross-over rate = Incremental IRR = rate at which NPVs are equal. Below cross-over: prefer the project with higher NPV; above: the other may dominate.'
  },

  /* ══════════════════════════════════════════════════════════════
     WEEK 4A — RISK, RETURN & PORTFOLIO THEORY
  ══════════════════════════════════════════════════════════════ */
  {
    id:'fc070', topic:'W4-Risk', difficulty:'Foundational',
    front:'Three return measures — dollar return, percentage return, HPR',
    back:'<b>Dollar return</b> = D_{t+1} + (P_{t+1} − P_t)<br><b>% return</b> = [D_{t+1} + (P_{t+1}−P_t)] / P_t = Dividend yield + Capital gains yield<br><br><b>HPR</b> (Holding Period Return) = (1+r₁)(1+r₂)…(1+rₙ) − 1<br><br>Worked (4-year example: +10%, −5%, +20%, +15%):<br>HPR = 1.10×0.95×1.20×1.15 − 1 = <span class="highlight">44.21%</span>'
  },
  {
    id:'fc071', topic:'W4-Risk', difficulty:'Applied',
    front:'Arithmetic vs. Geometric average returns — when to use each',
    back:'<b>Arithmetic</b> = Σr_i/T = best estimate for <i>single future period</i> expected return<br><br><b>Geometric</b> = [(1+r₁)(1+r₂)…(1+rₙ)]^(1/n) − 1 = best measure of <i>realised multi-period performance</i><br><br>Geometric ≤ Arithmetic always (equality only if all returns identical)<br><br>Worked: returns +10%, −5%, +20%, +15%<br>Arithmetic: (10−5+20+15)/4 = <span class="highlight">10.0%</span>/yr<br>Geometric: (1.4421)^0.25 − 1 = <span class="highlight">9.58%</span>/yr'
  },
  {
    id:'fc072', topic:'W4-Risk', difficulty:'Foundational',
    front:'Standard deviation — formula and what it measures',
    back:'<b>σ = √[Σ(r_i − r̄)² / (T−1)]</b><br><br>Uses T−1 (not T) for unbiased sample estimate.<br><br>Normal distribution: 68% of outcomes within ±1σ, 95% within ±2σ, 99.7% within ±3σ<br><br>Note: actual financial returns have <span class="highlight">fat tails</span> — more extreme events than the normal distribution predicts. σ understates extreme risk.'
  },
  {
    id:'fc073', topic:'W4-Risk', difficulty:'Foundational',
    front:'Historical US asset returns (1926–2005) — key figures',
    back:'<table style="font-size:0.78rem;width:100%"><tr><th>Asset</th><th>Avg</th><th>σ</th><th>Premium</th></tr><tr><td>Large Stocks</td><td>12.3%</td><td>20.2%</td><td>8.5%</td></tr><tr><td>Small Stocks</td><td>17.4%</td><td>32.9%</td><td>13.6%</td></tr><tr><td>LT Corp Bonds</td><td>6.2%</td><td>8.5%</td><td>2.4%</td></tr><tr><td>LT Gov Bonds</td><td>5.8%</td><td>9.2%</td><td>2.0%</td></tr><tr><td>T-Bills (r_f)</td><td>3.8%</td><td>3.1%</td><td>—</td></tr></table><br>Higher return = higher risk. Risk premium = return above risk-free.'
  },
  {
    id:'fc074', topic:'W4-Risk', difficulty:'Applied',
    front:'Portfolio return and variance — formulas for 2-asset portfolio',
    back:'<b>Return:</b> E[R_p] = x₁R₁ + x₂R₂ (weighted average — always)<br><br><b>Variance:</b> Var(R_p) = x₁²σ₁² + x₂²σ₂² + 2x₁x₂Cov(R₁,R₂)<br>= x₁²σ₁² + x₂²σ₂² + 2x₁x₂×Corr×σ₁×σ₂<br><br>Variance is NOT a weighted average — it includes a covariance cross-term.<br><br>Worked (Microsoft + Dell, equal weights):<br>σ_p = √[0.25×0.1369 + 0.25×0.25 + 2×0.25×0.62×0.37×0.50]<br>= √0.1541 = <span class="highlight">39.3%</span> (vs. 43.5% weighted avg)'
  },
  {
    id:'fc075', topic:'W4-Risk', difficulty:'Foundational',
    front:'Covariance and Correlation — definitions and relationship',
    back:'<b>Cov(R_i,R_j)</b> = Σ[(R_it−R̄_i)(R_jt−R̄_j)]/(T−1)<br>Positive: assets move together. Negative: move opposite.<br><br><b>Corr</b> = Cov(R_i,R_j) / (σ_i × σ_j)<br>Always ∈ [−1, +1]<br><br>Convert: <b>Cov = Corr × σ_i × σ_j</b><br><br>Corr=+1: no diversification benefit. Corr=−1: theoretically zero-variance portfolio achievable. Corr between: diversification reduces risk.'
  },
  {
    id:'fc076', topic:'W4-Risk', difficulty:'Applied',
    front:'Diversification — total risk decomposition',
    back:'<b>Total Risk = Diversifiable + Non-diversifiable</b><br>= Idiosyncratic (specific) + Systematic (market)<br><br><b>Diversifiable:</b> company-specific events — CEO scandal, product recall, lawsuit. Averages out as you add more stocks.<br><br><b>Non-diversifiable:</b> economy-wide shocks (recession, war, interest rate changes). Cannot be eliminated.<br><br><span class="highlight">Key principle:</span> only non-diversifiable risk commands a return premium. Idiosyncratic risk is not rewarded because rational investors hold diversified portfolios.'
  },
  {
    id:'fc077', topic:'W4-Risk', difficulty:'Applied',
    front:'Efficient frontier — what makes a portfolio "efficient"?',
    back:'A portfolio is <b>efficient</b> if:<br>1. It has the highest expected return for its level of σ, OR<br>2. It has the lowest σ for its level of expected return<br><br>A portfolio is <b>inefficient</b> if it is strictly dominated by another portfolio in both dimensions.<br><br>Example: 100% Coca-Cola is inefficient if 20% Intel + 80% Coke offers BOTH higher return AND lower σ. Adding Intel improves the risk-return frontier.'
  },
  {
    id:'fc078', topic:'W4-Risk', difficulty:'Applied',
    front:'Effect of correlation on the efficient frontier',
    back:'<b>Corr = +1:</b> no diversification; frontier is a straight line (σ_p = weighted avg σ)<br><b>Corr between −1 and +1:</b> frontier curves left; lower correlation = more pronounced "bullet" curve<br><b>Corr = −1:</b> frontier has a kink reaching zero σ — theoretical portfolio with no risk<br><br>Short selling (negative weights): extends frontier further but substantially increases risk at extreme positions. Same formulas apply with negative weights.'
  },
  {
    id:'fc079', topic:'W4-Risk', difficulty:'Applied',
    front:'Portfolio weights — constraints and meaning',
    back:'<b>Weight x_i = value_i / total portfolio value</b><br><br>Constraints: Σx_i = 1 (weights sum to 1)<br><br>Weights can be:<br>• Negative (short position) — borrow and sell the asset<br>• Greater than 1 (leveraged long) — borrow to buy more than wealth<br><br>Example: wealth £10k, invest £20k in stock → x_stock=2.0, x_borrowed=−1.0. Doubles both expected return (above r_f) and σ.'
  },

  /* ══════════════════════════════════════════════════════════════
     WEEK 4B — CAPM
  ══════════════════════════════════════════════════════════════ */
  {
    id:'fc080', topic:'W4-CAPM', difficulty:'Foundational',
    front:'CAPM formula — the most important formula in the module',
    back:'<b>E[R_i] = R_f + β_i × (E[R_m] − R_f)</b><br><br>Where:<br>R_f = risk-free rate<br>β_i = beta of asset i<br>E[R_m] − R_f = market risk premium (MRP)<br>E[R_m] = expected market return<br><br>Required return on any asset = risk-free rate + compensation for its systematic risk.'
  },
  {
    id:'fc081', topic:'W4-CAPM', difficulty:'Applied',
    front:'Beta — formula, definition, and interpretation table',
    back:'<b>β_i = Cov(R_i,R_m)/Var(R_m) = Corr(R_i,R_m) × σ_i/σ_m</b><br><br>β=0: risk-free asset (T-bill)<br>β=1: same systematic risk as market<br>β>1: more volatile than market (cyclical stocks, tech)<br>0<β<1: less volatile (consumer staples, utilities)<br>β<0: counter-cyclical (gold sometimes)<br><br>Examples: Microsoft≈1.08; Apple≈1.2; Diageo≈0.18; Campbell Soup≈0.536'
  },
  {
    id:'fc082', topic:'W4-CAPM', difficulty:'Applied',
    front:'Sharpe Ratio and the tangent portfolio',
    back:'<b>Sharpe Ratio = (E[R_P] − R_f) / SD(R_P)</b><br><br>= slope of the line from R_f to portfolio P<br><br>All investors maximise Sharpe ratio. The portfolio that maximises Sharpe is the <span class="highlight">tangent portfolio T</span> — the unique efficient risky portfolio that all rational investors hold (combined with lending/borrowing at R_f).<br><br>Market clearing: all rational investors hold T → supply of all risky assets = T → T = Market Portfolio M.'
  },
  {
    id:'fc083', topic:'W4-CAPM', difficulty:'Applied',
    front:'CML vs. SML — differences',
    back:'<b>Capital Market Line (CML):</b><br>E[R_P] = R_f + [(E[R_m]−R_f)/σ_m] × σ_P<br>x-axis: total volatility (σ)<br>Valid ONLY for fully diversified (efficient) portfolios<br>Individual stocks lie to the RIGHT of CML<br><br><b>Security Market Line (SML):</b><br>E[R_i] = R_f + β_i × (E[R_m]−R_f)<br>x-axis: beta (systematic risk only)<br>Valid for ALL assets and portfolios<br>All assets lie exactly ON the SML in equilibrium'
  },
  {
    id:'fc084', topic:'W4-CAPM', difficulty:'Applied',
    front:'Alpha — definition and equilibrium implication',
    back:'<b>α_i = E[R_i] − [R_f + β_i×(E[R_m]−R_f)]</b><br><br>= actual return − CAPM predicted return<br><br>α>0: asset outperforms CAPM → everyone buys → price rises → return falls back to SML<br>α<0: asset underperforms → everyone sells → price falls → return rises back to SML<br><br>In equilibrium: α=0 for all assets. Used to assess fund manager performance — most active funds don\'t consistently beat passive after fees.'
  },
  {
    id:'fc085', topic:'W4-CAPM', difficulty:'Applied',
    front:'Portfolio beta and CAPM — two equivalent calculation methods',
    back:'<b>Method 1:</b> β_portfolio = Σ x_i × β_i (weighted average of individual betas)<br><br><b>Method 2:</b> compute CAPM return for each stock → then take weighted average<br><br>Both give the SAME answer — use whichever is convenient.<br><br>Example (Pfizer β=0.5, Home Depot β=1.25, equal weights, R_f=4%, MRP=6%):<br>β_port = 0.5×0.5+0.5×1.25 = 0.875<br>E[R] = 4% + 0.875×6% = <span class="highlight">9.25%</span>'
  },
  {
    id:'fc086', topic:'W4-CAPM', difficulty:'Applied',
    front:'CAPM assumptions — the 3 key ones',
    back:'1. <b>Perfect markets:</b> no taxes, no transaction costs; same R_f for borrowing and lending (no margin constraints)<br><br>2. <b>Mean-variance optimisers:</b> all investors hold only efficient portfolios (care only about E[R] and σ)<br><br>3. <b>Homogeneous expectations:</b> all investors share identical estimates of expected returns, standard deviations, and correlations<br><br>These are strong and violated in practice (taxes exist, margin calls, disagreement about future returns).'
  },
  {
    id:'fc087', topic:'W4-CAPM', difficulty:'Exam-Standard',
    front:'Campbell Soup CAPM — worked example',
    back:'Given: R_f=4%, E[R_m]=10%, σ_m=16%, σ_Campbell=26%, Corr=0.33<br><br>β = Corr × σ_Campbell/σ_m = 0.33 × 26/16 = <span class="highlight">0.536</span><br>E[R] = 4% + 0.536×6% = <span class="highlight">7.2%</span><br><br>Key insight: Campbell has high total volatility (σ=26%) but low β (0.536) because most of its volatility is idiosyncratic. Investors don\'t demand compensation for it since it\'s diversifiable. Low required return despite high total risk.'
  },
  {
    id:'fc088', topic:'W4-CAPM', difficulty:'Exam-Standard',
    front:'Leveraged investment — worked example with scenarios',
    back:'Wealth £10k, borrow £10k at R_f=5%, invest £20k in Q (E[R]=10%, σ=20%), weight x=200%<br><br>E[R_port] = R_f + x×(E[R_Q]−R_f) = 5% + 2.0×5% = <span class="highlight">15%</span><br>σ_port = x × σ_Q = 2.0×20% = <span class="highlight">40%</span><br><br>Scenario A (Q +30%): portfolio £26k − repay £10.5k = +£5.5k → +55%<br>Scenario B (Q −10%): portfolio £18k − repay £10.5k = −£2.5k → −25%<br><br>Leverage amplifies both gains and losses symmetrically.'
  },

  /* ══════════════════════════════════════════════════════════════
     WEEK 5A — CAPITAL STRUCTURE: MODIGLIANI-MILLER
  ══════════════════════════════════════════════════════════════ */
  {
    id:'fc089', topic:'W5-MM', difficulty:'Foundational',
    front:'MM Proposition I (no taxes) — what does it say?',
    back:'<b>V_L = V_U</b><br><br>Firm value is independent of capital structure in perfect markets.<br><br>Three arguments:<br>1. Pie argument: CFs from real assets are fixed; structure just divides them<br>2. Zero-NPV transactions: securities trade at fair value; no value created by issuing them<br>3. Homemade leverage: investors can replicate any capital structure themselves → no premium for levered firm'
  },
  {
    id:'fc090', topic:'W5-MM', difficulty:'Exam-Standard',
    front:'Homemade leverage proof — walk through the no-arbitrage argument',
    back:'<b>Strategy A:</b> Buy 10% of levered firm L\'s equity → cost 0.10×E_L → payoff 0.10×(EBIT−D×r_D)<br><br><b>Strategy B:</b> Buy 10% of unlevered firm U + borrow 0.10×D at r_D → cost 0.10×V_U−0.10×D → same payoff<br><br>Equal payoffs → equal costs:<br>0.10×E_L = 0.10×(V_U − D)<br>E_L + D = V_U<br><b>V_L = V_U ✓</b><br><br>Conclusion: investors can create leverage/unleverage themselves → the firm gains nothing by doing it for them.'
  },
  {
    id:'fc091', topic:'W5-MM', difficulty:'Applied',
    front:'MM Proposition II (no taxes) — cost of equity formula',
    back:'<b>r_E = r_0 + (D/E) × (r_0 − r_D)</b><br><br>Where r_0 = unlevered cost of capital (WACC with no debt)<br><br>As D/E rises: r_E rises linearly. The cost of equity increases with leverage.<br><br>But WACC = (E/V)×r_E + (D/V)×r_D = <b>r_0 = CONSTANT</b><br><br>Why? Saving from cheap debt is exactly offset by rising cost of equity. The two effects cancel — WACC stays flat at r_0.'
  },
  {
    id:'fc092', topic:'W5-MM', difficulty:'Applied',
    front:'MM Proposition I WITH corporate taxes — formula and intuition',
    back:'<b>V_L = V_U + t×D</b><br><br>Where t = corporate tax rate, D = debt outstanding<br><br>V_U = EBIT×(1−t)/r_0 (unlevered value)<br><br>Why: interest is tax-deductible but dividends are not → levered firm pays less tax → more total cash to investors → higher firm value.<br><br>Annual tax shield = t×D×r_D<br>PV of permanent shield = t×D (discounted at r_D for perpetuity)'
  },
  {
    id:'fc093', topic:'W5-MM', difficulty:'Exam-Standard',
    front:'Tax shield derivation — numerical example',
    back:'Assume EBIT=100, t=50%, interest=50 (D=1,000, r_D=5%)<br><br><b>Unlevered:</b> Tax=50, to equity=50, to creditors=0. Total to investors=50.<br><br><b>Levered:</b> Interest=50 → taxable income=50 → tax=25 → to equity=25, to creditors=50. Total to investors=75.<br><br>Extra cash = 75−50 = <span class="highlight">25 = t×interest = 50%×50</span> ✓<br><br>The government effectively subsidises 50% of interest costs. This is the debt tax shield.'
  },
  {
    id:'fc094', topic:'W5-MM', difficulty:'Applied',
    front:'WACC with taxes — formula and key behaviour',
    back:'<b>WACC = (E/V)×r_E + (D/V)×r_D×(1−t)</b><br><br>The (1−t) factor reduces effective cost of debt by the tax shield.<br><br>With taxes: <span class="highlight">WACC DECREASES as leverage increases</span> (unlike no-tax case where WACC is flat).<br><br>r_E still rises with leverage, but by less than the no-tax case. The tax benefit to equity is the reduced tax burden shared by all investors.<br><br>Exam: no-tax WACC = FLAT; with-tax WACC = DECLINING. Do not mix up.'
  },
  {
    id:'fc095', topic:'W5-MM', difficulty:'Applied',
    front:'Three agency costs of debt — names and one-line descriptions',
    back:'1. <b>Risk Shifting (excessive risk-taking):</b> equity holders gamble near insolvency because they have convex payoff — heads they win, tails creditors lose.<br><br>2. <b>Underinvestment (debt overhang):</b> shareholders reject positive-NPV projects because gains accrue to creditors, not them.<br><br>3. <b>Milking the Property (asset stripping):</b> shareholders liquidate assets and pay special dividend before creditors can claim — prevented by covenants.'
  },
  {
    id:'fc096', topic:'W5-MM', difficulty:'Exam-Standard',
    front:'Risk shifting — worked example',
    back:'Firm value V=50, debt D=100 (insolvent). Two projects available:<br><br>Safe project: invest £10, V rises to £55. NPV=−£5 (bad) but shareholders gain £0 (all goes to creditors). → REJECT<br><br>Risky gamble: 90% chance zero, 10% chance V=£200. E[V] = £20 < £50 (NEGATIVE NPV).<br>But: 10% chance equity worth £200−£100=£100 (payoff £100). Shareholders vote <span class="highlight">YES</span>.<br><br>Creditors bear the downside; equity takes the upside. Wealth transferred from creditors to shareholders.'
  },
  {
    id:'fc097', topic:'W5-MM', difficulty:'Exam-Standard',
    front:'Underinvestment (debt overhang) — worked example',
    back:'Firm value V=50, debt D=100 (insolvent). Safe investment opportunity: pay £20, V rises to £60. NPV = −£20+£10 = <span class="highlight">−£10</span>? No: NPV = V_after − V_before − Investment = 60−50−20 = −£10? Wait: NPV is positive: firm value rises by £10 on £20 investment... but V still < D.<br><br>Shareholders put in £20, gain £0 (creditors absorb entire benefit). Shareholders vote NO on a positive-NPV project. <span class="highlight">Underinvestment destroys value.</span><br><br>Fix: debt-for-equity swap, covenant permitting new investment.'
  },
  {
    id:'fc098', topic:'W5-MM', difficulty:'Applied',
    front:'Trade-Off Theory — formula and optimal leverage prediction',
    back:'<b>V_L = V_U + t×D − PV(Expected Distress Costs)</b><br><br>Optimal D* where marginal tax benefit = marginal expected distress cost<br><br>Graph: firm value rises with D (tax shield dominates early), peaks at D*, then falls as distress costs accelerate.<br><br>Predictions:<br>• No zero debt (forgoing shield)<br>• No 100% debt (distress costs dominate)<br>• Firms with target D/E revert toward it<br>• Tangible assets → more debt (better collateral); intangibles → less debt'
  },
  {
    id:'fc099', topic:'W5-MM', difficulty:'Applied',
    front:'Costs of financial distress — direct vs. indirect',
    back:'<b>Direct costs:</b> legal fees, court costs, fire-sale asset discounts<br><br><b>Indirect costs (larger in practice):</b><br>• <b>Customers:</b> won\'t buy products needing long-term support (laptops, aircraft engines) from a potentially failing firm<br>• <b>Suppliers:</b> tighten credit terms, demand cash upfront<br>• <b>Employees:</b> key talent leaves for competitors; tacit knowledge lost<br>• <b>Investment:</b> positive-NPV projects foregone (debt overhang)<br><br>Financial distress ≠ economic distress — only leverage causes the former.'
  },

  /* ══════════════════════════════════════════════════════════════
     WEEK 5B — LIMITS TO DEBT, PECKING ORDER, WACC
  ══════════════════════════════════════════════════════════════ */
  {
    id:'fc100', topic:'W5-Limits', difficulty:'Applied',
    front:'Jensen\'s Free Cash Flow Hypothesis — what is the agency problem and solution?',
    back:'<b>Problem:</b> managers with small ownership bear fraction of cost but 100% of perquisite benefit → private jets, luxury HQ, empire-building acquisitions, excessive cash hoarding (Yermack jet study).<br><br>FCF hypothesis: free cash flow in excess of positive-NPV projects gets wasted.<br><br><b>Solution: debt</b> — mandatory interest payments are a hard constraint. Miss interest → default → CEO fired. This disciplines cash flow management far more effectively than dividends (missing dividends = bad press only, no legal obligation).'
  },
  {
    id:'fc101', topic:'W5-Limits', difficulty:'Applied',
    front:'Pecking Order Theory — hierarchy of financing (5 levels)',
    back:'Managers prefer (in order):<br>1. <b>Internal funds</b> (retained earnings/cash) — no transaction costs, no information disclosure<br>2. <b>Safe (investment-grade) debt</b> — price insensitive to private info<br>3. <b>Risky (high-yield) debt</b> — more info-sensitive<br>4. <b>Convertible debt / hybrid securities</b><br>5. <b>Equity (last resort)</b> — maximum information sensitivity<br><br>Cause: <span class="highlight">information asymmetry</span>. Managers know true firm value; equity issuance signals overvaluation → price falls ≈−3% on announcement.'
  },
  {
    id:'fc102', topic:'W5-Limits', difficulty:'Exam-Standard',
    front:'Pecking Order vs. Trade-Off Theory — 3 key differences',
    back:'<b>Target D/E ratio:</b> Trade-Off = yes (firms revert); Pecking Order = no (path-dependent)<br><br><b>Profitable firms:</b> Trade-Off = more debt (more taxes → use more shield); Pecking Order = LESS debt (more internal funds → less need to issue any security)<br><br><b>Zero-leverage firms:</b> Trade-Off = anomaly (forgoing shield); Pecking Order = explained (ample internal funds)<br><br>Empirically: ≈70% of corporate financing from internal funds — consistent with Pecking Order.'
  },
  {
    id:'fc103', topic:'W5-Limits', difficulty:'Applied',
    front:'Stock price reactions to security issuance',
    back:'When a firm announces a new issue, the market infers management\'s private information about valuation:<br><br>• <b>Common equity (industrial):</b> ≈ −3% (strongest overvaluation signal)<br>• <b>Common equity (utility):</b> ≈ −1% (regulated; less info asymmetry)<br>• <b>Convertible debt:</b> ≈ −2% (partly equity)<br>• <b>Straight debt:</b> ≈ 0% (senior claim; price insensitive to firm value)<br><br>Pattern confirms: more equity-like → worse signal → bigger price drop.'
  },
  {
    id:'fc104', topic:'W5-Limits', difficulty:'Applied',
    front:'Personal taxes and the Miller Model',
    back:'<b>Relative Tax Advantage of Debt:</b><br>TA = (1−t_D) / [(1−t_corp)×(1−t_E)]<br><br>TA > 1: debt preferred; TA < 1: equity preferred<br><br>Tax-exempt investors (pension funds): t_E=t_D=0 → TA = 1/(1−t_corp) > 1 → prefer equity (or indifferent to structure)<br><br>Highly taxed individuals (t_D=45%, t_E=20%): advantage of debt much smaller than corporate tax rate alone suggests.<br><br>Different investor clienteles have different preferred capital structures.'
  },
  {
    id:'fc105', topic:'W5-Limits', difficulty:'Applied',
    front:'Beta levering and unlevering formulas',
    back:'<b>Unlevering (Beta_D = 0 case):</b><br>β_U = (E/V) × β_L = β_L / (1 + D/E)<br><br><b>Levering:</b><br>β_L = β_U × (1 + D/E)<br><br><b>General (Beta_D ≠ 0):</b><br>β_U = (E/V)×β_L + (D/V)×β_D<br>β_L = β_U×(1+D/E) − β_D×(D/E)<br><br>Why β_L > β_U: equity is a residual claim and bears ALL variability with a smaller equity base → leverage amplifies systematic risk.'
  },
  {
    id:'fc106', topic:'W5-Limits', difficulty:'Exam-Standard',
    front:'WACC — 5 common errors to avoid',
    back:'1. <b>Using book value weights</b> instead of market values (market values correct)<br>2. <b>Using current D/E</b> instead of target capital structure<br>3. <b>Including interest in FCF AND using WACC</b> (double-counts tax shield)<br>4. <b>Using comparable\'s levered beta directly</b> (imports their financial risk — must unlever then re-lever)<br>5. <b>Using statutory tax rate</b> when effective rate differs substantially<br><br>WACC embeds the tax shield in the <span class="highlight">denominator</span> via r_D×(1−t). FCF must be unlevered (no interest).'
  },
  {
    id:'fc107', topic:'W5-Limits', difficulty:'Exam-Standard',
    front:'WACC 5-step procedure when business risk differs from comparables',
    back:'1. Find β_D(industry) using CAPM: β_D = (r_D−R_f)/MRP<br>2. Unlever β_L(industry): β_U = (E/V)×β_L + (D/V)×β_D → pure business risk<br>3. Find β_D(project) using project\'s own r_D<br>4. Re-lever to project\'s D/E: β_L = β_U×(1+D/E)−β_D×(D/E)<br>5. Apply CAPM to get r_E, then compute WACC<br><br>Example: β_L=1.5, D/E=0.5, β_D=0.375 → β_U=1.125. Re-lever at D/E=0.5, β_D=0.5 → β_L=1.4375 → r_E=17.5% → WACC=13.83%'
  },
  {
    id:'fc108', topic:'W5-Limits', difficulty:'Exam-Standard',
    front:'Capital structure theory summary table — 7 theories, one key prediction each',
    back:'<b>MM (no tax):</b> V_L=V_U; no optimal structure<br><b>MM (corp tax):</b> V_L=V_U+tD; 100% debt optimal<br><b>Trade-Off:</b> interior D*; balance shield vs. distress<br><b>Agency (debt):</b> lower D for growth/intangible firms<br><b>Jensen (FCF):</b> mature firms should lever up to discipline managers<br><b>Miller (personal):</b> net gain from debt < tD; clientele effects<br><b>Pecking Order:</b> no target D/E; profitable firms use less debt; path-dependent'
  },
  {
    id:'fc109', topic:'W5-Limits', difficulty:'Applied',
    front:'Beta scenarios table — how leverage affects β_L',
    back:'Base: β_U = 0.80<br><br>D/E = 0 (all-equity): β_L = 0.80<br>D/E = 0.5: β_L = 0.80 × 1.5 = <span class="highlight">1.20</span><br>D/E = 2.0: β_L = 0.80 × 3.0 = <span class="highlight">2.40</span><br><br>With risky debt (D/E=1.0, β_D=0.3):<br>β_L = 0.80×2.0 − 0.3×1.0 = <span class="highlight">1.30</span> (lower than 1.60 with risk-free debt because creditors absorb some market risk)'
  },
  {
    id:'fc110', topic:'W5-Limits', difficulty:'Applied',
    front:'LBO targets — why do PE firms lever up "lazy balance sheets"?',
    back:'Jensen\'s FCF hypothesis predicts that:<br>• Cash-rich mature firms with limited reinvestment opportunities waste FCF<br>• Levering up forces discipline: interest must be paid or default follows<br><br><b>LBO targets:</b> stable, cash-generative businesses (retail, food manufacturing) with underutilised debt capacity and potentially entrenched management.<br><br>PE acquires, loads up with debt, forces management efficiency, then exits via IPO or sale at higher valuation. Debt acts as the disciplinary mechanism.'
  },
  {
    id:'fc111', topic:'W5-Limits', difficulty:'Applied',
    front:'WACC worked example — same business risk',
    back:'E=$3,000m, D=$1,500m, β_L=1.0, R_f=6%, MRP=8%, r_D=10%, t=35%<br><br>r_E = 6% + 1.0×8% = <b>14%</b><br>WACC = (3000/4500)×14% + (1500/4500)×10%×0.65<br>= 9.33% + 2.17% = <span class="highlight">11.5%</span><br><br>Project: costs $50m, FCF=$10m/yr forever<br>V = 10/0.115 = $86.96m; NPV = $36.96m → <b>ACCEPT ✓</b>'
  },
  {
    id:'fc112', topic:'W5-Limits', difficulty:'Foundational',
    front:'Why does observed leverage vary across industries?',
    back:'Two key determinants:<br><br>1. <b>Asset tangibility:</b> tangible assets (planes, factories, property) are better collateral → easier to borrow against → higher optimal leverage. Intangible assets (brand, patents) lose value in distress → lower leverage.<br>   • Disney (IP-heavy): D/V ≈ 9%<br>   • Delta Air Lines (tangible fleet/slots): D/V ≈ 53%<br><br>2. <b>Cash flow stability:</b> stable, predictable cash flows → lower distress probability → can support more debt.'
  },

  /* ══════════════════════════════════════════════════════════════
     MIXED EXAM TRAPS AND FORMULA CARDS
  ══════════════════════════════════════════════════════════════ */
  {
    id:'fc113', topic:'W3-Rules', difficulty:'Exam-Standard',
    front:'Excel NPV trap — what is the common mistake?',
    back:'<b>WRONG:</b> =NPV(rate, CF0:CF5)<br>This discounts CF0 by one period — treating t=0 as t=1.<br><br><b>CORRECT:</b> =NPV(rate, CF1:CF5) + CF0<br>CF0 is already at present value — add it outside the NPV function.<br><br>=IRR(CF0:CF5) is correct — IRR assumes the first entry is at t=0.<br><br>This is one of the most common exam errors in capital budgeting calculations.'
  },
  {
    id:'fc114', topic:'W2-Bonds', difficulty:'Exam-Standard',
    front:'Why does YTM ≠ expected return on a bond?',
    back:'YTM assumes:<br>1. The issuer will NOT default (ignores credit risk)<br>2. All coupons are reinvested at the YTM rate (rarely achievable)<br><br>Therefore: YTM overstates expected return for risky bonds.<br><br>For cost of debt estimation: YTM is used as a starting point but should be adjusted downward for the probability of default. The true cost of debt to the firm = YTM × (1−default probability adjustment).'
  },
  {
    id:'fc115', topic:'W3-CashFlows', difficulty:'Exam-Standard',
    front:'Why NEVER include interest in FCF when using WACC?',
    back:'WACC already incorporates the tax benefit of debt via the (1−t) factor on r_D.<br><br>If you also deduct interest from cash flows, you double-count the tax shield:<br>• Once in lower FCF (interest deducted)<br>• Once in lower WACC (×(1−t))<br><br><b>FCF must be unlevered</b> (as if the firm had no debt) — start from EBIT×(1−t), not net income. Interest expense is a financing cash flow, handled entirely through the discount rate.'
  },
  {
    id:'fc116', topic:'W4-CAPM', difficulty:'Exam-Standard',
    front:'High total volatility but low beta — is this possible? What does it mean?',
    back:'Yes — this is the Campbell Soup case (σ=26%, β=0.536).<br><br>Campbell has high total risk but most of it is <span class="highlight">idiosyncratic</span> (specific to the company — food industry quirks, management decisions, etc.) and very little is correlated with the market.<br><br>CAPM only rewards systematic risk (β). Because Campbell\'s correlation with the market is low (Corr=0.33), investors in a diversified portfolio barely "feel" its volatility.<br><br>Required return = only 7.2%, despite high total risk.'
  },
  {
    id:'fc117', topic:'W5-MM', difficulty:'Exam-Standard',
    front:'Why is MM+taxes prediction of 100% debt unrealistic?',
    back:'MM with corporate taxes alone predicts V_L = V_U + t×D, so firm value rises linearly with debt — implying 100% debt is optimal.<br><br>This fails because it ignores:<br>1. <b>Costs of financial distress</b> (direct + indirect)<br>2. <b>Agency costs of debt</b> (risk-shifting, underinvestment, asset-stripping)<br>3. <b>Personal taxes</b> (partly offset corporate benefit)<br><br>Trade-Off Theory fixes this by introducing distress costs → interior optimum D*.'
  },
  {
    id:'fc118', topic:'W2-Stocks', difficulty:'Exam-Standard',
    front:'Apple NPVGO — what does $175 NPVGO out of $250 price tell us?',
    back:'P₀=$250, EPS=$7.47, R=10%<br>Cash cow = EPS/R = $74.70<br>NPVGO = $250 − $74.70 = <span class="highlight">$175.30</span> (≈70% of price)<br><br>This means 70% of Apple\'s market value comes from the market\'s expectation of future positive-NPV projects — not current earnings power.<br><br>Implicit g: R − D₁/P₀ ≈ 10% − (1.04/250) ≈ 9.6% forever — suspiciously high for a perpetuity. Suggests the market expects growth to continue at a very high rate, making the valuation sensitive to growth assumptions.'
  },
  {
    id:'fc119', topic:'W1-TVM', difficulty:'Applied',
    front:'Payables Turnover — formula (uses Purchases, not COGS)',
    back:'<b>Payables Turnover = Purchases / Accounts Payable</b><br><br>Where Purchases = COGS + ΔInventory = 1655 + (269−280) = 1644 → Worked: 1644/213 = 7.7×<br>Days Payable = 365/7.7 = <span class="highlight">47 days</span><br><br>Key difference from Inventory Turnover: use PURCHASES (not COGS) because AP relates to what was bought, not what was sold. The difference matters when inventory changes.'
  },
  {
    id:'fc120', topic:'W3-Rules', difficulty:'Applied',
    front:'Replacement chain method vs. EAC — which is preferred and when?',
    back:'Both handle unequal project lives, but:<br><br><b>Replacement chain:</b> repeat shorter project to match LCM horizon. Complex when LCM is large (e.g. 3yr and 7yr → 21 periods).<br><br><b>EAC (preferred):</b> NPV / annuity factor. Choose lower EAC (lower annual cost). Much simpler.<br><br>Both assume projects are <i>repeatable</i>. If technology or demand will change, neither method is appropriate — use NPV with an explicit end date.'
  },
  {
    id:'fc121', topic:'W4-Risk', difficulty:'Applied',
    front:'Airlines + Oil diversification example',
    back:'North Air + West Air: both airlines → high positive correlation → σ_p = 12.1% (slight benefit from diversification)<br><br>West Air + Tex Oil: airline + oil company → negative/low correlation → σ_p = 5.1% (same return, much lower risk)<br><br>Key insight: adding an oil company to an airline portfolio dramatically reduces risk because fuel costs are the airline\'s biggest expense — airline and oil profits move in opposite directions. This is the power of <span class="highlight">negative correlation</span>.'
  },
  {
    id:'fc122', topic:'W5-MM', difficulty:'Applied',
    front:'Observed leverage examples — Disney vs. Delta',
    back:'<b>Disney (D/V ≈ 9%):</b> Assets are primarily content IP, brand, theme park experience — intangible, lose value quickly in distress, hard to pledge as collateral → low debt capacity.<br><br><b>Delta Air Lines (D/V ≈ 53%):</b> Assets are aircraft, landing slots, gates — tangible, retain value in distress, easy to repossess → high debt capacity.<br><br>Also: airlines have (somewhat) predictable revenue → can service debt. But aviation risk is high → moderate D/V despite tangible assets.'
  },
  {
    id:'fc123', topic:'W5-Limits', difficulty:'Applied',
    front:'Why do 70% of firms finance via internal funds (Pecking Order evidence)?',
    back:'Empirical fact: approximately 70% of corporate capital spending is funded by retained earnings and depreciation cash flows.<br><br>Consistent with Pecking Order:<br>• No adverse selection problem (no signal)<br>• No transaction costs<br>• Managers have informational advantage → reluctant to issue equity at prices they consider "too low"<br><br>Inconsistent with pure Trade-Off: Trade-Off predicts active issuance to maintain target D/E, but firms issue equity rarely and tend to drift away from targets without immediately correcting.'
  },
  {
    id:'fc124', topic:'W3-CashFlows', difficulty:'Foundational',
    front:'Opportunity cost example in capital budgeting',
    back:'A firm owns a warehouse it will use for a new project. The warehouse is "free" — no cash payment needed.<br><br>But: the warehouse has a <span class="highlight">market value</span> (e.g. £500k rental income foregone, or £2m sale price). This is the opportunity cost — what you give up by using it.<br><br>Rule: always include the market value of any resource used in a project, even if no money changes hands. The shadow price of using a resource is what you could have earned by not using it.'
  },
  {
    id:'fc125', topic:'W3-CashFlows', difficulty:'Applied',
    front:'Incremental cash flows — what are they and why "incremental"?',
    back:'Incremental cash flows = (cash flows with project) − (cash flows without project)<br><br>Only differences matter. Include:<br>• Direct project revenues and costs<br>• NWC changes directly caused by the project<br>• Side effects (cannibalism, synergies)<br>• Opportunity costs (resources diverted from elsewhere)<br><br>Exclude:<br>• Sunk costs (already incurred regardless)<br>• Allocated overheads that wouldn\'t change (unless they genuinely increase)'
  },
  {
    id:'fc126', topic:'W2-Bonds', difficulty:'Applied',
    front:'Consol (perpetual bond) pricing',
    back:'A <b>consol</b> pays a fixed coupon C forever with no principal repayment.<br><br><b>P = C / y</b><br><br>This is just the perpetuity formula. The consol never matures — it pays C forever.<br><br>Example: £5 annual coupon, y=4% → P = 5/0.04 = <span class="highlight">£125</span><br><br>Historical: UK government issued consols in the 18th century (still outstanding until 2015). Very sensitive to yield changes because duration = 1/y (very long).'
  },
  {
    id:'fc127', topic:'W4-CAPM', difficulty:'Applied',
    front:'CAPM with borrowing at risk-free — what happens to r_E and σ?',
    back:'With fraction x in risky portfolio P and (1−x) in R_f:<br><br><b>E[R] = R_f + x×(E[R_P]−R_f)</b><br>SD = x × SD(R_P) [when x>0, investing]<br><br>If x>1 (borrowing to invest more): SD > SD(R_P) and E[R] > E[R_P]<br>If 0<x<1 (lending): SD < SD(R_P), conservative<br><br>This works because Cov(R_f, anything)=0 and Var(R_f)=0, making SD perfectly linear in x. The capital allocation line is a straight line in [σ, E[R]] space.'
  },
  {
    id:'fc128', topic:'W1-Finance', difficulty:'Foundational',
    front:'What are the three financial statements and what does each measure?',
    back:'1. <b>Balance Sheet</b>: static snapshot at one point in time. Assets = Liabilities + Equity. Assets ordered by liquidity. Shows what the firm owns and owes.<br><br>2. <b>Income Statement</b>: flow over a period. Revenue → COGS → Gross Profit → SG&A → EBIT → EBITDA → Interest → Pretax Income → Tax → Net Income.<br><br>3. <b>Cash Flow Statement</b>: tracks actual cash in/out. Captures the gap between reported profit and real cash generation. Critical for DCF analysis.'
  }

,
  /* ══ EXTENDED CARDS — formulas, traps, additional concepts ══ */
  {
    id:'fc129', topic:'W1-TVM', difficulty:'Foundational',
    front:'What does an annuity factor look like in a mortgage context?',
    back:'For a £250,000 mortgage at 3% per semester over 10 semesters:<br>Annuity Factor = (1/0.03)×[1−1/(1.03)^10] = 8.5302<br>Payment C = 250,000/8.5302 = <b>£29,307.60 / semester</b><br><br>The annuity factor is the PV of £1 per period — divide the loan amount by it to find the payment. In early periods, most of each payment is interest; the capital balance falls slowly at first, then accelerates.'
  },
  {
    id:'fc130', topic:'W1-TVM', difficulty:'Applied',
    front:'Compounding more than once per year — why does it matter?',
    back:'With m compounding periods per year:<br>FV = C₀ × (1 + r/m)^(m×T)<br><br>More frequent compounding → higher FV for the same nominal rate.<br><br>Extreme: continuous compounding → FV = C₀ × e^(rT)<br><br>EAR captures this: at 12% nominal:<br>Annual (m=1): EAR = 12.00%<br>Semi-annual (m=2): EAR = 12.36%<br>Monthly (m=12): EAR = 12.68%<br>Daily (m=365): EAR ≈ 12.75%<br><br>Always compare using EAR.'
  },
  {
    id:'fc131', topic:'W2-Bonds', difficulty:'Applied',
    front:'Bond example: 30yr ZCB at y=6% — price and sensitivity',
    back:'P = F/(1+y)^T = 100/(1.06)^30 = <span class="highlight">£17.41</span><br><br>The bond trades at a massive discount because all value is deferred 30 years.<br><br>Sensitivity: if y rises 1% to 7%:<br>P = 100/(1.07)^30 = £13.14 → drop of £4.27 (25% fall)<br><br>ZCBs have the highest duration = T/(1+y) ≈ 28 years. Enormous interest rate sensitivity. Used by insurers to match long liability durations.'
  },
  {
    id:'fc132', topic:'W2-Bonds', difficulty:'Foundational',
    front:'What is a "par" bond? Why does this special case arise?',
    back:'A bond trades at par (P = Face Value) when its <b>coupon rate equals its YTM</b>.<br><br>Why: the coupon payments exactly compensate investors for time value at the prevailing yield — no premium or discount needed.<br><br>Mechanically: substitute c = y into the pricing formula:<br>P = (cF/y)×[1−1/(1+y)^T] + F/(1+y)^T = F ✓<br><br>If the company issued the bond at a time when market rates equalled its coupon, the bond started at par. It deviates as rates change.'
  },
  {
    id:'fc133', topic:'W3-Rules', difficulty:'Applied',
    front:'What is the "cross-over rate" in an NPV vs. IRR comparison?',
    back:'The <b>cross-over rate</b> is the discount rate at which two projects have equal NPVs. It is the IRR of the incremental cash flows (Project A − Project B).<br><br>Below the cross-over rate: prefer the project with higher NPV (usually slower, larger project)<br>Above the cross-over rate: preferences may flip<br><br>Significance: if r is below the cross-over, IRR and NPV may rank projects differently. The cross-over rate pins down precisely when the conflict begins.'
  },
  {
    id:'fc134', topic:'W3-CashFlows', difficulty:'Applied',
    front:'OCF — two equivalent formulas and why they give the same result',
    back:'<b>Formula 1:</b> OCF = EBIT×(1−t) + Depreciation<br>(Tax on operating profit; add back non-cash dep)<br><br><b>Formula 2:</b> OCF = EBITDA×(1−t) + Depreciation×t<br>(Tax on EBITDA; add back the dep tax shield)<br><br>These are algebraically identical:<br>EBIT = EBITDA − Dep<br>EBIT×(1−t)+Dep = (EBITDA−Dep)×(1−t)+Dep = EBITDA×(1−t)+Dep×t ✓<br><br>Formula 2 is useful because it separates the <span class="highlight">depreciation tax shield</span> explicitly.'
  },
  {
    id:'fc135', topic:'W4-Risk', difficulty:'Foundational',
    front:'Normal distribution and financial returns — the 68-95-99.7 rule',
    back:'If returns are normally distributed with mean μ and std dev σ:<br>• 68% of outcomes lie within μ ± 1σ<br>• 95% within μ ± 2σ<br>• 99.7% within μ ± 3σ<br><br>Example: large stocks, μ=12.3%, σ=20.2%<br>95% confidence interval: 12.3% ± 2×20.2% = [−28.1%, +52.7%]<br><br><b>Fat tails warning:</b> actual returns have more extreme outcomes than normal predicts (leptokurtosis). VaR models using normality famously failed during the 2008 financial crisis.'
  },
  {
    id:'fc136', topic:'W4-CAPM', difficulty:'Applied',
    front:'How is beta estimated in practice?',
    back:'Regression: (R_i − R_f) = α + β×(R_m − R_f) + ε<br><br>• Typical: 5 years of monthly returns (60 observations)<br>• Benchmark: FTSE 100/All-Share (UK), S&P 500/CRSP (US)<br>• Slope coefficient = β; intercept = α<br><br>β is then often <b>adjusted toward 1</b> (Blume adjustment) because individual company betas mean-revert over time: β_adjusted = 0.67×β_estimated + 0.33×1<br><br>Historical β estimates have high standard errors — typically ±0.2 for 60 observations.'
  },
  {
    id:'fc137', topic:'W5-MM', difficulty:'Exam-Standard',
    front:'MM graph: WACC with no taxes vs. with taxes — what is the key difference?',
    back:'<b>No taxes (MM I + II):</b><br>r_E slopes up linearly with D/E<br>r_D is flat (assumed constant)<br>WACC = r_0 = FLAT (horizontal line)<br><br><b>With taxes:</b><br>r_E still slopes up (less steeply than no-tax case)<br>r_D flat<br>WACC slopes <span class="highlight">DOWNWARD</span> with D/E (tax shield effect)<br><br>Common exam trap: drawing a flat WACC in the with-tax case, or drawing a downward WACC in the no-tax case.'
  },
  {
    id:'fc138', topic:'W5-MM', difficulty:'Applied',
    front:'What assumptions does MM require? (6 perfect capital market conditions)',
    back:'1. No corporate taxes<br>2. No personal taxes<br>3. No transaction costs<br>4. No bankruptcy/distress costs<br>5. No agency costs (managers maximise value)<br>6. No asymmetric information (symmetric expectations)<br><br>In reality, all six are violated. Each violation → a theory that extends MM:<br>Corporate taxes → MM+tax<br>Distress costs → Trade-Off<br>Agency costs → Agency Theory<br>Asymmetric info → Pecking Order'
  },
  {
    id:'fc139', topic:'W2-Stocks', difficulty:'Applied',
    front:'Zero-growth DDM — when is it appropriate?',
    back:'<b>P₀ = D / R</b><br><br>Appropriate for:<br>• Preferred shares (fixed dividend, no growth)<br>• Mature firms with no reinvestment opportunities (g=0)<br>• Quick rough estimates<br><br>Equivalent to: 100% payout ratio, ROE doesn\'t matter (no retained earnings to compound)<br><br>Cash cow valuation: P₀ = EPS/R (when all earnings paid as dividends and no reinvestment)<br><br>This is the denominator in NPVGO: the "no-growth" base value.'
  },
  {
    id:'fc140', topic:'W3-Rules', difficulty:'Foundational',
    front:'When does NPV agree with IRR? When do they conflict?',
    back:'<b>Agreement (both give same decision):</b><br>• Independent project with normal cash flow profile (−, +, +, +...)<br>• No capital rationing<br>• Single IRR (one sign change)<br><br><b>Conflict:</b><br>• Mutually exclusive projects with different <i>scale</i><br>• Mutually exclusive projects with different <i>timing</i><br>• <i>Financing</i> projects (flipped rule)<br>• Multiple sign changes → multiple IRRs<br><br>When conflict exists: <span class="highlight">always follow NPV</span>.'
  },
  {
    id:'fc141', topic:'W1-Finance', difficulty:'Applied',
    front:'ROE decomposition — what does "financial leverage" mean in DuPont?',
    back:'In DuPont: Leverage = Assets/Equity = 1 + Debt/Equity<br><br>Worked: Assets/Equity = 1879/805 = 2.33x → Debt/Equity = 133%<br><br>This multiplier shows how leverage amplifies ROA into ROE:<br>ROE = ROA × (1 + D/E) = 4.6% × 2.33 = <b>10.7%</b> ✓<br><br>A firm can boost ROE by taking on more debt — but this also increases financial risk. DuPont helps distinguish between firms that earn high ROE through operating excellence vs. those that simply use more leverage.'
  },
  {
    id:'fc142', topic:'W4-CAPM', difficulty:'Applied',
    front:'Market Portfolio — why does it exist and what is it?',
    back:'In CAPM, all rational investors with homogeneous expectations:<br>1. Identify the same tangent portfolio T (maximises Sharpe Ratio)<br>2. All demand T in proportion to their risk tolerance<br>3. In equilibrium: aggregate demand for risky assets = T<br>4. Supply of risky assets = market portfolio M<br>5. Therefore: T = M (the tangent portfolio IS the market portfolio)<br><br>The market portfolio contains every risky asset, weighted by market capitalisation. In practice approximated by broad indices (S&P 500, FTSE All-Share).'
  },
  {
    id:'fc143', topic:'W5-Limits', difficulty:'Applied',
    front:'Pecking Order — why is equity the last resort?',
    back:'Equity issuance is the most information-sensitive security. When a manager announces equity issuance:<br><br>Market inference: "The manager knows the firm\'s true value. If they\'re willing to sell equity now, they believe equity is overpriced relative to its true value."<br><br>Result: stock price drops ≈−3% on announcement (industrial firms).<br><br>Good firms (undervalued) are especially reluctant to issue equity at low prices. Only bad firms (overvalued) are eager. This adverse selection means equity issuance is a credible negative signal → managers avoid it.'
  },
  {
    id:'fc144', topic:'W3-CashFlows', difficulty:'Applied',
    front:'Project with cannibalism — how does it affect incremental FCF?',
    back:'Cannibalism occurs when a new product steals sales from the firm\'s existing products.<br><br>Example: new premium chocolate line cannibalises 10% of existing sales (£50k/yr). This REDUCES incremental revenue by £50k/yr.<br><br>Rule: include it as a <span class="highlight">negative side effect</span>.<br><br>Similarly, synergies (project increases sales of related products) are positive side effects — add them to incremental CFs.<br><br>Both are incremental effects — comparing "with project" to "without project" captures them automatically.'
  },
  {
    id:'fc145', topic:'W2-Bonds', difficulty:'Foundational',
    front:'Sovereign vs. corporate bonds — key difference for yield',
    back:'<b>Sovereign bonds</b> (government): backed by taxing power; near risk-free in developed countries. Yield ≈ R_f (risk-free rate). Used to extract spot rates.<br><br><b>Corporate bonds</b>: may default. Yield includes a <b>credit spread</b> above the sovereign rate to compensate for default risk.<br><br>Credit spread = yield_corporate − yield_sovereign ≈ compensation for expected default losses + risk premium<br><br>Higher credit risk → wider spread. Investment-grade vs. high-yield ("junk") distinction.'
  },
  {
    id:'fc146', topic:'W5-MM', difficulty:'Applied',
    front:'Financial distress vs. economic distress — what is the distinction?',
    back:'<b>Economic distress</b>: the firm\'s assets generate insufficient cash flows to be viable — the underlying business is failing. No amount of restructuring saves it.<br><br><b>Financial distress</b>: the firm has viable operations but cannot service its debt. Caused by <i>excessive leverage</i>, not bad operations.<br><br>Key: financial distress is avoidable by choosing less debt. A firm can be economically healthy but financially distressed. The costs of financial distress are a deadweight loss — they destroy value without creating any offsetting benefit.'
  },
  {
    id:'fc147', topic:'W4-Risk', difficulty:'Applied',
    front:'Why can\'t you diversify away all risk?',
    back:'Diversification works by pooling assets whose returns are imperfectly correlated.<br><br>As the number of stocks → ∞, the portfolio variance approaches:<br>Var_p → average covariance (not zero)<br><br>In equation form: Var_p = (1/n)×avg(σ²_i) + (1−1/n)×avg(Cov_ij)<br><br>As n→∞: Var_p → avg(Cov_ij) > 0<br><br>This irreducible risk = market/systematic risk. It arises from economy-wide factors that affect all stocks (business cycles, interest rates, inflation) — they can\'t be diversified away because all assets move together on these dimensions.'
  },
  {
    id:'fc148', topic:'W1-Finance', difficulty:'Applied',
    front:'What is EBITDA and why is it often used in analysis?',
    back:'EBITDA = Earnings Before Interest, Taxes, Depreciation and Amortisation<br>= EBIT + Depreciation + Amortisation<br><br>Why useful:<br>1. <b>Strips out financing</b> (interest) → comparable across capital structures<br>2. <b>Strips out non-cash charges</b> (D&A) → closer proxy for operating cash generation<br>3. <b>Strips out tax</b> → comparable across tax regimes<br><br>Common multiple: EV/EBITDA used in M&A valuation. Limit: ignores capex requirements — a capital-intensive firm may have high EBITDA but low FCF.'
  },
  {
    id:'fc149', topic:'W3-Rules', difficulty:'Foundational',
    front:'Capital rationing — what is it and which metric helps?',
    back:'<b>Capital rationing</b>: the firm has a limited budget and cannot fund all positive-NPV projects.<br><br>NPV alone is insufficient — a project with NPV=£100m requiring £500m investment may be less attractive than one with NPV=£80m requiring £100m, if budget is £100m.<br><br><b>Profitability Index (PI)</b> ranks by value per £ of investment: PI = PV(CFs)/Investment<br><br>Under hard rationing: rank by PI and fund in order until budget exhausted. This maximises total NPV from the constrained budget.'
  },
  {
    id:'fc150', topic:'W5-Limits', difficulty:'Applied',
    front:'What is the "debt overhang" problem and how can it be fixed?',
    back:'<b>Problem:</b> Shareholders of a deeply indebted firm reject positive-NPV projects because the gains accrue to creditors (who have priority in repayment).<br><br>Result: valuable projects not undertaken → firm value destroyed.<br><br><b>Solutions:</b><br>1. <b>Debt-for-equity swap</b>: convert debt to equity, reducing the overhang<br>2. <b>New money covenants</b>: agreement that new investment proceeds are ring-fenced for new investors<br>3. <b>Renegotiation/restructuring</b>: creditors agree to reduced claims to unlock project value<br>4. Lower D/V target from the start (preventative)'
  },
  {
    id:'fc151', topic:'W2-Stocks', difficulty:'Exam-Standard',
    front:'Differential growth timing trap — where does the terminal value sit?',
    back:'In the differential growth model, the terminal value uses the Gordon formula from year N+1 onwards:<br><br>P_N = D_{N+1} / (R − g₂)<br><br><b>This gives value at time N</b> (not time 0), because the perpetuity formula gives value one period BEFORE the first payment.<br>D_{N+1} is paid at time N+1 → Gordon gives value at time N.<br><br>To find P₀: discount P_N back N periods: P₀ += P_N/(1+R)^N<br><br>Common exam error: discounting back N+1 periods, or forgetting to discount at all.'
  },
  {
    id:'fc152', topic:'W1-Finance', difficulty:'Applied',
    front:'DuPont — profit margin vs. asset turnover trade-off: industry examples',
    back:'<b>High margin, low turnover</b> (capital-intensive industries):<br>Luxury goods, pharmaceuticals, software — large asset base needed, but high pricing power.<br><br><b>Low margin, high turnover</b> (thin-margin industries):<br>Supermarkets, discount retailers — very lean balance sheets but must sell in high volumes.<br><br>Similar ROA can be achieved via either route. DuPont shows the structural difference — useful when comparing firms across different business models.'
  },
  {
    id:'fc153', topic:'W3-CashFlows', difficulty:'Applied',
    front:'What is CAPEX and how does it appear in FCF?',
    back:'<b>CAPEX</b> (Capital Expenditure) = spending on long-term assets (PP&E)<br><br>In FCF: <b>FCF = OCF − ΔNWC − CAPEX</b><br><br>CAPEX is a <i>use of cash</i> — subtract it. It does NOT appear on the income statement (it\'s a balance sheet investment). Instead, its cost is allocated over time through depreciation.<br><br>Net CAPEX = Gross CAPEX − asset disposals (after-tax). When assets are sold, the after-tax proceeds are a cash inflow in the year of disposal.'
  },
  {
    id:'fc154', topic:'W4-CAPM', difficulty:'Applied',
    front:'What is the Capital Allocation Line (CAL)?',
    back:'The CAL is the set of all portfolio combinations of:<br>• A risky portfolio P (any point on efficient frontier), and<br>• The risk-free asset R_f<br><br>All combinations lie on a <b>straight line</b> in [σ, E[R]] space:<br>E[R] = R_f + (E[R_P]−R_f)/σ_P × σ<br><br>Slope = Sharpe Ratio of P.<br><br>The optimal CAL is the line through R_f <b>tangent to the efficient frontier</b> — this has the highest Sharpe Ratio. The tangent point = Market Portfolio M in CAPM.'
  },
  {
    id:'fc155', topic:'W5-MM', difficulty:'Applied',
    front:'What are creditor protections and how do they mitigate agency costs of debt?',
    back:'Creditors protect themselves against the three agency costs via:<br><br>1. <b>Covenants</b>: restrict dividends, additional borrowing, asset sales (prevents milking/stripping)<br>2. <b>Collateral</b>: pledge specific assets → reduces risk-shifting (creditors can seize pledged assets)<br>3. <b>Higher interest rates</b>: price in the agency risks at origination<br>4. <b>Short maturities</b>: frequent rollover allows reassessment of creditworthiness<br>5. <b>Seniority</b>: secured senior debt has first claim in liquidation'
  },
  {
    id:'fc156', topic:'W2-Stocks', difficulty:'Applied',
    front:'Required return formula from DDM — how to back it out',
    back:'From P₀ = D₁/(R−g), rearranging:<br><br><b>R = D₁/P₀ + g</b><br>= Dividend Yield + Capital Gains Yield (= g under constant growth)<br><br>Example: Apple P₀=$250, D₁=$1.04<br>g ≈ R − D₁/P₀ = 10% − 1.04/250 = 10% − 0.42% ≈ <b>9.6%</b> implied growth<br><br>This implicit growth rate of 9.6% forever is very high — suggests either the market is optimistic about Apple\'s perpetual growth, or CAPM R=10% is too low for Apple.'
  },
  {
    id:'fc157', topic:'W3-Rules', difficulty:'Applied',
    front:'Discounted Payback Period — how does it differ from simple payback?',
    back:'<b>Discounted Payback</b>: discount each cash flow first, THEN cumulate to find breakeven.<br><br>It fixes one of payback\'s flaws (time value of money) but retains the other two:<br>• Still ignores post-payback cash flows<br>• Still requires arbitrary cutoff T<br><br>One useful property: if discounted payback < T, the project is guaranteed to have NPV > 0 (because if you recover discounted costs within T, the remaining life is pure upside).<br><br>Conservative firms in uncertain environments may prefer it over full NPV.'
  },
  {
    id:'fc158', topic:'W1-TVM', difficulty:'Exam-Standard',
    front:'Growing perpetuity: what if the first payment is at t=0 (immediate)?',
    back:'Standard formula C/(r−g) assumes first payment at t=1.<br><br>If first payment is at t=0 (immediate annuity or perpetuity):<br>PV = C + C×(1+g)/(r−g+g) ... → PV₀ = C/(r−g) × (1+r)/(1) [multiply standard formula by (1+r)]<br><br>Simpler: PV₀ = C₀/(r−g) × (1+r) or equivalently PV₀ = C₁/(r−g) + C₀<br>(where C₁ = C₀×(1+g))<br><br>Always draw the timeline and mark which period each payment falls in before applying any formula.'
  },
  {
    id:'fc159', topic:'W4-Risk', difficulty:'Applied',
    front:'Holding Period Return (HPR) vs. multi-year geometric return',
    back:'<b>HPR</b> = total return over the whole holding period:<br>HPR = (1+r₁)(1+r₂)...(1+rₙ) − 1<br><br>Worked: +10%, −5%, +20%, +15%:<br>HPR = 1.10×0.95×1.20×1.15−1 = <b>44.21%</b><br><br><b>Geometric average</b> = annualised equivalent:<br>r_g = (1+HPR)^(1/n) − 1 = (1.4421)^(0.25) − 1 = <b>9.58%/yr</b><br><br>Arithmetic average = 10%/yr — higher because it doesn\'t account for the compounding effect of the −5% year dragging down subsequent gains.'
  },
  {
    id:'fc160', topic:'W5-Limits', difficulty:'Foundational',
    front:'What is the "soft" vs. "hard" constraint of dividends vs. debt?',
    back:'<b>Dividends (soft constraint):</b><br>• Cutting dividends signals bad news → negative share price reaction<br>• But legally optional — no obligation to pay<br>• Managers can always justify cutting ("to preserve capital")<br>• No legal consequences for cutting<br><br><b>Debt (hard constraint):</b><br>• Missing interest payment → immediate default<br>• Default → legal proceedings → CEO loses control<br>• Cannot renegotiate unilaterally<br><br>Jensen: only the hard constraint effectively disciplines managers. Debt is the better corporate governance tool.'
  },
  {
    id:'fc161', topic:'W2-Bonds', difficulty:'Applied',
    front:'Premium bond pricing worked example',
    back:'10-year coupon bond: coupon rate 6.375%, face £100, YTM 5%<br><br>Since coupon rate (6.375%) > YTM (5%) → <b>premium bond</b> → P > £100<br><br>P = (6.375/0.05)×[1−1/(1.05)^10] + 100/(1.05)^10<br>= 127.5×0.3861 + 61.39<br>= 49.23 + 61.39 = <span class="highlight">£110.62</span> ✓<br><br>Check: £110.62 > £100 ✓ (consistent with premium bond expectation)'
  },
  {
    id:'fc162', topic:'W1-Finance', difficulty:'Applied',
    front:'Payables Turnover formula — why use Purchases not COGS?',
    back:'<b>Payables Turnover = Purchases / Accounts Payable</b><br><br>AP represents amounts owed to suppliers for goods purchased (not sold). COGS includes items sold from inventory — it doesn\'t match the timing of what was bought on credit.<br><br>Purchases = COGS + Ending Inventory − Beginning Inventory = COGS + ΔInventory<br><br>Using COGS instead of Purchases would mismatch the AP balance with the wrong flow, giving a misleading turnover ratio.'
  },
  {
    id:'fc163', topic:'W3-Rules', difficulty:'Exam-Standard',
    front:'Why is NPV\'s reinvestment assumption at r more realistic than IRR\'s at IRR?',
    back:'NPV assumes intermediate cash flows are reinvested at the discount rate r = the firm\'s cost of capital.<br><br>This is realistic: in competitive markets, <span class="highlight">new investments earn exactly their cost of capital</span> on average. Positive-NPV opportunities are scarce and not infinitely scalable.<br><br>IRR assumes cash flows are reinvested at the IRR itself. If a project has IRR=40%, IRR assumes you can reinvest at 40% — but if the firm\'s cost of capital is 10%, this grossly overstates actual performance.<br><br>This inflated assumption drives the NPV-IRR conflict in the timing problem.'
  },
  {
    id:'fc164', topic:'W4-CAPM', difficulty:'Foundational',
    front:'What is the Market Risk Premium (MRP)?',
    back:'MRP = E[R_m] − R_f = the expected excess return on the market above the risk-free rate<br><br>Compensation for bearing market risk (β=1).<br><br>Historical US MRP ≈ 8.5% (large stocks − T-bills, 1926–2005)<br>UK historical MRP ≈ 5–6%<br><br>Debate: <b>historical</b> MRP (backward-looking, high) vs. <b>forward-looking</b> MRP (derived from DDM or surveys, typically 4–6%).<br><br>In exam: use the given MRP = E[R_m] − R_f without question.'
  },
  {
    id:'fc165', topic:'W5-MM', difficulty:'Applied',
    front:'What is V_U and how do you calculate it?',
    back:'V_U = value of an all-equity (unlevered) firm<br><br><b>Formula:</b> V_U = EBIT×(1−t) / r_0<br><br>Where r_0 = unlevered cost of capital (same as WACC when D=0)<br><br>This is the perpetuity value of after-tax operating earnings, discounted at the required return of an all-equity firm.<br><br>Then: V_L = V_U + PV(tax shield) − PV(distress costs)<br><br>r_0 is the "business risk" rate — the required return regardless of how the firm is financed.'
  },
  {
    id:'fc166', topic:'W3-CashFlows', difficulty:'Applied',
    front:'What is "straight-line depreciation" and how does it differ from accelerated?',
    back:'<b>Straight-line:</b> CAPEX / useful life per year<br>Example: £100k machine, 5yr life → £20k/yr<br><br><b>Accelerated (e.g. MACRS, declining balance):</b> higher depreciation in early years, lower in later years. Total depreciation = same, but timing differs.<br><br><b>Why accelerated increases NPV:</b><br>Same total tax shield (dep × t), but front-loaded → higher PV of shields at any positive discount rate. Effect larger when r is high or project life is long.'
  },
  {
    id:'fc167', topic:'W2-Stocks', difficulty:'Applied',
    front:'What does it mean when P/E is very high? (Market P/E ≈ 72× example)',
    back:'P/E = Payout Ratio / (R − g)<br><br>A very high P/E (≈72× vs. historical ≈25×) implies either:<br>1. <b>Very high expected g</b>: market expects exceptional growth perpetually<br>2. <b>Very low R</b>: discount rates have fallen (low risk-free rates)<br>3. <b>High payout ratio</b>: firms paying out more<br>4. <b>Temporary earnings depression</b>: current EPS is unusually low<br><br>High P/E is not necessarily overvaluation — it may reflect genuinely high growth expectations. But it does mean the valuation is <span class="highlight">sensitive to growth assumptions</span>.'
  },
  {
    id:'fc168', topic:'W5-Limits', difficulty:'Exam-Standard',
    front:'What is a leveraged buyout (LBO) and how does it relate to Jensen\'s theory?',
    back:'An LBO is an acquisition funded primarily with debt — the acquired firm\'s own cash flows service the debt.<br><br>LBO targets (Jensen): mature, cash-generative firms with:<br>• Large free cash flows in excess of investment needs<br>• "Lazy balance sheets" (little existing debt)<br>• Entrenched management empire-building<br><br>The LBO loads debt onto the firm, <b>forcing FCF to be used for debt service</b> rather than wasteful discretionary spending. The discipline of mandatory interest payments realigns management incentives.<br><br>Exit via IPO or sale at higher multiple after efficiency gains.'
  },
  {
    id:'fc169', topic:'W4-Risk', difficulty:'Applied',
    front:'Short-selling in a portfolio — what does a negative weight mean?',
    back:'A negative portfolio weight x_i < 0 means you are <b>short-selling</b> asset i:<br>1. Borrow shares and sell them immediately<br>2. Invest proceeds elsewhere<br>3. Eventually buy shares back to return to lender<br><br>Profit if price falls; loss if price rises.<br><br>Effect on portfolio: same two-asset variance formula applies with x_i < 0. Short positions extend the efficient frontier beyond what\'s achievable with long-only portfolios, but can dramatically increase risk at extreme positions.<br><br>Margin requirements and borrowing costs limit practical short positions.'
  },
  {
    id:'fc170', topic:'W3-Rules', difficulty:'Applied',
    front:'EAC — when does it give the wrong answer?',
    back:'EAC assumes projects are <b>infinitely repeatable</b> at the same cost and benefit profile.<br><br>Limitations:<br>1. If technology changes (new machine in 5 years will be better → don\'t chain current model 3 times)<br>2. If demand changes (project no longer needed)<br>3. If the "replacement chain" assumption is inappropriate<br><br>In these cases: use NPV with an explicit planning horizon and reasonable terminal value assumption.<br><br>EAC also ignores the option to delay — a firm may benefit from waiting rather than replacing immediately.'
  },
  {
    id:'fc171', topic:'W1-Finance', difficulty:'Foundational',
    front:'What is "invested capital" in the ROI formula?',
    back:'<b>Invested Capital = Net Fixed Assets + Net Working Capital</b><br>= Fixed Assets + (Current Assets − Current Liabilities)<br>= 873 + (761 − 486) = <b>£1,148</b><br><br>ROI = EBIT / Invested Capital = 219/1148 = <span class="highlight">15.7%</span> (higher than ROA = 4.6% because it uses EBIT not NI, and excludes cash/non-operating assets)<br><br>Invested capital represents the capital actually deployed in operating activities. ROI is a more operationally-focused metric than ROA.'
  },
  {
    id:'fc172', topic:'W2-Bonds', difficulty:'Foundational',
    front:'Three types of bonds: sovereign, investment-grade corporate, high-yield (junk)',
    back:'<b>Sovereign:</b> government-issued, near risk-free (in own currency). Used as benchmark. Examples: UK Gilts, US Treasuries. Low yield = low risk.<br><br><b>Investment-grade corporate:</b> rated BBB/Baa or above. Low default probability. Small credit spread above sovereign. Price insensitive to firm value (Pecking Order).<br><br><b>High-yield ("junk"):</b> rated below BBB. Higher default risk, larger spread. Price more sensitive to equity-like changes in firm value. Used in LBO financing.'
  },
  {
    id:'fc173', topic:'W4-CAPM', difficulty:'Exam-Standard',
    front:'Why do individual stocks lie to the RIGHT of the CML but ON the SML?',
    back:'The CML plots E[R] vs. <b>total volatility (σ)</b>. Individual stocks have idiosyncratic risk in addition to systematic risk → they have higher σ for their E[R] than fully diversified efficient portfolios → they plot BELOW and to the RIGHT of the CML.<br><br>The SML plots E[R] vs. <b>beta (systematic risk only)</b>. Individual stocks only need to be compensated for their systematic risk (β) → in equilibrium, every stock plots exactly ON the SML.<br><br>A stock off the SML = α ≠ 0 → mispriced → arbitrage opportunity.'
  },
  {
    id:'fc174', topic:'W5-MM', difficulty:'Applied',
    front:'What is r₀ (the unlevered cost of capital)?',
    back:'r₀ = required return on an all-equity (unlevered) version of the firm<br>= reflects <b>business risk only</b> (not financial risk)<br><br>In MM with no taxes: r₀ = WACC for any capital structure (WACC is constant)<br><br>In MM with taxes: r₀ > WACC (because WACC captures tax benefit of debt; r₀ ignores it)<br><br>To estimate r₀: unlever the WACC using:<br>r₀ = [(E/V)×r_E + (D/V)×r_D] (no-tax WACC formula)<br><br>It is the discount rate appropriate for unlevered cash flows.'
  },
  {
    id:'fc175', topic:'W3-CashFlows', difficulty:'Applied',
    front:'When should you use continuation vs. liquidation terminal value?',
    back:'<b>Liquidation</b>: use when the project truly ends — machines are sold, NWC is recovered, operations cease. Appropriate for finite-life projects with clear end dates.<br>TV = After-tax salvage + NWC recovery<br><br><b>Continuation (Gordon Growth)</b>: use when operations continue beyond the explicit forecast period — the firm or division keeps running. Appropriate for DCF of a whole business.<br>TV = FCF_{T+1}/(WACC−g)<br><br>NEVER add after-tax salvage to continuation TV — they assume different scenarios for what happens at T.'
  },
  {
    id:'fc176', topic:'W1-TVM', difficulty:'Applied',
    front:'Real vs. nominal interest rates — Fisher equation',
    back:'(1 + r_nominal) = (1 + r_real) × (1 + inflation)<br><br>Approximate: r_real ≈ r_nominal − inflation<br><br>Example: nominal rate 8%, inflation 3%:<br>r_real = (1.08/1.03) − 1 = <b>4.85%</b> (exact)<br>r_real ≈ 8% − 3% = 5% (approximate)<br><br>For capital budgeting: if revenues and costs are stated in today\'s pounds (real terms), use the real rate. If forecasted in future pounds including inflation (nominal), use the nominal rate. Never mix.'
  },
  {
    id:'fc177', topic:'W4-Risk', difficulty:'Foundational',
    front:'What does it mean for a portfolio return to be a weighted average, but variance is not?',
    back:'Portfolio return = weighted average because returns simply add up proportionally.<br>E[R_p] = x₁R₁ + x₂R₂ ✓ (exact, not approximate)<br><br>Portfolio variance is NOT a weighted average because it includes cross-terms (covariances):<br>Var(R_p) = x₁²σ₁² + x₂²σ₂² + 2x₁x₂Cov<br><br>The covariance term is what creates the <span class="highlight">diversification benefit</span>. If assets are perfectly correlated, Cov=σ₁σ₂ and Var_p = (x₁σ₁+x₂σ₂)² — σ_p is just the weighted average. For lower correlation, σ_p < weighted average.'
  },
  {
    id:'fc178', topic:'W2-Stocks', difficulty:'Foundational',
    front:'What is the dividend yield and capital gains yield in the DDM framework?',
    back:'Total return R = <b>Dividend Yield + Capital Gains Yield</b><br><br>Dividend Yield = D₁/P₀ (next dividend as % of current price)<br>Capital Gains Yield = g (under constant growth DDM, the stock price grows at g)<br><br>Proof: if P₀ = D₁/(R−g), then P₁ = D₂/(R−g) = D₁(1+g)/(R−g) = P₀(1+g)<br>So: capital gains yield = (P₁−P₀)/P₀ = g ✓<br><br>Therefore: R = D₁/P₀ + g — can be used to estimate required return from observed price and dividend data.'
  },
  {
    id:'fc179', topic:'W5-MM', difficulty:'Applied',
    front:'What is the "pie argument" for MM with taxes?',
    back:'With taxes, the pie has THREE claimants: equity holders, debt holders, and the government.<br><br>Unlevered: Government gets t×EBIT → firm value = EBIT×(1−t)/r₀<br>Levered: Interest is tax-deductible → government\'s slice shrinks → equity+debt holders get more<br><br>Each £ of interest reduces government\'s tax by t×£1.<br>Total shift = t × total interest = t × r_D × D (per year) → PV = t×D<br><br>V_L = V_U + t×D: the "extra" slice of pie = the tax shield, permanently taken from the government.'
  },
  {
    id:'fc180', topic:'W1-Finance', difficulty:'Applied',
    front:'What is the difference between dividends and share buybacks?',
    back:'Both distribute cash to shareholders but differ in:<br><br><b>Dividends:</b> all shareholders receive proportional cash. Taxed as income when received (generally at higher rate). Creates "dividend clientele" — income-seeking investors.<br><br><b>Share buybacks:</b> shareholders who sell receive cash; non-sellers get higher ownership share. Taxed as capital gains (often lower rate). More flexible — no obligation to maintain.<br><br><b>Why buybacks are more tax-efficient:</b> shareholders choose whether and when to realise gains → better timing flexibility for tax purposes.'
  },
  {
    id:'fc181', topic:'W3-Rules', difficulty:'Foundational',
    front:'Payback period in Mozambique — why is it rational despite theoretical flaws?',
    back:'Custodio\'s research: >90% of Mozambican CFOs use payback period rather than NPV.<br><br>This is <span class="highlight">rational</span> given their context:<br>1. <b>Expropriation risk</b>: government may seize assets → want capital back ASAP<br>2. <b>Political instability</b>: uncertain property rights → future cash flows highly uncertain<br>3. <b>Capital scarcity</b>: recovering capital quickly enables new projects<br>4. <b>High macro uncertainty</b>: long-horizon NPV calculations are meaningless when the discount rate is unstable<br><br>Lesson: optimal method depends on institutional context.'
  },
  {
    id:'fc182', topic:'W4-CAPM', difficulty:'Applied',
    front:'What happens to the SML as the risk-free rate changes?',
    back:'E[R_i] = R_f + β_i × (E[R_m] − R_f)<br><br>When R_f rises:<br>• The SML intercept shifts UP<br>• The MRP = E[R_m] − R_f may shrink (if E[R_m] doesn\'t rise proportionally)<br>• Required returns for all assets rise<br>• Asset prices fall to generate the higher required return<br><br>Steepness of SML = MRP: wider MRP → steeper slope → higher required return for any given β.<br><br>This is why rising interest rates hurt stock valuations — they shift the SML upward, reducing all stock prices through the DDM denominator.'
  },
  {
    id:'fc183', topic:'W5-Limits', difficulty:'Applied',
    front:'What is "asymmetric information" and why does it lead to Pecking Order?',
    back:'<b>Asymmetric information</b>: managers know the true value and prospects of the firm; outside investors do not. Managers know whether the firm is under- or over-valued.<br><br>Consequence for equity issuance:<br>• Good firm (undervalued): manager refuses to sell cheap equity — signals quality<br>• Bad firm (overvalued): manager eager to sell at premium — signals weakness<br>• Market cannot distinguish → any equity issuance is interpreted as a negative signal<br><br>Result: equity issuance is avoided (Pecking Order). Debt avoids this because debt value is less sensitive to private information about firm value.'
  },
  {
    id:'fc184', topic:'W3-CashFlows', difficulty:'Foundational',
    front:'What is NWC and why does it represent a funding need?',
    back:'<b>NWC = Current Assets − Current Liabilities</b><br>= (AR + Inventory + Cash) − (AP + Accruals)<br><br>As a business grows:<br>• Must hold more inventory → cash outflow<br>• Must fund more receivables → cash outflow<br>• May get more supplier credit (AP) → cash inflow<br><br>Net: growing NWC = real cash use. A profitable business on good growth trajectory can become insolvent if NWC growth outpaces its cash generation — this is why "profitable-but-failing" companies exist.<br><br>Always include ΔNWC in FCF (negative = cash outflow).'
  },
  {
    id:'fc185', topic:'W2-Bonds', difficulty:'Applied',
    front:'Forward rates example: s₁=3%, s₂=4%, s₃=5% — compute f₁₂, f₂₃, f₁₃',
    back:'<b>f₁₂</b> (1-year rate, 1 year forward):<br>f₁₂ = (1.04)²/(1.03) − 1 = 1.0816/1.03 − 1 = <span class="highlight">5.01%</span><br><br><b>f₂₃</b> (1-year rate, 2 years forward):<br>f₂₃ = (1.05)³/(1.04)² − 1 = 1.1576/1.0816 − 1 = <span class="highlight">7.03%</span><br><br><b>f₁₃</b> (2-year rate, 1 year forward):<br>f₁₃ = [(1.05)³/(1.03)]^(1/2) − 1 = [1.1576/1.03]^0.5 − 1 = <span class="highlight">6.02%</span><br><br>Upward-sloping spot curve → forward rates are even higher (rates expected to rise under Expectations Theory).'
  },
  {
    id:'fc186', topic:'W1-Finance', difficulty:'Foundational',
    front:'What is the Separating Principle in corporate finance?',
    back:'The investment and financing decisions can be evaluated <b>independently</b>:<br><br>1. First, find all positive-NPV investments (investment decision)<br>2. Then, choose how to fund them optimally (financing decision)<br><br>Why separable: in perfect capital markets (MM), financing choices don\'t affect the investment NPV. The value-creating activities (real investments) are separable from the value-neutral activity (financial engineering).<br><br>This is why we can calculate project NPV using WACC without worrying about which specific bond or equity issue will fund it.'
  },
  {
    id:'fc187', topic:'W3-Rules', difficulty:'Applied',
    front:'Chocolate factory scenarios — baseline, optimistic, pessimistic NPVs',
    back:'WACC: 7.7% (based on Nestlé comparables)<br><br><b>Baseline:</b> price £20/lb, cost £10/lb, rate 7.7% → <b>NPV ≈ £84k</b><br><br><b>Optimistic:</b> price £25/lb, cost £9/lb, rate 4% → <b>NPV ≈ £300k</b><br><br><b>Pessimistic:</b> price £18/lb, cost £13/lb, rate 9% → <b>Negative NPV</b><br><br>The wide range of outcomes illustrates the importance of scenario analysis — the baseline NPV is positive but the project could easily be negative under unfavourable conditions. Risk-averse management might require a higher margin of safety.'
  },
  {
    id:'fc188', topic:'W4-Risk', difficulty:'Foundational',
    front:'West Air + Tex Oil — why does oil company reduce airline risk?',
    back:'Airlines face a structural exposure: jet fuel is their largest operating cost. When oil prices rise, airline profits fall (higher costs). When oil prices fall, airline profits rise.<br><br>Oil companies profit when oil prices rise and struggle when they fall — the <span class="highlight">exact opposite</span> of airlines.<br><br>Therefore: Corr(airline, oil company) is strongly negative.<br><br>Combining West Air + Tex Oil: same expected return as West Air + North Air, but σ_p = 5.1% vs. 12.1%.<br><br>This illustrates how negative correlation creates large diversification benefits — the best portfolio gains come from combining negatively correlated assets.'
  },
  {
    id:'fc189', topic:'W5-MM', difficulty:'Applied',
    front:'WACC formula — what does each component represent?',
    back:'<b>WACC = (E/V)×r_E + (D/V)×r_D×(1−t)</b><br><br>(E/V) = equity weight in total capital (at <i>market value</i>)<br>r_E = required return on equity (from CAPM)<br>(D/V) = debt weight in total capital (at <i>market value</i>)<br>r_D = pre-tax cost of debt (YTM of bonds)<br>(1−t) = after-tax adjustment — interest is deductible, so effective cost = r_D×(1−t)<br>t = corporate tax rate (use <i>effective</i> rate, not statutory, if they differ)<br><br>WACC = weighted average opportunity cost of capital for the firm\'s investors.'
  },
  {
    id:'fc190', topic:'W2-Stocks', difficulty:'Applied',
    front:'NPVGO > 0 condition — what ROE and payout ratio combination achieves this?',
    back:'NPVGO > 0 requires ROE > R (required return).<br><br>Any firm where ROE > R should retain earnings (g > 0 adds value):<br>If ROE=20%, R=16%: every £1 retained earns 20¢ but only costs 16¢ → NPVGO > 0<br><br>But if ROE=10%, R=16%: retained earnings earn less than cost → NPVGO < 0 → pay it all out (g=0, cash cow is optimal)<br><br>Payout ratio affects g = (1−payout)×ROE. If ROE < R, set payout=100% to maximise P₀. If ROE > R, set payout=0% to maximise P₀ (though in practice, balancing via dividends).'
  },
  {
    id:'fc191', topic:'W5-Limits', difficulty:'Exam-Standard',
    front:'Top 5 formulas in the module (Custodio\'s list)',
    back:'1. <b>Bond pricing:</b> P = (C/y)×[1−1/(1+y)^T] + F/(1+y)^T<br><br>2. <b>Gordon DDM / NPVGO:</b> P₀ = D₁/(R−g) or P₀ = EPS/R + NPVGO<br><br>3. <b>CAPM:</b> E[R_i] = R_f + β_i×(E[R_m]−R_f)<br><br>4. <b>Portfolio variance:</b> Var(R_p) = x₁²σ₁²+x₂²σ₂²+2x₁x₂×Corr×σ₁×σ₂<br><br>5. <b>MM + WACC:</b> V_L = V_U + tD; WACC = (E/V)×r_E + (D/V)×r_D×(1−t)'
  },
  {
    id:'fc192', topic:'W5-Limits', difficulty:'Foundational',
    front:'Exam format reminder (from Prof. Custodio)',
    back:'• <b>Pen and paper, calculator only</b> — no Excel<br>• <b>Formula sheet provided</b><br>• <b>MCQs + long questions</b> with 5 sub-parts (a–e)<br>• Sub-questions are INDEPENDENT — if stuck on (a), attempt (b),(c)<br>• Parts a–b easier; parts d–e require interpretation<br>• <b>Part (e)</b>: typically "interpret your calculations / explain what they mean"<br>• NOT tested: YTM of coupon bonds algebraically; covariance from raw data<br>• TESTED: portfolio theory (max 2 assets); portfolio variance cold<br>• Show all working — <b>partial marks awarded</b>; no negative marking on MCQs'
  },
  {
    id:'fc193', topic:'W3-Rules', difficulty:'Applied',
    front:'Break-even analysis — how to find break-even quantity Q',
    back:'Step 1: Set NPV = 0<br>Step 2: Work backward to find the required OCF<br>NPV = 0 → OCF = CAPEX×r / [1−1/(1+r)^T] (annuity reversal)<br><br>Step 3: From OCF, find required EBIT:<br>OCF = EBIT×(1−t) + Dep → EBIT = (OCF−Dep)/(1−t)<br><br>Step 4: From EBIT, find required Q or Price:<br>EBIT = Q×(Price−VC) − FC − Dep<br>Q = (EBIT + FC + Dep) / (Price − VC)<br><br>Excel shortcut: Goal Seek → set NPV cell = 0 → change the Price or Q cell.'
  },
  {
    id:'fc194', topic:'W4-CAPM', difficulty:'Applied',
    front:'SML: where do over/under-valued stocks plot?',
    back:'Stocks above the SML: return > CAPM prediction → α > 0 → <b>undervalued</b> (priced too low → return too high). Investors buy → price rises → return falls back to SML.<br><br>Stocks below the SML: return < CAPM prediction → α < 0 → <b>overvalued</b> (priced too high → return too low). Investors sell → price falls → return rises to SML.<br><br>In equilibrium: all stocks ON the SML, α=0. The SML is the "fair value" line.<br><br>Investment managers seek α > 0 — rare and hard to sustain after fees.'
  },
  {
    id:'fc195', topic:'W2-Bonds', difficulty:'Applied',
    front:'Liquidity Premium Theory — why do long bonds require a premium?',
    back:'Long-maturity bonds are <b>riskier for investors</b> because:<br>1. Longer duration → greater price sensitivity to interest rate changes<br>2. Longer holding period → more uncertainty about future rates<br>3. Less liquid secondary market for very long bonds<br><br>Investors demand a <b>liquidity (term) premium</b> to hold long bonds.<br><br>Therefore: forward rates = expected future spot rates + term premium<br><br>Implication: even a flat yield curve implies rates are expected to FALL (forward rates above expected spot rates by the premium). An inverted curve is unambiguously bearish on future rates.'
  },
  {
    id:'fc196', topic:'W3-CashFlows', difficulty:'Foundational',
    front:'Cannibalism vs. synergy — give one example of each',
    back:'<b>Cannibalism (negative side effect):</b><br>A company launches a cheaper sub-brand that steals 15% of sales from its premium brand. The incremental FCF of the new product must subtract the lost contribution from the premium line.<br><br><b>Synergy (positive side effect):</b><br>An airline acquires a hotel chain — combined customers can now book flight+hotel packages, increasing bookings for both. The joint venture produces more value than the sum of parts.<br><br>Both are <i>externalities</i> — they affect other parts of the business and must be reflected in incremental project cash flows.'
  },
  {
    id:'fc197', topic:'W1-Finance', difficulty:'Foundational',
    front:'Income statement flow: Revenue → Net Income — all the steps',
    back:'Revenue (Sales)<br>− Cost of Goods Sold (COGS)<br>= <b>Gross Profit</b><br>− SG&A / Operating Expenses<br>= <b>EBIT</b> (Earnings Before Interest and Tax)<br>+ Depreciation and Amortisation (if added back)<br>= <b>EBITDA</b><br>− Interest Expense<br>= <b>Pretax Income (EBT)</b><br>− Tax<br>= <b>Net Income</b><br><br>From Net Income → Dividends + Retained Earnings (reinvested in firm)'
  },
  {
    id:'fc198', topic:'W5-MM', difficulty:'Applied',
    front:'Agency costs of debt: which firms are most affected?',
    back:'Agency costs of debt are highest for firms with:<br><br>• <b>High growth opportunities</b> (many future positive-NPV projects → debt overhang problem more severe)<br>• <b>Intangible assets</b> (brand, patents, human capital → hard to monitor, easy to dissipate)<br>• <b>High information asymmetry</b> (creditors can\'t easily verify asset values → risk-shifting harder to detect)<br><br>These firms should use LESS debt. Contrast: stable cash flow firms with tangible assets have lower agency costs → can use more debt.<br><br>This matches observed leverage patterns: tech/pharma (low D/V) vs. utilities/real estate (high D/V).'
  },
  {
    id:'fc199', topic:'W1-TVM', difficulty:'Applied',
    front:'Pension example: £20,000/yr growing 3%, 40 years, r=10%',
    back:'Growing annuity: C=£20,000, g=3%, r=10%, T=40 years<br><br>PV = [C/(r−g)] × [1 − ((1+g)/(1+r))^T]<br>= [20,000/0.07] × [1 − (1.03/1.10)^40]<br>= 285,714 × [1 − (0.9364)^40]<br>= 285,714 × [1 − 0.0721]<br>= 285,714 × 0.9279<br>= <span class="highlight">£265,311</span><br><br>Note: (1.03/1.10)^40 = (0.9364)^40 ≈ 0.072 — this ratio <1 means the growing annuity is bounded even over 40 years.'
  },
  {
    id:'fc200', topic:'W4-Risk', difficulty:'Foundational',
    front:'Small stocks vs. large stocks — historical risk-return (US 1926–2005)',
    back:'Small stocks: avg return 17.4%, σ=32.9%, risk premium 13.6%<br>Large stocks: avg return 12.3%, σ=20.2%, risk premium 8.5%<br><br>Small stocks have higher return AND higher risk — consistent with risk-return trade-off.<br><br>The extra 5.1% return for small stocks (small-cap premium) is partly explained by:<br>1. Higher systematic risk (higher β)<br>2. Less liquid, harder to trade<br>3. Higher information asymmetry<br><br>Note: the small-cap premium has largely disappeared or weakened in recent decades after it was first documented (data-mining concern).'
  },
  {
    id:'fc201', topic:'W5-Limits', difficulty:'Applied',
    front:'Why do utility companies\' equity issues cause smaller price drops than industrials?',
    back:'Stock price reaction to equity issuance:<br>• Industrial firms: ≈ −3%<br>• Utility companies: ≈ −1%<br><br>Why the difference? Utilities are heavily <span class="highlight">regulated</span>:<br>• Their prices, profits, and capital structures are monitored by regulators<br>• Less private information to hide — analysts and regulators know the business well<br>• Less information asymmetry → equity issuance is less of a negative signal<br><br>Consistent with Pecking Order: the magnitude of the price drop reflects the degree of information asymmetry, not just the equity issuance per se.'
  },
  {
    id:'fc202', topic:'W3-Rules', difficulty:'Applied',
    front:'PI example: capital rationing with three projects',
    back:'Budget: £20m. Three projects:<br>A: cost £20m, NPV £50.5m, PI = 1+50.5/20 = 3.53<br>B: cost £10m, NPV £43.3m, PI = 1+43.3/10 = 5.33<br>C: cost £10m, NPV £33.4m, PI = 1+33.4/10 = 4.34<br><br>Ranked by PI: B (5.33), C (4.34), A (3.53)<br>With £20m: fund B (£10m) + C (£10m) → NPV = £43.3m + £33.4m = <span class="highlight">£76.7m</span><br><br>Vs. funding A alone: NPV = £50.5m<br><br>Choosing B+C is better by £26.2m ✓ — PI allocates capital efficiently under rationing.'
  },
  {
    id:'fc203', topic:'W4-CAPM', difficulty:'Foundational',
    front:'What is the risk-free rate (R_f) in practice?',
    back:'The risk-free rate is the return on an investment with zero default risk and zero reinvestment risk.<br><br>Proxy: <b>short-term government T-bills</b> (e.g. 3-month UK Gilt, 3-month US Treasury)<br><br>Why short-term? Long government bonds have interest rate risk — their price fluctuates with rates — so they\'re not truly "risk-free" in terms of total return.<br><br>Historical US R_f = 3.8%/yr (T-bills, 1926–2005)<br>Current (2024) context: R_f has risen significantly from near-zero post-GFC<br><br>In CAPM: use a rate consistent with the investment horizon.'
  },
  {
    id:'fc204', topic:'W5-MM', difficulty:'Foundational',
    front:'The "two slices" of a levered firm\'s cash flows',
    back:'A levered firm generates EBIT from its operations. This cash flow is divided:<br><br><b>Unlevered:</b> All EBIT×(1−t) goes to equity holders. Tax = EBIT×t<br><br><b>Levered:</b> Two slices of after-tax cash flow:<br>• To creditors: r_D × D (interest)<br>• To equity: EBIT×(1−t) − r_D×D×(1−t)<br>• To government: EBIT×t − r_D×D×t (tax shield reduces this slice)<br><br>Total to private investors = more with debt (because government takes less).<br>The extra = t × r_D × D per period → PV = t×D (the tax shield value).'
  },
  {
    id:'fc205', topic:'W2-Stocks', difficulty:'Foundational',
    front:'What are the two sources of return on a stock?',
    back:'Total return R has two components:<br><br>1. <b>Dividend yield</b> = D_{t+1}/P_t (income component — cash received)<br><br>2. <b>Capital gain yield</b> = (P_{t+1} − P_t)/P_t (price appreciation component)<br><br>R = Dividend yield + Capital gain yield<br><br>Unlike bonds, neither is guaranteed:<br>• Dividends can be cut at any time<br>• Capital gains can be negative (losses)<br>• There is no par value to return at maturity<br><br>The DDM builds P₀ from the discounted sum of all future dividends.'
  }

]; // end FLASHCARD_DATA

/* Quick lookup: count by topic */
function getFlashcardCountByTopic(topic) {
  return FLASHCARD_DATA.filter(c => c.topic === topic).length;
}
