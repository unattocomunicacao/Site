(function () {
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('mobileMenu');
  function setMenu(open) {
    if (!menu || !btn) return;
    menu.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('no-scroll', open);
  }
  if (btn) btn.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
  if (menu) menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });

  var nav = document.querySelector('.nav');
  function onScroll() { if (nav) nav.classList.toggle('scrolled', window.scrollY > 60); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('visible'); });
  }
})();
