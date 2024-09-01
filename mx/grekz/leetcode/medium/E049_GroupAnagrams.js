/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let m = {}
    for ( let s of strs ) {
        let key = s.split('').sort().join('')
        let l = m[key] || []
        m[key] = [...l, s]
    }
    return Object.values(m)
};