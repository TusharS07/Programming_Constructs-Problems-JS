let a = Math.floor( Math.random()*999 ) + 100;
let b = Math.floor( Math.random()*999 ) + 100;
let c = Math.floor( Math.random()*999 ) + 100;
let d = Math.floor( Math.random()*999 ) + 100;
let e = Math.floor( Math.random()*999 ) + 100;

console.log("5 Random 3 Digit values are:- ");
console.log(a+" "+b+" "+c+ " "+d+ " "+e);
//check maximumb number
if ((a > b) && (a > c) && (a > d) && (a > e)) {
    console.log(a+" is Maximum Number");
} else if ((b > c) && (b > d) && (b > e) && (b > a)) {
    console.log(b+" is Maximum Number");
} else if ((c > d) && (c > e) && (c > a) && (c > b)) {
    console.log(c+" is Maximum Number");
} else if ((d > e) && (d > a) && (d > b) && (d > c)) {
    console.log(d+" is Maximum Number");
} else {
    console.log(e+" is Maximum Number");
}

//check minimum number
if ((a < b) && (a < c) && (a < d) && (a < e)) {
    console.log(a+" is minimum Number");
} else if ((b < c) && (b < d) && (b < e) && (b < a)) {
    console.log(b+" is minimum Number");
} else if ((c < d) && (c < e) && (c < a) && (c < b)) {
    console.log(c+" is minimum Number");
} else if ((d < e) && (d < a) && (d < b) && (d < c)) {
    console.log(d+" is minimum Number");
} else {
    console.log(e+" is minimum Number");
}



