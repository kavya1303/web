function Student (){
    this.name= "Scott"
    this.gender = "Male"
}

Student.prototype.age =45

var studentObj1 = new Student()
console.log(studentObj1)
console.log(studentObj1.age)

var studentObj2 = new Student()
console.log(studentObj2)
console.log(studentObj2.age)


function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    // this.getFullName = function(){
    //     return this.firstName + ' '+ this.lastName
    // }
}

Person.prototype.getFullName = function(){
    return this.firstName + ' '+ this.lastName
}


var person1 = new Person("Scott", "Desatnick")
console.log(person1)

var person2 = new Person("Adam", "Colson")
console.log(person2)

var person3 = new Person("Tuan", "Bui")
console.log(person3)
console.log(person3.getFullName())