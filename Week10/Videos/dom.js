/* Here are a few methods we can use to locate HTML elements using the DOM: */


// METHOD 1 \\

// The 1st method can locate an element by it's ID.
// It takes a string that represents the ID of an element.
// When the element is found in the DOM, the element itself is the returned value.

let button = document.getElementById('my-button'); 
console.log(button);

// METHOD 2 \\

// The 2nd method you can find elements by their tag names.
// An element is denoted in HTML by its tags, typically opening & closing.
// Remember, some elements only have 1 tag (ie: < h1 >).

let buttonsByTag = document.getElementsByTagName('button'); //
console.log(buttonsByTag);

// METHOD 3 \\

// The 3rd method is to locate an element by their class name.
// Classes are used generally to find multiple elements that share the same style.
// When you find elements by class, you find multiple vs "getElement" which is singular.

let buttonsByClassName = document.getElementsByClassName('my-class'); //
console.log(buttonsByClassName);