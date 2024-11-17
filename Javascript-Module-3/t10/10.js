'use strict';


const form = document.getElementById('nameForm');

form.addEventListener('submit', function(event) {

    event.preventDefault();

    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;

    const targetElement = document.getElementById('target');
    targetElement.textContent = `Your name is ${firstName} ${lastName}`;
});