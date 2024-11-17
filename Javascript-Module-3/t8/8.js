'use strict';

document.getElementById("calculate").addEventListener("click", () => {

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    const resultElement = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Result: Please enter valid numbers.";
        return;
    }

    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                resultElement.textContent = "Result: Division by zero is not allowed.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultElement.textContent = "Result: Invalid operation.";
            return;
    }

    resultElement.textContent = `Result: ${result}`;
});