/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function (A) {
    const rows = A.length, cols = A[0].length
    let ans = 0
    for (let c = 0; c < cols; c++) {
        let col = 0
        for (let r = 0; r < rows; r++)
            col += A[r][c] ^ A[r][0]
        ans += Math.max(col, rows - col) * (1 << (cols - c - 1))
    }
    return ans
};