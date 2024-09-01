/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    let n = A.length, i = 0
    while ( i + 1 < n && A[i] < A[i + 1] ) i++  
    if ( i== 0 || i == n - 1 ) return false
    while ( i + 1 < n && A[i] > A[i + 1] ) i++
    return i == n - 1
};