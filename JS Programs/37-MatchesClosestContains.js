let id1 = document.getElementById("id1");
let id2 = document.getElementById("id2");
let sp1 = document.getElementById("sp1");
let box = document.querySelector(".box");
let box1 = document.querySelector(".box1");

console.log(id1);

// matches
console.log(id1.matches('.box'));
console.log(id2.matches('.box'));
console.log(id2.matches('.box1'));
console.log(id2.matches('.box1'));
console.log('-----------------------');

// closest
console.log("samad");
console.log(sp1.closest("#sp1").style.color = 'red')
console.log('-----------------------');

// contains
console.log(id1.contains(sp1));
console.log(sp1.contains(id1)); //sp1 is a child class of id1
console.log(id1.contains(box));
console.log(id2.contains(box));
console.log(id2.contains(box1).innerText = 'redsasa');