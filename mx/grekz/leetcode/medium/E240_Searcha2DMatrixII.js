/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rs = matrix.length
    if ( rs > 0 ) {
        let r = 0, c = matrix[0].length - 1
        while ( r < rs && c > -1 ) {
            let cur = matrix[r][c]
            if ( cur == target )
                return true
            if ( cur > target )
                c--
            else
                r++
        }
    }
    return false
};