/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length
    let tmp = Array(n).fill(1)
    for ( let i = 1; i < n; i++ )
        if ( ratings[i] > ratings[i-1] )
            tmp[i] = tmp[i - 1] + 1
    let res = tmp[n - 1]
    for ( let i = n - 2; i >= 0; i-- ){
        if ( ratings[i] > ratings[i+1] )
            tmp[i] = Math.max(tmp[i], tmp[i+1] + 1)
        res += tmp[i]
    }
    return res
};