// Practice set chapter 4

// Q-1: 
let str = "sam\""
console.log(str.length);


// Q-2:
let str1 = "Sam hello world"
console.log(str1.startsWith("Sam"));
console.log(str1.endsWith("world"));


// Q-3: 
let lowerCase = "SAM IS A GOOD WEB DEVELOPER"
console.log(lowerCase.toLowerCase());


// Q-4: 
let amount = "please give amount 1000"
/*
// let amountString = amount.slice(19);
let amountString = amount.slice("please give amount ".length );
console.log(amountString);
console.log(typeof amountString);
*/

// the amount string that last character of string 1000 we add a number and convert it to a number
let amountString = Number.parseInt(amount.slice("please give amount ".length));
// add 1000
console.log(amountString+1000);
console.log(typeof amountString);
// console.log(Number(amountString));


// string can not be changed able you can create a new string
let string = "hello";
string[3] = "R" // not be changed