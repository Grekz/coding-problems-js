/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if ( !s || s.length < 1 ) return 0
    let cArr = s.split(''),
        dict = {},
        res  = prev = i = 0,
        len  = s.length
    while ( i < len ) {
        const c = cArr[i]
        if ( dict[c] >= prev ) {
            res = Math.max(i - prev, res)
            prev = dict[c] + 1
        }
        dict[c] = i++
    }
    return Math.max(len - prev, res)
};