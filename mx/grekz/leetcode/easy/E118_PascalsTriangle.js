/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = []
    let cur = []
    for ( let i = 0 ; i < numRows; i++ ) {
        for ( let j = cur.length-1;  j > 0; j-- ) {
            cur[j] = cur[j] + cur[j-1]
        }
        cur.push(1)
        res.push(cur.slice())
    }
    return res
};