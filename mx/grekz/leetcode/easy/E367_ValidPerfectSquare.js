/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let r = num
    while ( r * r > num )
        r = Math.floor(( r + Math.floor(num / r) ) / 2)
    return r * r == num
};