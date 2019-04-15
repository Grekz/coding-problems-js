/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
    const n = A.length
    for ( let i = n - 2 ; i >= 0; i-- ) {
        for ( let j = 0; j < n; j++ ) {
            let b = A[i+1][j]
            if ( j > 0 ) {
                b = Math.min( b, A[i+1][j-1] )
            }
            if ( j+1 < n )
                b = Math.min( b, A[i+1][j+1] )
            A[i][j] += b
        }
    }
    let res = 2147483647
    for ( let x of A[0] ) {
        res = Math.min(res, x)
    }
    return res
};