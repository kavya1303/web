function one(){
    return function two(){
        return function three(){
            return "Function three is called"
        }
    }
}

// 1st Way 
var two = one()
var three = two()
var message = three()
console.log(message)

// 2nd Way 
console.log(one()()())

function sample(){
    var message = "This is inner function"
    var test = function(message){
        console.log(message)
    }
    
    var display = function(){
        test(message)
    }

    display()
}

sample()



