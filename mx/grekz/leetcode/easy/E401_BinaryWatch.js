/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    let res = []
    for ( let i = 0; i < 12; i++ )
        for ( let j = 0; j < 60; j++ ){
            let a = i.toString(2).split('').filter(v => +v).length
            let b = j.toString(2).split('').filter(v => +v).length
            if ( a + b == num ) {
                res.push(i + ":" + (j < 10 ? "0" : "") + j )
            }
        }
    return res
};