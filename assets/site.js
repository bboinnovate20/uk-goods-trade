(() => {
  const value = window.PORTFOLIO_CONFIG?.powerBiPublicUrl?.trim();
  if (!value) return;
  let url;
  try { url = new URL(value); } catch { return; }
  if (url.protocol !== 'https:' || url.hostname !== 'app.powerbi.com' || url.pathname !== '/view' || !url.searchParams.get('r')) return;
  const iframe = document.createElement('iframe');
  iframe.title = 'UK goods trade performance — interactive Power BI report';
  iframe.src = url.href;
  iframe.loading = 'lazy';
  iframe.allowFullscreen = true;
  document.getElementById('powerbi-frame').append(iframe);
  document.getElementById('embed-status').textContent = 'Explore the report below, or open it in a separate tab for a larger view.';
  const link = document.getElementById('powerbi-link');
  link.href = url.href;
  link.hidden = false;
})();
