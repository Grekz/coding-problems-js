/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    const cArr = S.toUpperCase().replace(/-/g,"")
    const le = cArr.length
    let s1 = le % K == 0 ? K : le % K
    let res = cArr.substring(0, s1)
    while ( le > s1 ) {
        res += "-" + cArr.substring(s1, s1+K)
        s1 += K
    }
    return res
};