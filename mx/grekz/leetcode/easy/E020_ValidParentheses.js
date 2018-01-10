/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if ( s == null || s.length < 1 ) 
        return true
    if ( s.length == 1 ) 
        return false
    const open = "({[", 
          close = ")}]"
    let stack = [];
    for ( let cur of s ) {
        if (open.indexOf(cur) != -1 ) 
            stack.push(cur);
        else if ( stack.length < 1 || open.indexOf(stack.pop()) != close.indexOf(cur) ) 
            return false;
    }
    return stack.length == 0;
};