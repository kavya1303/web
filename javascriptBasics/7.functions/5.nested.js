function one(){
    return function two(){
        return function three(){
            return "function three is called"
        }
    }
}
var two=one()
var three=two()
var msg=three()
console.log(msg)

console.log(one() () ())

function sample(){
    var msg="this is a inner function"
    var test=function(message){
       console.log(message)
    }
    var display=function(){
        test(msg)
    }
    display()
}
sample()