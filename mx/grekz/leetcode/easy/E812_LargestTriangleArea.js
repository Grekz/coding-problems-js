/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let res = 0.0
    for ( let i of points )
        for ( let j of points )
            for ( let k of points )        
                res = Math.max(res, 0.5 * Math.abs(i[0] * j[1] + j[0] * k[1] + k[0] * i[1]- j[0] * i[1] - k[0] * j[1] - i[0] * k[1]))
    return res
};