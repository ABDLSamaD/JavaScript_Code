// Q-1: create a navbar and change the color of its first element.
// let navFirsElem = document.getElementById("red").style.color = 'red';


// Q-2: Check tbody is available or not.
let CheckTbody = document.getElementById("check");
CheckTbody.addEventListener("click", () => {
    let table = document.querySelector("table")
    console.log(table.firstElementChild.nextElementSibling)
    if (table.firstElementChild.nextElementSibling === null) {
        alert("Not available tbody ");
    } else {
        alert("available tbody ");
    }
});


// Q-3: Create a 3 element and change the color of first and last element
let element = document.querySelector(".container")
element.firstElementChild.style.color = 'red'
element.lastElementChild.style.color = 'blue'


// Q-4: change the color of all li to cyan
let listItem = document.querySelectorAll("li");
listItem.forEach(elem => {
    elem.style.backgroundColor = 'cyan'
    console.log(elem);
})