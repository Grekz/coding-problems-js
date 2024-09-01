/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    if ( n < 10 )
        return n
    n -= 1
    let digitInNumber = 1
    let rangeNumber = 1
    while (n / 9 / rangeNumber / digitInNumber >= 1) {
        n -= 9 * rangeNumber * digitInNumber
        digitInNumber+=1
        rangeNumber *= 10
    }
    let res = rangeNumber + n/digitInNumber + ""
    return parseInt(res.charAt(n%digitInNumber))
};