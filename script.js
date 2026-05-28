document.addEventListener('DOMContentLoaded', function () {
  const animatedElements = document.querySelectorAll('[data-animate]');

  if (!('IntersectionObserver' in window)) {
    animatedElements.forEach((element) => element.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('visible');
      observerInstance.unobserve(entry.target);
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px',
  });

  animatedElements.forEach((element) => observer.observe(element));
});
