/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    const rows = board.length
    const cols = board[0].length
    let ans = 0
    let posR = 0
    let posC = 0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] == 'R') {
                posR = i
                posC = j
                break;
            }
        }
    }
    for (let i = posR + 1; i < rows; i++)
        if (board[i][posC] !== '.') {
            if (board[i][posC] === 'p')
                ans += 1
            break
        }

    for (let i = posR - 1; i >= 0; i--)
        if (board[i][posC] !== '.') {
            if (board[i][posC] === 'p')
                ans += 1
            break
        }

    for (let i = posC + 1; i < cols; i++)
        if (board[posR][i] !== '.') {
            if (board[posR][i] === 'p')
                ans += 1
            break
        }

    for (let i = posC - 1; i >= 0; i--)
        if (board[posR][i] !== '.') {
            if (board[posR][i] === 'p')
                ans += 1
            break
        }
    return ans
};