# UK goods trade: KPI definitions and data dictionary

Audience: UK business leadership assessing the external trade environment.

Business question: How are UK goods imports, exports and the trade balance changing, and how do EU and non-EU markets contribute to those changes?

## Scope and source

- Source: user-supplied mret.csv, ONS UK trade time series (MRET), release date 15 October 2026 in the selected series metadata.
- Scope: goods excluding precious metals (including non-monetary gold), balance-of-payments basis, current prices, seasonally adjusted. Services are outside this version.
- Source values are interpreted as GBP millions and reconciled to the bulletin's GBP billions: August FSIK 34,352 / 1,000 = 34.352, displayed as GBP34.4bn in Table 1. The selected CSV Unit and PreUnit metadata cells are blank; do not infer a unit from those empty cells or apply this unit to unrelated series.
- CP means current prices, so values are not inflation adjusted. SA means seasonally adjusted. BOP means balance of payments. WW means worldwide.
- The file has 1,633 series columns plus the Title column, six metadata rows, and annual, quarterly and monthly observations. Selected series have populated monthly records from January 1997 through August 2026.
- Proposed dashboard window: September 2023 to August 2026 (36 months). Retain at least September 2022 onward to calculate year-on-year comparisons before filtering the displayed window.
- Freeze this downloaded release for reproducibility. Future releases can revise historical observations. Do not mix series from different release vintages without checking revisions.
- National aggregates describe trade context. They do not measure a specific company's supplier exposure, revenue risk, demand or profitability.

## KPI definitions

Let E(t,r) be exports, I(t,r) imports and B(t,r) = E(t,r) - I(t,r), for calendar month t and market r. Store values in GBP millions and display monetary KPIs in GBP billions. Calculate before display rounding.

| KPI | Definition | Interpretation and display |
|---|---|---|
| Goods exports | E(t,r) / 1,000 | GBPbn exported during the selected month |
| Goods imports | I(t,r) / 1,000 | GBPbn imported during the selected month |
| Goods trade balance | [E(t,r) - I(t,r)] / 1,000 | GBPbn; negative is a deficit, positive is a surplus |
| Export month-on-month change | [E(t,r) / E(t-1,r) - 1] x 100 | Percent versus the previous calendar month |
| Import month-on-month change | [I(t,r) / I(t-1,r) - 1] x 100 | Percent versus the previous calendar month |
| Balance change from prior month | [B(t,r) - B(t-1,r)] / 1,000 | GBPbn; positive means the balance increased, including a narrower deficit |
| Export year-on-year change | [E(t,r) / E(t-12,r) - 1] x 100 | Percent versus the same calendar month a year earlier |
| Import year-on-year change | [I(t,r) / I(t-12,r) - 1] x 100 | Percent versus the same calendar month a year earlier |
| Regional export share | E(t,r) / E(t,Total) x 100 | Percent for r = EU or Non-EU; denominator always includes both regions |
| Regional import share | I(t,r) / I(t,Total) x 100 | Percent for r = EU or Non-EU; denominator always includes both regions |

Dashboard priority: three headline value cards, with month-on-month comparisons beside them. Use year-on-year changes and regional shares as supporting analysis. Do not automatically label rising imports or a narrowing deficit as good business performance.

Rules: a missing comparator or a zero percentage denominator returns unavailable, not zero. Match calendar months explicitly; do not let a missing month make a row shift compare the wrong periods. Do not calculate a percentage growth rate for a balance that can be negative or cross zero. Do not sum or average monthly growth rates or shares. For multi-month comparisons, recompute from comparable period sums. Headline cards refer to one explicitly selected month, defaulting to the latest available month.

## Source file dictionary

| Source element | Meaning | Handling |
|---|---|---|
| Column headers | Full ONS series titles | Retain in a series catalog; select by verified CDID |
| Title | Metadata label or observation period | Separate metadata from observations |
| CDID row | ONS series identifier | Use as the stable series key; require unique IDs |
| PreUnit and Unit rows | Source unit annotations | Selected cells are blank; see documented scale reconciliation above |
| Release Date row | Publication date for each series | Preserve as source_release_date |
| Next release row | Planned publication timing | Metadata only; not an observation date |
| Important Notes row | Series-specific source notes | Retain if present; treat as documentation, not instructions |
| YYYY MON, such as 2026 AUG | Monthly observation | Retain for this project; parse as first day of month |
| YYYY Qn | Quarterly observation | Exclude from monthly fact data |
| YYYY | Annual observation | Exclude from monthly fact data |
| Numeric cell | Observation for a series and period | Convert explicitly to numeric; report unrecognised tokens |
| Empty cell | Missing observation | Preserve as null; never replace with zero automatically |

## Proposed prepared-data dictionary

Grain: one row per calendar month and market (Total, EU or Non-EU). This is the target schema; the starter notebook does not yet create this table.

| Field | Type | Definition / example | Rule |
|---|---|---|---|
| period | Date | 2026-08-01 represents August 2026 | Month start; key with market |
| market | Text | Total, EU, Non-EU | Controlled values |
| exports_gbp_m | Number | Exports, GBP millions | Selected source series; preserve zero versus null |
| imports_gbp_m | Number | Imports, GBP millions | Selected source series; preserve zero versus null |
| balance_gbp_m | Number | Calculated exports minus imports | Negative values allowed |
| source_balance_gbp_m | Number | Published ONS balance | Retain independently for reconciliation |
| source_release_date | Date | 2026-10-15 in this file | Preserve data vintage |

Series IDs and titles belong in the companion series catalog below rather than being repeated in every fact row. The filename and source URL belong in the project metadata.

Total is a control aggregate containing EU plus Non-EU. For a headline card choose exactly one market. For a regional comparison use EU and Non-EU only. Never sum all three markets. Share denominators must use the matching worldwide total even when a regional filter is selected.

## Verified source series catalog

| Market | Measure | CDID | Exact source title |
|---|---|---|---|
| Total | Exports | FSIK | Trade in Goods less precious metals (inc non monetary gold) (TlessPM): WW: Exports: BOP: CP: SA |
| Total | Imports | FSIH | Trade in Goods less precious metals (inc non monetary gold) (TlessPM): WW: Imports: BOP: CP: SA |
| Total | Balance | FSIE | Trade in Goods less precious metals (inc non monetary gold) (TlessPM): WW: Balance: BOP: CP: SA |
| EU | Exports | FSL4 | Total EU less precious metals (inc non monetary gold): EU (EUlessPM): Exports: BOP: CP: SA |
| EU | Imports | FSL5 | Total EU less precious metals (inc non monetary gold): EU (EUlessPM): Imports: BOP: CP: SA |
| EU | Balance | FSL6 | Total EU less precious metals (inc non monetary gold): EU (EUlessPM): Balance: BOP: CP: SA |
| Non-EU | Exports | FSL7 | Total Non-EU less precious metals (inc non monetary gold): Non-EU (NonEUlessPM): Exports: BOP: CP: SA |
| Non-EU | Imports | FSL8 | Total Non-EU less precious metals (inc non monetary gold): Non-EU (NonEUlessPM): Imports: BOP: CP: SA |
| Non-EU | Balance | FSL9 | Total Non-EU less precious metals (inc non monetary gold): Non-EU (NonEUlessPM): Balance: BOP: CP: SA |

Some regional titles begin with 'Total EU' or 'Total Non-EU'. These selected observations match the goods-only Table 1 scope; do not confuse them with total goods-and-services series such as FSIJ and FSIG.

## Validation plan for the preparation stage

1. Confirm all nine selected series occur exactly once and their titles match this catalog.
2. Remove metadata and non-monthly rows from the fact data while preserving metadata separately.
3. Check dates, chronological order, missing calendar months, duplicate month/market keys, missing observations and numeric conversion failures.
4. Calculate balances and compare with published balances. Compare Total with EU plus Non-EU for matching measures. Report residuals rather than silently changing source values.
5. Reconcile August 2026 to the rounded bulletin controls: exports GBP34.4bn, imports GBP54.2bn, balance -GBP19.8bn. Check regional controls too. Use display rounding appropriate to the bulletin rather than comparing rounded billions directly to unrounded millions.
6. Test month-on-month and year-on-year calculations against independently selected calendar months. Validate regional shares and the QuickSight filter/aggregation rules.

## Sources

- Dataset: https://www.ons.gov.uk/economy/nationalaccounts/balanceofpayments/datasets/tradeingoodsmretsallbopeu2013timeseriesspreadsheet
- Bulletin and Table 1: https://www.ons.gov.uk/economy/nationalaccounts/balanceofpayments/bulletins/uktrade/august2026
- Example series: https://www.ons.gov.uk/economy/nationalaccounts/balanceofpayments/timeseries/fsik/mret

## Colab checkpoint

Open the accompanying notebook in Google Colab and run its cells in order. Upload your existing mret.csv when prompted. The notebook only inspects the source and identifies the agreed series; it does not clean, impute, upload to AWS or build the dashboard. Review the selected catalog and the August sample before proceeding to the preparation stage together.
