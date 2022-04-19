console.log(this)

function sample(){
    console.log(this)
}
//using self var
// sample()
// window.name=""
// var studentObj={
//     name:"Scott",
//     getName: function(){
//         var self=this;
//         console.log(self)
//         self.name="desctrick"
//         console.log(self)

//         var updatedName=function(){
//             self.name="great scott"
//             console.log(self)
//         }
//         updatedName()
//     }
// }
// studentObj.getName()

//using bind
var studentObj={
    name:"Scott",
    getName: function(){
       
        console.log(this)
        this.name="desctrick"
        console.log(this)

        var updatedName=function(){
            this.name="great scott"
            console.log(this)
        }.bind(this)
        updatedName()
        // updatedName.call(this)
        // updatedName.bind(this)()
        // updatedName.apply(this)
    }
}
studentObj.getName()