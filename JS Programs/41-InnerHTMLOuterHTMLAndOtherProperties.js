let x = document.getElementsByTagName('span')[0]
console.log(x);
let y = document.getElementsByTagName('span')[0]
console.dir(y);

console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

// innerHtml and OuterHtml
// console.log(x.innerHTML);
// console.log(x.innerHTML = `<i>Hey how are you</i>`);
// console.log(x.outerHTML);
// console.log(x.outerHTML = `<div>Hello</div>`);
// console.log(x.dataset.fname + " " + x.dataset.lname); // html dataset value fetch with js

console.log(y.textContent);