var student={
    firstName:"scott",
    lastName:"destnick",
    city:"Boston",
    age:45
}
// Object.preventExtensions(student)
//update property
//delete the property
//cant add new proprty


// Object.seal(student)
//
//update property
//cant delete the property
//cant add new proprty

Object.freeze(student)

//cant update property
//cant delete the property
//cant add new proprty
student.email="test@gmail.com"
student.firstName="great scott"
delete student.age
console.log(student)

//no permanent way to lock the object 
//copy the object and can change  it