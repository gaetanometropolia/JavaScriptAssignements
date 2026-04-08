"use strict";
// Write a program that prompts the user for numbers. When the user enters one of the numbers previously entered, the program will announce that the number has already been given and stops its operation and then prints all the given numbers to the console in ascending order. (2p)

const numbers=[];

let input;

while(true){
    input=parseInt(prompt("Type a number. If you enter one of the numbers previously entered, the program will announce that the number has already been given and stops "));
    if (numbers.includes(input)){
        alert(`The number ${input} has already given`)
        break;
    }
    numbers.push(input);
}

numbers.sort((a,b) => a - b);

for(let j=0; j<numbers.length; j++){
    console.log(numbers[j]);
}