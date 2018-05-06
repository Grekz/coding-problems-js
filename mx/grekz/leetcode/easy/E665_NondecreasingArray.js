/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let n = nums.length
    let exists = false
    for ( let i = 1; i < n; i++ ) {
        if ( nums[i] < nums[i-1] ) {
            if ( exists ) {
                return false
            }
            exists = true
            if ( i > 1 && nums[i] < nums[i-2] ) {
                nums[i] = nums[i-1]
            }
        }
    }
    return true
};