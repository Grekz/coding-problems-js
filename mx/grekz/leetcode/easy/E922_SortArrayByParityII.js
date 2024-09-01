/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    let i = 0, j = 1, res = Array(A.length).fill(0)
    for (let x of A) {
        if ((x & 1) == 0) {
            res[i] = x
            i += 2
        } else {
            res[j] = x
            j += 2
        }
    }
    return res
};