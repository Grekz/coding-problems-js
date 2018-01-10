/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if ( height.length < 2 ) return 0
    let h = height.length - 1, 
        l = cur = max = left = right = 0
    while ( l < h ) {
        left = height[l]
        right = height[h]
        cur = Math.min(left, right) * (h - l);
        if ( max < cur ) max = cur
        if ( left < right ) l++
        else h--
    }
    return max
};