class Shape {
    constructor(){

    }

    draw(){
        return "I am generic Shape"
    }

    // draw(message){
    //     return "I am generic Shape - with parameter"
    // }
}

class Circle extends Shape {
    constructor(){
        super()
    }
    
    // draw(){
    //     return "I am Circle"
    // }
}

let circle = new Circle()
console.log(circle.draw())