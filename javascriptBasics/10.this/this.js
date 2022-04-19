console.log(this)

function sample(){
    console.log(this)
}

sample()

var studentObj={
    name:"Scott",
    getName: function(){
        console.log(this)
    }
}
studentObj.getName()