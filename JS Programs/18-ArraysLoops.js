// loops js 
let num = [10,2,3,4,6,19];

// 1- For Loop:
/*
for (let i = 0; i < num.length; i++) {
    console.log("The array is: ",num[i]);
}
*/


// 2- For Each Loop:
num.forEach(element => {
//    console.log("The array of square of each is: ", element); 
   console.log("The array of square of each is: ", element*element); 
});


// Array.form used to create an array from ay other object or any string
// let names = {
//     name: 'samad'
// }
let names = 'samad'
let a = Array.from(names.name)
console.log(a);



// shortcut way to print array in for-of lopp
for (let i of num){
    console.log("The array is: ",i);
}

// for-in loop
for (let item in num){
    console.log("The array is: ",num[item]);
}