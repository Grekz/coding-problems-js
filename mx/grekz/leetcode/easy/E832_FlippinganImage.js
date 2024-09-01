/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map( x => x.reverse().map( y => y ^ 1))
};