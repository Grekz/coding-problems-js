/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
    let inc = true, dec = true
    for (let i = 1; i < A.length; i++) {
        inc = inc && A[i - 1] <= A[i]
        dec = dec && A[i - 1] >= A[i]
    }
    return inc || dec
};