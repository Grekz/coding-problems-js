/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let a = 0, b = -2147483648, c
    for ( const x of prices ) {
        c = a
        a = max(a, b + x)
        b = max(b, c - x - fee)
    }
    return a
};
const max = ( a, b ) => a < b ? b : a