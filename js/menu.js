const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".card");
const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");

let index = 0;
const visibleCards = 3;
const totalCards = cards.length;

rightBtn.addEventListener("click", () => {
  if (index < totalCards - visibleCards) {
    index++;
    updateSlider();
  }
});

leftBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});

function updateSlider() {
  const cardWidth = cards[0].offsetWidth + 10; // عرض الكرت + الهامش
  slider.style.transform = `translateX(-${index * cardWidth}px)`;
}
