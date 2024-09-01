/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    const n = A.length
    let res = Array(n).fill(0)
    let i = 0, j = n - 1, k = n - 1
    while (i < n) A[i] *= A[i++]
    i = 0
    while (i <= j) res[k--] = A[A[i] < A[j] ? j-- : i++]
    return res
};