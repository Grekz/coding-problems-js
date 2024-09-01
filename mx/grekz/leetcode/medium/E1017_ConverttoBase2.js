/**
 * @param {number} N
 * @return {string}
 */
var baseNeg2 = function(N) {
    let res = ''
    while ( N != 0 ) {
        res = (N & 1) + '' + res
        N = -(N >> 1)
    }
    return res === '' ? '0' : res
};