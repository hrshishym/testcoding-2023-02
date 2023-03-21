////////////////////////////////////////
// ハンバーガーメニュー
const ham = document.querySelector(".js-hamburger");
const nav = document.querySelector(".js-header-nav");
const overlay = document.querySelector(".js-header-overlay");
const html = document.documentElement;

function toggleActive() {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
  overlay.classList.toggle('active');
  html.classList.toggle('fixed');
}

ham.addEventListener('click', function () {
  toggleActive();
});
overlay.addEventListener('click', function () {
  toggleActive();
});



////////////////////////////////////////
// 見出し英語(3文字目のみ色変更)
function coloring(el, pos=3) {
  if (el.innerText.length < pos) {
    return;
  }
  const before = el.innerText.slice(0, (pos-1));
  const place = el.innerText.slice((pos-1), pos);
  const after = el.innerText.slice(pos, el.innerText.length);
  el.innerHTML = before + "<span>" + place + "</span>" + after;  
  // console.log("before:" + before);
  // console.log("place:" + place);
  // console.log("after:" + after);
}

const title = document.querySelectorAll('.c-heading-en');
// console.log(title.innerText);
title.forEach(el => {
  coloring(el, 3);
});

const title_sub = document.querySelector('.p-mv-sub .p-mv-sub__heading');
if(title_sub) {
  coloring(title_sub, 2);
}

////////////////////////////////////////
// カルーセルスライダー
const swiper_thumbs = new Swiper('.swiper-thumbs', {
  slidesPerView: 4,
  spaceBetween: 8,
  watchSlidesProgress: true,
  breakpoints: {
    768: {
      spaceBetween: 50,
    }
  }
});

const swiper = new Swiper('.swiper', {
  // Slides per View
  slidesPerView: 1,
  thumbs: {
    swiper: swiper_thumbs,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  speed: 500,

});

////////////////////////////////////////
// お問い合わせ
// プライバシーポリシーに同意しないと送信ボタンが有効にならない
let check = document.querySelector("#agree");   // チェックボックス
let submit = document.querySelector("#submit"); // 送信ボタン

// チェックボックスがクリックされたら何かを実行したい
if(check) {
  check.addEventListener("click", function() {
    // チェックボックスがチェックされていたら
    // 送信ボタンの無効化を解除したい
    submit.disabled = !(check.checked);
  });
}

