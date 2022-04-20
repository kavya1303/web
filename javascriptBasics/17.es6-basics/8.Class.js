class Student {
    constructor(firstName, lastName){
        this.firstName= firstName
        this.lastName = lastName
    }

    getFullName(){
        return this.firstName + ' '+ this.lastName
    }
}

let student = new Student("Scott", "Desatnick")

console.log(student)
console.log(student.firstName)
console.log(student.lastName)
console.log(student.getFullName())