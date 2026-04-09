"use strict";

// Modify the function above so that it gets the number of sides on the dice as a parameter. With the modified function you can for example roll a 21-sided role-playing dice. The difference to the last exercise is that the dice rolling in the main program continues until the program gets the maximum number on the dice, which is asked from the user at the beginning.


function rollDice(sides){
    return Math.floor(Math.random()*sides)+1;
}

const maxNumber = parseInt(prompt("Write maximum sides"))

let listHTML="<ul>";
let result = 0;

while (result!==maxNumber){
    result=rollDice(maxNumber);
    listHTML += `<li>Roll result: ${result}</li>`;
}

listHTML += "</ul>";

document.querySelector("#target").innerHTML=listHTML