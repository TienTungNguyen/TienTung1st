let body = document.querySelector("body");
let pressKey = document.querySelector(".box-btn");
let screen = document.querySelector(".screen");
let cricle = document.querySelector(".cricle");
let cricleTitle = document.querySelector(".cricle-title");
let showKey = document.querySelector(".show-key");
let showLocal = document.querySelector(".show-location");
let showWhich = document.querySelector(".show-which");
let showCode = document.querySelector(".show-code");

showScreen = () => {
  screen.style.display = "block";
};
hidePressKey = () => {
  pressKey.style.display = "none";
};
showCricle = (e) => {
  let a = e.keyCode;
  cricleTitle.innerText = `${a}`;
};
showTheKey = (e) => {
  let b = e.key;
  showKey.setAttribute("value", `${b}`);
};
showTheLocation = (e) => {
  let b = e.which;
  showLocal.setAttribute("value", `${b}`);
};
showTheWhich = (e) => {
  let b = e.keyCode;
  showWhich.setAttribute("value", `${b}`);
};
showTheCode = (e) => {
  let b = e.code;
  showCode.setAttribute("value", `${b}`);
};

body.onkeyup = (e) => {
  hidePressKey();
  showScreen();
  showCricle(e);
  showTheKey(e);
  showTheLocation(e);
  showTheWhich(e);
  showTheCode(e);
};
