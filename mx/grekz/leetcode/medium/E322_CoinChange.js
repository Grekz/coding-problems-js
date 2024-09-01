/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const max = amount + 1, n = coins.length
    let dp = Array(max).fill(max)
    dp[0] = 0
    for ( let i = 1; i < max; i++ ) {
        for ( let j = 0; j < n; j++ ) {
            if ( coins[j] <= i ) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }
    if ( dp[amount] <= amount ) {
        return dp[amount]
    }
    return -1
};