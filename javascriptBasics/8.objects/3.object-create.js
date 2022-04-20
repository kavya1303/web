var person = Object.create(null)

// 1st Way
person["firstName"] = "Scott"
person["lastName"] = "Desatnick"

var cityName = "city"
person[cityName] ="Boston"

//person["address"] = new Object()
// 2nd Way (dot notation)
person.address = new Object()

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