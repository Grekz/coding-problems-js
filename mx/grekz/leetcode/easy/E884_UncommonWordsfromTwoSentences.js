/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const tmp  = A + " " + B
    let m = {}
    const getOrZero = x => m[x] || 0
    const increment = x => m[x] = getOrZero(x) + 1
    for ( let e of tmp.split(" ") )
        increment(e)
    let res = []
    for (const [key, value] of Object.entries(m))
        if ( value == 1 )
            res.push(key)
    return res
};