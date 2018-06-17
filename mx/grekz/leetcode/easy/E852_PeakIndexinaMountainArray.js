/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let i = 0, m = -2147483648, res = 0
    for ( let x of A ) {
        if ( m < x ) {
            m = x
            res = i
        }
        i++
    }
    return res
};