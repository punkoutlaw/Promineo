// Coding Steps:
// 1.	Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements.
// a.	Use at least one array.
// b.	Use at least two classes.
// c.	Your menu should have the options to create, view, and delete elements.

class Member {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }

    describe() {
        return `${this.name} can be reached at ${this.number}.`;
    }
}

class Department {
    constructor(name) {
        this.name = name;
        this.members = [];
    }

    addMember(member) {
        if (member instanceof Member) {
            this.members.push(member);
        } else {
            throw new Error(`${member} is not in this department.`);
        }
    }

    describe() {
        return `${this.name} has ${this.members.length} members`;
    }
}

class Menu {
    constructor() {
        this.departments = [];
        this.selectedDepartment = null;
    }
    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createDepartment();
                    break;
                case '2':
                    this.viewDepartment();
                case '3':
                    this.deleteDepartment();
                case '4':
                    this.displayDepartments();
                    break;
                default:
                        selection = 0;

            }
            selection = this.showMainMenuOptions();
        }

        alert(`Have a nice day!`);
    }

    showMainMenuOptions() {
        return prompt(`
            0) Exit
            1) Create new department
            2) View department
            3) Delete department
            4) Display all departments        
        `)
    }

    showDepartmentMenuOptions(departmentInfo) {
        return prompt(`
            0) Go Back
            1) Create member
            2) Delete member
            ___________________
            ${departmentInfo}
        `);
    }

    displayDepartments() {
        let departmentString = '';
        for (let i = 0; i < this.departments.length; i++) {
            departmentString += i + ') ' + this.departments[i].name + '\n';
        }
        alert(departmentString);
    }

    createDepartment() {
        let name = prompt('Enter name for new Department:');
        this.departments.push(new Department(name));
    }

    viewDepartment() {
        let index = prompt('Enter the index of the Department you would like to view:');
        if (index > -1 && index < this.departments.length) {
            this.selectedDepartment = this.departments[index];
            let description = 'Department Name: ' + this.selectedDepartment.name + '\n';

            for (let i = 0; i < this.selectedDepartment.members.length; i++) {
                description += i + ') ' + this.selectedDepartment.members[i].name
                + ' - ' + this.selectedDepartment.selectedDepartment.members[i].number + '\n';

            }

            let selection = this.showDepartmentMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createMember();
                    break;
                case '2':
                    this.deleteMember();
            }
        }
    }

    deleteDepartment() {
        let index = prompt('Enter the index of the Department you would like to delete');
        if (index > -1 && index < this.departments.length) {
            this.members.splice(index, 1);
        }
    }

    createMember() {
        let name = prompt('Enter a name for the new member:');
        let number = prompt('Enter a number for the new member:');
        this.selectedDepartment.members.push(new Member(name, number));
    }

    deleteMember() {
        let index = prompt('Enter the index of the member you would like to delete:');
        if (index > -1 && index < this.selectedDepartment.members.length) {
            this.selectedDepartment.members.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();