/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
    let n = 0, k = K - 1
    while ( k > 0 ) {
        k &= k - 1
        n += 1
    }
    return n & 1
};