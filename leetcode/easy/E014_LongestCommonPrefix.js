/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if ( !strs || strs.length < 1 ) 
        return ""
    let res = strs.shift()
    for ( s of strs ) {
        while ( !s.startsWith(res) )
            res = res.slice(0,-1)
    }
    return res
};