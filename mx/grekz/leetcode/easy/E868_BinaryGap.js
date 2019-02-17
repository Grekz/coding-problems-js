/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function (N) {
    let l = -1, res = 0
    for (let i = 0; i < 32; i++) {
        if (((N >> i) & 1) > 0) {
            if (l >= 0) {
                res = Math.max(res, i - l)
            }
            l = i
        }
    }
    return res
};