/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const str_str_helper = (haystack, needle, idx) => {
        let nLen = needle.length
        if ( haystack.length-idx < nLen ) { return -1 } 
        if ( haystack.substring(idx,(idx+nLen)) == needle ) { return idx } 
        return str_str_helper(haystack, needle, idx+1)
    }
    return str_str_helper(haystack,needle,0)
};