# Publish on GitHub Pages

Repository: `bboinnovate20/uk-goods-trade` (public).

1. Push these files to the repository's `main` branch, with `index.html` at the repository root.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. Wait for the Pages deployment to complete. The expected URL is `https://bboinnovate20.github.io/uk-goods-trade/`. Check the deployment status before treating it as live.

No build step, package installation or external fonts are required. `.nojekyll` keeps this a plain static site.

## Power BI file

`UK Trade Performance.pbix` is in the repository. GitHub Pages cannot open a `.pbix` file, and this project does not have a public Power BI link. The page therefore shows the report's August 2026 cards, contribution charts, trend, and detail table from the validated data. Open the `.pbix` in Power BI Desktop for the original report.

## Updating the data

This is an August 2026 snapshot. Updating CSVs alone will not update the page's KPI text, contribution text, SVG or Power BI model. A new release requires recalculating, revalidating and updating all these together, including date labels and the README.

## Included files

The notebook is a source-only copy: saved execution outputs and session metadata were removed for a clean public version. The original notebook remains in the local project. `UK Trade Performance.pbix` is included for Power BI Desktop. The GitHub Page shows that report's figures directly.
