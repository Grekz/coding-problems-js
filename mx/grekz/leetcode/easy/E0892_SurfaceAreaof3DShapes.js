/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let n = grid.length, ans = 0
    for ( let i = 0; i < n; i++ ) {
        for ( let j = 0; j < n; j++ ) {
            const v = grid[i][j]
            if ( v > 0 ) {
                ans += 4 * v + 2
            }
            if ( i > 0 ) {
                ans -= Math.min(v, grid[i-1][j]) * 2
            }
            if ( j > 0 ) {
                ans -= Math.min(v, grid[i][j-1]) * 2
            }
        }    
    }
    return ans
};