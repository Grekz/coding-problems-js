/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let cc = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let s = new Set()
    for ( let w of words ) {
        let x = ""
        for ( let c of w ) {
            x += cc[c.charCodeAt(0)-97]
        }
        s.add(x)
    }
    return s.size
};