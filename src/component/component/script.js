const swiper_thumbs = new Swiper('.swiper-thumbs', {
  pagination: {
    el: '.swiper-thumbs-pagination'
  },
  navigation: {
    nextEl: '.swiper-thumbs-button-next',
    prevEl: '.swiper-thumbs-button-prev',
  },
  slidesPerView: 2,
  spaceBetween: 8,
  scrollbar: {
    el: '.p-myswiper-thumbs .swiper-scrollbar',
    draggable: true,
  },
});

const swiper = new Swiper('.swiper', {

  // Slides per View
  slidesPerView: 1,

  thumbs: {
    swiper: swiper_thumbs,
  },

  effect: 'fade',
  fadeEffect: {
    // crossFade: true
  },
  speed: 1000,
});

////////////////////////////////////////
// ハンバーガーメニュー
const ham = document.querySelector(".js-hamburger");
const nav = document.querySelector(".js-header-nav");
ham.addEventListener('click', function () {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});
