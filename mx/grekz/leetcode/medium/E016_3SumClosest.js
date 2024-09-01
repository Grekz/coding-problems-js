/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((x,y)=> x-y )
    let res = nums[0] + nums[1] + nums[2]
    let len = nums.length - 1
    for ( let i = 0; i < len - 1; i++ ) {
        let cur = nums[i]
        if ( i > 0 && nums[i] == nums[i-1] )
            continue
        let l = i+1,
            h = len
        while ( l < h ) {
            let sum = cur + nums[l] + nums[h]
            if ( sum == target )
                return sum
            if ( Math.abs(sum-target) < Math.abs(res - target) )
                res = sum
            if ( sum < target )
                l += 1
            else
                h -= 1
        }
    }
    return res
};