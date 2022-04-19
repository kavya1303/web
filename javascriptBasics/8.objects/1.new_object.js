var person=new Object()
person["firstName"]="Kavya"
person["lastName"]="Gupta"
var cityName="city"
person[cityName]="Boston"

person.address=new Object()
person.address.state="Brooklyn"
person.address.country="USA"

Object.defineProperty(person,"title",{value:"Great Boss"})

console.log(person)
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person[cityName])
console.log(person["city"])
console.log(person["cityName"])
console.log(person.address.state)
console.log(person.address.country)