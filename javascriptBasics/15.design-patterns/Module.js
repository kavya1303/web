// var Module = (function(){

// })()

// // Private Methods

// var Module = (function(){
//     // both are privateMethods
//     var privateMethod = function(){

//     }

//     var publicMethod = function(){

//     }
// })()


// return methods

// var Module = (function(){

//     return {
//         publicMethodOne : function(){
//             console.log('You Called Public Method1')
//         },
//         publicMethodTwo : function(){
//             console.log('You Called Public Method2')
//         },
//     }
// })()

// console.log(Module)
// Module.publicMethodOne()
// Module.publicMethodTwo()

// Anonymous Object Literal 
// var Module = (function(){
//     var privateMethod = function(){

//     }
//     return {
//         publicMethodOne : function(){
//             console.log('You Called Public Method1')
//         },
//         publicMethodTwo : function(){
//             console.log('You Called Public Method2')
//         },
//     }
// })()

// console.log(Module)

// Locally Scoped Object literal

// var Module = (function(){
//     var myObj = {}
//     var privateMethod = function(){}
//     myObj.someMethod = function(){

//     }
//     return myObj
// })()

// console.log(Module)

// Stacked Locally Scoped Obect Literal

// var Module = (function(){
//     var privateMethod = function(){

//     }

//     var myObj = {
//         someMethod: function(){

//         },
//         anotherMethod: function(){

//         }
//     }
//     return myObj
// })()

// console.log(Module)

// Revealing Module Pattern

// var Module = (function(){

//     var privateMethod = function(){

//     }

//     var someMethod = function(){

//     }

//     var anotherMethod = function(){

//     }

//     return {
//         someMethod, // someMethod: someMethod
//         anotherMethod // anotherMethod: anotherMethod
//     }
// })()

// console.log(Module)

// Accessing 'private' methods

var Module = (function(){
    var privateMethod = function(message){
        console.log(message)
    }
    var publicMethod = function(text){
        privateMethod(text)
    }

    return {
        public: publicMethod
    }
})()
console.log(Module)
Module.public("Calling Private Method from Public")
