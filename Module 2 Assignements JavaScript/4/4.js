"use strict";
// Write a program that asks the user for numbers until the user gives zero. The given numbers are printed in the console from the largest to the smallest. (2p)

const numbers=[];

let input;

while (true){
    input=parseInt(prompt("enter a number, press 0 to exit"));
    if(input===0){
        break;
    }
    numbers.push(input);
}

numbers.sort((a, b) =>  b - a );


for(let j=0; j<numbers.length; j++){
    console.log(numbers[j]);
}