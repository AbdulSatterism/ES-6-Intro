class Student {
    name;
    roll;
    department;
    constructor(name, roll, department) {
        this.name = name;
        this.roll = roll;
        this.department = department;
    }
    StudentNotes() {
        console.log('You should take care of your goal regularlly')
    }
}

const myClass = new Student('MD Abdul Satter', 1, "CSE");
myClass.StudentNotes()
console.log(myClass)