'use strict';
const names = ['John', 'Paul', 'Jones'];

const targetElement = document.getElementById("target");

let listHTML = "";

for (let i = 0; i < names.length; i++) {
    listHTML += `<li>${names[i]}</li>`;
}


targetElement.innerHTML = listHTML;