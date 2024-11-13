function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function rollDiceUntilSix() {
    let rolls = [];

    while (true) {
      let roll = rollDice();
      rolls.push(roll);

      if (roll === 6) {
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
