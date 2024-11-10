function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function calculateProbability(numDice, targetSum, numRolls = 10000) {
    let successCount = 0;

    for (let i = 0; i < numRolls; i++) {
        let sum = 0;
        for (let j = 0; j < numDice; j++) {
            sum += rollDie();
        }
        if (sum === targetSum) {
            successCount++;
        }
    }

    let probability = (successCount / numRolls) * 100;

    return probability.toFixed(2);
}

let numDice = parseInt(prompt("Enter the number of dice:"), 10);
let targetSum = parseInt(prompt("Enter the sum you're interested in:"), 10);

let probability = calculateProbability(numDice, targetSum);

document.getElementById("result").textContent = `Probability to get sum ${targetSum} with ${numDice} dice is ${probability}%`;