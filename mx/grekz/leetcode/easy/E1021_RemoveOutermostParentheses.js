/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let res = ''
    let c = 0
    for ( let x of S )
        if ( (x == '(' && c++ > 0 ) || ( x == ')' && c-- > 1 ) )
            res += x
    return res
};