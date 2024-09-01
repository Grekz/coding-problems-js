/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let m = {}
    const get = x => m[x] || 0
    for (let a of A)
        for (let b of B)
            m[a+b] = get(a+b) + 1
    let res = 0
    for (let a of C)
        for (let b of D)
            res += get(-(a+b))
    return res
};