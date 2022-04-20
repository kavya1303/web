 (function(){
    console.log("Hello") 
})();

(function(a,b){
    console.log(a + b) 
}(1,2));

var add = (function(a,b){
                return a + b
          })(1,2)
console.log(add)



var getConfirmation = (function confirm(message){
    return message
})("This won't pollute global scope")

console.log(getConfirmation)