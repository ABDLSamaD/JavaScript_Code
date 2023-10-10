
// Q-1: 
let studentMarks = {
    samad: 98,
    ali: 91,
    papan: 99
}

for(let i = 0; i < Object.keys(studentMarks).length; i++){
    console.log("The Marks of "+ Object.keys(studentMarks)[i]+" is: "+studentMarks[Object.keys(studentMarks)[i]]);
}

// Q-2: repeat the Q-1 in for-in loop
for (const key in studentMarks) {
    console.log(`The marks of ${key} is ${studentMarks[key]}`);
}


// Q-3: 
// user type correct number until print try again
let cn = 4;
let i;

while(i != cn){
    i = prompt('Enter a number');
}
console.log(`you entered ${i} correct number`);


// Q-4: 
const mean = (a,b,c,d) => {
    return (a+ b+ c+ d)/4
}
console.log(mean(4, 3, 5, 6));