/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    const swap = (a, b) => {
        const x = nums[a]
        nums[a] = nums[b]
        nums[b] = x
    }
    let n = nums.length - 1
    let i = n - 1, j = n
    while (i >= 0 && nums[i] >= nums[i + 1]) i--
    console.log(i)
    if (i >= 0) {
        while (nums[i] >= nums[j--]);
        swap(i, j + 1)
    }
    while (i < n) swap(++i, n--)
};