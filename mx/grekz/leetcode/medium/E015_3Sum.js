/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort( ( a, b ) => a - b )
    let res = [],
        len = nums.length
    for ( let i = 0; i < len - 2; i++ ) {
        if ( nums[i] > 0 ) 
            break
        if ( i > 0 && nums[i] == nums[i-1] )
            continue
        let cur = nums[i],
            l = i + 1,
            h = len - 1
        while ( l < h ) {
            let temp = cur + nums[l] + nums[h]
            if ( temp < 0 )
                l++
            else if ( temp > 0 )
                h--
            else {
                res.push([cur, nums[l], nums[h]])
                while ( l < h && nums[l] == nums[l+1] ) l++
                while ( l < h && nums[h] == nums[h-1] ) h--
                h--
                l++
            }
        }
    }
    return res
};