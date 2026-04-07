"use strict";

// Write a program that asks the user for an integer and tells if the number is a prime number. (2p)
//
// Prime numbers are numbers that are only divisible by 1 and itself.
// For example, number 13 is a prime number as it can only be divided by 1 or 13 so that the result is an integer.
// On the other hand, number 21 for example is not a prime number as it can be also be divided by numbers 3 and 7.
// Print the result on the HTML document.

const number = parseInt(prompt("insert an integer number"))

let isPrime = true

if (number < 2) {
    isPrime=false;
}
else {
    for(let i=2; i<number; i++){
        if (number%i===0){
            isPrime=false;
            break;
        }
    }
}

let result;

if (isPrime===true){
    result=`${number} is prime`;
}
else{
result = `${number} is not a prime number.`;
}

document.querySelector("#target").innerHTML=result;