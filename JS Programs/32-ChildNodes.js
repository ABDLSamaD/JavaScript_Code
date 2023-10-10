// access first child nodes of body
console.log((document.body.firstChild));

// access last child nodes of body
console.log(document.body.lastChild);

// access child nodes of body, all child nodes
console.log(document.body.childNodes);

// lets we try child nodes into an array
let array = Array.from(document.body.childNodes)
console.log(array);

// childNodes Look like an array but its not actually an array but a collecion. we can use Array.from(collection) to convert it into an array: --> array methods are not work.