
// console.log('one')

// setTimeout(function(){
//     console.log('two')
// },3000)

// console.log('three')

function getTwo(){
    var count = 1
    return new Promise(function(resolve, reject){
        if(count>0){
            setTimeout(function(){
                resolve('two')
            },3000)
        } else {
            reject('No data')
        }

    })
}

console.log('one')
getTwo()
.then(function(data){
    console.log(data)
    console.log('three')
    return "Finally got the values displyed in an order"
}).then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})