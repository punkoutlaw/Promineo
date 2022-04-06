
//Convert the following function into an arrow function. Refer to the new function as monthlyPayment.

var a = 1100;

function myFunction(yearlyPayment) {
    let monthly = yearlyPayment / 12;
    return monthly.toFixed(2);
} console.log(myFunction(a));

//write your code here

let monthlyPayment = (yearlyPayment) =>{
    let monthly = yearlyPayment / 12;
    return monthly.toFixed(2);
}; console.log(monthlyPayment(a));


// Convert the following function into an arrow function. Refer to the new function as pythagoras.

function myFunction(num1, num2) { return Math.sqrt((num1*num2)+(num2*num2)); }

var a = 1;
var b = 2;


//write your code here


let pythagoras = (num1, num2) => {
    return Math.sqrt((num1 * num2)+(num2*num2));
};


//do not change
//for testing purposes
console.log(pythagoras(a,b));


// Convert the following function into an arrow function. Refer to the new function as returnSum.

var a = 4;
var b = 6;

function addTwoInputs(a,b) { return a+b; }

//write your code here


let returnSum = (a, b) => a+b;


//do not change
//for testing purposes
console.log(returnSum(a,b));


// Convert the following function into an arrow function. Refer to the new function as xor.

function myFunction(num1, num2) {
    return num1 ^ num2;
}

var a = 5;
var b = 3;
//write your code here

let xor = (num1, num2) => num1 ^ num2;

//do not change
//for testing purposes
console.log(xor(a,b));


// Convert the following function into an arrow function. Refer to the new function as returnNumber.
//Note: The returned value is a template literal. Remember to use backticks.

function myFunction(num) {
    return `Your number is ${num}`;
}

var a = 15;



//write your code here

let returnNumber = num => `Your number is ${num}`;

//do not change
//for testing purposes
console.log(returnNumber(a));