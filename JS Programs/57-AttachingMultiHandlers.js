// Attaching multiple handlers is diffrenet from promises chain lets get started

const promise1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise is being resolved")
    },2000)
})
promise1.then(value=>{
    console.log(value);
})
promise1.then(value=>{
    console.log("congrat's another value of promise is being resolved");
})

// return another promise in inside the then()
promise1.then(value=>{
    console.log("promises1 ",value);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(4)},6000)
    })
    // return "samad"
    // and i return any number or function or value inside then() is considered the promise 
}).then(value=>{
    console.log(value);
})

// this is multiple handlers attaching in promises