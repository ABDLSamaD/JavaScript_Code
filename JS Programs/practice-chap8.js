let urlObj = {
    google: 'https://google.com',
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com'
}
const clickUrlObj = document.querySelectorAll(".btn").forEach(e => {
    e.addEventListener('click', () => window.open(`${urlObj[e.id]}`))
})

document.querySelector(".bulb").addEventListener("click", () => {
    document.querySelector(".open").classList.toggle("close");
})