/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    const m = Math.min(...nums)
    let res = 0
    for ( let i of nums )
        res += i - m
    return res
};