/* We will be creating a team app where each team will have a table 
and each table will have the ability to create, update and delete player information 

We will be able to add new teams which will create new html tables 
and each table will manipulate and manage data for that team.

*/

// First, we will create our classes:

class Member {
    constructor(name, position) {
        this.name = name;
        this.position = position
    }
}

class Team {
    constructor(id, name) {
        this.id = id;
        this.name = name;
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

let teams = [];
let teamId = 0;

// Now we will create a function that will make it easier to add/identify event listeners:

onClick('new-team', () => {
    teams.push(new Team(teamId++, getValue('new-team-name')));
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
    let teamDiv = document.getElementById('teams');
    clearElement(teamDiv);
    for (team of teams) {
        let table = createTeamTable(team);
        let title = document.createElement('h2');
        title.innerHTML = team.name;
        title.appendChild(createDeleteTeamButton(team));
        teamDiv.appendChild(title);
        teamDiv.appendChild(table);
        for (member of team.members) {
            createMemberRow(team, table, member); // This will take the team, table & member and create a new row.
        }
    }
}

function createMemberRow(team, table, member) {
    let row = table.insertRow(2);
    row.insertCell(0).innerHTML = member.name;
    row.insertCell(1).innerHTML = member.position;
    let actions = row.insertCell(2);
    actions.appendChild(createDeleteRowButton(team, member));
}

function createDeleteRowButton(team, member) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        let index = team.members.indexOf(member);
        team.members.splice(index, 1);
        drawDOM();
    };
    return btn;
}

function createDeleteTeamButton(team) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete Trip';
    btn.onclick = () => {
        let index = teams.indexOf(team);
        teams.splice(index, 1);
        drawDOM();
    };
    return btn;
}

function createNewMemberButton(team) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Create';
    btn.onclick = () => {
        team.members.push(new Member(getValue(`name-input-${team.id}`), getValue(`position-input-${team.id}`)));
        drawDOM();
    };
    return btn;
}

function createTeamTable(team) {
    let table = document.createElement('table');
    table.setAttribute('class', 'table table-light table-striped');
    let row =table.insertRow(0);
    let nameColumn = document.createElement('th');
    let positionColumn = document.createElement('th');
    nameColumn.innerHTML = 'Accomodation';
    positionColumn.innerHTML = 'Cost';
    row.appendChild(nameColumn);
    row.appendChild(positionColumn);
    let formRow = table.insertRow(1);
    let nameTh = document.createElement('th');
    let positionTh = document.createElement('th');
    let createTh = document.createElement('th');
    let nameInput = document.createElement('input');
    nameInput.setAttribute('id', `name-input-${team.id}`);
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('class', 'form-control');
    let positionInput = document.createElement('input');
    positionInput.setAttribute('id', `position-input-${team.id}`);
    positionInput.setAttribute('type', 'text');
    positionInput.setAttribute('class', 'form-control');
    let newMemberButton = createNewMemberButton(team);
    nameTh.appendChild(nameInput);
    positionTh.appendChild(positionInput);
    createTh.appendChild(newMemberButton);
    formRow.appendChild(nameTh);
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