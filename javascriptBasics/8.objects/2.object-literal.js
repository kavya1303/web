var person = {} // Object Literal Syntax

// 1st Way
person["firstName"] = "Scott"
person["lastName"] = "Desatnick"

var cityName = "city"
person[cityName] ="Boston"

//person["address"] = new Object()
// 2nd Way (dot notation)
person.address = {}

person.address.state = "Massachusets"
person.address.country = "USA"

//3rd Way
Object.defineProperty(person, "title", {value: "Great Boss"})

console.log(person)
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person[cityName])
console.log(person["city"])
console.log(person["cityName"])
console.log(person.address.state)
console.log(person.address.country)


var student = {
    id: 1,
    name: "Scott",
    isAdmin : true,
    grade: undefined,
    details: null,
    getname : function(){
        return this.name
    },
    address: {},
    subjects: ["maths", "Physics", "Chemistry"]
}

student.city = "Boston"

console.log(student)
console.log(student.id)
console.log(student.name)
console.log(student.getname())