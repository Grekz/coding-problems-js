/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let m = matrix.length - 1
    let n = matrix[0].length - 1
    for ( let i = 0; i < m; i++ ) 
        for ( let j = 0 ; j < n ; j++) 
            if ( matrix[i][j] != matrix[i+1][j+1] )
                return false
    return true
};