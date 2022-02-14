// "For" loops have 3 sections inside paranthesis which are seperated by 2 semicolons.
// An example of a "for" loop below:

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("whatever is next");

// Here is an example of a "for" loop with a conditional in the 'if" statement:

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let names = ['Sam ', 'Tom ', 'Hillary'];

// "For while" loops have the possibility of never running if its Boolean expression evaluates to false.
// A "Do while" loop will always execute at least once since the expression is at the end.

// Example of a "for while" loop directly below:

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

let a = 110;

while (a < 10) {
    console.log(a);
    a++;
}

// Example of a "do while" loop below:

do {
    console.log(a);
} while (a < 10)

for (i in names) {
    console.log(i);
}

for (name of names) {
    console.log(name);
}

// Check to see if userNumber is between 1 and 100. 
// If it is, create a while loop that prints all integers starting with userNumber to 100.
// If not, print "Your number was not between 1 and 100."

var userNumber;

var counter = userNumber;
if ( userNumber <= 100 && userNumber >= 1 ) {
    while ( counter <= 100 ) {
        console.log(counter++);
    }
} else {
    console.log("Your number was not between 1 and 100.");
}