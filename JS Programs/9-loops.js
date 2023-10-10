// fist for loop program

// for (let i = 0; i < 15; i++) {
//     console.log(i);
// }

// for (let i = 15; i > 0; i--) {
//     console.log(i);
// }


// user ask number
let number = prompt('enter number');

// for (let i = 0; i < number; i++) {
//     console.log(i);
// }


// first natural number
let sum = 0;
for (let i = 0; i < number; i++) {
    sum += (i+1);
}
console.log(`The sum of ${number} is ${sum}`);



// print table and sum
for (let i = 0; i <= number; i++) {
    console.log("2 x " + i + " = " + (2*i));
    sum = sum + i;
}
for (let i = 0; i <= number; i++) {
    console.log("5 x " + i + " = " + (5*i));
    sum = sum + i;
}
console.log(`The Sum of table is ${sum}`);


// sum two numbers and the print the value of c
/*
let a = 10;
let b = 20;
let c = (a + b)/2;

for (let i = 0; i <= c; i++) {
    console.log(`The c is ${i}`);
}
*/


// -----------------------------------------------------------------------------------------------------------------

// work with also array 

// for of loop 

let obj1 = {
    name: 'samad',
    roll: 'WD',
    color: 'green'
}
for (const a of "object") {
    console.log(a);
}







// -----------------------------------------------------------------------------------------------------------------

// for in loop

/*
let obj = {
    samad: 98,
    ali: 99,
    hamza: 91,
    papan: 100
}
for (let a in obj) {
    console.log("Marks of " + a + " is " + obj[a]);
}
*/


/*
const obj = {
    name: 'samad',
    age: '22',
    height: '5.11-feet',
    color: 'green'
}
for (let number in obj){
    console.log(number+ " is "+ obj[number]);
}
*/


const obj = {
    fruit1: 'mangoo',
    fruit2: 'orange',
    fruit3: 'apple'
}
for (let fruit in obj){
    switch (fruit) {
        case 'fruit1':
            console.log(fruit+ " is "+ obj[fruit]);
            break;

        case 'fruit2':
            console.log(fruit+ " is "+ obj[fruit]);
            break;

        case 'fruit3':
            console.log(fruit+ " is "+ obj[fruit]);
            break;
    
        default:
            console.log(`try again`);
            break;
    }
}

/*
const object = {
    student: 'ali',
    num: '2K20/BLCS/14',
    subjectMarks: {
        eng: 78,
        math: 52,
        phy: 81,
        cs: 69,
        chem: 91
    }
}

for (const students in object){
    switch (students) {
        case 'student':
            console.log("The name of student is "+ object[students]);
            break;

        case 'num':
            console.log("The number of student is "+object[students]);
            break;
    
        default:
            console.log('Try Again');
            break;
    }
}
for (let grade in object) {
    if (!object.hasOwnProperty(grade)) continue;

    var objs = object[grade];
    for (var prop in objs) {
        // skip loop if the property is from prototype
        if (!objs.hasOwnProperty(prop)) continue;

        // your code
        console.log(prop + " = " + objs[prop]);
    }
}
*/