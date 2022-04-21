// PRACTICE FUNCTIONS \\


// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. \\

let number = 8;

function even_or_odd(number) {
  if(number % 2 == 0) {
      return "Even";
  } else {
      return "Odd";
  }
} console.log(even_or_odd(number));

function sameCase(a, b){
    return a.toLowerCase().localeCompare(b.toLowerCase()); 
  } console.log(sameCase("t", "G"));


// You get an array of numbers, return the sum of all of the positives ones. \\

/* Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    return 0;
}

*/

var arr = [1,-4,7,12];

function positiveSum(arr) {
    return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
}; console.log(positiveSum(arr));

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