/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let n = s.length
    if ( n != t.length ) return false
    let a = new Array(256).fill(-1)
    let b = new Array(256).fill(-1)
    for ( let i = 0; i < n; i++ ) {
        let si = s.charAt(i), ti = t.charAt(i)
        if ( a[si] != b[ti] ) return false
        a[si] = i
        b[ti] = i
    }
    return true
};