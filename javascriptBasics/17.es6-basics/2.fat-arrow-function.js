// let getMessage = function(){
//     return "Welcome to fat arrow functions"
// }
// => Fat Arrow


// let getMessage = () => {
//     return "Welcome to fat arrow functions"
// }

/**
 * * Both statements below are same
 * ? () => a + b
 * ? () => {return a+b}
 */
let getMessage = () => "Welcome to fat arrow functions"


console.log(getMessage())

let add = (a,b) =>  {return a + b}


console.log(add(10,20))

let numbers = [4,2,6]
numbers.sort((a,b) => b-a)
console.log(numbers)

/**
 *  ? Single Parameter
 *  ? (name) => name.length
 *  ?  name  => name.length
 */

let names = ["Scott", "Adam", "Tuan", "Uma"]
let lengths = names.map(name => name.length)
console.log(lengths)

// With No parameter
let logDoc = () => console.log(window.document)
logDoc()

// line Break 

// let multiply =(x,y)   // Syntax error
// => x*y

let multiply =(x,y) => // valid syntax
x*y

// Object literal 

let setColor = (color) =>  ({value: color})

let backGroundColor = setColor('Green')
console.log(backGroundColor)