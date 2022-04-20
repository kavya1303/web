// Join - Convert an array to string
var movies = ["Avatar", "Good Will Hunting", "Vanilla Sky", "Mars"]

var movieString = movies.join(",")

console.log(movieString, typeof movieString)

// Split - Convert a string to an array

var fullName = "Scott Desatnick"

var names = fullName.split(" ")

console.log(names)

// Concat - Which joins two arrays

var fruits = ["Orange", "Apple", "Banana", "Guava"]

var vegetables = ["Potato", "Tomato", "Egg Plant", "Drumstick"]

var mixedOne = fruits.concat(vegetables)
console.log(mixedOne)

var mixedTwo = vegetables.concat(fruits)
console.log(mixedTwo)

/**
 * ? push - Adds the value at the end of an array
 * ? unshift - Adds the value at the start of an array
 * ? pop - Deletes the value at the end of an array
 * ? shift - Deletes the value at the start of an array
 */

var numbers = [1,2,3]

numbers.push(4)
numbers.push(5)
numbers.push(6)

numbers.unshift(0)
numbers.unshift(-1)
numbers.unshift(-2)

numbers.pop()
numbers.pop()
numbers.pop()

numbers.shift()
numbers.shift()
numbers.shift()

console.log(numbers)

// Splice - Add

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,0, "Guava", "WaterMelon")
console.log(fruits)

// Splice - Delete

var items = ["Desktop", "Laptop", "Mobile", "iPad", "AI Machine"]
items.splice(2,2)

console.log(items)

// Slice 

var skills = ["C#", "Java", "JSP", "Python", "Javascript"]
var slicedSkills = skills.slice(1,3)
console.log(skills)
console.log(slicedSkills)