var employee = {
    id: 1,
    greet:  function(){
        console.log(this.id)
    }
}

employee.greet()

// use setTimeout

var employee = {
    id: 1,
    greet:  function(){
        setTimeout(function(){
            console.log(this.id)
        }, 1000);
    }
}

employee.greet()

// use self variable

var employee = {
    id: 1,
    greet:  function(){
        var self = this
        setTimeout(function(){
            console.log(self.id)
        }, 1000);
    }
}

employee.greet()

// Bind method
var employee = {
    id: 1,
    greet:  function(){
        setTimeout(function(){
            console.log(this.id)
        }.bind(this), 1000);
    }
}

employee.greet()

// fat Arrow function
var employee = {
    id: 1,
    greet:  function(){
        setTimeout(() =>{
            console.log(this.id)
        }, 1000);
    }
}

employee.greet()