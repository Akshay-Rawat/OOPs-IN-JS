function bankAccount(customerName,balance=0){
    this.customerName = customerName
    this.accounNumber=Date.now()
    this.balance =  balance;
}

const rakeshAccount = new bankAccount("Akshay",10000)
console.log(rakeshAccount)