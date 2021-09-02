module.exports = { isVowel, computeSalesCommission, calcDownpayment, compoundInterest, convertFahrenheit, calcDistance, sumOfDigits, multDigits };

function isVowel(letter) {
    let vowels = ["a", "e", "o", "i", "u"];
    return vowels.includes(letter);
}

function computeSalesCommission(salaried, sales) {
    if (salaried === true) {
        if (sales > 500) {
            return 0.02 * sales;
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
            return 0.03 * sales;
        }
        else if (sales >= 300) {
            return 0.02 * sales;
        }
        else {
            return 0.00 * sales;
        }


    }

}

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
function compoundInterest(initialAmount, annualInterestRate, numberOfYearsToCompound) {
    return initialAmount * (1 + (annualInterestRate / 1200)) ** (12 * numberOfYearsToCompound);

}
function convertFahrenheit(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}
function calcDistance(x1, y1, x2, y2) {
    let d = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** (1 / 2);
    return d;
}
function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        let remaingNumber = number % 10;
        sum = sum + remaingNumber;
        number = parseInt(number / 10);
    }
    return sum;
}
function multDigits(num) {
    let product = 1;
    let array = String(num).split("");
    for (let i = 0; i < array.length; i++) {
        let arrayNumber = Number(array[i]);
        product *= arrayNumber;
    }
    return product;
}
