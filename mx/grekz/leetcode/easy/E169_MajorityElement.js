/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if ( nums.length < 1 ) return -1
    if ( nums.length < 3 ) return nums[0]
    let res = 0, count = 0
    for ( let x of nums ) {
        if ( count == 0 ) res = x
        if ( res == x )
            count++
        else
            count--
    }
    return res
};