let inputBox = document.querySelector(".input-box");
let searchBox = document.querySelector(".search-box");
searchBox.onclick = function () {
  inputBox.classList.toggle("open");
  this.previousElementSibling.firstElementChild.focus();
};
