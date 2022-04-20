var student = {
    "firstName": "Scott",
    "lastName": "Desatnick"
}

console.log(student, typeof student)

// Coverting JSON Object to String
studentStringify = JSON.stringify(student)
console.log(studentStringify, typeof studentStringify)

// converting String back to JSON Object
studentParse = JSON.parse(studentStringify)
console.log(studentParse, typeof studentParse)