/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
    let res = 0, n = grid.length
    for (let i = 0; i < n; i++) {
        let row = 0, col = 0
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0)
                res++;
            row = Math.max(row, grid[i][j])
            col = Math.max(col, grid[j][i])
        }
        res += row + col
    }
    return res
};