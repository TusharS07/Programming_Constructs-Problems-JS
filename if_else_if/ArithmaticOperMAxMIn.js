const prompt = require("prompt-sync")();
let a = parseInt(prompt("Enter First number:- "));
let b = parseInt(prompt("Enter Second number:- "));
let c = parseInt(prompt("Enter Thrid number:- "));


let sum1 = a + b + c;
let sum2 = c + a / b;
let sum3 = a % b + c;
let sum4 = a * b + c;

console.log("(a+b*c)= " +sum1);
console.log("(c+a/b)= " +sum2);
console.log("(a%b+c)= " +sum3);
console.log("(a*b+c)= " +sum4);


if ((sum1 > sum2) && (sum1 > sum3) && (sum1 > sum4)) {
   console.log(sum1+ " is maximum");
} else if ((sum2 > sum3) && (sum2 > sum4) && (sum2 > sum1)) {
    console.log(sum2+ " is maxmum");
} else if ((sum3 > sum4) && (sum3 > sum1) && (sum3 > sum2)) {
    console.log(sum3+ " is maximum");
} else{
    console.log(sum4+ " is maximum");
}

//campare all resuls for minimum
if ((sum1 < sum2) && (sum1 < sum3) && (sum1 < sum4)) {
    console.log(sum1+ " is minimum");

} else if ((sum2 < sum3) && (sum2 < sum4) && (sum2 < sum1)) {
    console.log(sum2+ " is minimum");

} else if ((sum3 < sum4) && (sum3 < sum1) && (sum3 < sum2)) {
    console.log(sum3+ " is minimum");

} else{
    console.log(sum4+ " is minimum");

}





