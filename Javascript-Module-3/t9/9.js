'use strict';

document.getElementById("calculate").addEventListener("click", () => {

    const calculation = document.getElementById("calculation").value;
    const resultElement = document.getElementById("result");

    let num1, num2, result;

    if (calculation.includes('+')) {
        [num1, num2] = calculation.split('+').map(Number);
        result = num1 + num2;
    } else if (calculation.includes('-')) {
        [num1, num2] = calculation.split('-').map(Number);
        result = num1 - num2;
    } else if (calculation.includes('*')) {
        [num1, num2] = calculation.split('*').map(Number);
        result = num1 * num2;
    } else if (calculation.includes('/')) {
        [num1, num2] = calculation.split('/').map(Number);
        if (num2 === 0) {
            resultElement.textContent = "Result: Division by zero is not allowed.";
            return;
        }
        result = Math.floor(num1 / num2);
    } else {
        resultElement.textContent = "Result: Invalid operation.";
        return;
    }

    // Display the result
    resultElement.textContent = `Result: ${result}`;
});