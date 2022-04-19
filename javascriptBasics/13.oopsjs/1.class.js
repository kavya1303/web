function Person(){
}
var person1=new Person()
var person2=new Person()

function Order(){
    console.log("order intialised")
}

var order=new Order()
function Customer(gender){
    this.gender=gender
}

var customer1=new Customer('Female')
var customer2=new Customer('Male')
console.log(customer1)
console.log(customer2)
for(var a=0;a<5;a++); console.log(a)