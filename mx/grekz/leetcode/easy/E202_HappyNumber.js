/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if ( n < 1 || n == 4 ) return false
    if ( [1,7,10,13,19,23].includes(n) ) return true
    let res = 0
    while ( n > 0 ) {
        res += n%10 * (n%10)
        n = Math.floor( n  / 10 )
    }
    return isHappy(res)
};