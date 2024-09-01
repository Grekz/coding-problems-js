/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if ( nums.length < 3 ) return nums.length
    let i = 0 
    for ( let n of nums )
        if ( i < 2 || nums[i - 2] < n )
            nums[i++] = n
    return i
};