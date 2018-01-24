/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let a = 0, b = nums.length - 1;
    while( a <= b) {
        let m = Math.floor(( a + b ) / 2);
        if ( nums[m] === target ) {return m;}
        if ( nums[m] > target )
            b = m - 1;
        else
            a = m + 1;
    }
    return a;
};