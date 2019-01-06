/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
    let n = A.length, m = A[0].length
    let res = [...Array(m)].map(x => Array(n).fill(0))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            res[j][i] = A[i][j];
        }
    }
    return res
};