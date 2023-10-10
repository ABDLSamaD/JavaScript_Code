let cTitle = document.querySelectorAll(".card");

cTitle.forEach(elemenet => {
    let colors = elemenet.getElementsByClassName("card-title")
    // console.log(colors[0].style.color = 'red');
    console.log(colors[0].addEventListener("click", (e) => {
        e.preventDefault()
        // alert(e.target.removeEventListener('click', () => { }))
        alert(e)
    }));
})

let slider = document.getElementById("carouselExampleIndicators").addEventListener("click", () => {
    alert("clicked")
})

// search
let named = 'samad'
const search = document.getElementById("Searching");
search.addEventListener("onchange", (e) => {
    console.log(e)
})
let submitBtn = document.getElementById("submitbtn").addEventListener("click", function (e) {
    console.log(named);
})