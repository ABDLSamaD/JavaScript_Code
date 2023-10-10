// Array Methods

let num = [10,20,30,40,50,60];



// 1- toString() Method
let changeToString = num.toString(); // he can change into an string
console.log(changeToString ,': toString');



// 2- join() Method
let JoinArray = num.join('_'); // he can join the array together
console.log(JoinArray, ': joinArray');
// let JoinArray = num.join(' = '); 
// console.log(JoinArray, typeof JoinArray);



// 3- pop() Method:
let r = num.pop(); // pop removes the last element
console.log(num , r,': pop');



// 4- push() method:
let p = num.push(9);  // push add a new element at the end of last to an array
console.log(num ,p,': push');



// 5- shift() method:
let s = num.shift(); // remove first element and returns it
console.log(num ,s,': shift');



// 6- unshift() method:
let uS = num.unshift(2)  // add elements to the beginning returns new array length
console.log(num ,uS,': unshift')



// 7- delete() method:
let d = [10,20,30,9,1,3] // Array element can be deleted using the delete opeartor
delete d[2]
console.log(d ,': delete')



// 8- concat() method:  // use to join arrays to the given array
let j1 = [1,3,5,7]
let j2 = [2,4,6,8]
let j3 = [9,7,11,13]
let joinArray = j1.concat(j2,j3)  // returns value (j2,j3) => values
console.log(joinArray  ,': concat')



// 9-  sort() method:
let compare = (a, b) =>{
    return a + b
}
let sorting = ['samad',,2,5,'pop','join',1,4,2,3,'lake',200,19971,191]
// sorting.sort()  // sort() is used to sort the array alphabetically
sorting.sort(compare) // this compare function  can be a function in sorting
console.log(sorting ,': sort');

// reverse method: 
// sorting.reverse()
// console.log(sorting);



//  10-  splice() methods: 
let spliced = [19,22,9,10,2,1]  // splice() can be used to add a new item to an array
spliced.splice(1,1,23,24) // splice method is (start, delete, add items)
console.log(spliced ,': splice');
// console.log(typeof spliced ,': splice');



// 11-  slice() methods:
let slices = [1,2,3,4,5,6,7,8,9]
slices.slice(3)
console.log(slices ,': slice');










num.length
console.log(num);

/*
const array = [10, 30, 2, 11, 'samples', 'another', 1];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`The array is: ${element}`);
}
array[3] = 8;
array[5] = 'display name';
array.join('=')
array.pop();
console.log(array);


array.forEach(element => {
    console.log(`The element ${element}`);
});
*/