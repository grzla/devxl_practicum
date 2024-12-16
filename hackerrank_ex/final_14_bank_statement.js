/* 
an organization has partnered with a bank to develop software that manages bank accounts. as a developer, the task is implementing a javascript class bankstatement that supports various functions. some properties should hidden (private), and others should be publicly accessible. additionally, some functions, like transferring money between accounts, should be asynchronous.
to further extend the functionality, implement inheritance where a savingsaccount class extends the bankstatement class. the savingsaccount should have an additional property for interest rate and a method to apply interest to the balance.
function description
complete the classes bankstatement and savingsaccount classes. the requirements for the classes are shown below.
1. properties
bankstatement:
public properties:
accountnumber: a unique identifier for the account
balance: the current balance of the account
private properties:
accountholder: the name of the account holder (should be accessible only within the class)
savingsaccount:
public properties:
interestrate: the interest rate for the savings account
methods
bankstatement:
public methods:
create(name, number, balance): creates an account with accountname, accountnumber and balance(optional, defaults to 0)
deposit(number, amount): synchronously adds a specified amount to the given number's account balance
withdraw(number, amount): synchronously subtracts a specified amount from the given number's account balance if sufficient funds are available
getaccountinfo(number): returns a json string containing the account number, balance, and account holder name of the given account number
async method:
transfer(amount, to): asynchronously transfers a specified amount to another bankstatement instance (target account) if sufficient funds are available in the source account
savingsaccount:
public methods:
applyinterest(rate): applies the interest rate to the balance and returns the value after 10 years
constraints
all the values are either string, number, or json arrays/objects
returns:
create(name, number, balance):
if !balance, return "invalid open account"
if the number already exists in bankstatement or savings, return "cannot open account"
in all other cases, return "account created successfully". balance is an optional value. both name and number will be provided
deposit(number, amount):
if the amount is greater than zero, return "deposited successfully". otherwise return "invalid amount"
if the account does not exist, return "account not found"
withdraw(number, amount):
if the amount is greater than zero, return "withdrawn successfully". otherwise return "invalid amount"
if the holder's account does not have sufficient funds, return "insufficient funds available"
if the account does not exist, return "account not found"
getaccountinfo(number):
a json string containing the account information with accountnumber, accountname, and balance as the object keys for the given number
if the account does not exist, return "account not found"
transfer(amount, to, from):
if either from-account exist, return "account not found"
if the amount is anything less than equal to zero or an invalid string, return "invalid amount"
if the holder's account does not have sufficient funds, return "insufficient funds available"
otherwise, return "transfer success". this is an async function, so the return should be a promise resolving to the above values
applyinterest(rate, number):
applies interest rate to balance and returns new balance after 10 years
new balance = (1 + r/100)^10 p where r is the annual rate, p is the period, and p is the initial balance
if the interest rate is given a negative value or an invalid string, return "invalid rate given"
if the account doesn't exist, return "account not found"
otherwise, return the balance after 10 years in string format rounded down to the nearest integer value
note:
all functions created should be static. see the code snippet to see the usage
 */

process.stdin.resume();

process.stdin.setEncoding('utf-8');

const fs = require("fs");
let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}


// Complete the below classes
class BankStatement {
    // private property
    #accountHolder
    
    // public properties
    balance
    accountNumber
    
    constructor(accountHolder, accountNumber, balance) {
        this.#accountHolder = accountHolder
        this.accountNumber = accountNumber
        this.balance = balance || 0
    }
    
    static create(name, number, balance) {
        if (!number || !name) return "Invalid account"
        if (BankStatement.accounts?.[number]) return "Cannot open account"
        
        if (!BankStatement.accounts) BankStatement.accounts = {}
        BankStatement.accounts[number] = new BankStatement(name, number, balance)
        return "Account created successfully"
    }
    
    static deposit(number, amount) {
        if (!BankStatement.accounts?.[number]) return "Account not found"
        if (amount <= 0 || typeof amount !== 'number') return "Invalid amount"
        
        BankStatement.accounts[number].balance += amount
        return "Deposited successfully"
    }
    
    static withdraw(number, amount) {
        if (!BankStatement.accounts?.[number]) return "Account not found"
        if (amount <= 0 || typeof amount !== 'number') return "Invalid amount"
        if (BankStatement.accounts[number].balance < amount) return "Insufficient funds available"
        
        BankStatement.accounts[number].balance -= amount
        return "Withdrawn successfully"
    }
    
    static getAccountInfo(number) {
        if (!BankStatement.accounts?.[number]) return "Account not found"
        const account = BankStatement.accounts[number]
        return JSON.stringify({
            accountNumber: account.accountNumber,
            accountName: account.#accountHolder,
            balance: account.balance
        })
    }
    
    static async transfer(amount, from, to) {
        if (!BankStatement.accounts?.[from]) return "Account not found"
        if (!BankStatement.accounts?.[to]) return "Account not found"
        if (amount <= 0 || typeof amount !== 'number') return "Invalid amount"
        if (BankStatement.accounts[from].balance < amount) return "Insufficient funds available"
        
        BankStatement.accounts[from].balance -= amount
        BankStatement.accounts[to].balance += amount
        return "Transfer success"
    }
}

class SavingsAccount extends BankStatement {
    interestRate
    
    constructor(accountHolder, accountNumber, balance) {
        super(accountHolder, accountNumber, balance)
        this.interestRate = 0
    }
    
    static create(name, number, balance) {
        if (!number || !name) return "Invalid account"
        if (BankStatement.accounts?.[number]) return "Cannot open account"
        
        if (!BankStatement.accounts) BankStatement.accounts = {}
        BankStatement.accounts[number] = new SavingsAccount(name, number, balance)
        return "Account created successfully"
    }
    
    static applyInterest(number, rate) {
        if (!BankStatement.accounts?.[number]) return "Account not found"
        if (rate <= 0 || typeof rate !== 'number') return "Invalid rate given"
        
        const account = BankStatement.accounts[number]
        if (!(account instanceof SavingsAccount)) return "Invalid rate given"
        
        account.interestRate = rate
        const newBalance = account.balance * (1 + rate/100)
        account.balance = Math.floor(newBalance)
        return account.balance
    }
}

async function main() {
    const ws = fs.createWriteStream(process.env['OUTPUT_PATH']);
    const jsonString = inputString[0];
    const jsonObj = JSON.parse(jsonString);
    const { numberOfOperations, operations } = jsonObj;
    
    let content = ''
    for (let i = 0; i < numberOfOperations; i++) {
        const op = operations[i];
        switch (op.type) {
        case "createAccount":
            content += BankStatement.create(op.accountHolder, op.accountNumber, op.balance);
            break;
        case "createSavingsAccount":
            content += SavingsAccount.create(op.accountHolder, op.accountNumber, op.balance);
            break;
        case "deposit":
            content += BankStatement.deposit(op.accountNumber, op.amount);
            break;
        case "withdraw":
            content += BankStatement.withdraw(op.accountNumber, op.amount);
            break;
        case "getAccountInfo":
            content += BankStatement.getAccountInfo(op.accountNumber);
            break;
        case "transfer":
            content += await BankStatement.transfer(op.amount, op.from, op.to);
            break;
        case "applyInterest":
            content += SavingsAccount.applyInterest(op.accountNumber, op.rate);
            break;
        }
        if (i !== numberOfOperations - 1) content += '\n';
    }
    
    ws.write(content);
    ws.end();
}
