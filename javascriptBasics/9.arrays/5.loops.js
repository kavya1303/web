var students = ["Scott", "Adam", "Tuan", "Uma"]
console.log('*********Using for loop********')
// for loop
for(var i =0; i < students.length; i++){
    console.log(i, students[i])
}

console.log('*********Using forEach********')
// forEach
students.forEach(function(value, index){
    console.log(index, value)
})

console.log('*********Using map********')
// map
students.map(function(value, index){
    console.log(index, value)
})

console.log('********* forEach vs map ********')
// forEach
var getForEachStudents = students.forEach(function(value, index){
                            return value
                        })

// map
var getMapStudents = students.map(function(value, index){
                                // var obj = {}
                                // obj.name = value
                                return { id: index+1, name: value}
                                //return index
                                //return value +'-' + index
                         })

console.log(getForEachStudents)
console.log(getMapStudents)

// for..in 

for(var student in students){
    console.log(student)
}

// for..of 

for(var student of students){
    console.log(student)
}

console.log(Object.entries(students))

for(var [index, value] of Object.entries(students)){
    console.log(index, value)
}