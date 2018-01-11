/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    res = [];
    btHelper(res, "", 0, 0, n);
    return res;
};
var btHelper = (res, str, open, close, max) => {
    if ( open + close == max * 2) {
        res.push(str);
    }
    if ( open < max ) 
        btHelper(res, str + "(", open + 1, close, max);
    if ( close < open ) 
        btHelper(res, str + ")", open, close + 1, max);
};