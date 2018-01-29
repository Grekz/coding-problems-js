/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let r = x;
    while ( r * r > x ) {
        r = Math.floor(( r + x / r ) / 2);
    }
    return r;
};