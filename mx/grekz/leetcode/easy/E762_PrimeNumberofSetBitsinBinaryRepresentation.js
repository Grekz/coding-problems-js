/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
/* #JSRange */
var countPrimeSetBits = function(L, R) {
    let x = [...Array(R-L+1).keys()].map((x, y) => 665772 >> (L + y).toString(2).split('').filter(v => +v).length & 1).reduce((a,b)=> a+b)
    return x
};