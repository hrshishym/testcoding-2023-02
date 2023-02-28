////////////////////////////////////////
// ハンバーガーメニュー
const ham = document.querySelector(".js-hamburger");
const nav = document.querySelector(".js-header-nav");
ham.addEventListener('click', function () {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});
