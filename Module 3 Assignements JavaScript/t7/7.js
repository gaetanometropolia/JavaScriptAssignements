// Open t7 folder in your IDE/editor. Make a hover effect with JavaScript. (2p)
// when user mouses over <p id="trigger"> change the picture of <img id="target"> form picA.jpg to picB.jpg
// when user mouses off, change the picture back to original

"use strict";

const trigger = document.querySelector("#trigger");
const targetImage = document.querySelector("#target");

trigger.addEventListener("mouseenter", function (){
    targetImage.src="img/picB.jpg";
});

trigger.addEventListener("mouseleave", function(){
    targetImage.src="img/picA.jpg";
});