/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    const mine = x => x.charCodeAt(0) - 97
    let t = new Array(26).fill(0)
    let res = ""
    for ( let x of T ) t[mine(x)]++
    for ( let x of S )
        while ( t[mine(x)]-- > 0 )
            res += x
    for ( let x of T )
        while ( t[mine(x)]-- > 0 )
            res += x
    return res
};