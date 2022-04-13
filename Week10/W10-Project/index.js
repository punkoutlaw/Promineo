/* We will be creating a Vaction Planning app where you will be able to schedule your trips, manage expenses and plan.

*/

// First, we will create our classes:

class Destination {
    constructor(accomodation, expense) {
        this.accomodation = accomodation;
        this.expense = expense
    }
}

class Trip {
    constructor(id, accomodation) {
        this.id = id;
        this.accomodation = accomodation;
        this.destinations = []; // This wont be passed in but it will start as an empty array which will be all the trips added to your schedule.
    }

    addDestination(destination) {
        this.destinations.push(destination) // This will add destinations to your schedule
    }

    deleteDestination(destination) {
        let index = this.destinations.indexOf(destination);
        this.destinations.splice(index, 1); // This will delete destinations from your schedule.
    }
}

// Next, we will write the code which will use our classes in relationship with the HTML.

let trips = [];
let tripId = 0;

// Now we will create a function that will make it easier to add/identify event listeners:

onClick('new-trip', () => {
    trips.push(new Trip(tripId++, getValue('new-trip-accomodation')));
    drawDOM(); // This will iterate over our destinations array and build tables.
})

function onClick(id, action) {
    let element = document.getElementById(id);
    element.addEventListener('click', action);
    return element;
}

function getValue(id) {
    return document.getElementById(id).value;
}

function drawDOM() {
    let tripDiv = document.getElementById('trips');
    clearElement(tripDiv);
    for (trip of trips) {
        let table = createTripTable(trip);
        let title = document.createElement('h2');
        title.innerHTML = trip.accomodation;
        title.appendChild(createDeleteTripButton(trip));
        tripDiv.appendChild(title);
        tripDiv.appendChild(table);
        for (destination of trip.destinations) {
            createDestinationRow(trip, table, destination); // This will take the destination, table & trip and create a new row.
        }
    }
}

function createDestinationRow(trip, table, destination) {
    let row = table.insertRow(2);
    row.insertCell(0).innerHTML = destination.accomodation;
    row.insertCell(1).innerHTML = destination.expense;
    let actions = row.insertCell(2);
    actions.appendChild(createDeleteRowButton(trip, destination));
}

function createDeleteRowButton(trip, destination) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        let index = trip.destinations.indexOf(destination);
        trip.destinations.splice(index, 1);
        drawDOM();
    };
    return btn;
}

function createDeleteTripButton(trip) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete Trip';
    btn.onclick = () => {
        let index = trips.indexOf(trip);
        trips.splice(index, 1);
        drawDOM();
    };
    return btn;
}

function createNewDestinationButton(trip) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Create';
    btn.onclick = () => {
        trip.destinations.push(new Destination(getValue(`accomodation-input-${trip.id}`), getValue(`expense-input-${trip.id}`)));
        drawDOM();
    };
    return btn;
}

function createTripTable(trip) {
    let table = document.createElement('table');
    table.setAttribute('class', 'table table-light table-striped');
    let row = table.insertRow(0);
    let accomodationColumn = document.createElement('th');
    let expenseColumn = document.createElement('th');
    accomodationColumn.innerHTML = 'Accomodation';
    expenseColumn.innerHTML = 'Cost';
    row.appendChild(accomodationColumn);
    row.appendChild(expenseColumn);
    let formRow = table.insertRow(1);
    let accomodationTh = document.createElement('th');
    let expenseTh = document.createElement('th');
    let createTh = document.createElement('th');
    let accomodationInput = document.createElement('input');
    accomodationInput.setAttribute('id', `accomodation-input-${trip.id}`);
    accomodationInput.setAttribute('type', 'text');
    accomodationInput.setAttribute('class', 'form-control');
    let expenseInput = document.createElement('input');
    expenseInput.setAttribute('id', `expense-input-${trip.id}`);
    expenseInput.setAttribute('type', 'text');
    expenseInput.setAttribute('class', 'form-control');
    let newDestinationButton = createNewDestinationButton(trip);
    accomodationTh.appendChild(accomodationInput);
    expenseTh.appendChild(expenseInput);
    createTh.appendChild(newDestinationButton);
    formRow.appendChild(accomodationTh);
    formRow.appendChild(expenseTh);
    formRow.appendChild(createTh);
    return table;
}

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    row.insertCell(1).innerHTML = document.getElementById('new-time').value;
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-task').value = '';
});



// This function will create a button and bind it to a method or function to the buttons on-click properties.
// When it's clicked it will delete the row that the button is assigned to.

function createDeleteButton(id) { 
    let btn = document.createElement('button'); 
    btn.className = 'btn btn-primary'
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}