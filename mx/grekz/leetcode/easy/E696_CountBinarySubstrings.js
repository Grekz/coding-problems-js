/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    let res = 0, p = 0, c = 1, n = s.length
    for (let i = 1; i < n; i++)
        if (s.charAt(i) != s.charAt(i - 1)) {
            res += Math.min(p, c)
            p = c
            c = 1
        } else {
            c++
        }
    return res + Math.min(p, c)
};