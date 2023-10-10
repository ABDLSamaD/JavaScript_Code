let first = document.getElementById("first");

// insertAdjacent('beforebegin', '<p>Hello BeforBegin</p>') and so on

first.insertAdjacentHTML('beforebegin', "<p>beforebegin</p>")
first.insertAdjacentHTML('beforeend', "<p>beforeend</p>")
first.insertAdjacentHTML('afterbegin', "<p>afterbegin</p>")
first.insertAdjacentHTML('afterend', "<p>afterend</p>")
// first.remove()