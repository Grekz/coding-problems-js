/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x < 0 ? -1 : 1,
        res  = 0
    x *= sign
    while ( x > 0 ) {
        res = res*10 + x%10
        x = Math.floor(x/10)
    }
    return res < 2**31 ? sign * res : 0
};