document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const heroImg = document.querySelector('.hero img');

  const maxHeight = window.innerHeight;
  const minHeight = 50;

  const updateHeroHeight = () => {
    const scrollY = window.scrollY;
    const newHeight = Math.max(minHeight, maxHeight - scrollY);
    hero.style.height = `${newHeight}px`;

    const scale = Math.max(0.3, 1 - scrollY / 1000);
    heroImg.style.transform = `scale(${scale})`;
  };

  updateHeroHeight();
  window.addEventListener('scroll', updateHeroHeight);
});




function openMenu() {
  document.getElementById("menu").style.display = "flex";
}
function closeMenu() {
  document.getElementById("menu").style.display = "none";
}
