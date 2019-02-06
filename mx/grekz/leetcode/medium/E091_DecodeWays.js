/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (s == null || s.length < 1 || s.charAt(0) == '0')
        return 0
    let res = [1, 1]
    const ZERO = '0', ONE = '1', TWO = '2', SEVEN = '7'
    for (let i = 2; i <= s.length; i++) {
        const a = s.charAt(i - 2), b = s.charAt(i - 1)
        res.push(0)
        if (b != ZERO)
            res[i] = res[i - 1]

        if (a == ONE || (a == TWO && b < SEVEN))
            res[i] += res[i - 2]
    }
    return res[res.length - 1]
};