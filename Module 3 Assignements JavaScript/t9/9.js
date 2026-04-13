"use strict";

// Open t9 folder in your IDE/editor. This is continuation to previous task. There is only one text field left, where the user writes the calculation (addition, subtraction, multiplication or division) (4p)
// You can use the includes and split methods.
// eval() function is prohibited
// No need to support decimal numbers, calculating integers is enough.
// Example inputs: 3+5, 2-78, 3/6, etc...

const input = document.querySelector("#calculation");

const button=document.querySelector("#start");
const resultElement = document.querySelector("#result")

button.addEventListener("click", function (){
    let result;

    if (input.value.includes("+")){
        const cut = input.value.split("+");
        result=parseInt(cut[0])+parseInt(cut[1]);
    } else if (input.value.includes("-")){
        const cut=input.value.split("-");
        result= parseInt(cut[0]) - parseInt(cut[1]);
    } else if (input.value.includes("*")){
        const cut=input.value.split("*");
        result= parseInt(cut[0])*parseInt(cut[1]);
    } else if (input.value.includes("/")){
        const cut= input.value.split("/");
        result=parseInt(cut[0])/parseInt(cut[1]);
    }
    resultElement.innerHTML=`Result: ${result}`;
});