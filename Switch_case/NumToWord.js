const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter single digit number:- "));

switch (num) {
    case 0:
        console.log('Zero');
        break;

    case 1:
        console.log('ONE');
        break;
        
    case 2:
        console.log('Second');
        break;
        
    case 3:
        console.log('Three');
        break;


    case 4:
        console.log('Four');
        break;


    case 5:
        console.log('Five');
        break;


    case 6:
        console.log('Six');
        break;


    case 7:
        console.log('Seven');
        break;


    case 8:
        console.log('EIGHT');
        break;


    case 9:
        console.log('EIGHT');
        break;


    default:
        console.log("Invalid Number");
}
