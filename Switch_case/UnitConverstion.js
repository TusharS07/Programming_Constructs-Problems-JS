const prompt = require("prompt-sync")();

while(true) {
    console.log('\n1:Feet to Inch Converstion. \n2 Inch to Feet Converstion. \n3 Feet to Meter Converstion. \n4 Meter to Feet Converstion \n5 Exit \n');
    let choice = parseInt(prompt("Enter Your choice:- "));

    switch(choice) {
        case 1:
            let num1 =  parseInt(prompt("Enter Feet:- "));
            let fi =  num1 * 12;
            console.log(num1+ ' Feet = ' +fi+ ' Inch');
            break;

        case 2:
            let num2 =  parseInt(prompt("Enter Inch:- "));
            let inchfeet = num2 / 12;
            console.log(num2+ ' Inch = ' +inchfeet+ ' Feet');
            break;

        case 3:
            let num3 = parseInt(prompt("Enter Feet:- "));  
            let fm =  num3 / 3.281;
            console.log(num3+ ' Feet = ' +fm+ ' Meter')
            break;

        case 4:
            let num4 = parseInt(prompt("Enter Meter:- "));
            let mf = num4 * 3.281;
            console.log(num4+ ' Meter = ' +mf+ ' Feet')
            break;

        case 5:
            return;    

        default:
            console.log('Invalid Choice ');   
    }
}