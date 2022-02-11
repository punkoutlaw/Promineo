// var fisrtName = "Sam";

// if (fisrtName == "Sam") {

//     console.log("Hello, Sam!");
// } else {
//     console.log("Hey "  + fisrtName);
// };

// var costOfMilk = 3;

// if (costOfMilk < 2) {
//     console.log("We will buy 2 gallons");
// } else if (costOfMilk < 3) {
//     console.log("We will buy only 1 gallon");
// } else {
//     console.log("No thanks, way too expensive!");
// };

// var grade = "A";

// switch (grade) {
//     case "A":
//         console.log("90-100");
//         break;
//     case "B":
//         console.log("80-89");
//         break;
//     case "C":
//         console.log("70-79");
//         break;
//     default:
//         console.log("0-69");
// };

// var a = 5;
// var b = 6;

// if (a == 5) {
//     if (b == 6) {
//         console.log("a is 5 and b is 6.");
//     } else {
//         console.log("a is 5 but b is not 6.");
//     }
// }

// if (a == 5 && b == 6) {
//     console.log("a is 5 and b is 6.");
// };

// var num1 = 16;
// var num2 = 52;
// var num3 = 45;

// console.log(num1 >= num2 && num3 > num2);

// var a = 100;
// var b = 200;
// var c = 300;

// console.log(a >= b || a <= c);


// Create an if/else if statement that checks myNumber against num1 and based on which condition evaluates to true, print the following messages:

// num1 + " is smaller than my number, " + myNumber 
// num1 + " is larger than my number, " + myNumber 
// num1 + " is equal to my number, " + myNumber

// if/else statement examples below:

// var myNumber = 0;
// var num1 = 1;

// if (num1 < myNumber) {
//     console.log(num1 + " is smaller than my number, " + myNumber);
// } else if (num1 > myNumber) {
//     console.log(num1 + " is larger than my number, " + myNumber);
// } else {
//     console.log(num1 + " is equal to my number, " + myNumber);
// };

// var num1 = 3;
// var num2 = 5;

// if(num1 == num2) {
//     console.log('A');
// } else if (num1 > num2) {
//     console.log('B');
// } else {
//     console.log('C');
// }


// Create a nested if statement (the second if statement will only run if the first one evaluates to true) that checks to see if num1 is greater than or equal to num2.
// If true then check to see if num3 is greater than or equal to num4. If both conditions are true print "Both statements are true." If the first condition is true but the second isn't, print "The first statement is true, but the second is not."
// After the outer if statement, print "Program ended."

// var num1 = 0;
// var num2 = 1;
// var num3 = 2;
// var num4 = 3;

// Nested if statement example below:

if ( num1 >= num2 ) {
    if ( num3 >= num4 ) {
        console.log("Both statements are true.");
    } else {
        console.log("The first statement is true, but the second is not.");
    }
}
console.log("Program ended.");

// NOTE: If the first if statement returns true, the program will skip the rest of the else if statements.
//
//
// Write a series of IF/ELSE IF statements that check the numberGrade and assign letterGrade to a string of the corresponding letter grade. 
// Print the letter grade to the console.

// A: 90+
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59

// Make sure to use a capital letter for the grade.

var numberGrade = 0;
var letterGrade;

if (numberGrade >= 90) {
    console.log('A');
} else if (numberGrade >= 80) {
    console.log('B');
} else if (numberGrade >= 70) {
    console.log('C');
} else if (numberGrade >= 60) {
    console.log('D');
} else {
    console.log('F')
}

// Write an IF/ELSE statement that prints the smaller of the two given inputs, num1 and num2. 
// If they are the same, print "same".

var num1 = 0;
var num2 = 1;

if (num1 < num2) {
    console.log(num1);
} else if (num1 > num2) {
    console.log(num2);
} else {
    console.log('same');
}

// The above can also be written as:

var num1 = 0;
var num2 = 1;

if(num1 == num2){
    console.log("same");
}
else if(num1 < num2){
    console.log(num1)
} else {
    console.log(num2)
}
var num1 = 5;
var num2 = 5;

if(num1 == num2) {
    console.log('A');
} else if (num1 >= num2) {
    console.log('B');
} else {
    console.log('C');
}

// Write an if statement that compares num1 to num2 and prints the larger of the two. 
// If they are equal, print "Num1 is equal to Num2".

var num1 = 0;
var num2 = 1;

if (num1 < num2) {
    console.log(num2);
} else if (num1 > num2) {
    console.log(num1);
} else { (num1 == num2)
    console.log('Num1 is equal to Num2');
}

// The above can also be written as:

var num1 = 0;
var num2 = 1;

if(num1 == num2){
    console.log("Num1 is equal to Num2");
   }
   else if(num1 < num2){
    console.log(num2)
   } else {
    console.log(num1)
   }

// Write a switch statement to check the value of monthNumber and then when the match is made, print out that month in a string (i.e. "July").
// For example, if the monthNumber is 5, the console should print out "May".
// If the number is not 1 through 12, print out "Invalid Month".

var monthNumber = 2;

switch (monthNumber) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('September');
        break;
    case 10:
        console.log('October');
        break;
    case 11:
        console.log('November');
        break;
    case 12:
        console.log('December');
        break;
    default:
    console.log('Invalid Month');
};

// Write an IF statement that checks to see if there is enough money to cover the cost of a soda.
// If so, print "I can buy a soda!".
// If not, print "I need to earn some more money!"

var money = 5;
var costOfSoda = 3;

if (costOfSoda <= money) {
    console.log('I can buy a soda!')
} else {
    console.log('I need to earn some more money!');
}

// Write a switch statement that checks the numberOfDay and prints the name of the day of the week.
// For example, if numberOfDay is 1, "Sunday" will be printed to the console.

// If the number is not between 1 and 7, print "The number of day is invalid."

var numberOfDay = 0;

switch (numberOfDay) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
    console.log('The number of day is invalid.');
}