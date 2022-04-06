// You can wrap code that may result in an exception inside a tri-block.

try {
    list.push('hello');
} catch (err) {
    console.log(err);
} finally {
}

console.log('goodbye');

// We can also add a "finally" statement after a try/catch bloack that will run whether an exception is thrown or not.
// You don't need to wrap all code in try/catch blocks to make sure there is no error if your code is written properly (not poorly).
// They are typically used for exceptions we don't have contorl of. Ie: using other peoples librairies.