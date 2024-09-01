/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const isAlphaNumeric = ch => {
        return ch.match(/^[a-z0-9]+$/i) !== null;
    }
    let i = 0
    let j =s.length -1
    while (i < j ){
        while (i < j && !isAlphaNumeric(s[i]))
            i +=1
        while (i < j && !isAlphaNumeric(s[j]))
            j -=1
        if ( s[i].toLowerCase() != s[j].toLowerCase() )
            return false
        i+=1
        j-=1
    }
    return true
};