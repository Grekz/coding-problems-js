/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if ( s.length < 2 ) return s
    let vows = "aeiouAEIOU"
    let i = 0
    let j = s.length - 1
    let st = s.split('')
    while ( i < j ){
        while ( i < j && vows.indexOf(st[i]) == -1 ) i++
        while ( i < j && vows.indexOf(st[j]) == -1 ) j--
        if ( i < j ) {
            let tmp = st[i]
            st[i] = st[j]
            st[j] = tmp
        }
        i+=1
        j-=1
    }
    return st.join('')
        
};