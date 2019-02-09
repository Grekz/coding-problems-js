/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let stack = Array(T.length).fill(0), res = Array(T.length).fill(0), n = T.length
    let top = -1
    for (let i = 0; i < n; i++) {
        while (top >= 0 && T[i] > T[stack[top]]) {
            let id = stack[top]
            res[id] = i - id
            top--
        }
        top++
        stack[top] = i
    }
    return res
};