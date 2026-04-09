"use strict";

// Write a function called even(), which receives an array containing numbers as a parameter. The function returns a second (usually smaller) array which has the even numbers of the original array. The function must not make changes to the original array. (3p)
// Example: In a three-item array, there are items 2, 7 and 4. The function returns a two-item array with items 2 and 4.
// Print both the original array and the new array to the console in the main program after you have called the function.
// You can hard code the array, no need for prompt().

function even(numbers){

    let even = []

    for(let i=0; i<numbers.length; i++){
        if(numbers[i]%2===0){
            even.push(numbers[i]);
        }
    }
    return even
}

const numeri = [1,2,3,4,5,6,7,8]

const processed = even(numeri)

console.log(`original array ${numeri}`);
console.log(`filtered array ${processed}`)
