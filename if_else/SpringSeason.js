const prompt = require("prompt-sync")();
let m = parseInt(prompt("Enter month number:- "));
let d = parseInt(prompt("Enter Day:- "));

if ((m == 3 && d >= 20 && d <= 31) || (m == 4 && d >= 1 && d <= 30) || (m == 5 && d >= 1 && d <= 31) || (m == 6 && d >= 1 && d <= 20)) {
    console.log("True");
} else {
    console.log("False");
}
