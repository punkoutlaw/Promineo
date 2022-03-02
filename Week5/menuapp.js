// The first thing we will do to make our menu app is create out player class:

class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    describe() {
        return `${this.name} plays $[this.position].`;
    }
}

// Next, we will create the team:

class Team {
    constructor(name) {
        this.name = name;
        this.players = []; // each time we create a team, we will crate a new array that holda all the players on that tean
    }

    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`);
        }
    }

    describe() {
        return `${this.name} has ${this.players.length} players.`;
    }
}

// Now we need to create another class. This class is going to be the menu itself which will drive the applications and its choices.

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }
    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                case '3':
                    this.deleteTeam();
                case '4':
                    this.displayTeams();
                    break;
                default:
                        selection = 0;

            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

// Now we are going to program the implementation of these methods that we said we will have in our application:

    showMainMenuOptions() {
        return prompt(`
            0) exit
            01) create new team
            02 view team
            03) delete team
            04) display all teams
        `); // this is our method to show meno options
    }

    showTeamMenuOptions(teamInfo) {
        return prompt(`
            0) back
            1) create player
            2) delete player
            --------------------
            ${teamInfo}
        `);
    }

    displayTeams() {
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i + ') ' + this.teams[i].name + '\n'; 
        }
        alert(teamString);
    }

// There is nothing to display thus far, so now we will create the team:

    createTeam() {
        let name = prompt('Enter name for new team:');
        this.teams.push(new Team(name));
    }

// Now we will build the "viewTeam" method:

    viewTeam() {
        let index = prompt('Enter the index of the team you wish to view:');
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            let description = 'Team Name: ' + this.selectedTeam.name + '\n';
            
            for (let i = 0; i < this.selectedTeam.players.length; i++) {
                description += i + ') ' + this.selectedTeam.players[i].name
                  + ' - ' + this.selectedTeam.selectedTeam.players[i].position + '\n';

            }

            let selection = this.showTeamMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createPlayer();
                    break;
                case '2':
                    this.deletePlayer();
            }
        }
    }

    deleteTeam() {
        let index = prompt('Enter the index of the team you wish to delete');
        if (index > -1 && index < this.teams.length) {
            this.teams.splice(index, 1);
        }
    }

    createPlayer() {
        let name = prompt('Enter name for new player:');
        let position = prompt('Enter positon for new player:');
        this.selectedTeam.players.push(new Player(name, position));
    }

    deletePlayer() {
        let index = prompt('Enter the index of the player you wish you to delete:');
        if (index > -1 && index < this.selectedTeam.players.length) {
            this.selectedTeam.players.splice(index, 1);
        }
    }
}

// Now we need to create an instance of our menu:

let menu = new Menu();
menu.start();