/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let n = grid.length, m = grid[0].length, res = 0
    let r = new Array(n).fill(0), c = new Array(m).fill(0)
    for ( let i = 0; i < n; i++ )
        for ( let j = 0; j < m; j++) {
            if ( r[i] < grid[i][j] )
                r[i] = grid[i][j]
            if ( c[j] < grid[i][j] )
                c[j] = grid[i][j]
        }
    for ( let i = 0; i < n; i++ )
        for ( let j = 0; j < m; j++)
            res += Math.min(c[j], r[i]) - grid[i][j]
    return res
};