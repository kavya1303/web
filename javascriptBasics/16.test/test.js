// console.log(multiply(2)(3)(4)) // 24

// function multiply(x){
//     return function(y){
//         return function(z){
//             return x*y*z
//         }
//     }
// }

var a =10
var b =a
a =20
console.log(a)
console.log(b)

// 20 ,10

var a =[ 1,2]
var b =a
a.push(3)
console.log(a)
console.log(b)

var a =[ 1,2]
var b =a
a =[1,2,3]
console.log(a)
console.log(b)

var name = 1 + 2 + "Scott" + 3 +4
console.log(name)

var output = (function(x){
    delete x
    return x
})(1)

console.log(output)

var output = (function(x){
    delete x
    return x
})({id:1})

console.log(output)

var output = (function(x){
    delete x.id
    return x
})({id:1})

console.log(output)

// How to empty an array
var array = ['a', 'b', 'c', 'd', 'e', 'f']

//1st way 
//array =[]

// 2nd way 
//array.length = 0

// 3rd 
//array.splice(0,array.length)

//4th way
 while (array.length){
     array.pop()
 }

console.log(array)

console.log(isEven(3))
console.log(isEven(6))
console.log(isEven(7))

function isEven(a){
    return a%2 == 0
}

// diff between == vs === 
// diff != vs !==

console.log(1==1)
console.log(1=='1') // Checks for only value on both the sides
console.log(1==='1') // Checks for both value and type 

console.log(75 == '75')

console.log(1!= 1)
console.log(1!= '1')
console.log(1!== '1')


var a = 10

if(a>10){
    console.log('a is bigger')
} else {
    console.log('a is smaller')
}

var message = a >10 ? 'a is bigger' 
                    : 'a is smaller'