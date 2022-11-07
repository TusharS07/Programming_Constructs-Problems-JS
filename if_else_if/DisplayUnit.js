const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter number:- "));

if ( num == 1 ){
    console.log( num+ " is Unit");

} else if ( num == 10 ) {
    console.log( num+ " is Ten ");

} else if ( num == 100 ) {
    console.log( num+ " is Hundred");

} else if ( num == 1000) {
    console.log( num+ " is Thousand");

} else if ( num == 10000) {
    console.log( num+ " is Ten Thousand");

} else if ( num == 100000) {
    console.log( num+ " is One Lakh");

} else if ( num == 10000000) {
    console.log( num+ " is One Crore");

}
else {
    console.log("enter valid number Please");
}
