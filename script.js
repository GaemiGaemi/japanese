document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const heroImage = document.querySelector('.hero-image');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const minHeight = 60; // 더 작게 줄어듦
    const maxHeight = window.innerHeight;
    const newHeight = Math.max(minHeight, maxHeight - scrollY);
    const scale = Math.max(0.2, 1 - scrollY / (maxHeight * 1.2)); // 최소 0.2까지 줄어듦

    hero.style.height = `${newHeight}px`;
    heroImage.style.transform = `scale(${scale})`;
  });
});

