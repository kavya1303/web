function sample(){
    var foo ="blue"
    console.log(foo) // blue
}
//sample()
//console.log(foo) // ReferenceError: foo is not defined

function display(){
    if(1==1){
        var foo = 'Hello'
        let bar = "How are you ?"
        const baz = "I am fine"

        console.log(foo)
        console.log(bar)
        console.log(baz)
    }

    console.log(foo)
    // console.log(bar) ReferenceError: bar is not defined
    // console.log(baz) ReferenceError: baz is not defined
}

//display()

// for(var i=0; i<3; i++){
//     console.log(i)
// }
// console.log(i)

for(let i=0; i<3; i++){
    console.log(i)
}
//console.log(i) //ReferenceError: i is not defined

//re-defining let and const 

function sample(){
    let foo =1
        foo =100
   // let foo =101 //can't use let keyword again
        console.log(foo)

    const bar =1
    // bar =2 // TypeError: Assignment to constant variable
    console.log(bar)
}

sample()

const names = ["Scott", "Adam", "Tuan"]

names.push("Uma")

console.log(names)