/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    let bal = 0, res = 0, prev = 0
    for ( const c of S ) {
        if ( c == '(')
            bal++
        else {
            bal--
            if ( prev == '(') {
                res += 1 << bal
            }
        }
        prev = c
    }
    return res
};