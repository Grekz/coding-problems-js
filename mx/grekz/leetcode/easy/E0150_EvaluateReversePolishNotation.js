/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    for ( const item of tokens ) {
        stack.push( isOp(item) ? doOp(stack.pop(), stack.pop(), item) : Number(item) )
    }
    return stack[stack.length - 1]
};
const isOp = x => x == '+' || x == '-' || x == '/' || x == '*'
const doOp = ( a, b, op ) => {
    if ( op == '-' )
        return b - a
    if ( op == '+' ) 
        return b + a
    if ( op == '*' )
        return b * a
    return Math.trunc( 1 / a * b)
}