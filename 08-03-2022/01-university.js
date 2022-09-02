class University {
    constructor(teachers = [], students = []) {
        this.teachers = teachers;
        this.students = students;
    }
    addMember(member) {
        if (member.role === "Student") {
            this.students.push(member)
        } else if (member.role === "Teacher") {
            this.teachers.push(member)
        } else {
            console.log("Sorry, we dont have a position for you now")
        }
    }
    removeMember(member) {
        if (this.teachers.includes(member)) {
            let index = this.teachers.indexOf(member)
            this.teachers.splice(index, 1)

        }
        else if (this.students.includes(member)) {
            let index = this.students.indexOf(member)
            this.students.splice(index, 1)
        }
    }
    startLesson() {
        this.teachers.forEach(teacher => {
            if (teacher.energy > 0) {
                return teacher.energy -= 5
            } else {
                console.log(`wow, looks like ${teacher.name} needs a rest`)
            }
        })

        this.students.forEach(student => {
            if (student.energy > 0) {
                return student.energy -= 2
            } else {
                console.log(`wow, looks like ${student.name} needs a rest`)
            }
        })
    }
}

class UniversityMember {
    constructor(name, age, role, energy = 24) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.energy = energy;
    }
    info() {
        return this;
    }
}

class Teacher extends UniversityMember { }

class Student extends UniversityMember { }

let student1 = new Student("Sergey", 22, "Student")
let student2 = new Student("Hrachya", 20, "Student", 10)
let student3 = new Student("Ani", 21, "Student")
let student4 = new Student("Arpine", 19, "Student")
let teacher1 = new Teacher("Mr.Hovhannisyan", 30, "Teacher", 71)
let teacher2 = new Teacher("Mrs.Gasparyan", 39, "Teacher")
let university = new University()
university.addMember(student1)
university.addMember(student2)
university.addMember(student3)
university.addMember(student4)
university.addMember(teacher1)
university.addMember(teacher2)
university.startLesson();
university.startLesson();
university.startLesson();
university.startLesson();
university.startLesson();
university.startLesson();
university.removeMember(teacher2)
console.log(university)