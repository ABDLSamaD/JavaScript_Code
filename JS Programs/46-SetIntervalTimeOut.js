let first = document.getElementById("first");

// setTimeout(() => { alert("hello") }, 5000)
let sum = (a, b) => {
    console.log(`Sum of a = ${a} and b = ${b} is:  ${a + b}`);
    // return a >= b ? a : b;
}
setTimeout(sum, 1000, 2, 3)
/* // 1- setTimeout
setTimeout(() => { alert(sum(2, 5)) }, 1000)
let timeOut = setTimeout(() => { alert(sum(2, 4)) }, 5000)
clearTimeout(timeOut) */

/*  // 2- setTimeout
const functionTimeOut = (propmt) => {
    prompt = prompt("if you want to clear timeout this: ")
    if ("no" === prompt) {
        console.log("done")
    } else {
        console.log("not done")
    }
    return
}
let timeOut = setTimeout(() => { functionTimeOut() }, 2000) */

// 1- SetInterval
function Interval(a, b) {
    a = prompt("enter any number");
    b = prompt("enter any number");
    if (a > b) {
        console.log("a is greater than b ", a)
    } else {
        console.log("b is greater than a ", b)
    }
}
// let interval = setInterval(() => {
//     if (a > b) {
//         console.log("a is greater than b ", a++)
//     } else {
//         console.log("b is greater than a ", b++)
//     }
// }, 2000)
// clearInterval(interval)
setInterval(() => {
    Interval()
}, 4000);