/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = Math.sqrt(5),
        b = Math.pow( (1 + a) / 2 , n + 1),
        c = Math.pow( (1 - a) / 2 , n + 1)
    return ( 1/a * ( b - c ) )
};