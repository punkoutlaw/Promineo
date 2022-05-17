/*
in JS, a technique called destructuring will allow us to take an array or object and take them apart and assign them distinct variables.
*/

// First, let's create our array:

let array = [3, 5, 7, 9];

// Next, we will create our object:

let object = {
    propertyOne: 'p-one',
    propertyTwo: 'p-two',
    propertyThree: 'p-three'
}

/// Now we can destructure it as follows:

let [a, b, c] = array;

// And when we console.log() it, it will return the values of the array:

console.log(c); // will log "7"
console.log(b); // will log "5"

// The same can be done with objects:

let { propertyOne, propertyTwo } = object;

// When we console.log(propertyTwo) it will now return whichever item in the object we call:

console.log(propertyTwo); // will log "p-two"

/* import React, { component } from 'react'; */