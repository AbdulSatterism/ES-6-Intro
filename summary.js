const numbers = [12, 54, 87, 62, 45];
const minNumberDot = Math.min(...numbers);
const maxValue = Math.max(...numbers)
numbers.push(58)
console.log("minimum value", minNumberDot, "maximum value", maxValue)


// default value 
function defaultParameter(num1, num = 0) {
    // defaultParameter other rule 
    // num = num ||0
    // if (num == undefined) {
    //     num = 0
    // }
    return num1 + num;
}
console.log(defaultParameter(15))


// arrow function
const arraow = (a, b, c) => a * b - c;
console.log('arraow function ', arraow(12, 5, 10))