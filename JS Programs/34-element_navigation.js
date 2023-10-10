let b = document.body;

console.log("the first child of b is: ",b.firstChild);

console.log("the first child of an first sibling of b is: ",b.firstChild.nextSibling);
console.log("the last child of an previous sibling of b is: ",b.lastChild.previousSibling);

// navgiation element child
console.log("the first element child of b is: ",b.firstElementChild);
console.log("the first element child of an last element child of b is: ",b.firstElementChild.lastElementChild);

// the next element sibling of nav
console.log("the first element child of an next element sibling of b is: ",b.firstElementChild.nextElementSibling);
console.log("the first element child of an next element sibling an first element sibling of b is: ",b.firstElementChild.nextElementSibling.firstElementChild);


let containers = document.getElementsByClassName('container');
console.log(containers);



// styling of html contents
let headingTag = document.body.firstElementChild.nextElementSibling.firstElementChild;
headingTag.addEventListener('click', ()=> {
    headingTag.style.color = 'blue'
    headingTag.style.fontSize = '2.5vw'
    headingTag.style.cursor = 'pointer'
})

const colorChangeBody = ()=>{
    document.body.firstElementChild.nextElementSibling.style.background = "red"
    document.body.firstElementChild.nextElementSibling.style.padding = "2rem"
} 



setInterval(() => {
    // document.body.firstElementChild.nextElementSibling.style.textAlign = "center"
    document.body.firstElementChild.nextElementSibling.style.fontSize = "1.5rem"
    colorChangeBody()
}, 3000);