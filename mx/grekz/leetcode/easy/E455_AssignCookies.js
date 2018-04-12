/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    const comp = (a,b) => { return a - b }
    g.sort(comp)
    s.sort(comp)
    let gi = 0, si = 0
    let ng = g.length, ns = s.length
    while ( gi < ng && si < ns ){
        if ( g[gi] <= s[si++] ){
            gi++
        }
    }
    return gi
};