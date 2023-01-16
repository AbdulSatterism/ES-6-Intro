const products = [
    { name: 'Samsung', price: 21000, color: 'blue' },
    { name: 'Dell Laptop', price: 80000, color: 'silver' },
    { name: 'Olive Watch', price: 2000, color: 'white' },
    { name: 'xiomi', price: 22000, color: 'black' },
    { name: 'Water bottle', price: 200, color: 'white' },
    { name: 'Water bottle', price: 200, color: 'white' }
];

const array = [15, 12, 45, 78, 95, 65]
// map on the array with arrow function
const arrayDouble = array.map(p => p * 2);
// console.log(arrayDouble)

const productName = products.map(p => p.name)
const productPrice = products.map(p => p.price)
// console.log(productPrice)


// filter in array 
const arrayMax = array.filter(n => n > 50);
const minimum = array.filter(mini => mini < 50);
// find in array
// const findNum = array.find(num => num > 12);


// filter products 
const product = products.filter(p => p.color == 'white')

// find products
const findPro = products.find(p => p.color == 'white')
// console.log(findPro)

// console.log(minimum)

// odd number by filter 

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 4, 5, 45, 12, 45, 65, 32, 64, 88]

// const oddNumber = number.filter(num => num % 2 == 1);
const evenNumber = number.filter(num => num % 2 == 0)
console.log(evenNumber)
