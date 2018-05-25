/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let res = 1
    for ( let i = 1; i < m; i++ ) {
        res = res * ( i + n - 1) / i
    }
    return res
};