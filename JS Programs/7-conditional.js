// Conditional Operators

// let a = prompt("what's your age?");
// a = Number.parseInt(a);

// console.log(typeof a);

/*
if(a>0)
{
    console.log(`${a} is positive number`);
}
else{
    console.log(`${a} is negative number`);
}
*/

/*
if(a>0)
{
    console.log(`${a} is a valid number`);
}
// else if(a === "+" && a === "-" && a === "*" && a === "/")
else if(a < -0)
{
    console.log(`${a} is a negative number`);
}
else if(a==16 && a<=14)
{
    console.log(`${a} is a number is greater or lesser than the number of a`);
}
else{
    console.log(`${a} is invalid number`);
}
*/


// adding of two numbers in prompt 
/*
let b = prompt("Enter a number");
a = Number.parseInt(a);
b = Number.parseInt(b);
let c = a + b;
alert("Add of two number is: " + c);
*/




// /*
// switch case first statement
const number = prompt("any fruit you want");
switch (number) {
    case "orange":
        console.log(`${number} is a fruit but does'nt declare`);
        break;

    case "mangoo":
        console.log(`${number} is a valid fruit that is declare`);
        break;
    
    case "apple":
        console.log(`${number} is fruit but does'nt declare`);
        break;

    default:
        console.log(null +" Nothing defined");
        break;
}
// */



// /*
// calculator og 5 Airthematic operator
let a,b,c;
const anyNumbers = prompt("chose any operator + , - , * , / , % ");


switch (anyNumbers) {

    case "+":
        a = parseInt(prompt("Enter any number"));
        b = parseInt(prompt("Enter any number"));
        c = a + b;
        console.log(`The Sum of Number One ${a} & Number two ${b} is ${c} `);
        break;

    case "-":
        a = parseInt(prompt("Enter any number"));
        b = parseInt(prompt("Enter any number"));
        c = a - b;
        console.log(`The Subtract of Number One ${a} & Number two ${b} is ${c} `);
        break;

    case  "*":
        a = parseInt(prompt("Enter any number"));
        b = parseInt(prompt("Enter any number"));
        c = a * b;
        console.log(`The Multiplication of Number One ${a} & Number two ${b} is ${c} `);
        break;

    case "/":
        a = parseInt(prompt("Enter any number"));
        b = parseInt(prompt("Enter any number"));
        c = a / b;
        console.log(`The Division of Number One ${a} & Number two ${b} is ${c} `);
        // ++c
        // console.log(c);
        break;

    case "%":
        a = parseInt(prompt("Enter any number"));
        b = parseInt(prompt("Enter any number"));
        c = a % b;
        console.log(`The Equalision of Number One ${a} & Number two ${b} is ${c} `);
        break;

    default:
        console.log(`${null} nothing an empty`);
        break;
}

/*
let i;
for (i = 0; i <= 5; i++) {
    const print = prompt('Enter numbers to print');
    console.log(`${i} is a number to print thats number`);
}
alert(`${i} is a number to print thats number ${print}`);
*/

// */


// const user = prompt("Enter any fruit")
// const obj = {
//     fruit1 : 'mangoo',
//     fruit2: 'orange',
//     fruit3: 'apple',
// }

// switch (user) {
//     case (obj.fruit1):
//         console.log(`${fruit1} is born in summer seasons`);
//         break;

//     case obj:
//         console.log(`${fruit2} is born in winter seasons`);
//         break;

//     case "(obj.fruit3)":
//         console.log(`${fruit2} is born in all seasons`);
//         break;

//     default:
//         console.log(`Try Again`);
//         break;
// }



// ternary operator 
console.log(number > 18? "you can drive":"you can't drive");