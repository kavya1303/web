function sayHello(message){
    return function(city){
        return message+" "+city
    }
}
var wishMe=sayHello("hello")
console.log(wishMe)
var getMsg=wishMe('Boston')
console.log(getMsg)