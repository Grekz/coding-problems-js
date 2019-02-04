/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let cols = Array(n).fill(false), d1 = Array(n * 2).fill(false), d2 = Array(n * 2).fill(false)
    return bt(0, cols, d1, d2, n, 0)
};
const bt = (row, cols, d1, d2, n, count) => {
    if (row == n) return count + 1
    for (let c = 0; c < n; c++) {
        const id1 = c - row + n
        const id2 = c + row
        if (!(cols[c] || d1[id1] || d2[id2])) {
            cols[c] = true
            d1[id1] = true
            d2[id2] = true
            count = bt(row + 1, cols, d1, d2, n, count)
            cols[c] = false
            d1[id1] = false
            d2[id2] = false
        }
    }
    return count
}