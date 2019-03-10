/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const pn = p.length, tn = s.length;
    let dp = [...Array(tn+1)].map(x=>Array(pn+1).fill(false))       
    dp[tn][pn] = true
    for ( let i = tn; i >= 0; i-- ) {
        for ( let j = pn - 1; j >= 0; j-- ) {
            const fm = i < tn && (s.charAt(i) == p.charAt(j) || p.charAt(j) == '.')
            if ( j + 1 < pn && p.charAt(j+1) == '*' ) {
                dp[i][j] = dp[i][j+2] || fm && dp[i+1][j]
            }else{
                dp[i][j] = fm && dp[i+1][j+1]
            }
        }
    }
    return dp[0][0]
};