/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s = s.trim()
    if ( s.length < 1 ) return 0
    return s.split(/ +/).length
};