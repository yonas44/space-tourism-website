"use strict";
const home_btn = document.querySelector(".destination");
home_btn.addEventListener("click", function () {
  console.log("Hello yonas");
});

const planet = document.querySelector("#destination-img");
const moon_btn = document.querySelector(".moon");
const mars_btn = document.querySelector(".mars");
const europa_btn = document.querySelector(".europa");
const titan_btn = document.querySelector(".titan");
const big_txt = document.querySelector(".big-txt");
const info = document.querySelector(".info");
const avg_dis = document.querySelector("#avg_dis");
const travel_time = document.querySelector("#travel_time");

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
    if (btn.path[0].classList.contains("moon")) {
      big_txt.textContent = "MOON";
      info.textContent =
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
      avg_dis.textContent = "384,400 KM";
      travel_time.textContent = "3 DAYS";
      planet.src = "./assets/destination/image-moon.png";
    } else if (btn.path[0].classList.contains("mars")) {
      big_txt.textContent = "MARS";
      info.textContent =
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
      avg_dis.textContent = "225 MIL. KM";
      travel_time.textContent = "9 MONTHS";
      planet.src = "./assets/destination/image-mars.png";
    } else if (btn.path[0].classList.contains("europa")) {
      big_txt.textContent = "EUROPA";
      info.textContent =
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
      avg_dis.textContent = "628 MIL. KM";
      travel_time.textContent = "3 YEARS";
      planet.src = "./assets/destination/image-europa.png";
    } else if (btn.path[0].classList.contains("titan")) {
      big_txt.textContent = "TITAN";
      info.textContent =
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
      avg_dis.textContent = "1.6 BIL. KM";
      travel_time.textContent = "7 YEARS";
      planet.src = "./assets/destination/image-titan.png";
    }
  }
}
