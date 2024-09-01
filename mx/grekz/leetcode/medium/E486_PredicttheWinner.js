/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    const n = nums.length
    let dp = Array(n).fill(0)
    for ( let i = n; i >= 0; i-- )
        for ( let j = i + 1; j < n; j++ ) {
            const a = nums[i] - dp[j]
            const b = nums[j] - dp[j - 1]
            dp[j] = Math.max(a, b)
        }
    return dp[n - 1] >= 0
};