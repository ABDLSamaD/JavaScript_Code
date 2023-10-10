// create a function
function AddNum(x,y,z) {
    return (1 + (x + y + z)/2)
}

let a = 2;
let b = 2;
let c = 10;

console.log("One plus and The sum of three numbers is : ", AddNum(a,b,c));


console.log(`============================================`);


// create a object inside a function and call it to outside
function myFunc(object) {
    let obj = {
        name: 'samad',
        num: 1001,
        year: '4th'
    }
    return obj
}
let obj;
const vObj = myFunc(obj)
for (const key in vObj) {
    console.log(`The object of ${key} is ${vObj[key]}`);
}


console.log(`===========================================`);

// student data for students in the project function inside objects calling it for-in loops
console.log("Student MarkSheet");
const studentMarks = () => {
    const MarkSheet = {
        eng: 91,
        math: 87,
        phy: 92,
        chem: 88,
        urdu: 98
    }
    return MarkSheet;
}
let MarkSheet;
const objMarks = studentMarks(MarkSheet);
for(const keys in objMarks){
    console.log(`The marks of ${keys} is ${objMarks[keys]}`);
}



console.log(`============================================`);


// markSheet of student 
/*
function markSheet(Object) {
    return marks1,marks2,marks3,marks4,marks5;
}
let marks1 = 99;
let marks2 = 97;
let marks3 = 95;
let marks4 = 92;
let marks5 = 91;
let mark = (marks1, marks2, marks3, marks4, marks5);

for (const key in markSheet(mark)) {
    console.log(`The marks of students is: ${key}`);    
}*/



console.log('============================================');


// the names of student
function myName(names) {
    console.log(`the number1 is: ${name1}`);
    console.log(`the number2 is: ${name2}`);
    console.log(`the number3 is: ${name3}`);
    console.log(`the number4 is: ${name4}`);
    return names = (name1,name2,name3,name4)
}

let name1 = 'samad'
let name2 = 'papan'
let name3 = 'ali'
let name4 = 'hamza'
let names;

// call function
myName();
console.log("The Names of person is ok");


console.log('============================================');


// arrow function 
let hello = ()=> {
    console.log("hello how are you");
    // call-in another way to the return value
    return 'hi'
}
// hello();
let v = hello();
console.log(v);
