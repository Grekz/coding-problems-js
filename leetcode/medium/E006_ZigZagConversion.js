/** https://leetcode.com/problems/zigzag-conversion
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if ( numRows < 2 )
        return s
    let res = Array.from(Array(numRows), () => ''), i = 0, dir = 1
    for( let x of s ) {
        res[i] += x
        if ( i == 0 )
            dir = 1
        else if ( i == numRows - 1 )
            dir = -1
        i += dir
    }
    return res.join('')
};