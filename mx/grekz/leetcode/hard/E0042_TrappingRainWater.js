/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l, ml, mr, res, r = height.length - 1
    l = ml = mr = res = 0
    while ( l < r ) {
        if ( height[r] > height[l] ) {
            if ( ml < height[l] ) {
                ml = height[l]
            }else{
                res += ml - height[l]
            }
            l++
        }else{
            if ( mr < height[r] ) {
                mr = height[r]
            }else{
                res += mr - height[r]
            }
            r--
        }
    }
    return res
};