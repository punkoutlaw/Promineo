// Arrays are a data type that allow us to group similar variables together and refer to the values by location.
// The location of index is zero based. Which means that the 1st value is located at posisiton 0 and the last will always be located at the index just one less than the length of the array, or the number of elements in the array.

// Example:

// a // position 0
// b // position 1
// c // position 2
// d // position 3
// e // position 4
// f // position 5, which is one less than the length of the array

var customerNames = [];
customerNames.push('Sam Smith'); // position 0
customerNames.push('Tommy Guns'); // position 1

console.log(customerNames[0]);
console.log(customerNames[1]);

// The above can also be written as a for statement to make the code more dynamic and reduce lines:

for (let i = 0; i < customerNames.length; i++) {
    console.log(customerNames[i]);
}

// You can use a "for of" loop to shorten the code even further and get rid of the 'i" all-together:

for (name of customerNames) {
    console.log(name);
};

var ages = [3, 9, 23, 64, 2, 8, 28, 93] // this is your array
var a = ages[ages.length - 1]; // this is how you access the last element in an array
var b =  ages[0]; // this is how you access the 1st element in an array

// OPENCLASS QUESTIONS

// Write a function called joinArrays that accepts two arrays as arguments. 
// Join the two arrays and return the new array.
// You must use a method of the Array object

var input = ['Phillip', 'Eddie', 'Jason', 'Brook'];
var staticArray = ["Henry", "Peter", "Julie"];

//write your code here


function joinArrays(array1, array2) {
    return array1.concat(array2);
}

// do not change
// for testing purposes

console.log(joinArrays(input, staticArray));