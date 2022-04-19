var data=[
    1,
    "scott",
    true,
    null,
    undefined,
    {
        name:"scott"
    },
    function(name){
        return name
    },
    ["blue","red","green"]
]
console.log(data)

//access function
//pass object to this array
//print "scott"
console.log(data[6](data[5].name))
console.log(data[6](data[5].name)+" likes "+data[7][0])