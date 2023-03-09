// // 1. Deposit Money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if user won
// 6. Give the user their winnings
// 7. Play again


// Deposit Money
const prompt = require("prompt-sync")();

const deposit = () => {
    while(true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmout = parseFloat(depositAmount);

        if(isNaN(numberDepositAmout) || numberDepositAmout <= 0) {
            console.log("Invalid deposit amount, try again.")
        } else {
            return numberDepositAmout;
        }
    }
}

const getNumberOfLines = () => {
    while(true) {
        const lines = prompt("Enter the number of lines (1-3): ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberDepositAmout) || numberDepositAmout <= 0 || numberDepositAmout > 3) {
            console.log("Invalid number of lines, try again.")
        } else {
            return numberOfLines;
        }
    }
}


const depositAmount = deposit();
