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


// Given the array, studentList, add the name "Mary".
//Do not edit the array in its current state. You must edit using a method of the Array object.

var a = 1;



let studentList = ["Allen", "Jessica", "Eddie", "Sarah"]
//write your code here

studentList.push('Mary');


// do not change
// for testing purposes
function checkArray(){
    return studentList.sort()
}

console.log(checkArray());


// Write a function called printArray that accepts an array as an argument. Create a loop that will print each value of the passed in array.
//Do not edit the array in its current state. You must use a method of the Array object.

function printArray(array) {
    for(let i = 0; i <array.length; i++) {
        console.log(array[i]);
    }
} 
printArray(input);


// Given the array, studentList, remove the name "Eddie".
//Do not edit the array in its current state. You must edit using a method of the Array object.

// let studentList = ["Allen", "Jessica", "Eddie", "Sarah"];
// //write your code here

// studentList.splice(2, 1);

// // do not change
// // for testing purposes
// function checkArray(array){
//     return array.sort()
// }

// console.log(checkArray(studentList));

// Write a function called sortArray that accepts an array as an argument. Within the function, sort the array alphabetically or numerically. Return the sorted array.
//You must use a method of the Array object

function sortArray(alpha) {
    return alpha.sort();
}

// do not change
// for testing purposes

console.log(sortArray(input));

// Write a function called reverseArray that accepts an array as an argument. Within the function, reverse the array. Return the reversed array.
//You must use a method of the Array object.

function reverseArray(array) {
    return array.reverse();
}


// do not change
// for testing purposes

console.log(reverseArray(input));

// Create an array called groceryList and add "granola", "milk", and "eggs"

var groceryList = ['granola', 'milk', 'eggs'];


// do not change below
// for testing purposes
console.log(groceryList)
