"use strict";
// Write a program that prompts the user for five numbers and prints them in the reverse order they were entered (not reverse sorted). Print the result to the console.(2p)
// Save the numbers to an array, then use for-loop to iterate in reverse order.
// Do not use array.reverse() function.


const numbers=[];

for(let i=0; i<5; i++) {
    const input = parseInt(prompt(`enter number ${i + 1}:`));

    numbers.push(input);
}

for(let j=numbers.length - 1; j>=0; j--){
    console.log(numbers[j]);
}
