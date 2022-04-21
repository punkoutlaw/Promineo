// PRACTICE ARRAYS & METHODS \\

// To add the following array, we can use several different ways/methods.

var arr = [1,-4,7,12];

// METHOD 1 - USING A VARIABLE AND FOR LOOP \\

let sum1 = 0;
for(let a of arr)
    sum1 += a;
console.log(sum1);

// METHOD 2 - USING THE REDUCE METHOD \\

let sum2 = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); console.log(sum2)

// METHOD 3 - SIMPLIFIED REDUCE METHOD \\

let sum3 = arr.reduce(
    (a, c) => a + c); 
console.log(sum2);

