var students=["scott","adam","tuan"]

for(var i=0;i<students.length;i++){
    console.log(i,students[i]);
}

console.log("***********forEach************")
//forEach
students.forEach(function(value, index){
    console.log(index,value)
})

console.log("***********Maps************")
students.map(function(value, index){
    console.log(index,value)
})


console.log("***********foreach vs map************")
var getforEachStudents=students.forEach(function(value, index){
    return value
})

var getMapStudents=students.map(function(value, index){
    return {
        id:index+1,
        name:value};
})

console.log(getforEachStudents)
console.log(getMapStudents)

//for ..in

for (var stu in students){
    console.log(stu)
}
console.log(Object.entries(students))

// for(var[index,value] of Object.entries(students)){
// console.log()
// } 