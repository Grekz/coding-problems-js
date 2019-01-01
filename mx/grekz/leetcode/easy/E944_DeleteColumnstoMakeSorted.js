/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
    const lenA = A.length
    if (lenA === 0) return 0
    const lenW = A[0].length
    let res = 0
    for (let i = 0; i < lenW; i++)
        for (let j = 0; j < lenA - 1; j++)
            if (A[j][i].charCodeAt(0) > A[j + 1][i].charCodeAt(0)) {
                res++
                j = lenA
            }
    return res
};