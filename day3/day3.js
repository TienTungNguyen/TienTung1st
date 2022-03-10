let Clickme = document.querySelector(".click");

let overlay = document.querySelector(".overlay");

let timeBox = document.querySelector(".modal-time");
let modal = document.querySelector(".modal");
console.log(timeBox);
let closeBtn = document.querySelector(".close");

Clickme.onclick = () => {
  overlay.style.display = "block";
};
let CloseModal = () => {
  overlay.style.display = "none";
};
timeBox.addEventListener("click", CloseModal);
closeBtn.addEventListener("click", CloseModal);
overlay.addEventListener("click", CloseModal);
modal.onclick = (event) => {
  event.stopPropagation();
};
