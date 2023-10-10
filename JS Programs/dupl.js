let add
add = de(6,2)
console.log(add);
let def
def = de(4,8)
console.log(def);

function de(num1,num2) {
    if (num1>num2) {
        const obj = {
            text: `The number ${num1} is: `,
        }
        let i=0
        while (i<num1) {
            i++
            console.log(`${obj.text} ${i}`)
        }
        return num1
    }
    else{
        const obj = {
            text: `The number ${num2} is: `
        }
        let i=0
        while (i<num2) {
            i++
            console.log(`${obj.text} ${i}`)
        }
        return num2
    }    
}


// const random = Math.random() * 10
// const convert = Number.parseInt(random)
// console.log(convert)

const myFunc = (object) => {
    object = {
        name: "abc",
        salary: "25000",
        address: "Shahbaz road badin",
        number: "03330909900",
        city: "badin",
    }
    let item;
    for(item in object) {
      console.log(item)
    }
    
    return object["name"]
}
let obj;
console.log(`The Name of User is : ${myFunc(obj)}`)

let arr = [10,20,30];
arr.map((a,b,c)=>{
    console.log("the: ",a,b,c)
})