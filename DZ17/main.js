class Coach {
    constructor(name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    }
    displayInfo() {
        console.log(` Hi, my name is ${this.name}, my specialization is ${this.specialization}, 
            and my rating is ${this.rating} `)
    }
}

let coach1 = new Coach("David", "PowerLifting", 4.7);
console.log(coach1.displayInfo())

class Calculator {
    add(a, b) {
        return a + b
    }

    subtract(a, b) {
        return a - b
    }

    multiply(a, b) {
        return a * b
    }

    divide(a, b) {
        if (b !== 0)
            return a / b
        else {
            console.log('На ноль в этой гавани не делят, пират...')
        }
    }


}
const calc = new Calculator();

console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(10, 4)); // 6
console.log(calc.multiply(3, 6)); // 18
console.log(calc.divide(8, 0)); // 4
console.log(calc.divide(8, 2)); // 4


class bank {
    constructor(balance) {
        this.balance = balance;
    }
    getBalance() {
        console.log(`Your balance is ${this.balance}$`)
    }
    deposit(deposit){
        this.balance += deposit;
       
    }
    withdraw (withdraw){
        this.balance -= withdraw;
    }
}

const account1 = new bank(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300

