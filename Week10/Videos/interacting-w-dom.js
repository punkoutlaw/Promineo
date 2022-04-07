/* The following JavaScript we will learn how to interact & change content within the DOM */

let button = document.getElementById('btn');
let content = document.getElementById('content');

// The following code will change the greeting "Goodbye." to "Hello." once the linked button is clicked:

button.addEventListener('click', () => {
    if (content.innerHTML == 'Goodbye.') {
        content.innerHTML = 'Hello.';
    } else {
        content.innerHTML = "Goodbye."
    }
})

// This next block of code will remove the content displayed once the button is clicked:

document.getElementById('remove').addEventListener('click', () => {
    content.parentNode.removeChild(content);
});

// document.getElementById('content').innerHTML = "Goodbye.";


/* Next, we will learn how to add elements to the DOM: */

document.getElementById('add').addEventListener('click', () => {
    var parent = document.getElementById('paragraphs');
    var newElement = document.createElement('p');
    newElement.innerHTML = 'This is a new paragraph.';
    parent.appendChild(newElement);
})