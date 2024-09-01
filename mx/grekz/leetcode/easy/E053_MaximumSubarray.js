/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res, cur;
    cur = res = nums[0];
    for (let i = 1; i < nums.length; i++){
        cur = Math.max(cur+nums[i], nums[i]);
        res = Math.max(cur,res);
    }
    return res;
};