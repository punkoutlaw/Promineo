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
}

