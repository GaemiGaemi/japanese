document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const heroText = document.querySelector('.hero-content h1');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const minScale = 0.1;
    const scale = Math.max(minScale, 1 - scrollY / 1000);

    hero.style.transform = `scale(${scale})`;
    heroText.style.transform = `scale(${scale})`;
  });
});