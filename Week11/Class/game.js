
// Choose a random value between 1 and 100:

let randomValue = Math.floor(Math.random() * 100) - 1
let userGuess = -1;

console.log(randomValue);

$('text').on('blur', function() {
    userGuess = $('#text').val();
    console.log(userGuess)
});