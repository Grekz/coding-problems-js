/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let b = n.toString(2)
    return !b.includes('11') && !b.includes('00')
};