/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    if (words.length < 2) return true
    let dict = {}, w = 0, wLen = words.length
    for (let c of order) dict[c] = w++
    for (let i = 1; i < wLen; i++) {
        if (compare(words[i - 1], words[i], dict) > 0)
            return false
    }
    return true
};

const compare = (aW, bW, d) => {
    const a = aW.length, b = bW.length
    let com = 0
    for (let i = 0; i < a && i < b && com === 0; i++) com = d[aW[i]] - d[bW[i]]
    return com === 0 ? a - b : com
}