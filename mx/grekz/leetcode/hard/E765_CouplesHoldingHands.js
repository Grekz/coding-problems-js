/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    const n = row.length
    let res = 0, pos = Array(n).fill(0)
    for ( let i = 0; i < n; i++ ) pos[row[i]] = i
    for ( let i = 0; i < n; i += 2 ) {
        const pair = row[i] ^ 1
        if ( row[i + 1] != pair ) {
            row[pos[pair]] = row[i+1]
            pos[row[i+1]] = pos[pair]
            res++
        }
    }
    return res
};