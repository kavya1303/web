var person = {
    firstName: "Scott",
    lastName: "Desatnick",
    city: "Boston",
    age: 45
}

person.email ="scott@ef.com" // CREATE
person.firstName = "Great Scott" // UPDATE
delete person.age // DELETE
//console.log(person) // READ

/**
 *  * Object.preventExtensions()
 *  ? Update the existing property
 *  ? Delete the existing Property
 *  ? Can't add the new property
 *  
 */ 

var studentPreventExtensions = {
    firstName: "Scott",
    lastName: "Desatnick",
    city: "Boston",
    age: 45
}

Object.preventExtensions(studentPreventExtensions)

studentPreventExtensions.email ="scott@ef.com" // CREATE
studentPreventExtensions.firstName = "Great Scott" // UPDATE
delete studentPreventExtensions.age // DELETE
console.log(studentPreventExtensions) // READ

/**
 *  * Object.seal()
 *  ? Update the existing property
 *  ? Can't delete the existing Property
 *  ? Can't add the new property
 *  
 */ 

 var studentSeal = {
    firstName: "Scott",
    lastName: "Desatnick",
    city: "Boston",
    age: 45
}

Object.seal(studentSeal)

studentSeal.email ="scott@ef.com" // CREATE
studentSeal.firstName = "Great Scott" // UPDATE
delete studentSeal.age // DELETE
console.log(studentSeal) // READ

/**
 *  * Object.Freeze()
 *  ? Update the existing property
 *  ? Can't delete the existing Property
 *  ? Can't add the new property
 *  
 */ 

 var studentFreeze = {
    firstName: "Scott",
    lastName: "Desatnick",
    city: "Boston",
    age: 45,
    address: {
        state: "Massachhusets"
    }
}

Object.freeze(studentFreeze)
Object.freeze(studentFreeze.address)

studentFreeze.email ="scott@ef.com" // CREATE
studentFreeze.firstName = "Great Scott" // UPDATE
delete studentFreeze.age // DELETE

studentFreeze.address.state="Telangana"
console.log(studentFreeze) // READ

// JSON.stringify 
var objStringify = JSON.stringify(studentFreeze)
console.log(objStringify)
var objParse = JSON.parse(objStringify)
objParse.firstName ="Great Scott"
console.log(objParse)


