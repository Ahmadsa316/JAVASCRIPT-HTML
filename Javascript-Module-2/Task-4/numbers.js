function collectAndSortNumbers() {
    let numbers = [];

    while (true) {

      let input = parseInt(prompt("Enter a number (0 to stop):"));

      if (input === 0) {
        break;
      }

      numbers.push(input);
    }

    numbers.sort((a, b) => b - a);

    let output = "<ul>";
    for (let number of numbers) {
      output += `<li>${number}</li>`;
    }
    output += "</ul>";

    document.getElementById("sortedNumbers").innerHTML = output;
  }
