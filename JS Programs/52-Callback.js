// Synchronuos
/* let a = prompt("what is your name");
let b = prompt("what is your age");
let c = prompt("what is your fav color");
console.log(a, " is ", b, " and favourate color is: ", c); */
// action execute one by one is known as synchronus

// Asynchronous
/* console.log("Start");
setTimeout(() => {
    console.log("Asynchronous action");
}, 3000);
console.log("End"); */
// Asynchronous action that we initiate now and they finish later: best example is setTimout()



// Callback Function e.g: and error handling
// /*
const LoadScript = (src, callback) => {
    // the script we created automatically generated how i can see the message of executed the script
    const script = document.createElement('script');
    script.src = src;

    script.onload = function () {
        console.log("loaded script: " + src);
        callback(null, src)
    }

    script.onerror = function () {
        console.log("Error on script ", src);
        callback(new Error("failed to compile"))
    }

    document.body.appendChild(script);
}

const hello = (error, src) => {
    if (error) {
        console.log(error);
    } else {
        alert("src will run: " + src);
    }
}

// any error in the script or url we can handled with onerror function
LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", hello);
// */

// callback function is a function to call a function in a argument of a function

const objectFunction = (object, callback) => {
    let para = document.createElement("p");
    para.innerText = "hello how are you"
    window.onload = function () {
        console.log("object will run", object);
        callback()
    }

    document.body.appendChild(para)
}

let obj = {
    // URL: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
    name: "samad",
    age: "22",
    color: "red"
}
const AllObj = (a, b) => {
    // a = obj.URL
    a = obj.name
    b = obj.age
    console.log(a + " his age is " + b);
}
objectFunction(obj, AllObj)