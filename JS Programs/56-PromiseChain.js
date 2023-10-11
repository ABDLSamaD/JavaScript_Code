// another file of code is 56-PromisesChain.js

/*
let promise = new Promise((resolve, reject) => {
    resolve(true)
    // reject(new Error("error"))
})
promise.then((value => {
    console.log(value);
})).catch((error) => {
    console.error(error)
}) */



// loadscript function with promises: no need to callback included easy and simple way to use promises then and catch
const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.type = 'text/javascript';
        script.src = src;

        script.onload = () => resolve("Script loaded successfully");
        script.onerror = () => reject(0)
        // script.onerror = () => {
        //     reject(new Error("Something issued in script file"))
        // }

        document.body.appendChild(script);
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js").then(value => {
    console.log(value);
}).catch(error => {
    console.log("Script not loaded, some error in script");
})



/* // array duplicate
let array = [1, 2, 1, 3, 2, 3];
let duplicate = []
let uniqueId = new Set();
for (const value of array) {
    if (uniqueId.has(value)) {
        duplicate.push(value)
    } else {
        uniqueId.add(value);
    }
}
console.log(`Duplicate values are ${duplicate}`)
*/
