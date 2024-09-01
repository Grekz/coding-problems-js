/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    if (n == 0) return 1
    if (n == 1) return 10
    if (n == 2) return 91
    if (n > 10) return 0
    let res = 10, t = 9
    for (let i = 1; i < n; i++) {
        t *= 10 - i
        res += t
    }
    return res
};