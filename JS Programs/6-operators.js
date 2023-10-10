console.log('Chapter-2: --Operators and expression-- ');

// Airthmatic Operator 

// 77;
// "Samad"
// false
console.log("Operators in Js")


// Arithmetic Operators 
let a = 10;
let b = 4;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(a++);
// console.log(a);
// console.log(b--);
// console.log(b);
// console.log(++a);
// console.log(--a);

console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a / b = ", a / b)
console.log("a ** b = ", a ** b)
console.log("a % b = ", a % b)
console.log("++a = ", ++a)
console.log("a++ = ", a++)
console.log("--a = ", --a)
console.log("a-- = ", a--)
console.log("a = ", a)
console.log("a-- = ", a--)

// Assignment Operators 
let assignment = 1;

// assignment+=5;
// assignment-=5
// assignment*=5
// assignment/=5
// assignment +=5

assignment += 5 // same as assignment = assignment + 5
console.log("a is now = ", a)
assignment -= 5 // same as assignment = assignment - 5
console.log("a is now = ", a)
assignment *= 5 // same as assignment = assignment * 5
console.log("a is now = ", a)
assignment /= 5 // same as assignment = assignment / 5
console.log("assignment is now = ", assignment)



// Comparison Operators 
let comp1 = 6;
let comp2 = 7;

// console.log(comp1 == comp2);
// console.log(comp1 != comp2);
// console.log(comp1 === comp2);
// console.log(comp1 !== comp2);
// console.log(comp1 > comp2);
// console.log(comp1 < comp2);
// console.log(comp1 <= comp2);
// console.log(comp1 >= comp2);

console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)

// Logical Operators
let x = 5;
let y = 6;

// console.log(x>y || x<y);
// console.log(x>=y || x<=y);
// console.log(x!=y || x==y);
// console.log(x>y && x<y);
// console.log(x>=y && x<=y);
// console.log(x<y && x<y);
// console.log(!x<y);

console.log(x<y && x==5)
console.log(x>y || x==5)
console.log(!false)
console.log(!true)

//  Comments
//  This is a single line comment
//  This is a sample multiline comment and a tutorial


// const object = {
//     num1: a + b + 5,
//     num2: a - 5
// }
// console.log(object.num2);


// ternary Operator
// function getfree(isGet) {
//     return(isGet ? "$2.20" : "$4.11")
// }
// console.log(getfree(true));
// console.log(getfree(false));
// console.log(getfree(null));
// getfree();

let a1,b1,c1;
console.log("a1 > b1 is equal to c is: " , c1 ? 23 : 43 );