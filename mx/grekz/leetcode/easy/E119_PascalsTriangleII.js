/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [1]
    for ( let i = 0; i < rowIndex; i++ ) {
        for ( let j = res.length -1; j > 0; j-- ) {
            res[j] = res[j] + res[j-1]
        }
        res.push(1)
    }
    return res    
};