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



document.addEventListener('DOMContentLoaded', () => {
  const phoneBtn = document.getElementById('phone');
  const contactMenu = document.getElementById('contactMenu');
  const mainContent = document.getElementById('mainContent');
  const closeBtn = document.getElementById('closeContact');

  const openMenu = () => {
    contactMenu.classList.remove('hidden');
    mainContent.classList.add('blur-sm');
    document.body.classList.add('overflow-hidden');
  };

  const closeMenu = () => {
    contactMenu.classList.add('hidden');
    mainContent.classList.remove('blur-sm');
    document.body.classList.remove('overflow-hidden');
  };

  phoneBtn.addEventListener('click', () => {
    contactMenu.classList.contains('hidden') ? openMenu() : closeMenu();
  });

  closeBtn.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('burger');
  const burgerMenu = document.getElementById('burgerMenu');
  const mainContent = document.getElementById('mainContent');
  const burgerIcon = document.getElementById('burgerIcon');
  const closeIcon = document.getElementById('closeIcon');

  if (!burgerBtn || !burgerMenu) return;

  const openBurger = () => {
    burgerMenu.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    if (mainContent) mainContent.classList.add('blur-sm');
    burgerIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  };

  const closeBurger = () => {
    burgerMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    if (mainContent) mainContent.classList.remove('blur-sm');
    burgerIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  };

  burgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    burgerMenu.classList.contains('hidden') ? openBurger() : closeBurger();
  });

  // Закрытие при клике вне меню
  document.addEventListener('click', (e) => {
    if (!burgerMenu.classList.contains('hidden') &&
        !burgerMenu.contains(e.target) &&
        !burgerBtn.contains(e.target)) {
      closeBurger();
    }
  });

  // Закрытие по Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBurger();
  });
});

document.addEventListener('DOMContentLoaded', () => {
	const moreLink = document.getElementById('more');
	const hiddenTxt1 = document.querySelector('.txt1');
	const hiddenTxt2 = document.querySelector('.txt2');

	moreLink.addEventListener('click', (e) => {
  hiddenTxt1.classList.remove('hidden');
  hiddenTxt2.classList.remove('hidden');
	});
});