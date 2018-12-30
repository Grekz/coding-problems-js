/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    let i = 0, j = A.length - 1
    while (i < j) {
        let cur = A[i]
        if (cur % 2 != 0) {
            A[i] = A[j]
            A[j] = cur
            j -= 1
        } else {
            i += 1
        }
    }
    return A
};