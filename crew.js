"use strict";
// Script code for Crew page

const crew_role = document.querySelector(".crew_role");
const crew_name = document.querySelector(".crew_name");
const crew_info = document.querySelector(".info");
const btn_one = document.querySelector(".btn_one");
const btn_two = document.querySelector(".btn_two");
const btn_three = document.querySelector(".btn_three");
const btn_four = document.querySelector(".btn_four");
const crew_img = document.querySelector("#crew-img");

btn_one.addEventListener("click", changeCrew);
btn_two.addEventListener("click", changeCrew);
btn_three.addEventListener("click", changeCrew);
btn_four.addEventListener("click", changeCrew);

function changeCrew(btn) {
  if (!btn.path[0].classList.contains("active")) {
    btn_one.classList.remove("active");
    btn_two.classList.remove("active");
    btn_three.classList.remove("active");
    btn_four.classList.remove("active");
    btn.path[0].classList.add("active");
    if (btn.path[0].classList.contains("btn_one")) {
      crew_role.textContent = "COMMANDER";
      crew_name.textContent = "DOUGLES HURLEY";
      crew_info.textContent =
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
      crew_img.src = "./assets/crew/image-douglas-hurley.png";
    } else if (btn.path[0].classList.contains("btn_two")) {
      crew_role.textContent = "MISSION SPECIALIST";
      crew_name.textContent = "MARK SHUTTLEWORTH";
      crew_info.textContent =
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
      crew_img.src = "./assets/crew/image-mark-shuttleworth.png";
    } else if (btn.path[0].classList.contains("btn_three")) {
      crew_role.textContent = "PILOT";
      crew_name.textContent = "VICTOR GLOVER";
      crew_info.textContent =
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
      crew_img.src = "./assets/crew/image-victor-glover.png";
    } else if (btn.path[0].classList.contains("btn_four")) {
      crew_role.textContent = "FLIGHT ENGINEER";
      crew_name.textContent = "ANOUSHEH ANSARI";
      crew_info.textContent =
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";
      crew_img.src = "./assets/crew/image-anousheh-ansari.png";
    }
  }
}
