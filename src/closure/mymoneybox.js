// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;

//     console.log(`MoneyBox: $${saveCoins}`);

// }
// const myMoneyBox = moneyBox();
// myMoneyBox(10);
// myMoneyBox(5);

function moneyBox() {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }

    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(10);
myMoneyBox(15);
