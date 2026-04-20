// Develop the app further (4p).
// Now add a form where you can enter a search term like in assignments 1-3
// Send the search term to https://api.chucknorris.io/jokes/search?query=${value_from_input} using fetch()
// Print each joke in this format:
// <article>
//     <p>Joke here<p>
// </article>

"use strict";

const chuckForm = document.querySelector("form");
const resultContainer = document.querySelector("#jokes-results");

chuckForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const searchTerm = document.querySelector("#query").value;

    resultContainer.innerHTML = "";

    console.log("Searching for jokes about:", searchTerm);

    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`)
        const data = await response.json();

        for(let i = 0; i < data.result.length; i++) {
            const jokeText =data.result[i].value;

            const article = document.createElement("article");

            const p = document.createElement("p");

            p.textContent = jokeText;

            article.appendChild(p);

            resultContainer.appendChild(article);
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Searching completed ");
    }
});