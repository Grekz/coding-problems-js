/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    let lastLength = 0
    let lines = 0
    for (let c of S ){
        let curWidth = widths[c.charCodeAt(0) - 97]
        if (lastLength + curWidth > 100){
            lines += 1
            lastLength = curWidth
        } else
            lastLength += curWidth
    }
    if ( lastLength < 100 )
        lines += 1 
    return [lines, lastLength]
};