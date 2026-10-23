# Publish on GitHub Pages

Repository: `bboinnovate20/uk-goods-trade` (public).

1. Push these files to the repository's `main` branch, with `index.html` at the repository root.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. Wait for the Pages deployment to complete. The expected URL is `https://bboinnovate20.github.io/uk-goods-trade/`. Check the deployment status before treating it as live.

No build step, package installation or external fonts are required. `.nojekyll` keeps this a plain static site.

## Add the Power BI report

1. In Power BI Service, obtain the report's **Publish to web (public)** URL. This makes the report and underlying model data public; only use a model suitable for public sharing.
2. Set `powerBiPublicUrl` in `assets/config.js` to the `https://app.powerbi.com/view?r=...` URL. Do not paste iframe HTML or a private workspace link.
3. Replace the pending report link in `README.md` with the same public URL.
4. Commit and push the changes. GitHub Pages will redeploy.

Until a public URL is configured, the website shows a static snapshot generated from the validated CSV, and clearly labels the interactive report as pending. The static preview is not a Power BI screenshot.

## Updating the data

This is an August 2026 snapshot. Updating CSVs alone will not update the page's KPI text, contribution text, SVG or Power BI model. A new release requires recalculating, revalidating and updating all these together, including date labels and the README.

## Included files

The notebook is a source-only copy: saved execution outputs and session metadata were removed for a clean public version. The original notebook remains in the local project. The saved Power BI binary is not included; the intended viewing route is the public report embed.
