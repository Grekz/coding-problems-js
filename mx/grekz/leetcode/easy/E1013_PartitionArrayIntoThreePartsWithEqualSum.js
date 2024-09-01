/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    let sum = 0
    for ( const x of A ) sum += x
    if ( sum % 3 != 0 ) return false
    sum = Math.floor(sum / 3)
    let segments = 0, tmp = 0
    for ( const x of A ) {
        tmp += x
        if ( tmp == sum ) {
            tmp = 0
            segments++
        }
    }
    return segments == 3
};