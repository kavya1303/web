// Class
function Student(){

}

// Instance
function Person(){

}

var person1 = new Person() // person1 is an instance
var person2 = new Person() // person2 is an instance

// Constructor

function Order(){
    console.log('Order initiated')
}

var order = new Order() // Order() is called constructor

// Property

function Customer(gender){
    this.gender = gender
}

var customer1 = new Customer('Female')
var customer2 = new Customer('Male')
console.log(customer1)
console.log(customer2)