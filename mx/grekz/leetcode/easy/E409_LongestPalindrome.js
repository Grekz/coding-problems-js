/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let tmp = Array(58).fill(false)
    let res = 0
    for ( let c of s ){
        let t = c.charCodeAt(0) - 65
        if ( tmp[t] )
            res += 2
        tmp[t] = !tmp[t]
    }
    if ( res != s.length )
        res += 1
    return res
};