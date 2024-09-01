/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
    let right = S.length, left = 0, res = []
    for (let x of S)
        res.push(x === "I" ? left++ : right--)
    res.push(right)
    return res
};