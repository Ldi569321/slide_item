const RC = document.getElementById("rightClick");
const LC = document.getElementById("leftClick");
let slider = document.getElementById("slider");
let innerSlider = document.querySelector(".slider-inner");
let box = document.querySelectorAll(".box");
let plus = 0;
let count = -1;

function Rclick() {
  if (plus < 2600) {
    plus += 200;
    innerSlider.style.left = `-${plus}px`;
  }
}

function Lclick() {
  if (plus > 0) {
    plus -= 500;
    innerSlider.style.left = `-${plus}px`;
  }
}

RC.addEventListener("click", Rclick);
LC.addEventListener("click", Lclick);