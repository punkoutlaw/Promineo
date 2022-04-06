// objects - properties & methods
var mitchell = {
    age: 50,
    firstName: 'mitchell',
    lastName: 'Sotto',
    height: `6'5"`,
    hobbies: ['jumping', 'running', 'climbing'],
    kids: [
        { name: 'Jessie', age: 7 },
        { name: 'Annie', age: 4 },
        { name: 'Joseph', age: 2 },
        { name: 'Emmaly', age: 0 },
    ],
    bestFriend: {
        name: 'Andrew',
        age: 38
    },
    getKidsNames: function () {
        return this.kids.map(function (kid) {
            return kid.name
        }).join(', ');
    }
}

// OBJECTS
// accessing - log Mitchell's firstName to the console (using brackets)
// accessing - log "{FirstName}'s best friend is {bestFriend's name}, age {bestFriends age}" (using . notation)
// edit property - capitalize Mitchell's first name
// edit property - change his age to what you think it is
// add property - create a favoriteColor property for Mitchell's best friend (assign a color you like to it)
// remove property - remove Mitchell's height from the object

// ARRAYS
// print the 'Annie' object from the kids array
// print the 'climbing' string from the hobbies array
// function - use the getKidsNames function to print Mitchell's kids names
// forEach - print Mitchell's kids names one by one
// map - log an array of Mitchell's kids names and ages (e.g. ['Jessie 7', 'Annie 4', etc...])
// reduce - sum up all of Mitchell's kids ages. log to the console
// filter - create an array with just kids names that have an 'i' in them
// splice - remove 'running' from Mitchell's hobbies and log it to the console
// push - add 'japanese' to Mitchell's hobbies

// This one might be a doozy - multiply each child's age by 2 and save the objects in the kids array

// create a function that takes this object as a parameter and returns of array of ages
let people = [
    { name: 'Joseph', age: 6 },
    { name: 'Louisa', age: 12 },
]