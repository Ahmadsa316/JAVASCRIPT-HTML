let num1 = parseInt(prompt("Enter the first integer:"), 10);
let num2 = parseInt(prompt("Enter the second integer:"), 10);
let num3 = parseInt(prompt("Enter the third integer:"), 10);

// Calculating the sum, product, and average
let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average = sum / 3;

document.getElementById("results").innerHTML = `
    Sum: ${sum} <br>
    Product: ${product} <br>
    Average: ${average.toFixed(2)}
`;