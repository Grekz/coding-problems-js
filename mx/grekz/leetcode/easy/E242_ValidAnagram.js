/**
 * @author grekz
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length ) return false
    let tmp = new Array(26).fill(0)
    for( let c of s ) {
        tmp[c.charCodeAt(0) - 97] += 1
    }
    for( let c of t ) {
        if ( tmp[c.charCodeAt(0) - 97]-- == 0 ) {
            return false
        }
    }
    return true
};