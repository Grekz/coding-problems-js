/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {        
    let res = []
    if ( nums.length < 4 )
        return res
    nums.sort( (x,y) => x - y )
    let len = nums.length
    let ma = nums[len - 1]
    let maxSum = ma * 3
    for ( let i = 0; i < len - 3; i++ ) {
        let curr = nums[i]
        if ( curr << 2 > target )
            return res
        if ( i > 0 && curr == nums[ i - 1 ] )
            continue
        if ( curr + maxSum < target )
            continue
        for ( let j = i+1; j < len - 2; j++ ) {
            if ( curr + nums[j] * 3 > target )
                break
            if ( j > i +1 && nums[j] == nums[j-1] )
                continue
            let cc = curr + nums[j]
            let l = j + 1
            let h = len - 1
            while ( l < h ) {
                let tmp = cc + nums[l] + nums[h]
                if ( tmp < target )
                    l+=1
                else if ( tmp > target )
                    h-=1
                else {
                    res.push([curr, nums[j], nums[l], nums[h]]);
                    while ( l < h && nums[l] == nums[l+1] )
                        l+=1
                    while ( l < h && nums[h] == nums[h-1] )
                        h-=1
                    h-=1
                    l+=1
                }
            }
        }
    }
    return res
};