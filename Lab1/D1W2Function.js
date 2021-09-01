
function computeSalesCommission() {
    let prompt = require("prompt-sync")();
    let salaried = prompt("are you salaried? enter true or false ");
    let sales = prompt("Enter sales $ ");

    if (salaried === "true") {
        if (sales > 500) {
            console.log("Commission: " + 5 + 0.02 ** (sales - 500));
        }
        else if (sales >= 300) {
            console.log("Commission: " + 0.01 * sales);
        }
        else {
            console.log("Commission: " + 0.00 * sales);
        }
    }
    else if (salaried === "false") {
        if (sales > 500) {
            console.log("Commission: " + (500 * 0.02) + (0.03 ** (sales - 500)));
        }
        else if (sales >= 300) {
            console.log("Commission: " + 0.02 * sales);
        }
        else {
            console.log("Commission: " + 0.00 * sales);
        }


    }
}
computeSalesCommission();



