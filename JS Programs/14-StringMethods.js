// string methods
let names = "objects"
console.log(names.length);
console.log(names.toLowerCase());
console.log(names.toUpperCase());
console.log(names.slice(2,4)); // is cut the value in the arguments starting from where and end is not include
console.log(names.slice(2));
console.log(names.replace("obj", "proj"));  // replace the string
console.log(names.slice(0,6));

// substring 
let subStr = 'hello world';
console.log(subStr.substring(1,10)); //he count the number of characters in the string

// find indexes of objects string
console.log(names[0]);
console.log(names[4]);
console.log(names[3]);

// characters in string
console.log(names.charAt(1));


let boy1 = 'hamza'
let boy2 = 'ali'
let boy3 = 'nome'
console.log(boy1.concat(" is a friend of ",boy2, " and ",boy3," is vichkottan"));
// concat is the connect the arguments of a strings methods



let friend = "            Aliya      ";
console.log(friend);
console.log(friend.trimStart()); //clear the start spaces
console.log(friend.trimEnd());  //clear the end spaces
console.log(friend.trim());  // clear all the spaces
// trim is clear the extra spaces between the strings and the concat string


let friend1 = "Munna"
console.log(friend1.split(" "));


console.log("samad\"".length);



// button from html to convert to lower case and upper case
let button = document.getElementById("button");
let button1 = document.getElementById("button1");
let para = document.getElementById("para")


const upperFunction = ()=>{
    const UpperCase = (para.innerHTML.toLocaleUpperCase());
    para.innerText = UpperCase;
    para.style.fontSize = '1rem';
    // para.style.color = 'lightCoral'
    // button.style.background = 'transparent';
    // button.style.color = 'black';
}

const lowerFunction = ()=>{
    const LowerCase = (para.innerHTML.toLocaleLowerCase());
    para.innerText = LowerCase;
    para.style.fontSize = '0.8rem';
    // para.style.color = 'red';
    // button1.style.background = 'transparent';
    // button1.style.color = 'black';

}

button.addEventListener('click', upperFunction);
button1.addEventListener('click', lowerFunction);


// quickQuiz: 
let fr = "hello"
for(let i = 0; i< fr.length; i++) {
    console.log(fr[i]);
}