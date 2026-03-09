class calculation {
    constructor(a, b) {
        this.a = a
        this.b = b

    }

    sum() {
        console.log(this.a + this.b)
        return this // for chaining purpose we can use this like.add.sum.mul
    }
    diff() {
        console.log(this.a - this.b)
        return this
    }
    mul() {
        console.log(this.a * this.b)
        return this
    }
    div() {
        console.log(this.a / this.b)
        return this
    }
}

let obj1=new calculation(10,20)
obj1.sum().diff()