(() => {
  const frame = document.getElementById("powerbi-frame");
  const status = document.getElementById("embed-status");
  const link = document.getElementById("powerbi-link");
  const config = window.PORTFOLIO_CONFIG || {};
  const reportId = (config.powerBiReportId || "").trim();
  const publicValue = (config.powerBiPublicUrl || "").trim();

  const iframe = frame.querySelector("iframe") || document.createElement("iframe");
  iframe.title = "UK Trade Performance";
  iframe.allowFullscreen = true;
  if (!iframe.parentElement) frame.append(iframe);

  if (publicValue) {
    let url;
    try { url = new URL(publicValue); } catch { return; }
    const isPublicView = url.protocol === "https:" && url.hostname === "app.powerbi.com" && url.pathname === "/view" && url.searchParams.get("r");
    if (!isPublicView) return;
    iframe.src = url.href;
    link.href = url.href;
    status.firstChild.textContent = "Public report embedded. ";
    return;
  }

  if (!/^[0-9a-f-]{36}$/i.test(reportId)) return;
  const embed = new URL("https://app.powerbi.com/reportEmbed");
  embed.searchParams.set("reportId", reportId);
  embed.searchParams.set("autoAuth", "true");
  embed.searchParams.set("filterPaneEnabled", "false");
  embed.searchParams.set("navContentPaneEnabled", "false");
  iframe.src = embed.href;
  link.href = `https://app.powerbi.com/groups/me/reports/${reportId}`;
})();
