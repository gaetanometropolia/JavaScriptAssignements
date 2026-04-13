'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
// Open t4 folder in your IDE/editor. Add HTML by using createElement() and appendChild methods. (2p)
// Add the following HTML code to the element with id="target". Add the values from 'students' array to the <option> elements in a for-loop.
// <option value="2345768">John</option>
// <option value="2134657">Paul</option>
// <option value="5423679">Jones</option>

const targetElement = document.querySelector("#target");

for(let i=0; i < students.length; i++){

    const option = document.createElement("option");

    option.value = students[i].id;

    option.textContent=students[i].name;

    targetElement.appendChild(option);
}
