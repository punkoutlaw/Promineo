// All code below with slashes before is for reference only!

// var name = window.prompt('What is your name?');
// window.alert(`Welcome, ${name}`); // or "+ name" will work the same!

// let username = prompt('Username:');
// let password = prompt('Password:');

// if (username == 'samy123' && password == '12345') {
   // alert('Welcome back, ' + username);
// } else {
   // alert('Incorrect username of password.');
// }

// We don't have to use `window.prompt()` or `window.alert()`.
// That's because most browsers allow us to ommit the window object and call it's methods/functions directly.

var loggedIn = false;
var loginAttempt = 5;

while(!loggedIn) {
    let username = prompt('Username:');
    let password = prompt('Password:');

    if (username == 'samy123' && password == '12345' && loginAttempt <= 5) {
        alert('Welcome back, ' + username);
        loggedIn = true;
    } else {
        alert('Incorrect username of password.');
    }
}