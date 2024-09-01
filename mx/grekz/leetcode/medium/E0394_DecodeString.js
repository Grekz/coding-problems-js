/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = []
    let res = ''
    const n = s.length
    for ( let i = 0; i < n; i++ ) {
        let cur = s.charAt(i)
        if ( isDigit(cur) ) {
            let tmpDig = ''
            while (isDigit(cur)) {
                tmpDig += cur
                cur = s.charAt(++i)
            }
            stack.push(res)
            stack.push(tmpDig)
            res = ''
        } else if ( cur === ']' ) {
            let tmpRes = ''
            for( let times = parseInt(stack.pop(), 10) ; times > 0 ; times-- ) tmpRes += res
            res = stack.pop() + tmpRes
        } else {
            res += cur
        }
    }
    return res
};
const isDigit = x => !isNaN(parseInt(x, 10))