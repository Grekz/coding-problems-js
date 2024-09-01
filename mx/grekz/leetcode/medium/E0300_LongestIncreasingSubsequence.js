/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length
    if ( n < 1 ) {
        return 0
    }
    let dp = Array(n).fill(0), res = 1
    dp[0] = 1
    for ( let i = 1; i < n; i++ ) {
        let val = 0
        for ( let j = 0; i > j; j++ ) {
            if ( nums[i] > nums[j] ) {
                val = Math.max(val, dp[j])
            }
        }
        dp[i] = val + 1
        res = Math.max(res, dp[i])
    }
    return res
}