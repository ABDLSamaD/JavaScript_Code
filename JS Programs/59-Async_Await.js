/* async / await - there is a special syntax to work with promises in js
a function can be made async by using async keyword like this 
async is also return a promise
there is a another keyword await that works only inside the async function */

async function Async() {
    let badinWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('27 deg');
      }, 2000);
    });
    let karachiWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("33 deg");
      }, 5000);
    });

    /*badinWeather.then(x => console.log(x))
    karachiWeather.then(x =>console.log(x))*/

    console.log("Fetching Badin Weather Please Wait....");
    let weatherBadin = await badinWeather;
    console.log("Badin Weather Fetched Successfully: ", weatherBadin);
    console.log("Fetching Karachi Weather Please Wait....");
    let weatherKarachi = await karachiWeather;
    console.log("Karachi Weather Fetched Successfully: ", weatherKarachi);
    return [weatherBadin, weatherKarachi];
}

console.log("Welcome to weather control room. ");

const Async2 = async () => {
  console.log("There it is Async2")
}

const demoId = async ()=>{
  let result = document.getElementById("demo")
  result.innerHTML = "<p>Hello how are you</p>"
}

// simple example of async await and i call it main async function, in top you see it.
const names = async (n1)=>{
  await n1
  return console.log(n1);
}

const main = async () => {
  let a = await Async()
  let b = await Async2()
  let c = await demoId()
  let d = await names("samad");
  let e = await getFile()
}
main()

// Waiting for a File
async function getFile(){
  let myPromise = new Promise((resolve,reject)=>{
    let req = new XMLHttpRequest();
    req.open("Get", "56-PromiseChain.html")
    req.onload = ()=>{
      if(req.status == 200){
        resolve(req.response)
      } else {
        reject(new Error("error in this file"))
      }
    }
    req.send()
  })
  document.getElementById("demo2").innerHTML = await myPromise
}






// Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules
// let a = await Async();
// let b = await Async2();
/*
a.then(bdW =>{
    // console.log(bdW[0] > 1 ? "hello":"No");
    console.log(bdW);
}) */
