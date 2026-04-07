"use strict";
// Write a program that asks the user for the number of participants. After this, the program asks for the names of all participants. Finally, the program prints the names of the participants on the web page in an ordered list (<ol>) in alphabetical order. (2p)

const numParticipants = parseInt(prompt("How many participants?"));

const participants=[];

for(let i=0; i<numParticipants; i++){
    const nameParticipants = prompt(`Type name of ${i+1} participant`)
    participants.push(nameParticipants);
}

participants.sort();

let listHTML = "<ol>";

for(let j=0; j<participants.length; j++){
    listHTML += `<li>${participants[j]}</li>` ;
}

listHTML += "</ol>";

document.querySelector("#target").innerHTML = listHTML;

