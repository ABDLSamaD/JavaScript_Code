// There are 6 static methods of promises class

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve("Value 1") },1000)
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ reject(new Error("Value 2")) },2000)
    // setTimeout(()=>{ resolve("Value 2") },2000)
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve("Value 3") },3000)
})

/*
promise1.then(value=> console.log(value))
promise2.then(value=> console.log(value))
promise3.then(value=> console.log(value))
*/

// if i want these 3 promises are all combienly printed how can i do, i can use promises methods
//  if any 3 of 1 rejected or error promise.all() does throw error in case we can use promise.allSettled()
// promise.race if any 3 of 1 who can firstly print, if any 3 of 1 rejected error we can use promise.any()
// promise.resolve(1value) to resolve
// promise.reject(1value) to reject

// let promises_All = Promise.all([promise1,promise2,promise3]); 
let promises_All = Promise.allSettled([promise1,promise2,promise3]);
// let promises_All = Promise.race([promise1,promise2,promise3]);
// let promises_All = Promise.any([promise1,promise2,promise3]);
// let promises_All = Promise.resolve(promise3);
// let promises_All = Promise.reject("error");

promises_All.then(value => console.log(value))
// promises_All.catch(error => console.log(error))