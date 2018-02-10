/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = 2147483647
    let result = 0
    for (let stockPrice of prices)
        if(stockPrice < buy)
            buy = stockPrice
        else if ( result < stockPrice - buy )
            result = stockPrice - buy
    return result
};