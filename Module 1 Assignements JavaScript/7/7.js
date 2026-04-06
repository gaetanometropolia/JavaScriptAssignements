"use strict";
// Write a program that rolls user defined number of dice and displays the sum of the results of the dice rolls.(2p)
//
// First, program asks the user for the number of dice rolls.
// Then the program throws a die as many times as the user defined.
// Print the sum of the results in the console or in the HTML document.

const numberdice = parseInt(prompt("How many dice would u like to roll??"))

let sum = 0 ;
for(let i=0 ; i<numberdice; i++){
    const roll = Math.floor(Math.random()*6)+1;
    sum = sum + roll;
}

document.querySelector("#target").innerHTML= `You rolled ${numberdice}, the total sum is ${sum}`;
