/* ============================================
   SAGHURO BAATO — Breaking News Ticker
   ============================================ */

function initTicker() {
  const track = document.querySelector('.ticker-track');
  if (!track) return;

  /* Duplicate content so the scroll loops seamlessly */
  const items = track.innerHTML;
  track.innerHTML = items + items;
}
