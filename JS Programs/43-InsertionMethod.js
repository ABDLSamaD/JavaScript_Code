let a = document.getElementById("container");

// this is the old way to add an content in html
// a.innerHTML = a.innerHTML + `<h1>Hello World</h1>`

// let div = document.createElement("div");
// heading.innerHTML = `<h1>Hello I'm a Text</h1>`
// div.appendChild();
let heading = document.createElement("h1");
heading.innerText = 'Hello I.m a text'
a.appendChild(heading)
// a.append(heading);

// top of in the class or section
// a.prepend(heading)
// a.before(heading) //before the section or div or class
// a.after(heading) //after the section or div or class  

const replWith = document.createElement("div");
replWith.innerText = "hello i'm a replacing child text";
// a.replaceWith(heading)