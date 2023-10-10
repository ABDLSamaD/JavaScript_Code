console.log("Primitive Datatypes and Objects");

// there are two types of data Primitive and non-primitive

// There are 7 types of datatypes in js
/*
    Primitive DataTypes:
    1.  Number
    2.  String
    3.  Symbol
    4.  Boolean
    5.  null
    6.  Bigint
    7.  undefined
*/

let a = 12;                                 //- this is an number selection number data type
let b = 'samad'                            //-  this is an string selection string data type
let c = Symbol("I am a symbol")           //-   this is an symbol selection symbol data type
let d = true                             //-    the boolean is only true & false
let e = null                            //-     the null is only null
let f = BigInt("121") + BigInt("9")    //-      the bigint is only bigger integer number
let g = undefined                     //-       the undefined is only undefined

console.log(a,  b,  c,  d,  e,  f,  g);
console.log(typeof d);      // typeof is to find what a variable is:-



//    Non-Primitive
/*
    non-primitive Datatype,
    is object
    let a = {
        name: 'samad',
        age: 22
    }
*/

// let obj = {
//     a: 1,
//     b: 'samd'
// }
// console.log(obj.a, obj.b);

const item = {
    "a": true,
    'b': false,
    'c': 123,
    'd': null,
    'e': undefined
}
console.log(item["a"]);


// const dict = {
//     hello: "kya hal ha",
//     what: 'kya ha'
// }
// console.log(dict.hello);


let student = {
    name: 'Samad',
    number: +923020034019,
    marks1: 55,
    marks2: 56
}
console.log(`The Name Of the Student is: ${student.name}`);
console.log(`The Number Of the Student is: ${student.number}`);
console.log(`The Marks Of the Student is in the Math is: ${student.marks1}`);
console.log(`The Marks Of the Student is in the Physics is: ${student.marks2}`);