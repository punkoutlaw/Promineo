

document.getElementById('p-button').addEventListener('click', () => {
    var parent = document.getElementById('p-div');
    var newElement = document.createElement('p');
    newElement.innerHTML = 'Input Text';
    parent.appendChild(newElement);
})