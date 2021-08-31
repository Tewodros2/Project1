
let salaried = prompt("are you salaried? enter yes or no ");
let sales = prompt("Enter sales $ ");

if (salaried === "yes") {
    if (sales < 300) {

        console.log("Commission: " + 0.00 * sales);
    }
    else if (sales <= 500) {
        console.log("Commission: " + 0.02 * sales);
    }
    else {
        console.log("Commission: " + 0.03 * sales);
    }
}
else if (salaried === "no") {
    if (sales > 300) {
        console.log("Commission: " + 0.02 * sales);
    }
    else if (sales > 500) {
        console.log("Commission: " + 0.03 * sales);
    }
    else {
        console.log("Commission: " + 0.00 * sales);
    }


}



do {
    let age = prompt("Enter your age : ");
} while (age > 18);

let age = prompt("Enter your age : ");
while (age > 18) {
    console.log(age);
    age++;
}

let initialAmount = prompt("Enter initial amount: ");
let annualInterestRate = prompt("Enter annual interest rate: ");
let numberOfYears = prompt("Enter number of years: ");

function savingsAccountBalance(amount, rate, years) {
    accountBalance = amount * (1 + rate / 12) ** (12 * years);
    console.log("Your accountBalance is: " + accountBalance);
}
savingsAccountBalance(initialAmount, annualInterestRate, numberOfYears);
for (let i = 0; i < 5; i++) {
    console.log("12345");
}
let str = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        str += i + "";
    }
    str += "\n";
}
console.log(str);

for (let i = 5; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
        str += i + "";
    }
    str += "\n";
}
let cost = prompt("Enter cost of the house: ");
let downPayment;
if (cost > 200000) {
    downPayment = 5000 + 0.1 * (cost - 200000);
    console.log("downpayment amount : " + downPayment);
} else if (cost > 100000) {
    downPayment = 2000 + 0.15 * (cost - 100000);
    console.log("downpayment amount : " + downPayment);
} else if (cost > 50000) {
    downPayment = 1000 + 0.1 * (cost - 50000);
    console.log("downpayment amount : " + downPayment);
} else if (cost >= 0) {
    downPayment = 0.05 * cost;
    console.log("downpayment amount : " + downPayment);
} else {
    console.log("enter again ");
}

function sumDigits(n) {
    return (--n % 9) + 1;
}
sumDigits();