
// Q-1: 
let arr = [1,2,3,4,5]
// let a = prompt("Enter any number")
// a = Number.parseInt(a) 
// arr.push(a)
// // let pushA = arr.push(a)
// console.log(arr);
// console.log(pushA);


// Q-2:
let a2;
while (a2 != 0) {
    a2 = prompt("Enter any number")
    a2 = Number.parseInt(a2) 
    arr.push(a2)
}
console.log(arr);


// Q-3: 
let arr2 = [10,20,1,3,5,900,80,4,7,6]
let n = arr2.filter((x)=>{
    return x % 10 == 0
})
console.log(n ,": the given array is divisible by 10 are they");


// Q-4: 
let arr3 = [11,2,1,4,3,5]
let n1 = arr3.map((x1)=>{
    return x1* x1
})
console.log(n1 ,": square of the given array");


// Q-5: 
let arr4 = [1,2,3,4,5]
let n2 = arr4.reduce((x2, x3)=>{
    return x2 * x3
})
console.log(n2 ,": square of the given array");







/*
let arr1 = [1,2,3,4,5]
let a1 = prompt("Enter any number")
while (a1 > arr.length) {
    let ask = prompt("Enter any number")
    ask = Number.parseInt(ask)


    if(ask > 10 || quit === ok){
        // alert('success')
        arr1.push(ask)
        console.log(arr);
        let quit = confirm('quit')
        console.log(quit);
    }
    else{
        // alert('not success')
        // let Pop = arr.pop()
        arr1.pop()
        // console.log(Pop);
    }
    a1++
}
alert('close while')
*/
















/*
const arraysFunc = () => {
    const arr = [10,34,11,44,99,14]
    return arr
}

arraysFunc().forEach(element => {
    console.log("The Array is: ", element);
});
*/








/*
let studentMarks = (ask) =>{

    // /*
    let array1 = ([
        {
            eng: 91,
            // eng1: 99,
            // eng2: 73
        },
        {
            math: 73
        },
        {
            phy: 85
        },
        {
            urdu: 97
        }
    ])
    //

    return ask = array1, array2
}

// let asks = prompt('ask the user');
let array1 = [10,20,30,40,50,60]
let array2 = [10,90,20,30,11,55]
let join = array1.concat(array2)


join.forEach(element => {
    console.log("the array of student is: ", element);
});
*/



// user input array
/*
let i = 0
while(i < 5)
{
    let userArray = prompt('enter any number');
    let array = userArray
    console.log(array);
    i++
}*/