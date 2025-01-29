/**
 * @param {number[]} prices
 * @return {number}
 */

 /*
    Input: Array of integers, prices[i] = coin price on ith day
    Output: Integer, max profit

    Profit = price[day sold] - price[day bought]

    Buy on a single day
    Sell a different day in the future

    OR no transaction = 0 profit (price stays the same or drops with every day)

    1. Price increases: prices = [1,2,4] //3
    2. Price decreases: prices = [4,2,1] //0
    3. No change: prices = [1,1,1] //0
    4. Negative buy day: prices = [-2,0] //2

    Brute Force------------
    Calculate all combinations of differences between 2 integers in array to find max profit

    Iterate through array where i = buy day
    Iterate through array where j = sell day
    Calculate profit for each i & j combination to find max profit

    Time: O(n^2)
    Space: O(1)

    Two Pointers-------------
    Find lowest buy day and highest sell day

    Pointer L on day 1
    Pointer R on day 2
    If price[L] < price[R], calculate profit and compare to max profit
    Otherwise, set L to R (as that will be the lowest buy day yet)
    Move R to the next day and repeat

    Time: O(n)
    Space: O(1)

    Dynamic Programming----------
    Find the lowest possible buy day to calculate max profit from

    Keep track of lowest buy day and max profit
    Iterate through array
    Calculate profit from lowest buy day to current sell day

    Time: O(n)
    Space: O(1)
*/

// var maxProfit = function(prices) {
//     let maxProfit = 0;

//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             let newProfit = prices[j] - prices[i];

//             if (newProfit > maxProfit) {
//                 maxProfit = newProfit;
//             }
//         }
//     }

//     return maxProfit;
// };

// var maxProfit = function(prices) {
//     let l = 0
//     let r = 1;
//     let maxProfit = 0;

//     while (r < prices.length) {
//         if (prices[l] < prices[r]) {
//             let newProfit = prices[r] - prices[l];
//             if (maxProfit < newProfit) {
//                 maxProfit = newProfit;
//             }
//         } else {
//             l = r;
//         }
//         r++;
//     }
//     return maxProfit;
// }

var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        let newProfit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, newProfit);
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
}