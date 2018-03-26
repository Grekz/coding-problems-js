/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let r = 0
    for( let x of s )
        r ^= x.charCodeAt(0)
    for( let x of t )
        r ^= x.charCodeAt(0)
    return String.fromCharCode(r)
};