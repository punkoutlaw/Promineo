/* We will be creating a team app where each team will have a table 
and each table will have the ability to create, update and delete player information 

We will be able to add new teams which will create new html tables 
and each table will manipulate and manage data for that team.

*/

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