/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if ( num == 0 ) return "0"
    const cc = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    let res = ""
    while ( num != 0 ) {
        res = cc[num & 15] + res
        num >>>= 4
    }
    return res
};