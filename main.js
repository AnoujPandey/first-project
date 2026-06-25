/* ============================================
   SAGHURO BAATO — Main JS Entry Point
   Loads and initializes all modules
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initTicker();
  initMobileMenu();
  initSearch();
  initProgressBar();
  initBookmarks();
  initTimestamps();
});

/* Utility: format relative time */
function formatRelativeTime(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now - date) / 1000);

  if (diff < 60)    return 'अहिले';
  if (diff < 3600)  return `${Math.floor(diff / 60)} मिनेट अगाडि`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} घन्टा अगाडि`;
  if (diff < 604800)return `${Math.floor(diff / 86400)} दिन अगाडि`;

  return date.toLocaleDateString('ne-NP');
}

/* Update all [data-timestamp] elements */
function initTimestamps() {
  document.querySelectorAll('[data-timestamp]').forEach(el => {
    el.textContent = formatRelativeTime(el.dataset.timestamp);
  });
}
