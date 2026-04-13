// Open t2 folder in your IDE/editor. Add HTML by using createElement() and appendChild methods. (2p)
// Add the following HTML code to the element with id="target"
// <li>First item</li>
// <li>Second item</li>
// <li>Third item</li>
// Add class my-item to the second list item
"use strict";

const targetElement = document.querySelector('#target');

const item1 = document.createElement("li");
item1.textContent = `First item`;

const item2 = document.createElement("li");
item2.textContent = `Second item`;
item2.classList.add('my-item');

const item3 = document.createElement("li");
item3.textContent = `Third item`;

targetElement.appendChild(item1);
targetElement.appendChild(item2);
targetElement.appendChild(item3);