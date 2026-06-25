/* ============================================
   SAGHURO BAATO — Dark Mode
   ============================================ */

function initDarkMode() {
  const toggle = document.getElementById('darkmode-toggle');
  if (!toggle) return;

  const saved = localStorage.getItem('sb-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');

  applyTheme(theme);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('sb-theme', theme);

  const toggle = document.getElementById('darkmode-toggle');
  if (!toggle) return;

  toggle.textContent = theme === 'dark' ? '☀ Light' : '☾ Dark';
  toggle.setAttribute('data-mode', theme);
  toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}
