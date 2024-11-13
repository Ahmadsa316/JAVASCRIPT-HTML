function collectNumbersUntilDuplicate() {
    let numbers = [];

    while (true) {

      let input = parseInt(prompt("Enter a number:"));


      if (numbers.includes(input)) {
        alert("This number has already been given. Stopping...");
        break;
      }

      numbers.push(input);
    }

    numbers.sort((a, b) => a - b);

    let output = "<ul>";
    for (let number of numbers) {
      output += `<li>${number}</li>`;
    }
    output += "</ul>";

    document.getElementById("sortedNumbersList").innerHTML = output;
  }
