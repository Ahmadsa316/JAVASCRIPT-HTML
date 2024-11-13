function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
  }

  function rollDiceUntilMax() {
    let sides = parseInt(prompt("Enter the number of sides on the dice:"));
    let maxValue = parseInt(prompt("Enter the maximum value to roll for:"));

    if (isNaN(sides) || isNaN(maxValue) || sides < 1 || maxValue < 1 || maxValue > sides) {
      alert("Invalid input. Please enter valid numbers.");
      return;
    }

    let rolls = [];

    while (true) {
      let roll = rollDice(sides);
      rolls.push(roll);

      if (roll === maxValue) {
        break;
      }
    }

    let output = "<ul>";
    for (let roll of rolls) {
      output += `<li>${roll}</li>`;
    }
    output += "</ul>";

    document.getElementById("diceRollsList").innerHTML = output;
  }
