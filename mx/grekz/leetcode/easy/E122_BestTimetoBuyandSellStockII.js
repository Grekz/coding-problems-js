/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0
    for ( let i = 0; i < prices.length - 1; i++ )
        if ( prices[i] < prices[i+1] )
            res += prices[i+1] - prices[i]
    return res
};