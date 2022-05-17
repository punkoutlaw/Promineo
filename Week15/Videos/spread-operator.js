/* The spread operator (...) allows you to take an iterable object and spread it out over anything
that would accept multipe values like an object literal, array or object. */

function doSomething(a, b, c) {
    console.log(a, b, c);
    }
    
    let array = [5, 6, 7];
    
// By using the apread operator below, it takes the array an spreads it accross "a, b, c" in the soSomething function.

    doSomething(...array);
    
    let obj1 = {
        name: '01',
      value1: 1,
      value2: 2
    }
    
// This will take all the properties from "obj1" and create a new object with it:
// To update the name you can add a comma and then "name:" and add a value for the new name.

    let clone = {...obj1, name: '02'};
    
    console.log(clone);