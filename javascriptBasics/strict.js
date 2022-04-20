 'use strict'
// var a =10
// console.log(a)

// function sample(){
//     var b =20
// }

// sample()

console.log(this)

function sample(){
    console.log(this)
}

//sample.bind(this)()
sample()