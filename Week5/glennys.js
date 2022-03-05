//I created this menu app so users can add/create a color that can be associated with a fruit and its texture.

class Fruit {
    constructor(name, texture) {
        this.name = name;
        this.texture = texture;
    }

    describe() {
        return `${this.name} is ${this.texture}.`;
    }
}

class Color {
    constructor(name) {
        this.name = name;
        this.fruits = [];
    }

    addFruit(fruit) {
        if (fruit instanceof Fruit) {
            this.fruits.push(fruit);
        } else {
            throw new Error(`You can only add an instance of Fruit. Arguemnet is not a fruit: ${fruit}`);
        }
    }

    describe() {
        return `${this.name} have ${this.fruit.length} fruits.`;
    }
}

class Menu {
    constructor() {
        this.colors = [];
        this.selectedColor = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch(selection) {
                case '1':
                    this.addColor();
                    break;
                case '2':
                    this.viewColor();
                    break;
                case '3':
                    this.deleteColor();
                    break;
                case '4':
                    this.displayColors();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) add new color
        2) view color
        3) delete color
        4) display all colors
        `);
    }

    showColorMenuOptions(colorInfo) {
        return prompt(`
        0) back
        1) add fruit
        2) delete fruit
        -----------------------
        ${colorInfo}
        `);
    }

    displayColors() {
        let colorString = '';
        for (let i = 0; i < this.colors.length; i++) {
            colorString += i + ') ' + this.colors[i].name + '\n';
        }
        alert(colorString);
    }

    addColor() {
        let name = prompt('Enter color:');
        this.colors.push(new Color(name));
    }

    viewColor() {
        let index = prompt('Enter the index of the color you wish to view:');
        if(index > -1 && index < this.colors.length) {
            this.selectedColor = this.colors[index];
            let description = 'Name of Color: ' + this.selectedColor.name + '\n';

            for(let i = 0; i < this.selectedColor.fruits.length; i++) {
                description += i + ') ' + this.selectedColor.fruits[i].name 
                  + ' - ' + this.selectedColor.fruits[i].texture + '\n';
            }

            let selection = this.showColorMenuOptions(description);
            switch (selection) {
                case '1':
                    this.addFruit();
                    break;
                case '2':
                    this.deleteFruit();
            }
        }
    }

    deleteColor() {
        let index = prompt('Enter the index of the color you wish to delete:');
        if (index > -1 && index < this.colors.length){
            this.colors.splice(index, 1);
        }   
    }

    addFruit() {
        let name = prompt('Enter name for new fruit:');
        let texture = prompt('Enter texture of fruit:');
        this.selectedColor.fruits.push(new Fruit (name, texture));
    }

    deleteFruit() {
        let index = prompt('Enter the index of the fruit you wish to delete:');
        if(index > -1 && index < this.selectedColor.fruits.length) {
            this.selectedColor.fruits.splice(index, 1);
        }
    }
    
}
let menu = new Menu();
menu.start();