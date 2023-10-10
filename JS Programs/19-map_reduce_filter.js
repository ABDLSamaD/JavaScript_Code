// map filter reduce a high order arrays method:



// 1- Map: map() creates a new array by performing some operation on each array element:
let arr = [44, 23, 18]

// first map function
/*arr.map((value)=>{
    console.log(value);
})*/

// check outside function what can be return this map function of an array
let a = arr.map((value, index, array) => {
    console.log(value, index, array);
    return value + index
})
console.log(a, ": check map")
// console.log(arr);




// 2- Filter: filter() an array with values that passes a test. creates a new array
let arr2 = [45, 23, 19, 0, 3, 1, 5]

// first filter function
let Filter = arr2.filter((filt) => {
    console.log(filt, "filter");
    return filt > 2
})
console.log(Filter, ": check filter")
// console.log(arr2)




// 3- Reduce method: reduce() reduces an array to a single value
let arr3 = [0, 1, 2, 3, 4]
// let add = arr3.reduce((red, red1)=>{
//     return red + red1
// })
let add = ((r1, r2) => {
    return r1 + r2 + 2
})
// let newArr3 = add
let newArr3 = arr3.reduce(add)
console.log(newArr3, ": check reduce")


// map example

let Array = [
    {
        name: "samad",
        cast: "pathan",
        city: "Badin"
    },
    {
        name: "ali",
        cast: "pathan",
        city: "Badin"
    },
    {
        name: "asghar",
        cast: "naqvi",
        city: "Badin"
    },
    {
        name: "mustafa",
        cast: "khuwaja",
        city: "Badin"
    },
    {
        name: "muna",
        cast: "shah",
        city: "naukot"
    },
];

Array.map((val, ind) => {
    if (ind !== 2) {
        console.log(val.name, val.cast, val.city);
    }
    return null
})

// destructive array
// simple array
const array = ['vi', 'op', 'po'];

// this is an destructive array and this way also use in react hook useState()
const [names, alo, poat] = array;
console.log(poat)