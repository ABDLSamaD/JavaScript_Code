// 1- alert method: this can be run on thw browser
alert('hello world')
let a = 10;
let b = 20;
let c = a + b / 2;
alert(`${a} and ${b} is = ${c}`);


// 2- prompt: prompt is like a user ask that you can input and display output
let string = prompt('what\'s your name') // this is an string

let num1 = prompt('enter first number: ') // this is an string we can convert it into an number
num1 = Number.parseInt(num1)
let num2 = prompt('enter second number: ')
num2 = Number.parseInt(num2)
let equalNum = num1 + num2
console.log(equalNum);


// 3- confirm: is use to ask the user are you sure want to delete or cancel
let a1 = confirm('are you sure')
console.log(a1);



alert("Enter the value of a!")
let a2 = prompt("Enter a here", "578")
a2 = Number.parseInt(a2)
alert("You entered a of type " + (typeof a2))
let write = confirm("Do you want to write it to the page")
if (write) {
  document.write(a2)
}
else {
  document.write("Please allow me to write")
}