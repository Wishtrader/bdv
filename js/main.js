document.querySelector('.dropdown-toggle').addEventListener('click', function () {
  const menu = document.querySelector('.dropdown-menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

const slider = document.getElementById('slider');
const slider2 = document.getElementById('slider2');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const prevBtn2 = document.getElementById('prev2');
const nextBtn2 = document.getElementById('next2');

const cardWidth = 282;
let position = 0;

const maxScroll = slider.scrollWidth - 1200;

function updateSlider() {
  slider.style.transform = `translateX(-${position}px)`;
  prevBtn.classList.toggle('hidden', position === 0);
}

function updateSlider2() {
  slider2.style.transform = `translateX(-${position}px)`;
  prevBtn2.classList.toggle('hidden', position === 0);
}

nextBtn.addEventListener('click', () => {
  position = Math.min(position + cardWidth, maxScroll);
  updateSlider();
});

nextBtn2.addEventListener('click', () => {
  position = Math.min(position + cardWidth, maxScroll);
  updateSlider2();
});

prevBtn.addEventListener('click', () => {
  position = Math.max(position - cardWidth, 0);
  updateSlider();
});

prevBtn2.addEventListener('click', () => {
  position = Math.max(position - cardWidth, 0);
  updateSlider2();
});