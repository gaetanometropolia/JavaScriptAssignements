"use strict";
// Develop the app further.
// Add JavaScript that gets the value entered to the form and sends a request with fetch to https://api.tvmaze.com/search/shows?q=${value_from_input}. Print the search result to the console. (3p)
const tvForm = document.querySelector("form");

tvForm.addEventListener("submit", async function(evt){
    evt.preventDefault();
    const data = document.querySelector("#query").value;
    try{
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${data}`);

        const jsonData = await response.json();

        console.log("result:", jsonData);
    } catch (error) {
        console.error("Error:", error);
    }
});