/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    var w = Math.floor(Math.sqrt(area))
    while ( area%w != 0 ) {
        w -= 1
    }
    return new Array(Math.floor(area/w), w)
};