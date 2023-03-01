////////////////////////////////////////
// ハンバーガーメニュー
const ham = document.querySelector(".js-hamburger");
const nav = document.querySelector(".js-header-nav");
ham.addEventListener('click', function () {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
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
  console.log("before:" + before);
  console.log("place:" + place);
  console.log("after:" + after);
}

const title = document.querySelectorAll('.c-heading-en');
console.log(title.innerText);
title.forEach(el => {
  coloring(el, 3);
});
