/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let indAns = 0
    let ind = 0
    let n = chars.length
    while ( ind < n ) {
        let c = chars[ind]
        let cc = 0
        while ( ind < n && c == chars[ind] ) {
            cc += 1
            ind += 1
        }
        chars[indAns] = c
        indAns += 1
        if ( cc > 1 ) {
            for ( let x of ( "" + cc ) ) {
                chars[indAns] = x
                indAns += 1
            }
        }
    }
    return indAns
};