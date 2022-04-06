// A function stores code to use later

// To create a function, we need 3 things:
// 1) The "function" keyword
// 2) The "name" (variable) we wish to give the function
// 3) A set of curly braces {}

// Example:

// function myFunction() {
//     for (let i = 0; i < 100; i++) {
//         console.log(i);
//     }
// }

// NOTE: The above code WILL NOT execute because we have not referred anything to the function name.
// Nothing happens until we call the function we wrote. To invoke the function, call the function by its name:

function myFunction() {
    for (let i = 0; i < 100; i++) {
        console.log(i);
    }
}

myFunction(); // Use the to CALL TO/INVOKE your function!

// We can put anything inside our function - conditionials, loops, variables, etc. can all be used in a function.
// To define functions that take input, we add parameters inside the parenthesis of the function declaration.

function createFullName(firstName, lastName) { // "firstName" is our parameter!
    console.log(firstName + ' ' + lastName);
}

createFullName('Tom', 'Sawyer'); // " 'Tom', 'Sawyer' " is our arguement!

// Parameters are like parking spots & arguements are like cars! The cars go into the parking spots!!
// Remember that Parameters are only placeholders! Our argument will dictate what will apply to the function.

// to add a return statement to return the full name:

function createFullName(firstName, lastName) {
    return (firstName + ' ' + lastName);
}

console.log(createFullName('Tom', 'Sawyer')); 

// OR

function createFullName(firstName, lastName) {
    return (firstName + ' ' + lastName);
}

var fullName = createFullName('Tom', 'Sawyer');
console.log('Welcome, ' + fullName);


// Give functions descriptive names, typically verbs, since they are actions!


// OPENCLASS QUESTIONS //


// Write a function called sumOfTwo that takes two numbers as parameters and returns the sum.

var a = 1;
var b = 2;

//write your code below

function sumOfTwo(a, b) {
    return a + b;
}

//do not change. Used for Testing purposes
console.log(sumOfTwo(a, b))

// Create a function named returnSum that accepts 3 integer variables named num1, num2, and num3.
// Return the sum of the three variables.

var a = 45;
var b = 65;
var c = 23;


//write your code below


function returnSum (num1, num2, num3) {
    return num1 + num2 + num3;
}

//do not change below, used for testing purposes
console.log(returnSum(a,b,c));

// Create a function called findCircumference that returns the circumference of a circle if given the radius.
//The formula to find the circumference of a circle is PI * 2r where r is the radius.

var a = 7;

//write your code below


function findCircumference (radius) {
    return 2 * Math.PI * radius;
}

//do not change below, used for testing purposes
console.log(findCircumference(a));

/*

// Create a function called isBlue. It takes one parameter. Return true if it is passed "blue", otherwise return false.

// The passed value can be "blue" with any of the letters capitalized as well. (i.e."Blue", "bLue", "BLUE", etc…) 
// All forms of the word blue should return true. Use toLowerCase() on the passed value to accomplish this. 
// For example, myVariable.toLowerCase() will convert whatever myVariable is to all lowercase.

var a = 0;

//write your code below

function isBlue (myVariable) {
      return myVariable.toLowerCase() === 'blue';
}

//do not change below, used for testing purposes
console.log(isBlue(a));

// var a = 0;

// function isBlue (myVariable) {
//     console.log(myVariable.toLowerCase());
//     return myVariable.toLowerCase() === 'blue';
// }

// //do not change below, used for testing purposes
// isBlue('Blue');

// OR //

var a = 0;

function isBlue(var1){
    return var1.toLowerCase() === "blue";
}

console.log(isBlue(a));

// HOMEWORK QUESTION //

function myFunction(func1, func2) {
    return func1 + ' ' + func2;
}

console.log(myFunction('Hello', 'world'));

*/


/*

QUESTION 5:

Write a function called speakFriend that takes one parameter. 
Return the string "Access Denied". But, if the passed in value is "Mellon", return "Enter"

*/

var a = "Mellon";

//write your code below

function speakFriend(a) {
    if ( a == "Mellon") { // Be care of the equal operator! Make sure to use "==" or "===". If you use "=" it will chance the variables value.
        return "Enter";
    } else if (a != "Mellon") {
        return "Access Denied";
    }
} console.log(speakFriend(a));

// OR //

var a = "Speak Friend";


//write your code below
function speakFriend(a){
    if(a == "Mellon"){
        return "Enter";
    } 
    return "Access Denied";
}


//do not change below
console.log(speakFriend(a));


/*

QUESTION 6:

Create a function named checkout that accepts 2 variables named cardBalance and price. 
If the price is more than the card balance, return false. Otherwise, return the new card balance.

*/

var a = 11;
var b = 7;

//write your code below

function checkout(cardBalance, price) {
    if (price > cardBalance) { // When adding an if/else statement in a function, always add new {} brackets after initial "if".
        return false;
    } else {
        return cardBalance - price;
    }
}


//do not change below, used for testing purposes
console.log(checkout(a,b));


/*

QUESTION 7:

Write a function called loopUntilX that takes one parameter. 
Within the function, write a loop that loops as many times as the passed in value, starting at 0. 
Within the loop, print the number of iterations to the console. Once the loop is done, return true.

*/

