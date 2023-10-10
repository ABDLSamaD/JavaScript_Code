console.log("Introduction to arrays");
// collection of sum items , collection of similar data types



// declare arrays of arrays with different data types and collections of arrays
let marks = [45, 99, 87, 67, null, false, "not present"];


// console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log("the arrays contains",marks.length);


// changing the values of an array
marks[5] = true; 
marks[6] = "Present"; 

marks[7] = "Shoulder";  // adding a new value in the array


// using for loop below
for (let i = 0; i < marks.length; i++) {
    const element = marks[i];
    console.log("The array contains", element);
}


console.log(typeof marks);