'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// Prototype Function
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// 1. IMPLEMENTING OPEN & CLOSE MODAL WHEN CLICK CERTAIN BUTTON

// First Way
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// Better Way
btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// 2. IMPLEMENTING SMOOTH SCROLLING TO SECTION 1 WHEN CLICKING "LEARN MORE" BUTTON
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function () {
  // Old Way
  // const section1Coords = section1.getBoundingClientRect();
  // window.scrollTo({
  //   top: section1Coords.top + window.pageYOffset,
  //   left: section1Coords.left + window.pageXOffset,
  //   behavior: 'smooth',
  // });
  // console.log(section1Coords.top, window.pageYOffset);

  // 2. Modern Way
  section1.scrollIntoView({ behavior: 'smooth' });
});

// 3. IMPLEMENTING SMOOTH SCROLLING ON EACH NAV LINK
// - Uneffient way (Using forEach to all selected elements)

// document.querySelectorAll('.nav__link').forEach(function (buttonLink) {
//   buttonLink.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = buttonLink.getAttribute('href');

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// - Efficient way (Event Delegation)
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// 4. Tabbed Component
const tab = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll(`.operations__content`);

tabsContainer.addEventListener('click', function (e) {
  const click = e.target.closest('.operations__tab');

  if (!click) return;

  tab.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabContent.forEach(tab =>
    tab.classList.remove('operations__content--active')
  );

  click.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${click.dataset.tab}`)
    .classList.add('operations__content--active');
});

// 5. Fade out animation when we Mouse Over & Out on Nav Link
const nav = document.querySelector('.nav');

// 1. First Simple Way
// const fadeOutHandler = function (event, opacity) {
//   const siblings = event.target.closest('.nav').querySelectorAll('.nav__link');
//   const logo = document.querySelector('.nav__logo');

//   if (event.target.classList.contains('nav__link')) {
//     siblings.forEach(navLink => {
//       if (navLink !== event.target) navLink.style.opacity = opacity;
//     });
//     logo.style.opacity = opacity;
//   }
// };

// nav.addEventListener('mouseover', function (e) {
//   fadeOutHandler(e, '0.5');
// });

// nav.addEventListener('mouseout', function (e) {
//   fadeOutHandler(e, '1');
// });

// 2. Better Way (Using binding method on Event Listener argument)
const fadeOutHandler = function (event) {
  if (event.target.classList.contains('nav__link')) {
    const siblings = event.target
      .closest('.nav')
      .querySelectorAll('.nav__link');
    const logo = document.querySelector('.nav__logo');

    siblings.forEach(navLink => {
      if (navLink !== event.target) navLink.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', fadeOutHandler.bind('0.5'));

nav.addEventListener('mouseout', fadeOutHandler.bind('1'));

// 6. Fixed Navigation Bar when scroll position reach section 1

// 1. Unefficient way
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY, initialCoords.top);
//   console.log(initialCoords);
//   if (window.scrollY >= initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// 3. With using Observer API
const obsCallback = function (entries) {
  const [entry] = entries;
  console.log(entries);
  if (entry.isIntersecting) nav.classList.remove('sticky');
  else nav.classList.add('sticky');
};
const navFixedObserver = new IntersectionObserver(obsCallback, {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
});

navFixedObserver.observe(document.querySelector('.header'));

// 7. Reveal Sections
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  sectionObserver.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// 8. Lazy Loading Images (Untuk menjaga stabilitas performa website agar dapat berjalan dengan cepat dan efisien)
const imgTargets = document.querySelectorAll('img[data-src]'); //Cara menseleksi elemen yang memiliki atribute tertentu di CSS

const loadImage = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace Lazy Image with Data Src Image (Real Image)
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(image => imgObserver.observe(image));
console.log(imgTargets);

// 9. Slider
const sliders = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (curSlide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${curSlide}"]`)
      .classList.add('dots__dot--active');
  };

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, index) =>
        (s.style.transform = `translateX(${100 * (index - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide + 1 == maxSlide) curSlide = 0;
    else curSlide++;

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide - 1 == -1) curSlide = maxSlide - 1;
    else curSlide--;

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  // Event Handler
  // Next Slide
  btnRight.addEventListener('click', nextSlide);

  // Previous Slide
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key == 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

sliders();

document.addEventListener('DOMContentLoaded', function () {});

// Experiment
// const obsCallback = function (entries, observer) {
//   console.log(entries);
// };

// const obsOptions = {
//   root: null,
//   threshold: 0,
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(document.querySelector('.operations__tab--3'));
