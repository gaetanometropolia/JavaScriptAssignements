// Develop the app even further. Optional chaining is not the best way to handle missing image. Use ternary operator or if/else to add a default image if TV-show is missing image property. (2p)
// Use https://placehold.co/210x295?text=Not%20Found as the default image.

"use strict";

const tvForm = document.querySelector("form");
const resultContainer = document.querySelector("#results");

tvForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const query = document.querySelector("#query").value;

    resultContainer.innerHTML = '';

    try{
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const jsonData = await response.json();

        for(let i = 0; i < jsonData.length; i++){
            const tvShow = jsonData[i].show;

            const article = document.createElement("article");

            const title = document.createElement("h2");
            title.textContent = tvShow.name;

            const image = document.createElement("img");
            if (tvShow.image){
                image.src = tvShow.image.medium;
            } else {
                image.src = 'https://placehold.co/210x295?text=Not%20Found';
            }
            image.alt = tvShow.name;

            const link = document.createElement("a");
            link.href = tvShow.url;
            link.target = "_blank";
            link.textContent = "View details";

            const summaryDiv = document.createElement("div");
            summaryDiv.innerHTML = tvShow.summary;

            article.appendChild(title);
            article.appendChild(image);
            article.appendChild(link);
            article.appendChild(summaryDiv);

            resultContainer.appendChild(article);
        }
    } catch (error) {
        console.error("Error:",error);
    }
});