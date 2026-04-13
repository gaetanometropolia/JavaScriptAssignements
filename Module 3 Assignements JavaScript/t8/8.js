// Open t8 folder in your IDE/editor. Make a simple calculator. (4p)
// There are two input fields where user enters numbers. Based on the drop-down list, calculator performs addition, subtraction, multiplication or division of these two numbers.
// Use the value attribute of <option> elements to decide which operation the calculator needs to do. Example.
// Show the result in <p id="result"> when the button is clicked.
"use strict";

const  input1 = document.querySelector("#num1");
const input2 = document.querySelector("#num2");
const operation = document.querySelector('#operation');
const button = document.querySelector('#start');
const resultElement = document.querySelector('#result');

button.addEventListener("click", function(){
    const val1 = parseFloat(input1.value);
    const val2 = parseFloat(input2.value);


    let result;

    if(operation.value==="add"){
        result=val1+ val2;
    } else if (operation.value==="sub"){
        result=val1 - val2;
    } else if (operation.value ==="multi"){
        result=val1*val2;
    } else if (operation.value==="div"){
        result=val1/val2;
    }

    resultElement.innerHTML=`Result: ${result}`;
})
