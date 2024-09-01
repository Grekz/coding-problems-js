/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if ( n < 1 ) return "0";
    if ( n == 1 ) return "1";
    if ( n == 2 ) return "11";
    if ( n == 3 ) return "21";
    let arr = countAndSay( n - 1 ).split("");
    let cur = -1, count = 0;
    let res = "";
    for ( let i = 0; i < arr.length; i++ ) {
        let x = arr[i];
        if ( cur != x ) {
            if (count > 0)
                res += count + "" + cur;
            count = 1;
            cur = x;
        }else
            count++;
    }
    res += count + "" + cur;
    return res;
};