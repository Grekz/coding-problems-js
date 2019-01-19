/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
    A.sort((a, b) => a - b)
    for (let i = A.length - 1; i > 1; i--)
        if (A[i - 1] + A[i - 2] > A[i])
            return A[i - 2] + A[i - 1] + A[i]
    return 0
};