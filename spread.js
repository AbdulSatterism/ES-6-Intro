
// three dot
const numbers = [23, 65, 45, 68, 34];
// console.log(numbers)
// console.log(...numbers)

const max = Math.max(23, 65, 80, 1);
// const maxInArray = Math.max(numbers)
const maxInArray = Math.max(...numbers)
// console.log(max)
// console.log(maxInArray)

// reference 
// const number2 = numbers;
const number2 = [...numbers, 89, 84, 456, 158];

// numbers.push(91)
number2.push(191)
console.log(number2)
