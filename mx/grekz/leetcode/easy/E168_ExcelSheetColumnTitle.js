/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
	if ( n == 0 ) return ""
	let res = ""
	while ( n-- > 0 ) {
	    res = String.fromCharCode( 65 + n%26 ) + res
	    n = Math.floor(n/26)
	}
	return res
};