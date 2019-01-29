/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let last = nums.length - 1
    // we start at the end
    for (let i = last; i >= 0; i--)
        // check if the jump gets to a good index
        if (i + nums[i] >= last)
            last = i
    return last == 0
};