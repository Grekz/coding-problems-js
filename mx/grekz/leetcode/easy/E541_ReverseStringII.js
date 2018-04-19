/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let cArr = s.split("")
    let n = cArr.length
    for( let i = 0; i < n; i = i + 2 * k ){
        let ii = i, j = i + k - 1 > n - 1 ? n - 1 : i + k - 1
        while ( ii < j ) {
            let tmp = cArr[ii]
            cArr[ii++] = cArr[j]
            cArr[j--] = tmp
        }
    }
    return cArr.join("")
};