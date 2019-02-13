/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let counts = 0, end = 0, far = 0, n = nums.length - 1
    for (let i = 0; i < n; i++) {
        far = Math.max(far, i + nums[i])
        if (i == end) {
            counts++
            end = far
        }
    }
    return counts
};