class Car{
    constructor(){
        this.noOfWheels=4
    }
    rules(){
        console.log("no of wheels",this.noOfWheels)
        console.log("it should have seats")
        console.log("it should have gear")
        console.log("it should have sundroof")
    }
}

class Tesla extends Car{
    constructor(){
        super()
        this.noOfWheels=9
    }
    rules(){
        super.rules()
        console.log("i dont need rules")
    }
}

let car = new Car()
let tesla = new Tesla()
car.rules()
console.log("________________________")
tesla.rules()