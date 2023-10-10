// promise syntax
let promise = new Promise((resolve, reject) => {
    // the simple example of promise
    console.log("Hello promise")
    let a = "Abdul"
    resolve(a)
    // however value is true or correct no error value will be exextued to parralel way and promise will resolve it: or not promise will reject it, 
    // resolve and reject are two callbacks provide by js itself
    // resolve(value) - if the job is finished successfully
    // reject(error) - if an error occurred during execution
})
// the promise object returned by the new promise constructor has the properties. 


console.log("Hello one");
setTimeout(() => {
    console.log("Hello two print in three seconds");
}, 3000);
console.log(promise); //print promise
console.log("hello Three");