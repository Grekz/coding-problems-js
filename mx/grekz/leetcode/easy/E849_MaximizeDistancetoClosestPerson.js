/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let i = 0, j = 0, res = 0, n = seats.length;
    for ( let cur of seats ) {
        if ( cur == 1 ) {
            if ( i == 0 ) 
                res = Math.max(res, j - i)
            else
                res = Math.max(res, Math.floor((j - i + 1) / 2))
            i = j + 1
        }
        j++
    }
    res = Math.max(res, n - i)
    return res
};