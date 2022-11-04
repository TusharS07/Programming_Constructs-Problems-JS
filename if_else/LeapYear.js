const prompt = require("prompt-sync")();
let year = parseInt(prompt("Enter an Year :: "));

if (((year >= 1582) && (year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0)) {
    console.log(year+ " Year is a Leap Year ");
} else {
    console.log(year+ " Year is not a Leap Year ");
}