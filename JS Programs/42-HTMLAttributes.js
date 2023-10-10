let first = document.getElementById("first");
let span = document.querySelector("span");
let a = first.attributes.id.value
// let a = first.attributes.class.value
console.log(a);

console.log(`hasAttriubute ------------------- hasAttribute() method to check for existance of an attribute`);
console.log(first.hasAttribute('class')); //hasAttribute() method to check for existance of an attribute
console.log(first.hasAttribute('style')); //hasAttribute() method to check for existance of an attribute

console.log(`getAttriubute ------------------- getAttribute("name) method to get the value of an attribute`);
console.log(first.getAttribute("class")); //getAttribute() method to get the value of an attribute
console.log(first.getAttribute("id")); //getAttribute() method to get the value of an attribute
console.log(first.getAttribute("style")); //getAttribute() method to get the value of an attribute

console.log(`setAttriubute ------------------- setAttribute("name", "value") method to set the value of an attribute`);
console.log(first.setAttribute("class", "true hello")); //setAttribute("name", "value") method to set value to an attribute

console.log(`removeAttriubute ------------------- removeAttribute("name") method to remove the value of an attribute`);
console.log(first.removeAttribute("class")); //removeAttribute("name") method to remove value to an attribute

// data attributes get value
console.log("datasetAttributes ------------------------ to gets an value from the custom attribute in html");
console.log(span.dataset.fname + " " + span.dataset.lname); //create an custome attribute you want