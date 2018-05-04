/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    let a = m , b = n
    for ( let x of ops ) {
        a = Math.min(a, x[0])
        b = Math.min(b, x[1])
    }
    return a * b
};