/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l = 0, h = nums.length - 1
    while ( l < h ) { 
        const mid = Math.floor( ( l + h ) / 2 )
        if ( nums[mid] < nums[mid + 1] ) 
            l = mid + 1
        else
            h = mid
    }
    return l
};