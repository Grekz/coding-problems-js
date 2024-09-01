/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const n = popped.length
    if ( n != pushed.length ) return false
    let stack = []
    let j = 0
    for ( let x of pushed ) {
        stack.push(x)
        while ( stack.length > 0 && j < n && stack[stack.length-1] == popped[j] ) {
            stack.pop()
            j++
        }
    }
    return n === j
};