/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let n = S.length
    let res = [...new Array(n)].map(x => 0)
    let pos = -n
    for (let i = 0; i < n; i++ ) {
        if ( S[i] == C ){
            pos = i
        }else{
            res[i] = i - pos
        }
    }
    for (let i = n-1; i >= 0; i-- ) {
        if ( S[i] == C ){
            pos = i
        }else{
            res[i] = Math.min(res[i], Math.abs(i - pos))
        }
    }
    return res
};