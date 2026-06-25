/* ============================================
   SAGHURO BAATO — Mobile Menu
   ============================================ */

function initMobileMenu() {
  const openBtn  = document.getElementById('mobile-menu-open');
  const closeBtn = document.getElementById('mobile-menu-close');
  const menu     = document.getElementById('mobile-menu');

  if (!menu) return;

  function open() {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    menu.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtn  && openBtn.addEventListener('click', open);
  closeBtn && closeBtn.addEventListener('click', close);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });
}
