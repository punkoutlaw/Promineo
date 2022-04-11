/* We will be creating a team app where each team will have a table 
and each table will have the ability to create, update and delete player information 

We will be able to add new teams which will create new html tables 
and each table will manipulate and manage data for that team.

*/

// First, we will create our classes:

class Member {
    constructor(accomodation, position) {
        this.accomodation = accomodation;
        this.position = position
    }
}

class Trip {
    constructor(id, accomodation) {
        this.id = id;
        this.accomodation = accomodation;
        this.members = []; // This wont be passed in but it will start as an empty array which will be all the members added to the team.
    }

    addMember(member) {
        this.members.push(member) // This will add memebers to the team.
    }

    deleteMember(member) {
        let index = this.members.indexOf(member);
        this.members.splice(index, 1); // This will delete members from the team.
    }
}

// Next, we will write the code which will use our classes in relationship witht he HTML.

let trips = [];
let tripId = 0;

// Now we will create a function that will make it easier to add/identify event listeners:

onClick('new-trip', () => {
    trips.push(new Trip(tripId++, getValue('new-trip-accomodation')));
    drawDOM(); // This will iterate over our teams array and build tables.
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
        for (member of trip.members) {
            createMemberRow(trip, table, member); // This will take the team, table & member and create a new row.
        }
    }
}

function createMemberRow(trip, table, member) {
    let row = table.insertRow(2);
    row.insertCell(0).innerHTML = member.accomodation;
    row.insertCell(1).innerHTML = member.position;
    let actions = row.insertCell(2);
    actions.appendChild(createDeleteRowButton(trip, member));
}

function createDeleteRowButton(trip, member) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        let index = trip.members.indexOf(member);
        trip.members.splice(index, 1);
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

function createNewMemberButton(trip) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Create';
    btn.onclick = () => {
        trip.members.push(new Member(getValue(`accomodation-input-${trip.id}`), getValue(`position-input-${trip.id}`)));
        drawDOM();
    };
    return btn;
}

function createTripTable(trip) {
    let table = document.createElement('table');
    table.setAttribute('class', 'table table-light table-striped');
    let row = table.insertRow(0);
    let accomodationColumn = document.createElement('th');
    let positionColumn = document.createElement('th');
    accomodationColumn.innerHTML = 'Accomodation';
    positionColumn.innerHTML = 'Cost';
    row.appendChild(accomodationColumn);
    row.appendChild(positionColumn);
    let formRow = table.insertRow(1);
    let accomodationTh = document.createElement('th');
    let positionTh = document.createElement('th');
    let createTh = document.createElement('th');
    let accomodationInput = document.createElement('input');
    accomodationInput.setAttribute('id', `accomodation-input-${trip.id}`);
    accomodationInput.setAttribute('type', 'text');
    accomodationInput.setAttribute('class', 'form-control');
    let positionInput = document.createElement('input');
    positionInput.setAttribute('id', `position-input-${trip.id}`);
    positionInput.setAttribute('type', 'text');
    positionInput.setAttribute('class', 'form-control');
    let newMemberButton = createNewMemberButton(trip);
    accomodationTh.appendChild(accomodationInput);
    positionTh.appendChild(positionInput);
    createTh.appendChild(newMemberButton);
    formRow.appendChild(accomodationTh);
    formRow.appendChild(positionTh);
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
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
    row.insertCell(2).innerHTML = document.getElementById('new-end-date').value;
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