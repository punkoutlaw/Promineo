
// Choose a random value between 1 and 100:

let randomValue = Math.floor(Math.random() * 100) - 1 // The Math.floor() method rounds a number downwards to the nearest integer, and returns the result.
let userGuess = -1;

console.log(randomValue);

$('#text').on('blur', function() {
    userGuess = $('#text').val();
    console.log(userGuess);
    checkGuess();
});

function checkGuess(){
    if(userGuess > randomValue) {
        console.log('user is too high');
        $('.error-list').append(`<p>User Guess of ${userGuess} is too high</p>`);
        $('.error-list').css('color', '#9AC305');

    } else if(userGuess < randomValue)

    {
        console.log('user is too low');
        $('.error-list').append(`<p>User Guess of ${userGuess} is too low</p>`);
        $('.error-list').css('color', '#9AC305');
        
    } else {
        
        // When the user wins, the background of the page will change to green
        console.log('user wins');
        $('.error-list').remove();
        $('input').remove();
        $('label').remove();
        $('#bg').css('background', 'green');
        $('.container').append(`<p>Congrats, you have won!</p>`);
        $('.container p').css('color', '#9AC305');
    }
}

