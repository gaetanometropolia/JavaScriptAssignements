// Open t10 folder in your IDE/editor. Read the first name and last name values from the form and print them in the <p id="target"> (2p)
// remember to stop the default action of the form
// you can use attribute selectors in querySelector() to select the <input> elements
// example output: Your name is Luke Skywalker

"use strict";

const form =document.querySelector("#source");
const p = document.querySelector("#target");

form.addEventListener("submit", function (event){
    event.preventDefault();

    const fName = document.querySelector('input[name="firstname"]').value;
    const lName = document.querySelector('input[name="lastname"]').value;

    p.innerText=`your name is ${fName} ${lName}`;
});