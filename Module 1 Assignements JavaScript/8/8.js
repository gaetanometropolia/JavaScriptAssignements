"use strict";
// Write a program that prompts the user for the start and end year. The program prints all leap years from the interval given by the user. Printing is done in an unordered list to the HTML document. (3p)

const startYear = parseInt(prompt("Enter start Year"))
const endYear = parseInt(prompt("Enter ending Year"))

let listHTML = "<ul>";

for(let year = startYear;  year <= endYear; year++) {
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

    if (isLeap) {
        listHTML += `<li>${year}</li>`;
    }
}


listHTML += "</ul>";

document.querySelector("#target").innerHTML=listHTML;