/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const n = nums.length
    if ( n < 2 ) return -1
    for ( let i = 0; i < n; i++ ) {
        const cur = Math.abs(nums[i]) - 1
        if ( nums[cur] < 0 )
            return cur + 1
        nums[cur] = -nums[cur]
    }
    return -1
};