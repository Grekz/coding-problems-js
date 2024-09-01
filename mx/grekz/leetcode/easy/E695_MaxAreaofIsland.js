/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0
    let n = grid.length
    let m = grid[0].length
    const doit = (x,y) => {
        if ( x < 0 || y < 0 || x >= n || y >= m || grid[x][y] == 0 )
            return 0
        grid[x][y] = 0
        return 1 + doit(x+1, y)+ doit(x-1, y)+ doit(x, y+1)+ doit(x, y-1)
    }
    for ( let i = 0; i < n; i++ ) 
        for ( let j = 0; j < m; j++ ) 
            if ( grid[i][j] == 1 )
                maxArea = Math.max(maxArea, doit(i,j))
    return maxArea
};