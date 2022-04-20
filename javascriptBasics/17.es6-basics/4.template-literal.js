let message = "This is a string \n" +
              "using ES5 double \nquotes"

console.log(message)

let messageOne = `This is a string 
using ES6 back ticks`
console.log(messageOne)

var firstname ="Scott"
var lastName = "Desatnick"

console.log("firstName: %s, lastName: %s", firstname, lastName)

var fullName = `FirstName: ${firstname}, lastName: ${lastName}`
console.log(fullName)