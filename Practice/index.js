// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

let number = 8;

function even_or_odd(number) {
  if(number % 2 == 0) {
      return "Even";
  } else {
      return "Odd";
  }
} console.log(even_or_odd(number));

// Write a function that will check if two given characters are the same case.

/* If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/

// SCRAP CODE START \\

// function sameCase(a, b){
//     return a.toLowerCase().localeCompare(b.toLowerCase()); 
//   } console.log(sameCase("t", "G"));

// SCRAP CODE END \\

function sameCase(a, b){
if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()) {
    return -1
    } else if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()) {
        return 1
    } else {
    return 0
    }
} console.log(sameCase('b', 'C'));