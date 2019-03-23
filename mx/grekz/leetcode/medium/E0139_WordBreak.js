/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length + 1
    let f = Array(n).fill(false)
    let dic = {}
    for ( let x of wordDict ) {
        dic[x] = true
    }
    f[0] = true
    for ( let i = 1; i < n; i++ ) {
        for ( let j = 0; j < i; j++ ) {
            if ( f[j] && dic[s.substring(j,i)] ) {
                f[i] = true
                break;
            }
        }
    }
    return f[n - 1]
};