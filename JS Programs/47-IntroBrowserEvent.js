let container = document.querySelector(".container");
let button = document.querySelector("button");

container.addEventListener("keydown", () => {
    console.log("click on container");
    // container.innerText = `hello`
})
container.addEventListener("fullscreenchange", (e) => {
    console.log(e);
})

button.addEventListener("click", (e) => {
    console.log("x", e.clientX, " y", e.clientY);
    console.log(e.target);
    console.log(e);
    // console.log("hovered over button");
    button.innerText = 'Click the mouse'
    document.body.style.background = 'lightcyan'
})
button.addEventListener("mouseenter", () => {
    // console.log("hovered over button");
    button.innerText = 'Enter the mouse'
    // button.style.background = "1196F3aa"
    document.body.style.background = 'gray'
})
button.addEventListener("mouseleave", () => {
    // console.log("leave over button");
    button.innerText = 'leave the mouse'
    // button.style.background = "2296F3aa"
    document.body.style.background = 'gery'
})
