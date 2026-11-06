// Unlimited Cloth docs: the language toggle (English default, Norwegian) and the phone menu. No libraries.
(function () {
  var html = document.documentElement;
  var lb = document.getElementById('langBtn');
  if (lb) lb.addEventListener('click', function () {
    var no = html.getAttribute('data-lang') !== 'no';
    html.setAttribute('data-lang', no ? 'no' : 'en'); html.lang = no ? 'no' : 'en';
    try { localStorage.setItem('ucloth-lang', no ? 'no' : 'en'); } catch (e) { /* private window */ }
  });
  var mb = document.getElementById('menuBtn'), nav = document.getElementById('nav');
  if (mb && nav) {
    mb.addEventListener('click', function () { var o = nav.classList.toggle('open'); mb.setAttribute('aria-expanded', o ? 'true' : 'false'); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) { nav.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); } });
  }
})();
