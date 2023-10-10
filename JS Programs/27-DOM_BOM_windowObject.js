// window:
// The Window Object
// It represents the browser's window. All global JavaScript objects, functions, and variables automatically become members of the window object. Global variables are properties of the window object. Global functions are methods of the window object.

console.log(window);
// window.console.log(window);

// DOM: what is dom ? dom is a html document control
//DOM stands for Document Object Model. It is a programming interface that allows us to create, change, or remove elements from the document. We can also add events to these elements to make our page more dynamic. The DOM views an HTML document as a tree of nodes. A node represents an HTML element.
// e.g:
document.body.style.background = 'red'
document.body.style.color = 'black'

/*
document.getElementById('id')
document.createElement('div')
document.querySelector('.nav')
document.querySelectorAll('.nav ul li')
*/


// BOM 
// The Browser Object Model (BOM) in JavaScript includes the properties and methods for JavaScript to interact with the web browser. BOM provides you with a window objects, for example, to show the width and height of the window. It also includes the window. screen object to show the width and height of the screen

// the function alert/prompt/confirm are also a part of bom.
// alert('hello')
// confirm('hello')
// prompt('hello')
// location.href = 'https://google.com'