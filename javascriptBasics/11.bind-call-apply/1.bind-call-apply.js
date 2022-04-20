var person1 = {firstName: "Scott", lastName: "Desatnick"}
var person2 = {firstName: "Adam", lastName: "Colson"}
var person3 = {firstName: "Tuan", lastName: "Bui"}

function display(message, wish){
    return message + ' ' +  this.firstName + ' ' + this.lastName + ', ' + wish
}

display()

var displayUsingBind = display.bind(person1)
console.log(displayUsingBind("Welcome", ", Greetings !!!"))

var displayUsingCall = display.call(person2, "Welcome", "Greetings !!!" )
console.log(displayUsingCall)

var displayUsingApply = display.apply(person3, ["Welcome", "Greetings !!!"])
console.log(displayUsingApply)