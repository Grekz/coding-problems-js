/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let i = 0, j = nums.length - 1
    while ( i < j ) {
        const mid = i + Math.floor(( j - i ) / 2)
        if ( nums[mid] == nums[mid ^ 1] )
            i = mid + 1
        else
            j = mid
    }
    return nums[i]
};