/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let res = 0, val = 0
    let rounds = []
    for ( let s of ops ) {
        let last = rounds.length - 1
        if ( s == "C" ) {
            val = -rounds[last]
            rounds.pop()
        } else {
            if ( s == "+" ) {
                val = rounds[last] + rounds[last-1]
            }else if ( s == "D" ){
                val = 2 * rounds[last]
            }else{
                val = parseInt(s, 10, 0)
            }
            rounds.push(val)
        }
        res += val
    }
    return res
};