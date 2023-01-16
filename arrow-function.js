// arrow function practice 

// single parameter arrow function
const singleArrow = (x) => x * 2;

// double parameter return arrow function
const doubleParameter = (a, b) => a * b;

// multi value parameter and return value 
const multiValueParameter = (one, two, three) => {
    const sum = one + two + three;
    const multi = one * two * three;
    const result = multi / sum;
    return result;
}

// function default value 
function defaultParamenter(num1, num2 = 0) {
    // option 2
    // num2 = num2 || 1;

    // Option 1
    // if (num2 == undefined) {
    //     num2 = 0;
    // };
    const sum = num1 + num2;
    return sum
}


// default parameter with arrow function
const defaultPara = (one, two = 0) => one + two;

console.log(defaultPara(50));