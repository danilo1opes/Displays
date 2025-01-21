function initAnimationScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  linksInternos.forEach((link) => {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarger.getAttribute('href');
      const section = document.querySeledctor(href);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    link.addEventListener('click', scrollToSection);
  });
}

initAnimationScroll();
