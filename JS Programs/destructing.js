// 1- Array Destructing:

const arr = [];
arr[0] = 1
arr[1] = 4
arr.forEach((e, i, a) => {
    if (i !== 0) {
        console.log("HEy There", e);
    } else {
        console.log("Not To much: ", a == 1 ? 'p' : 'a');
    }
});
let array = [2, 3, 5];

const [first, ...sec] = array;
console.log(sec);

