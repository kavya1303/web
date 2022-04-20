function sayHello(message){
    var wish ="Good Luck"
    return function (city){
        return message + " " + city + ", " + wish
    }
}

var wishMe = sayHello("Hello")
console.log(wishMe)
var getMessage = wishMe("Boston")
console.log(getMessage)