// add two number in arrow func
const add = (a, b) => a + b;
const sumAdd = add(51, 4);
// 

const multiply = (x, y, z) => x * y * z;
const multi = multiply(5, 4, 7)

// single 
const tenTime = (num) => num * 10;
const output = tenTime(10)

// five time
const five = num => num * 5;
const value = five(50)

// without parameter
const getName = () => 'Brandon Sam';
const name = getName()

// complex arrow
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum + diff;
    const output = result * 5;
    return output;
}

const total = doMath(25, 45)
// console.log(total)

document.getElementById('default').addEventListener(event => {
    // this
})
