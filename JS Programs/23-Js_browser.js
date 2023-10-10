// js in browser

// how to run javascript in browser: firstly you can open your browser google or anyone else and right click to
//   inpect go to the console and type down here.

console.log("hello world");  // hello world first line program:

// alert("hello") // this is alert program in the browser to show inner string

var as = 1 // this is a value of a and one is literal: this is an variable

// and sum two numbers see this
let a = 10
let b = 20
let c = a + b
// let c = a - b  // substract
// let c = a * b  // Multiply
// let c = a / b  // dividison
console.log(`The sum of ${a} and ${b} is = ${c}`);



setInterval(()=>{
    let date = new Date().toLocaleTimeString()
    console.log(date);
}, 1000-100)
