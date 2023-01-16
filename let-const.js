let balance = 1240;
balance = 1340;

const userName = 'janpakhi potas potas';
const weTogether = 'ami ' + userName
// console.log(weTogether)

const numbers = [12, 4, 5, 5, 4, 8, 7, 8, 65];
// numbers = [99, 145, 5];not allowed reassigned in const variable
numbers.push(255)

const students = { roll: 1, name: 'mofij', job: 'intern' };
students.name = 'Abdullah'

let sum = 0;
for (let i = 0; i < numbers.length; i++) {

    const number = numbers[i];
    sum = sum + number;

}
console.log(sum)