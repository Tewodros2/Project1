function computeSalesCommission(salaried, sales) {


    if (salaried === true) {
        if (sales > 500) {
            return (500 * 0.01) + (0.02 * (sales - 500));
        }
        else if (sales >= 300) {
            return 0.01 * sales;
        }
        else {
            return 0.00 * sales;
        }
    }
    else if (salaried === false) {
        if (sales > 500) {
            return (500 * 0.02) + (0.03 * (sales - 500));
        }
        else if (sales >= 300) {
            return 0.02 * sales;
        }
        else {
            return 0.00 * sales;
        }


    }
}

console.log("expect 0:   ", computeSalesCommission(true, 200));
console.log("expect 0:   ", computeSalesCommission(false, 200));
console.log("expect 3:   ", computeSalesCommission(true, 300));
console.log("expect 6:   ", computeSalesCommission(false, 300));
console.log("expect 65:  ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));

function compoundInterest(initialAmount, annualInterestRate, numberOfYearsToCompound) {
    return initialAmount * (1 + (annualInterestRate / 1200)) ** (12 * numberOfYearsToCompound);

}
console.log("expect 110.47   :  ", compoundInterest(100, 10, 1));
console.log("expect 16470.09 : ", compoundInterest(10000, 5, 10));

function calcDownpayment(costOfHouse) {
    if (costOfHouse >= 200000) {
        return 5000 + 0.1 * (costOfHouse - 200000);
    } else if (costOfHouse >= 100000) {
        return 7500 + 0.15 * (costOfHouse - 100000);
    } else if (costOfHouse >= 50000) {
        return 2500 + 0.1 * (costOfHouse - 50000);
    } else if (costOfHouse >= 0) {
        return 0.05 * costOfHouse;
    } else {
        console.log("Please enter a postive number and try again.");
    }
}
console.log("expect 2000:  ", calcDownpayment(40000));
console.log("expect 2500:  ", calcDownpayment(50000));
console.log("expect 7500:  ", calcDownpayment(100000));
console.log("expect 22500: ", calcDownpayment(200000));
function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        let remaingNumber = number % 10;
        sum = sum + remaingNumber;
        number = parseInt(number / 10);
    }
    return sum;
}
console.log("expect 10: ", sumOfDigits(1234));
console.log("expect  3:  ", sumOfDigits(102));
console.log("expect  8:  ", sumOfDigits(8));

function multDigits(num) {
    let product = 1;
    let array = String(num).split("");
    for (let i = 0; i < array.length; i++) {
        let arrayNumber = Number(array[i]);
        product *= arrayNumber;
    }
    return product;
}
console.log("expect 24: ", multDigits(1234));
console.log("expect  0:  ", multDigits(102));
console.log("expect  8:  ", multDigits(8))

function convertFahrenheit(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);

}
console.log("expect 0:        ", convertFahrenheit(32));
console.log("expect -17.7778:", convertFahrenheit(0));
console.log("expect  100:     ", convertFahrenheit(212));
console.log("expect  37.7778: ", convertFahrenheit(100));

function calcDistance(x1, y1, x2, y2) {
    let d = (((x2 - x1) ** 2) ** (1 / 2)) + (((y2 - y1) ** 2) ** (1 / 2));
    return d;
}
console.log("expect 5 : ", calcDistance(0, 0, 5, 5));

