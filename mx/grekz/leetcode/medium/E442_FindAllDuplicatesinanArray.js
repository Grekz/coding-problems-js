/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        const cur = Math.abs(nums[i]) - 1
        if (nums[cur] < 0) res.push(cur + 1)
        else nums[cur] = -nums[cur]
    }
    return res
};