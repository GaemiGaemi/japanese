document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const heroText = document.querySelector('.hero-text');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const minHeight = 80;
    const maxHeight = window.innerHeight;
    const newHeight = Math.max(minHeight, maxHeight - scrollY);
    const scale = Math.max(0.4, 1 - scrollY / (maxHeight * 1.5));

    hero.style.height = `${newHeight}px`;
    heroText.style.transform = `scale(${scale})`;
  });
});
