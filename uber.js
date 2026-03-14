class Driver {
    constructor(name, type, rating, avail) {
        this.name = name
        this.type = type
        this.rating = rating
        this.avail = avail
    }
}
    const pricePerKm = {
        mini: 8,
        auto: 10,
        premium: 15

}
class Rider {
    constructor(name, history=[]) {
        this.name = name
        this.history = history
    }

}
class Ride {
    constructor(pickup, drop, type) {
        this.pickup = pickup
        this.drop = drop
        this.type = type
        this.distance = Math.abs(drop - pickup)
        this.fare = this.distance * pricePerKm[type]
        this.status = "requested"
    }
}

let ride = new Ride(1,13,"mini")
console.log(ride)
