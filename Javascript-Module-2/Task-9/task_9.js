function even(arr) {
    let evenArray = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenArray.push(arr[i]);
      }
    }

    return evenArray;
  }

    const numbers = [2, 7, 4];

    const evenNumbers = even(numbers);

    document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("originalArray").innerHTML = numbers.join(", ");

    document.getElementById("evenArray").innerHTML = evenNumbers.join(", ");
    });
