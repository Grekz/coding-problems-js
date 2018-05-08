/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let n = bits.length - 1
    if ( n < 1 )
        return true
    for ( let i = n - 1; i >= 0; i-- ) {
        if ( bits[i] == 0 ) {
            return (( n - i ) & 1) === 1
        }
    }
    return (( n - 1 ) & 1) === 1
};