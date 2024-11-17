'use strict';

const trigger = document.getElementById("trigger");
const targetImage = document.getElementById("target");

trigger.addEventListener("mouseover", () => {
    targetImage.src = "img/picB.jpeg";
});

trigger.addEventListener("mouseout", () => {
    targetImage.src = "img/picA.jpeg";
});