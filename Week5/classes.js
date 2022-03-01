// Classes follow "pascal case" which means the 1st letter of each class is capitalized, see below:

class Student {
    constructor(firstName, lastName, phoneNumber, grade) { // "Constructor" is an instance of your class, in this case 'Student"!
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade; // The "this" keyword is used to specify the fill that belongs to the instance. Ex: the fill here is "grade".
    }
    introduce() { // "Introduce" is a "method", NOT a function!
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}.`);
    }
} 

let student1 = new Student('David', 'Feudale', '732-675-8786', 'A');
let student2 = new Student('Daniel', 'Velez', '201-205-4875', 'A');

student1.introduce();
student2.introduce();

// NOTES //

// You should create a class when you have a new concept that has properties and functionality.
// When you create a class, you use the "class" keyword.
// When you create an instance of a class, you use the "new" keyword or what's called an "instantiation".
// Notice, we don't 'call' student.constructor - we would call the name of the class followed by paranthesis.
// Doing so, this invokes the constructor and creates an instance of the class and runs whatever code is inside your constructor.
