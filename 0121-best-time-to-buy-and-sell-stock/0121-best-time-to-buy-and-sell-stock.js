/**
 * @param {number[]} prices
 * @return {number}
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

var maxProfit = function(prices) {
    let L = 0;
        let R = 1;
        let maxProfit = 0;

        while (R < prices.length) {
            while (prices[R] < prices[L]) {
                L = R;
                R++;
            }

            let newProfit = prices[R] - prices[L];

            if (maxProfit < newProfit) {
                maxProfit = newProfit;
            }

            R++;
        }

        return maxProfit;
}