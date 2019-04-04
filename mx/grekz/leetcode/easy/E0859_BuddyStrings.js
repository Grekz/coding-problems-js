/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    const a = A.length, b = B.length
    if ( a !== b ) return false
    if ( A !== B ) {
        let xa = -1, xb = 2, ya = -1, yb = 4
        for ( let i = 0; i < a; i++ )
            if ( A.charAt(i) != B.charAt(i) )
                if ( xa == -1 ) {
                    xa = A.charAt(i)
                    yb = B.charAt(i)
                }else if ( ya == -1 ) {
                    ya = A.charAt(i)
                    xb = B.charAt(i)
                }else{
                    return false
                }
        return ya == yb && xa == xb
    }else{
        let x = Array(26).fill(0)
        for ( let y of A ) x[y.charCodeAt(0) - 97] += 1 
        for ( let z of x ) if ( z > 1 ) return true
    }
    return false
};