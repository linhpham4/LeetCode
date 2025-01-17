/**
 * @param {number[][]} accounts
 * @return {number}
 */

/*
const maximumWealth = (accounts array) => {
    let maxWealth = 0;

    For loop to iterate through accounts array
        Sum the values in the inner array
        If said sum is more than maxWealth, replace maxWealth with that value

    return maxWealth
}
*/
const maximumWealth = (accounts) => {
    let maxWealth = 0;

    for (i = 0; i < accounts.length; i++) {
        let wealth = accounts[i].reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        if (wealth > maxWealth) {
            maxWealth = wealth;
        };
    };

    return maxWealth;
};