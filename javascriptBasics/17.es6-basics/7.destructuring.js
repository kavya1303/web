// Array Destructuring

let arr = ["Scott", "Adam", "Tuan"]
let [name1, name2, name3] = arr

console.log(name1) // arr[0]
console.log(name2) // arr[1]
console.log(name3) // arr[2]

let [fName, lName] = "Scott Desatnick".split(" ")
console.log(fName)
console.log(lName)

let [firstName, , title1] = ["Scott", "Desatnick", "Great Boss"]
console.log(firstName)
//console.log(lastName)
console.log(title1)

// Object Destructuring

let user = {
    name: 'Scott',
    age: 45
}

let {name, age} = user
console.log(name)
console.log(age)

let options = {
    title: "Menu",
    width: 100,
    height: 200
}

let {title, width, height} = options
console.log(title, width, height)