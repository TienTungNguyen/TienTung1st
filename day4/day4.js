let imgs = document.querySelectorAll(".container img");
let showImg = document.querySelector(".show-img img");
let overlay = document.querySelector(".overlay");
let closeBtn = document.querySelector(".close");
let next = document.querySelector(".next-btn");
let pre = document.querySelector(".pre-btn");
let body = document.querySelector("body");
let currentIndex = 0;
closeBtn.addEventListener("click", function () {
  overlay.classList.remove("show");
});

imgs.forEach((item, index) => {
  item.addEventListener("click", function () {
    currentIndex = index;
    showModal();
  });
});
let showModal = () => {
  overlay.classList.add("show");
  showImg.src = imgs[currentIndex].src;
  currentIndex == imgs.length - 1
    ? next.classList.add("hide")
    : next.classList.remove("hide");

  currentIndex == 0 ? pre.classList.add("hide") : pre.classList.remove("hide");
};
next.addEventListener("click", function () {
  currentIndex++;
  showModal();
});
pre.addEventListener("click", function () {
  currentIndex--;
  showModal();
});
body.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    overlay.classList.remove("show");
  }
});
