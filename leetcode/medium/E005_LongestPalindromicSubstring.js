/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const h = '#'
    let t = ['$', h]
    for ( let x of s.split('') ) {
        t.push(x)
        t.push(h)
    }
    t.push('%')
    let c = r = maxC = maxP = 0;
    let p = new Array(t.length)
    p.fill(0)
    for ( let i = 1; i < t.length; i++) {
        if ( i < r ) {
            const mirr = 2*c - i
            p[i] = Math.min(r - i, p[mirr])
        }
        while(t[i - (1 + p[i])] == t[i + (1 + p[i])]) p[i]++
        if ( i + p[i] > r ) {
            c = i
            r = i + p[i]
            if ( p[i] > maxP ) {
                maxC = c
                maxP = p[i]
            }
        }
    }
    const start = (maxC - maxP) / 2, end = (maxC + maxP) / 2
    return s.substring(start, end)
};