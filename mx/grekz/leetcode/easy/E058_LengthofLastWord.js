/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    return s.length - s.lastIndexOf(' ') - 1
};