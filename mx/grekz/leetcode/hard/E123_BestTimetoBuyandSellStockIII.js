/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profitA = 0, buyA = -2147483648
    let profitB = 0, buyB = buyA, i = 0
    for ( let cur of prices ) {
        if ( i > 2 )
            profitB = Math.max(profitB, buyB + cur)
        if ( i > 1 )
            buyB = Math.max(buyB, profitA - cur)
        profitA = Math.max(profitA, buyA + cur)
        buyA = Math.max(buyA,-cur)
        i++
    }
    return Math.max(profitA, profitB)
};