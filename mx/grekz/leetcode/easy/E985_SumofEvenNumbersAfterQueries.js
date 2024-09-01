/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    let cur = 0
    A.forEach( x => cur += ( (x & 1) == 0 ? x : 0) )
    let res = []
    for ( const [val, idx] of queries ) {
        if ( (A[idx] & 1) == 0 ) cur -= A[idx]
        A[idx] += val
        if ( (A[idx] & 1) == 0 ) cur += A[idx]
        res.push(cur)
    }
    return res
};