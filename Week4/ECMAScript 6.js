
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

