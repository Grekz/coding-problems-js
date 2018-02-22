/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length
    k %= n
    if ( n == 0 || k == 0 ) return;
    const reverse = ( i, j ) => {
        while ( i < j ) {
            let tmp = nums[i]
            nums[i++] = nums[j]
            nums[j--] = tmp
        }            
    }
    reverse(0, n-1)
    reverse(0, k-1)
    reverse(k, n-1)
};