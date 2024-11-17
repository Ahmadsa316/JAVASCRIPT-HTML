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

const targetElement = document.getElementById("target");


for (let i = 0; i < students.length; i++) {

    const optionElement = document.createElement("option");


    optionElement.value = students[i].value;
    optionElement.textContent = students[i].name;


    targetElement.appendChild(optionElement);
}