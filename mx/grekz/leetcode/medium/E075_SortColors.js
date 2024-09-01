/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const swap = (a,b) => {
        let t = nums[a]
        nums[a] = nums[b]
        nums[b] = t
    }
    let j = 0, k = nums.length - 1
    for ( let i = 0; i <= k; i++ ) {
        if ( nums[i] == 0 )
            swap(i, j++)
        else if ( nums[i] == 2 )
            swap(i--, k--)
    }
};