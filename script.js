document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const heroImage = document.querySelector('.hero-image');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const minHeight = 80;
    const maxHeight = window.innerHeight;
    const newHeight = Math.max(minHeight, maxHeight - scrollY);
    const scale = Math.max(0.4, 1 - scrollY / (maxHeight * 1.5));

    hero.style.height = `${newHeight}px`;
    heroImage.style.transform = `scale(${scale})`;
  });
});
