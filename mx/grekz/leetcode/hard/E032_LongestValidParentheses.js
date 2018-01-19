/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if (s == null || s.length < 2) return 0;
    let cArr = s.split("");
    let res = 0;
    let stack = [];
    stack.push(-1);
    for(let i = 0; i < cArr.length; i++){
        if (cArr[i] == '('){
            stack.push(i);
        }else{
            stack.pop();
            if (stack.length > 0){
                res = Math.max(res, i - stack[stack.length-1] );
            }else{
                stack.push(i);
            }
        }
    }
    return res;
};