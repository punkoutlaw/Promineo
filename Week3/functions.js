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