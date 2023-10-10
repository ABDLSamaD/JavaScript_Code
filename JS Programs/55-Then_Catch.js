let p1 = new Promise((resolve, reject) => {
    console.log("I'm Pending");
    setTimeout(() => {
        // console.log("I'm a promise and I'm  resolve");
        resolve(true) // in resolve inner value i set then(value) are what resolve value
    }, 5000)
})
let p2 = new Promise((resolve, reject) => {
    console.log("I'm Pending");
    setTimeout(() => {
        // console.log("I'm a promise and I'm rejected");
        reject(new Error("I'm an Error"))
        // resolve(true)
    }, 5000)
})

// To get the value
p1.then((value) => {
    console.log(value);
})

// To catch the error
/*
p2.catch((error) => {
    console.log("Error Occured in p2");
}) */

// directly then and catch the values from promises
p2.then((value) => {
    console.log("value");
}, (error) => {
    console.log("error Occurred", error);
})

// console.log(p1, p2);



// syntax
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done")
        // reject(new Error("error"))
    }, 1000)
})
promise.then(alert).catch((error) => {
    console.log(error);
})