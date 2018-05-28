/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let a = 2147483647, b = 2147483647
    for ( let x of nums )
        if (x <= a)
            a = x
        else if (x <= b)
            b = x
        else
            return true
    return false  
};