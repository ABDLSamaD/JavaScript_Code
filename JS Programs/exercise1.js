// creates a random number to store to it. and ask from the user to guess what that's number is you can show

let randomNumber = (Math.random() * 10)  // generate random number
randomNumber = Number.parseInt(randomNumber)  // convert it into an number
let guess
let x = 0;  // initilization

// time log method for what time will be done in this code

console.time("guess number time");
while (guess != randomNumber) {
    guess = prompt("Guess what that's number")
    if (guess <= randomNumber) {
        alert('Correct guess')
    }
    else if(guess > randomNumber){
        alert('UserAsk number is greater than random-number')
    }
    x += 1  // increment the number into one
}
console.timeEnd("guess number time");

console.log(randomNumber)  // print randomNumber
