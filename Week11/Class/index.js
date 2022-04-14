// $ is used to access JQuery

// How to change colors of elements using JQuery:
$('.para').css('color', 'green');
$('#text').css('color', 'red');

// Changing bg of body to be blue:
$('body').css('background-color', 'blue');

// Append a "Hello World" on mouse-enter:
$('.container').on('mouseenter', function() {
    console.log('Hello World - enter');
    $('.container').append('<h2 class="header">Hello World</h2>');
});

// And remove it on mouse-leave:
$('.container').on('mouseleave', function() {
    console.log('Hello World - leave');
    $('.header').remove();
});

$('#form-field').on('blur', function() {
    console.log($('#form-field').val());
    $('.container').append($('#form-field').val());
});

// $('.container').append('<h2>Hello World</h2>');

// $('.container').on(function() {
//     alert("you clicked the container")
// });

