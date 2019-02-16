/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
    let tmp = 0, res = 0, n = A.length
    for (let i = 2; i < n; i++) {
        if (A[i] - A[i - 1] == A[i - 1] - A[i - 2]) {
            tmp++
            res += tmp
        } else {
            tmp = 0
        }
    }
    return res
};