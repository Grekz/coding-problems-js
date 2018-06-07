/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    const doit = x => {
        const n = x.length - 1
        let res = ""
        let c = 0
        const h = '#'
        for ( let i = n; i > -1; i-- ) {
            let cur = x.charAt(i)
            if ( cur == h )
                c++
            else if ( c > 0 )
                c--
            else
                res += cur
        }
        return res
    }
    return doit(S) === doit(T)
};