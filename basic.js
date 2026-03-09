class Hello {
    constructor(name) {
        this.myName = name; 
    }

    name() {
        console.log(this.myName);
    }

    salary() {
        console.log("10k per month");
    }
}

let obj1 = new Hello("akki");
obj1.name();         
obj1.salary();       