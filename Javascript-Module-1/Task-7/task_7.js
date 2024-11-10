let numberOfRolls = parseInt(prompt("Enter the number of dice rolls:"), 10);

let sum = 0;

for (let i = 0; i < numberOfRolls; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    sum += roll;
}
document.getElementById("diceResult").textContent = `The sum of ${numberOfRolls} dice rolls is: ${sum}`;