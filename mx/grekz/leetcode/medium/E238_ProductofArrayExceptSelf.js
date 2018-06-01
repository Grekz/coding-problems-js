/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let p = [], n = nums.length, t = 1
    for ( let i = 0; i < n; i++ ) {
        p[i] = t
        t *= nums[i]
    }
    t = 1
    for ( let i = n - 1; i > -1; i-- ) {
        p[i] *= t
        t *= nums[i]
    }
    return p
};