/* ============================================
   SAGHURO BAATO — Reading Progress Bar
   Used on article.html only
   ============================================ */

function initProgressBar() {
  const bar     = document.getElementById('reading-progress');
  const article = document.querySelector('.article-body');

  if (!bar || !article) return;

  window.addEventListener('scroll', () => {
    const articleTop    = article.offsetTop;
    const articleHeight = article.offsetHeight;
    const scrolled      = window.scrollY - articleTop;
    const pct           = Math.min(100, Math.max(0, (scrolled / articleHeight) * 100));
    bar.style.width     = pct + '%';
  }, { passive: true });
}
