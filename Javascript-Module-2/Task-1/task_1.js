function reverseNumbers() {
  let numbers = [];

  for (let i = 0; i < 5; i++) {
    let input = prompt(`Enter number ${i + 1}:`);
    numbers.push(Number(input));
  }

  let result = "Numbers in reverse order:<br>";
  for (let i = numbers.length - 1; i >= 0; i--) {
    result += numbers[i] + "<br>";
  }

  document.getElementById("result").innerHTML = result;
}