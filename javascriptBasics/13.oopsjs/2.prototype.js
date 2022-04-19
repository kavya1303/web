function Student(){
    this.name="jhon"
    this.gender="male"
}

Student.prototype.age=45
var studentObj1=new Student()
studentObj1.age=45
console.log(studentObj1)

var studentObj2=new Student()
console.log(studentObj2)
console.log(studentObj2.age)


function Person(firstName,lastName){
    this.fname=firstName;
    this.lname=lastName
    this.getFullName=function(){
        return this.firstName+" "+this.lastName
    }
}

