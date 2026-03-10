class Uber{
    static total=0
    static #driver
    constructor(name,type,rating,avail){
        this.name=name
        this.type=type
        this.rating=rating
        this.avail=avail
        Uber.total++
    }

    ride(pickup,drop,fare,status){
        fare=(pickup-drop)*9
    }

    static setDriver(#driver){
        
    }
}