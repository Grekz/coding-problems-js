/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const n = s.length
    let res = 0
    const max = 2 * n - 1
    for ( let i = 0; i <= max; i++ ) {
        let left = Math.floor(i / 2)
        let right = left + i % 2
        while ( left >= 0 && right < n && s.charAt(left) == s.charAt(right) ) {
            res++
            left--
            right++
        }
    }
    return res
};