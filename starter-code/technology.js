"use strict";
const circle_one = document.querySelector(".one");
const circle_two = document.querySelector(".two");
const circle_three = document.querySelector(".three");
const heading = document.querySelector(".heading");
const info = document.querySelector(".info");
const image = document.querySelector("#image");

circle_one.addEventListener("click", changeOptions);
circle_two.addEventListener("click", changeOptions);
circle_three.addEventListener("click", changeOptions);

function changeOptions(option) {
  //   console.log(option.path[0]);
  if (!option.path[0].classList.contains("active")) {
    circle_one.classList.remove("active");
    circle_two.classList.remove("active");
    circle_three.classList.remove("active");
    option.path[0].classList.add("active");
    if (option.path[0].classList.contains("one")) {
      heading.textContent = "LAUNCH VEHICLE";
      info.textContent =
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
      image.src = "./assets/technology/image-launch-vehicle-portrait.jpg";
    } else if (option.path[0].classList.contains("two")) {
      heading.textContent = "SPACEPORT";
      info.textContent =
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
      image.src = "./assets/technology/image-spaceport-portrait.jpg";
    } else if (option.path[0].classList.contains("three")) {
      heading.textContent = "SPACE CAPSULE";
      info.textContent =
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
      image.src = "./assets/technology/image-space-capsule-portrait.jpg";
    }
  }
}
