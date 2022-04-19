var person1={firstName:"Scott",lastName:"Desastrick"}
var person2={firstName:"Adam",lastName:"Calson"}
var person3={firstName:"Tuan",lastName:"Bui"}
function display(message,wish){
    return message+" "+this.firstName+" "+this.lastName+" "+wish
    
}

var displayBind=display.bind(person1)
console.log(displayBind("welcome","greetings!!"))

var displayCall=display.call(person2,"welcome","greetings!!")

console.log(displayCall)
var displayApply=display.apply(person3,["welcome","greetings!!"])
console.log(displayApply)
