/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    let ans = []
    for ( const x of words )
        if ( check(x, pattern))
            ans.push(x)
    return ans
};

const check = (a, b) => {
    let dict = {}
    let i = 0
    for ( const x of a.split('') ) {
        const bChar = b.charAt(i++)
        if ( !dict[x] )
            dict[x] = bChar
        if ( dict[x] !== bChar )
            return false
    }
    
    let arr = Array(26).fill(false)
    for ( const x of Object.values(dict) ) {
        const g = x.charCodeAt(0) - 97
        if ( arr[g] )
            return false
        arr[g] = true
    }
    
    return true
}