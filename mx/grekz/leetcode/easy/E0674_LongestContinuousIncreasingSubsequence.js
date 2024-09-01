/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let res = 0
    let count = 0
    const n = nums.length
    for ( let i = 0; i < n; i++ ) {
        if ( i < 1 || nums[i-1] < nums[i] )
            res = Math.max(res, ++count)
        else 
            count = 1
    }
    return res
};