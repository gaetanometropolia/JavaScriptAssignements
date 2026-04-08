"use strict";
// Write a program that asks for the names of six dogs. The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p)

const dogs = [];

for(let i=0; i<= 5; i++){
    let dogQuest = prompt((`choose the name of the dog ${i+1}`));
    dogs.push(dogQuest);
}
dogs.sort();
dogs.reverse();
let listHtml="<ul>";

for (let j=0; j<dogs.length; j++){
    listHtml += `<li>${dogs[j]}</li>`;
    }



listHtml += "</ul>";

document.querySelector("#target").innerHTML=listHtml