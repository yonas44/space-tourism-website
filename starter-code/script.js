"use strict";
const home_btn = document.querySelector(".destination");
home_btn.addEventListener("click", function () {
  console.log("Hello yonas");
});
const moon_btn = document.querySelector(".moon");
const mars_btn = document.querySelector(".mars");
const europa_btn = document.querySelector(".europa");
const titan_btn = document.querySelector(".titan");
moon_btn.addEventListener("click", changeTabs);
mars_btn.addEventListener("click", changeTabs);
europa_btn.addEventListener("click", changeTabs);
titan_btn.addEventListener("click", changeTabs);

function changeTabs(btn) {
  if (!btn.path[0].classList.contains("active")) {
    moon_btn.classList.remove("active");
    mars_btn.classList.remove("active");
    europa_btn.classList.remove("active");
    titan_btn.classList.remove("active");
    btn.path[0].classList.add("active");
  }

  //
}
