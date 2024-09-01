/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    const a = version1.split("."), b = version2.split(".")
    const n = Math.max(a.length, b.length)
    for (let i = 0; i < n; i++) {
        const c = parseInt(a[i] || 0, 10) - parseInt(b[i] || 0, 10)
        if (c > 0)
            return 1
        else if (c < 0)
            return -1
    }
    return 0
};