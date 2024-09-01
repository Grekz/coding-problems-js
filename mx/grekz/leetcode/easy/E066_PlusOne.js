/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let le = digits.length
    for ( let i = le - 1; i >= 0; i--) {
        if ( digits[i] < 9 ) {
            digits[i] += 1
            return digits
        }
        digits[i] = 0
    }
    digits.unshift(1)
    return digits
};