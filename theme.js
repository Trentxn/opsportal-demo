// Apply the saved or system theme before first paint, so the page never flashes the wrong one.
(() => {
  var theme = null;
  try {
    theme = localStorage.getItem('opsportal.theme');
  } catch {
    // Storage can be unavailable, for example in private browsing. The system theme is used then.
  }
  if (theme !== 'light' && theme !== 'dark') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.dataset.theme = theme;
})();
