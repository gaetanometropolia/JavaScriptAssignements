// Make an app that retrieves a random Chuck Norris joke and displays it in the console. (2p)
// API to use: chucknorris.io
// Send a request to https://api.chucknorris.io/jokes/random and print only the joke to the console (that would be the 'value' property)
// No need to add a form.

"use strict";

async function getChuckJoke() {
    console.log('asynchronous download begins');
    try{
        const response = await fetch('https://api.chucknorris.io/jokes/random');

        const jsonData = await response.json();

        console.log("Chuck jokes:", jsonData.value);

    } catch (error){
        console.log("Error: ", error.message);
    } finally {
        console.log('complete');
    }
}

getChuckJoke();

console.log('the script ends');