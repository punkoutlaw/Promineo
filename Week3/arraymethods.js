// There are 5 important methods on the array

// Map - used to invoke a function for each element in an array. Example below:

let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];
let lengths = names.map(function(element) {
    return element.length;
});
console.log(lengths);

// Reduce - is useful for taking all values in an array and reducing them down to 1 value. Example below:

let sum = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum); /// As you can see, this has added all the values (characters) of the names and returned 23!

// For each - is simillar to map, however it does not return a new array from the results of the invocation.

names.forEach(function(element){
    console.log(element);
});

// Filter - allows us to invoke a function that returns a boolean value on each element in an array.

let evens = names.filter(function(element){
    return element.length % 2 == 0;
});
console.log(evens);

// Splice - can be used to alter the contents of an array by adding, modifying or removing elements from an array at a specific location.

let removedElement = names.splice(1, 1); // The 1st paramater is the location to start at, and the 2nd is how many elements to remove!
console.log(removedElement);

// Read documentation on MDN by searcvhing "javascript array" and pull up the MDN article related to it for more info.