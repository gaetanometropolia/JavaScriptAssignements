"use strict";
// Write a program that prompts for three integers. The program prints the sum, product and average of the numbers to the HTML document. (3p)
//
// remember to convert strings to numbers when adding them together

const number1= parseInt(prompt("Enter first number"))
const number2= parseInt(prompt("Enter second number"))
const number3= parseInt(prompt("Enter third number"))

const sum = number1+number2+number3;
const product = number1* number2*number3;
const average = sum/3;

document.querySelector("#target").innerHTML= `sum: ${sum}, average:${average}, product:${product}`;

