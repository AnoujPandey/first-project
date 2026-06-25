/* ============================================
   SAGHURO BAATO — Search Overlay
   ============================================ */

function initSearch() {
  const overlay  = document.getElementById('search-overlay');
  const openBtn  = document.getElementById('search-open');
  const closeBtn = document.getElementById('search-close');
  const input    = document.getElementById('search-input');

  if (!overlay) return;

  function openSearch() {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input && input.focus(), 100);
  }

  function closeSearch() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtn && openBtn.addEventListener('click', openSearch);
  closeBtn && closeBtn.addEventListener('click', closeSearch);

  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeSearch();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
  });
}
