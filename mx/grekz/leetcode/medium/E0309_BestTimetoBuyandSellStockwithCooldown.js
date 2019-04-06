/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let a = 0,b = 0, c = -2147483648
    for (const price of prices) {
        const d = b
        b = Math.max(b, c + price)
        c = Math.max(c, a - price)
        a = d
    }
    return b
};