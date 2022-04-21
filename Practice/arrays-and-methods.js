// PRACTICE \\

var arr = [1,-4,7,12];

// let sum = 0;
// for(let a of arr)
//     sum += a;
// console.log(sum);

let sum = arr.reduce(
    (a, c) => a + c); 
console.log(sum);