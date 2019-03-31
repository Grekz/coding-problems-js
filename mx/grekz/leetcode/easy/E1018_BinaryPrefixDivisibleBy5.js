/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    let tmp = 0
    let res = []
    for ( let x of A ) {
        tmp = ( ( tmp << 1 ) + x ) % 5
        res.push( tmp == 0 )
    }
    return res
};