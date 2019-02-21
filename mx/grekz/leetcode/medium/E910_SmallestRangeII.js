/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeII = function (A, K) {
    A.sort((a, b) => a - b)
    const n = A.length - 1
    let res = A[n] - A[0]
    for (let i = 0; i < n; i++) {
        const a = A[i], b = A[i + 1]
        const h = Math.max(A[n] - K, a + K)
        const l = Math.min(A[0] + K, b - K)
        res = Math.min(res, h - l)
    }
    return res
};