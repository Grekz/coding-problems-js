/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(k == 0 || nums == null || nums.length < 2 ) { return false }
    let values = {}
    for (let i = 0; i < nums.length; i++) {
        if(values.hasOwnProperty(nums[i]) && ( i - values[nums[i]] <= k ) ){ return true }
        values[nums[i]] = i
    }
    return false
};