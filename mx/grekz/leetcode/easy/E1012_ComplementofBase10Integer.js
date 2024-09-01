/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    let a = 1
    while ( a < N ) a = a * 2 + 1
    return a - N
};