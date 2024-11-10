let startYear = parseInt(prompt("Enter the start year:"), 10);
let endYear = parseInt(prompt("Enter the end year:"), 10);

let list = document.getElementById("leapYearsList");

for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        // Create a new list item for each leap year
        let listItem = document.createElement("li");
        listItem.textContent = year;
        list.appendChild(listItem);
    }
}