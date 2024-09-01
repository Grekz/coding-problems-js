/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let s = new Set(nums), res = 0
    for ( let x of nums )
        if ( !s.has( x - 1 ) ) {
            let y = x + 1
            while ( s.has(y) ) y++
            res = Math.max(res, y - x)
        }
    return res
};