/**
 * @param {number[]} A
 * @return {number}
 */
var countTriplets = function (A) {
    let res = 0
    let tmp = new Map()
    for (let a of A)
        for (let b of A)
            tmp.set(a & b, (tmp.get(a & b) || 0) + 1)
    for (let [key, value] of tmp)
        for (let b of A)
            if ((key & b) == 0)
                res += value
    return res
};