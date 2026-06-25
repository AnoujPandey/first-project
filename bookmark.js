/* ============================================
   SAGHURO BAATO — Bookmarks
   Saves article slugs to localStorage
   ============================================ */

const STORAGE_KEY = 'sb-bookmarks';

function initBookmarks() {
  /* Update all bookmark buttons on the page */
  document.querySelectorAll('[data-bookmark]').forEach(btn => {
    const slug = btn.dataset.bookmark;
    updateBookmarkBtn(btn, isBookmarked(slug));

    btn.addEventListener('click', () => {
      const nowBookmarked = toggleBookmark(slug);
      updateBookmarkBtn(btn, nowBookmarked);
    });
  });
}

function getBookmarks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch { return []; }
}

function isBookmarked(slug) {
  return getBookmarks().includes(slug);
}

function toggleBookmark(slug) {
  const list = getBookmarks();
  const idx  = list.indexOf(slug);

  if (idx === -1) {
    list.push(slug);
  } else {
    list.splice(idx, 1);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  return idx === -1;
}

function updateBookmarkBtn(btn, saved) {
  btn.textContent = saved ? '🔖 Saved' : '🔖 Save';
  btn.setAttribute('aria-pressed', saved);
  btn.style.color = saved ? 'var(--brand-red)' : '';
}
