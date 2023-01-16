class myClass {
    name;
    id;
    department;
    constructor(name, id, department) {
        this.name = name;
        this.id = id;
        this.department = department;
    }
}

// inherite class
class Student extends myClass {
    constructor(name, id, department) {
        super(name, id, department)
    }
    guide() {
        console.log('lege thako abdul satter khub taratari tomar devlop hobe inshaAllah')
    }
}
const ami = new Student('Abdul Satter', 2023, 'CSE')
ami.guide()
console.log(ami)
