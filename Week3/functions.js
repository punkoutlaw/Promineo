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

myFunction(); // Use the to CALL/INVOKE your function!