let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value has been resolved after 2 second");
    }, 2000)
})

// promise chaining custom promises

promise.then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("value resolveing after then inner promise 2sec")
        }, 2000)
    })
}).then((value) => {
    console.log(value);
    return 2
}).then(value => {
    console.log(value);
    return new Promise((resolve, reject) => {
        resolve(true)
    })
}).then(value => {
    console.log("promise has been resolved");
})
console.log(promise);