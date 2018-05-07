/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    S += "|"
    let res = []
    let ps = 0
    const n = S.length
    for( let i = 0; i < n; i++ ) {
        if ( S.charAt(i) != S.charAt(ps) ) {
            if ( i - ps > 2 ) {
                res.push([ps, i - 1])
            }
            ps = i
        }
    }
    return res
};