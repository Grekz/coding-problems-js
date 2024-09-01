/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let t = [],
        res = 0,
        val = {
            'I' : 1,
            'V' : 5,
            'X' : 10,
            'L' : 50,
            'C' : 100,
            'D' : 500,
            'M' : 1000
        }
    for ( let c of s )
        t.push(val[c])
    for ( let x of t.slice(0,-1).entries() )
        res += ( x[1] < t[x[0]+1]  ? -1 : 1 ) * x[1]
    return res + t.pop()
};