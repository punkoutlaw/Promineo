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


/*

OPENCLASS QUESTIONS

QUESTION 1:

// Check to see if userNumber is between 1 and 100. 
// If it is, create a while loop that prints all integers starting with userNumber to 100.
// If not, print "Your number was not between 1 and 100."

// My answer:

// for (let i = userNumber; i <= 100; i++) {
//     console.log(i);
//     while (i > 100) {
//         console.log('Your number was not between 1 and 100.');
//     }
// }

*/

// Correct answer:

var userNumber;

var counter = userNumber;
if ( userNumber <= 100 && userNumber >= 1 ) {
    while ( counter <= 100 ) {
        console.log(counter++);
    }
} else {
    console.log("Your number was not between 1 and 100.");
}

/*

Think you've got it?

If the number of iterations is unknown, you should use a for loop.

ANSWER: TRUE

/*


/*

QUESTION 2:

// Write a for loop that prints the numbers 0 to x. 
// The x has been initialized for you and will be based on a user's input.

*/

// My answer:

var x = 14;

let userInput = 0;

while (userInput <= x) {
    console.log(userInput);
    userInput++;
}

// The above code can also be written as:

for ( var i = 0; i <= x; ++i ) {
    console.log(i);
}

// NOTE: By using i++, the increment operator increments and returns the value before incrementing.

/*

Think you've got it?

By using i++, the increment operator increments and returns the value before incrementing.

ANSWER: TRUE


/*

QUESTION 3:

// Using the supplied variables, create a loop of your choice that will add cups of rice to a bowl. 
//Each time a cup of rice is added, print "The bowl contains X cups of rice.", where X is the number of cups added. 
// Once the number of cups called for has been reached, print "We have enough rice!".

// Note, we don't need to know if the bowl is empty.

*/

var requiredCupsOfRice = 5;
var currentCupsOfRice = 1;

while (currentCupsOfRice <= requiredCupsOfRice) {
    console.log('The bowl contains ' + currentCupsOfRice + ' cups of rice.');
    currentCupsOfRice++;
}
console.log('We have enough rice!');

// The above code can also be written as:

var requiredCupsOfRice = 5;
var currentCupsOfRice = 0;

while(currentCupsOfRice != requiredCupsOfRice){
    console.log('The bowl contains ' + (++currentCupsOfRice) + ' cups of rice.');
}
console.log('We have enough rice!');

// Would the following block of code give us the same outcome?

var requiredCupsOfRice = 5;
var currentCupsOfRice = 1;

do {
    console.log('The bowl contains ' + currentCupsOfRice++ + ' cups of rice');
} while (currentCupsOfRice !== requiredCupsOfRice);

console.log('We have enough rice!');

/* Think you've got it?

do {
    console.log('The bowl contains ' + currentCupsOfRice++ + ' cups of rice.');
} while (currentCupsOfRice !== requiredCupsOfRice);

console.log('We have enough rice!');

The answer is: NO - this will create an infinite loop!

*/


/*

QUESTION 4:

// Write a for loop that prints every third number from 0 up to, and including, 99.
// My answer:

*/

for (let i = 0; i <= 99; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// The above code can also be written as:

for(var i = 0; i <= 99; i++){
    if(i % 3 === 0){
        console.log(i)
    }
}

/* 

Think you've got it?

Will the following code return the same results?

*/

var i = 0;
do{ 
    if(i % 3 === 0) {
        console.log(i);
    }
    i++;
}
while (i <=99)

// The answer is: YES


/*

QUESTION 5:

Let's play a game. The game will consist of 100 turns. If the number of turns is even, you gain 5 points. If it's odd, you gain 3 points. If ever your score is equal to 125, you are reset back to 25 points. This will only be allowed to happen once. The game ends if you are able to make it through 100 turns or you reach more than 290 points, whichever comes first.

Using a for loop, create the game.

*/

// var points = 0;
// var pointsReset = false; 

//write your code here

// var turns
// var score = 0


// OLD CODE:

// for (let turns = 0; turns <= 100 && points < 290; turns++) {
//     if(turns % 3 === 3){
//         var pointsReset = true;
//         console.log("Turns: " + turns + " Score: " + score);
//     } else if (score % 2 === 5)
//         score++;
//         console.log("Turns: " + turns + " Score: " + score);
//     }

var points = 0;
var pointsReset = false; 

for (i = 0; i < 100 && points < 290; i++) {
    if (points == 125 && pointsReset === false) {
        points = 25;
        pointsReset = true; 
    } else if (i % 2 === 0) {
        points = points + 5;
    } else {
        points = points + 3;
} 
console.log("Turns: " + i + " Score: " + points);
}

/*

Think you've got it?

If number of iterations is known, which loop would you use?

A. Do/While

B. While

C. *For* 
*/


/*

QUESTION 6:

// Create a do/while loop that will print the userNumber and then add 6 after each loop. 
// Stop the loop once the number is greater than or equal to 100.

*/

var userNumber = 50;

var i = userNumber;
do {
  console.log(i);
  i+=6;
} while (i <= 100);

// The above can also be written as:

do {
    console.log(userNumber);
    userNumber = userNumber + 6;
} while(userNumber <= 100);


/*

QUESTION 7:

// Create a for loop that prints out a multiplication table for num from 1 through 10 as follows (the value of num will be input by the user):
// If a user enters 1, the console should print the following:

// 1 x 1 = 1
// 1 x 2 =2
// 1 x 3 = 3
// 1 x 4 = 4
// 1 x 5 = 5
// 1 x 6 = 6
// 1 x 7 = 7
// 1 x 8 = 8
// 1 x 9 = 9
// 1 x 10 = 10

*/

var num = 3;

for(i = 1; i <= 10; i++){
    console.log("%d x %d = %d", num, i, (num*i));
 }

 // The above code can also be written as:

 for(var i=1; i<=10; i++) {
    console.log(num +" x " + i + " = " + (num*i) );
}

/*

Think you've got it?
What happens if the condition is always true in a while loop?

A. An error is thrown

B. *It will loop infinitely*

C. It will only run once

*/


/*

QUESTION 8:

Write a while loop that does a countdown from the variable countdown. This number represents the number that a user enters. Check to make sure the number is not larger than 10, but greater than or equal to 3. Each time the loop runs, print to the console the value of the counter followed by three periods (???). Once out of the loop, print to the console "We have lift off!". If a number is less than 3 or greater than 10, then the only message printed to the console is "We have lift off!"

If the user inputs 3, the output should be:
3???
2???
1???
We have lift off!

*/

var countDown = 0;

//write your code here

if (countDown < 3 || countDown > 10) {
    console.log("We have lift off!");
    
} else {
    while (countDown > 0) {
        console.log(countDown + "...");
        countDown--;
    } 
    
    console.log("We have lift off!");
}


// OR //

var countdown = parseInt(input[0]);

if (countdown <= 10 && countdown >= 3) {
    while (countdown >= 1) {
        console.log(countdown + "...");
        countdown--;
    }
}

console.log("We have lift off!");

/*

Think you've got it?

What happens if your forget to add an increment or decrement operator in a while loop?
ANSWER: You will create an infinite loop.

*/


/*

QUESTION 9:

Write a for loop that loops from 1-100 and prints the iteration count and "foo" if the iteration count is even.

For example, if the iteration count is 2, then the console would read "2 foo". The final output should be "100 foo". Notice there is a space between the number and foo.

*/

for (let i = 2; i <= 100; i += 2) {
    console.log(i + " foo");
 }

 // OR //

 for(var i = 1; i <= 100; i++){
    if (i % 2 === 0){
        console.log(i + " foo")
    }
}

/*

Think you've got it?

Margaret wants to count backwards from 1000 to 0. Which loop can help her accomplish this?
ANSWER: 
A.
For

B.
Do/While

C.
While

D.
**All of the above**

*/