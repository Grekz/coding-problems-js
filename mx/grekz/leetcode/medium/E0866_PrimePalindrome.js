/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function(n) {
    while ( true ) {
        if ( n == reverse(n) && isPrime(n) )
            return n
        ++n
        if ( 10000000 < n && n < 100000000 )
            n = 100000000
    }
};
const isPrime = n => {
    if ( n < 2 ) return false;
    const r = Math.floor(Math.sqrt(n))
    for ( let i = 2; i <= r; ++i )
        if ( n % i == 0 )
            return false
    return true
}
const reverse = n => {
    let res = 0
    while ( n > 0 ) {
        res = (10 * res) + (n % 10)
        n = Math.floor(n/10)
    }
    return res
}