// KATAS \\

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. \\

let number = 8;

function even_or_odd(number) {
  if(number % 2 == 0) {
      return "Even";
  } else {
      return "Odd";
  }
} console.log(even_or_odd(number));

// Write a function that will check if two given characters are the same case. \\

/* If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/

function sameCase(a, b){
if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()) {
    return -1
    } else if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()) {
        return 1
    } else {
    return 0
    }
} console.log(sameCase('b', 'C'));

// You get an array of numbers, return the sum of all of the positives ones. \\

/* Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

var arr = [1,-4,7,12];

// var even = arr.filter(x => {
//     return x % 2 === 0;
// }); 
// console.log(even);
// console.log(even.reduce((a, b) => a + b, 0));

function positiveSum(arr) {
    return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
};

/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    //code here
}

var count = [1,,3]
console.log(count)