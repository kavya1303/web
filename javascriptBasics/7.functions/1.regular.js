/*Function always return a avalue 
if ypu return any value it would return thatvalue
otherwise it will return undefined
*/
function getName(){
    // return 1
    // return "Scott" //unreachable code detected
    // return true
    // return null
    // return undefined
    // return {}
    // return function(){}
    //return []
    return
}
//function overloading is not posiible in javascript

console.log(getName())
function getFullName(firstName,LastName){
    return firstName+" "+LastName
}

function getFullName(firstName,LastName,title){
    return firstName+" "+LastName+" is "+title
}
function getFullName(){
    return "No parameter at all"
}
console.log(getFullName("Kavya","Gupta","Great Boss"))
console.log(getFullName("kavya","Gupta"))

//default values

function greet(name){
    console.log(name);
}
greet("Kavya")
greet()


function add(a,b){
    return a+b
}
console.log(add(3,4))
console.log(add(6,4))
console.log(add(7,1))