/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    let m = nums.length
    let n = nums[0].length
    if ( m * n != r * c ) {
        return nums
    }
    let res = Array(r).fill(0).map(() => Array(c).fill(0))
    let i = 0
    for ( let curArr of nums ) {
        for ( let cur of curArr ) {
            let ir = Math.floor(i/c)
            let ic = i%c
            res[ir][ic] = cur
            i += 1
        }
    }
    return res
};