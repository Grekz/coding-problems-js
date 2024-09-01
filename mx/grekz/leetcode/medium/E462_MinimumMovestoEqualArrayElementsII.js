/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
    nums.sort((a, b) => a - b)
    let i = 0, res = 0, j = nums.length - 1
    while (i < j) {
        res += nums[j] - nums[i]
        j -= 1
        i += 1
    }
    return res
};