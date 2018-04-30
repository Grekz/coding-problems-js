/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    let vowels = "aeiouAEIOU"
    let res = ""
    let i = 1
    for ( let c of S.split(" ") ) {
        res += " "
        const curChar = c.charAt(0);
        if ( vowels.indexOf(curChar) > -1 ) {
            res += c
        }else{
            res += c.substring(1) + c.charAt(0) 
        }
        res += "ma"
        for (let j = 0; j < i; j++) {
            res += "a"
        }
        i += 1
    }
    return res.substring(1)
};