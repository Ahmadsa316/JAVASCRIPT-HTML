let year = parseInt(prompt("Enter a year:"), 10);

let isLeapYear;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    isLeapYear = true;
} else {
    isLeapYear = false;
}

document.getElementById("leapYearResult").textContent =
    isLeapYear ? `${year} is a leap year.` : `${year} is not a leap year.`;