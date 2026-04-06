"use strict";
// Write a program that asks the user to enter a year and notifies the user whether the input year is a leap year. A year is a leap year if it is divisible by four. However, years divisible by 100 are leap years only if they are also divisible by 400. Print the result on the HTML document. (3p)

const year= parseInt(prompt("enter a year"));

let isLeap = false;

if (year % 4 === 0) {
    isLeap = true;
    if (year % 100 === 0) {
        isLeap = false;
        if (year % 400 === 0) {
            isLeap = true;
        }
    }
}

let result;
if (isLeap) {
    result = `${year} is a leap year`;
} else {
    result = `${year} is not a leap year`;
}

document.querySelector("#target").innerHTML= result;