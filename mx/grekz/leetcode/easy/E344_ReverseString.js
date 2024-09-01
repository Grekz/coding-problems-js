/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let strArr = s.split(''), mid = strArr.length/2-1;
    for(let i = 0; i <= mid; i++){
        let temp = strArr[i];
        strArr[i] = strArr[strArr.length - 1 - i];
        strArr[strArr.length - 1 - i] = temp;
    }
    return strArr.join('');
};