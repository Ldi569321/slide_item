const btn = document.querySelectorAll("button");
let slider = document.getElementById("slider");
let innerSlider = document.querySelector(".slider-inner");
const box = document.querySelectorAll(".box");
let plus = 0;
let frontCount = -1;
let backCount;

function Rclick() {
  if (frontCount <= 6) {
    frontCount++;
    box[frontCount].classList.remove("fadeoutLeft"),
      void box[frontCount].offsetWidth,
      box[frontCount].classList.add("fadeoutLeft");
    btn[0].disabled = true;
    setTimeout(function () {
      innerSlider.appendChild(box[frontCount]);
      box[frontCount].classList.remove("fadeoutLeft");
    }, 200);
    setTimeout(function () {
      btn[0].disabled = false;
    }, 500);
  } else {
    box[0].classList.remove("fadeoutLeft"),
      void box[0].offsetWidth,
      box[0].classList.add("fadeoutLeft");
    btn[0].disabled = true;
    setTimeout(function () {
      innerSlider.appendChild(box[0]);
      box[0].classList.remove("fadeoutLeft");
    }, 200);
    setTimeout(function () {
      btn[0].disabled = false;
    }, 500);
    return frontCount = 0;
  }

  return backCount = frontCount;
}

btn[0].addEventListener("click", Rclick);
