// QUESTION 1
//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

// 1a:

// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Print the result to the console.

var ages = [3, 9, 23, 64, 2, 8, 28, 93]
var a = ages[ages.length-1];
var b =  ages[0];

console.log(a - b);

// 1b:

// Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push(34);
console.log(ages);
console.log(a - b);
 
// 1c:

let sum = ages.reduce(function(startValue, endValue) {
    return startValue + endValue;
}); console.log(sum / ages.length);


// QUESTION 2
// Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

//2a:

// Use a loop to iterate through the array and calculate the average number of letters per name.
// Print the result to the console.

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let lengths = names.map(function(element) {
    return element.length / names.length
}); console.log(lengths);


// 2b:

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.


// QUESTION 3:


// How do you access the last element of any array?

// ANSWER: array[array.length-1]


// QUESTION 4:


// How do you access the first element of any array?

// ANSWER: array[0]


// QUESTION 5:


// Create a new array called nameLengths. 
// Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.




// QUESTION 6:
// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
// Print the result to the console.




// QUESTION 7:
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 

// function newFunction(word, n) {

// }


// QUESTION 8:

// Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
} console.log(fullName('David', 'Feudale'));


// QUESTION 9:
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

newArray1 = [10, 20, 30, 40, 50];

let yesOrNo = newArray1.reduce(function(startValue1, endValue1) {
    return startValue1 + endValue1;
}); console.log(yesOrNo > 100);

// QUESTION 10:
// Write a function that takes an array of numbers and returns the average of all the elements in the array.

newArray2 = [10, 2, 8, 15, 40];

let myTotal = newArray2.reduce(function(startValue2, endValue2) {
    return startValue2 + endValue2;
}); console.log(myTotal / newArray2.length);


// QUESTION 11
// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

var sum1 = yesOrNo
var sum2 = myTotal

function comparo(ray1, ray2) {

}

// QUESTION 12:
// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPocket) {

    if((isHotOutside) && (moneyInPocket > 10.50))
    {
        return true;
    }
    else
    {
        return false;
    }
} console.log(willBuyDrink(true, 25));

// QUESTION 13:
// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

