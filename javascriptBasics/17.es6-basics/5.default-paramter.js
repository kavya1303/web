// ES5
function say(message){
    message = typeof message !== 'undefined' ? message 
                                             : "Hi"
    console.log(message)
}

say()

//ES6
function sayHello(message="Hi", note=""){
    console.log(message, note)
}   

sayHello("Hello" ,"This is deafult parameter")