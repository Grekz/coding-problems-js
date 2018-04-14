/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const la = grid.length, lb = grid[0].length
    let isla = 0, neig = 0
    for ( let i = 0; i < la; i++ ) {
        for (let j = 0; j < lb; j++) {
            if ( grid[i][j] == 1 ) {
                isla++
                if ( i < la - 1 && grid[i+1][j] == 1 )
                    neig++
                if ( j < lb - 1 && grid[i][j+1] == 1 )
                    neig++
            }
        }
    }
    return isla * 4 - neig * 2
};