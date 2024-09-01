/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n < 1 ) return false;
    let hasOne = false;
    for(let i = 0 ; i < 32; i++){
        let cur = n & 1
        if( cur == 1 ){
            if(hasOne) return false;
            else hasOne = true;
        }
        n >>= 1;
    }
    return true;
};