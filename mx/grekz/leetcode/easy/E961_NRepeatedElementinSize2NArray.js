/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
    let c = {}
    for (let x of A) {
        if (!!c[x])
            return x
        c[x] = true
    }
    return -1
};