/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if ( n < 3 ) return 0
    if ( n == 3 ) return 1
    let tmp = new Array(n+1).fill(false)
    for ( let i = 2; i * i <= n; i++ ) {
        if ( !tmp[i] )
            for ( let j = i * 2 ; j <= n; j += i )
                tmp[j] = true
    }
    let res = 0
    for ( let i = 2; i < n; i++ ) {
        if ( !tmp[i] )
            res++
    }
    return res
};