/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let idx = -1
    for (const c of s) {
        idx = t.indexOf(c, idx + 1)
        if (idx == -1)
            return false
    }
    return true
};