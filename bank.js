class BankAccount {
    #balance
    static #count= 0
    constructor(name, pan, contact, balance) {
        this.name = name
        this.pan = pan
        this.contact = contact
        this.#balance = balance
        BankAccount.#count++
    }
    getDetails() {
        console.log(this.name)
        console.log(this.pan)
        console.log(this.contact)
        console.log(this.#balance)
    }
    addMoney(amt) {
        console.log(this.#balance += amt)
    }
    withdraw(amt) {
        if (this.#balance >= amt) {
            this.#balance -= amt
            console.log(this.#balance)
        }
        else {
            console.log("`_`")
        }
    }
    getBalance() {
        console.log(this.#balance)
    }
    totalCustomer(){
        console.log(BankAccount.#count)
    }
}

let akki = new BankAccount("akshay", "ftyuip9833", "123456788888765", 10000)
let a = new BankAccount("akshay", "ftyuip9833", "123456788888765", 10000)
let akk = new BankAccount("akshay", "ftyuip9833", "123456788888765", 10000)
let aki = new BankAccount("akshay", "ftyuip9833", "123456788888765", 10000)
let ki = new BankAccount("akshay", "ftyuip9833", "123456788888765", 10000)
akki.getDetails()
akki.addMoney(500)
akki.withdraw(300)
akki.totalCustomer()

