let confirmCalculation = confirm("Should I calculate the square root?");

if (confirmCalculation) {

    let number = parseFloat(prompt("Enter a number:"));

    if (number >= 0) {
        let squareRoot = Math.sqrt(number);
        document.getElementById("result").textContent = `The square root of ${number} is ${squareRoot}.`;
    } else {
        document.getElementById("result").textContent = "The square root of a negative number is not defined.";
    }
} else {
    document.getElementById("result").textContent = "The square root is not calculated.";
}