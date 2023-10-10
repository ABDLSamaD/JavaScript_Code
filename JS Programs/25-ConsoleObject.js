// console objects in js:

// different types of console log
// 1. console.log()
// 1. console.info()
// 2. console.error()
// 3. console.warn()
// 3. console.clear()
// 4. console.table()
// 4. console.time()
// 5. console.timeEnd()

// ---------------------------------------------------------------------------------------
// console.log(console);
console.log('hey console.log()');
console.info('this is an info');

// ---------------------------------------------------------------------------------------
console.error('this is an error');

// ---------------------------------------------------------------------------------------
// console.assert(34>35)
console.assert(353>34)

// ---------------------------------------------------------------------------------------
// console.clear()

// ---------------------------------------------------------------------------------------
obj = {
    a:1,b:2,c:3
}
console.table(obj)

// ---------------------------------------------------------------------------------------
console.warn('this is warn you')

// -=-------------------------------------------------------------------------------------
console.time('a')
console.timeEnd('a')


// time for loopFor
console.time('forLoop');
for (let i = 0; i < 6; i++) {
    console.log(i);
}
console.timeEnd('forLoop');


// time for whileLoop
console.time('whileLoop');
let w = 0
while (w < 6) {
    console.log(w);
    w++
}
console.timeEnd('whileLoop');


// time for dowhileLoop
console.time('dowhileLoop');
let d = 0
do{
    d++
    console.log(d);
}while(d<5)
console.timeEnd('dowhileLoop');

// ---------------------------------------------------------------------------------------