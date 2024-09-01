/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    let res = s.length
    for ( let c of letters ) {
        let lInd = s.indexOf(c)
        if ( lInd != -1 && lInd == s.lastIndexOf(c) && res > lInd ) {
            res = lInd
        }
    }
    return s.length == res ? -1 : res
};