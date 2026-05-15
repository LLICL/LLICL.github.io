(function () {

  /* ─── NAV ACTIVE LINK ─── */
  function initNav() {
    const links = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');

    function updateActive() {
      let current = '';
      sections.forEach((sec) => {
        const top = sec.getBoundingClientRect().top;
        if (top <= 200) current = sec.id;
      });
      links.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
    }

    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
  }

  /* ─── LOADING BAR RESET ─── */
  function initLoadingBar() {
    const fill = document.querySelector('.loading-fill');
    if (!fill) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fill.style.animation = 'none';
            void fill.offsetHeight;
            fill.style.animation = 'load 2.5s ease-in-out forwards';
          }
        });
      },
      { threshold: 0.3 }
    );

    const hero = document.querySelector('.hero');
    if (hero) observer.observe(hero);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initLoadingBar();
  });

})();
