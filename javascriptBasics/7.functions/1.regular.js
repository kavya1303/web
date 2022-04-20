// Function always returns a value
// if you return any value it would return the same value 
// else it would return undefined
// function getName(){
//   // return 1
//   // return "Scott Desatnick"
//   // return true
//   // return null
//   // return undefined
//   // return {}
//   // return function(){}
//   // return []
//   // return
// }

// console.log(getName())

// function getFullName(){
//     return "Scott" + ' ' +  "Desatnick"
// }

// console.log(getFullName())
// console.log(getFullName())
// console.log(getFullName())

// function overloading - function with different number of params
//                        function with different type of params 
// function overloading is not possible in javascript 

function getFullName(firstName, lastName){
    return firstName + ' ' + lastName
}

function getFullName(firstName, lastName, title){
    return firstName + ' ' + lastName + ' is ' + title
}
function getFullName(){
    return "No params at all"
}

console.log(getFullName("Scott", "Desatnick", "Great Boss"))
console.log(getFullName("Adam", "Colson"))
console.log(getFullName("Tuan", "Bui"))

// Deafault values

function greet(name) {
    console.log(name)
}

greet("Uma")
greet()

function add(a, b){
    return a + b
}

console.log(add(4,5))
console.log(add(3,4))
console.log(add(4,6))