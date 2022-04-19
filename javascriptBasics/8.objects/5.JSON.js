var student={
    "id":1,
    "name":"Kavya gupta"

}
console.log(student, typeof student)
studentStringify=JSON.stringify(student)
console.log(studentStringify, typeof studentStringify)
studentParse=JSON.parse(studentStringify)
console.log(studentParse, typeof studentParse)
