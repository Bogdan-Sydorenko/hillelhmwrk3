class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Внесено: ${amount}. Ваш баланс ${this.balance}`);
        }else {
            console.log("Сумма депозиту повинна бути більше нуля")
        }
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Недостатньо коштів на рахунку")
        }else if (amount <= 0) {
            console.log("Сумма зняття повинна бути більша за нуль")
        }else {
            this.balance -= amount;
            console.log (`Знято ${amount}. Ваш баланс ${this.balance}`);
        }
    }
}

const account = new BankAccount(100);

account.deposit(300);
account.withdraw(100);
account.withdraw(100);
account.deposit(1000);
