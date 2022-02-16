// Objects are a structures that logically group data and functionality together

// Object literals - make up an object property and functionly (methods) by wrapping a comma seperated list of key value pairs inside curly braces {}

var dvdPlayer = {
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: 'black',
    dvdName: 'Mulan',
    printDVDName: function() {
        console.log(this.dvdName);
    }
};

// Now we can use the 'dot method' to access any of the properties and methods on it

// dvdPlayer.depth - this is an example of 'dot method'

console.log(dvdPlayer.depth);
dvdPlayer.printDVDName();
dvdPlayer.printcolor();

// NOTICE that methods and functions may be used synonimously by some, but there is an important difference:
// A 'function' is a stand-alone piece of functionality.
// A method is a function that belongs to a object!
