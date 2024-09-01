/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
    let res = 0, bal = 0
    for (const x of S) {
        bal += x === '(' ? 1 : -1
        if (bal == -1) {
            bal++
            res++
        }
    }
    return bal + res
};