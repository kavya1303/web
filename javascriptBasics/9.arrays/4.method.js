//convert an array to string
var movies=["Avatar","good will hunting","vanilla sky","Mars"]
var movieString=movies.join(",")
console.log(movieString, typeof movieString)

//split method- convert strng to an array

var fullName="Scott desatnick"
var names=fullName.split(" ")
console.log(names, typeof names)

//concat joins to array

var fruits=["orange","apple","banana","guava"]
var vegetables=["potato","tomato","egg plant","drumstick"]
var mixedOne=fruits.concat(vegetables);
console.log(mixedOne);

var mixedTwo=vegetables.concat(fruits);
console.log(mixedTwo);

//push
var numbers=[1,2,3];
numbers.push(4);// add at the end of rray
numbers.push(5);
numbers.push(6);
numbers.unshift(0);// add at the start of array
numbers.unshift(-1);
numbers.unshift(-2);
numbers.unshift(-3);

console.log(numbers)
numbers.shift();// delete at the start of the array
numbers.pop() //delete at the end of the array
console.log(numbers)

//splice

fruits.splice(2,0,"guava","watermelon")
console.log(fruits)
var items=["desktop","laptop","mobile","ipad","AI"]
items.splice(2,2);
console.log(items);

//slice

var skills=["c#","java","jsp","python","javascript"]

var sliceSkills=skills.slice(1,3)
console.log(sliceSkills)
