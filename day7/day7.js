let input = document.querySelector(".input");
let body = document.querySelector("body");
let listItems = document.querySelector(".list-item");
let removeAll = document.querySelector(".remove");
let Coures = ["Node Js", "React"];
showCoures = () => {
  listItems.innerHTML = ``;
  for (var i = 0; i < Coures.length; i++) {
    let coure = Coures[i];
    listItems.innerHTML += `<li class="item">${coure} 
    <span class="close-btn" onclick='remove(${i})'>
    <i class="fas fa-times"></i></span></li>`;
  }
};
showCoures();

input.onchange = (e) => {
  let value = e.target.value;
  input.setAttribute("value", `${value}`);
};
body.onkeyup = (e) => {
  let key = e.keyCode;
  if (key === 13) {
    let valueItem = input.getAttribute("value");
    Coures.push(valueItem);
    showCoures();
  }
};

remove = (index) => {
  if (index > -1) {
    Coures.splice(index, 1); // 2nd parameter means remove one item only
    showCoures();
  }
};
removeAll.onclick = () => {
  Coures.length = 0;
  showCoures();
};
