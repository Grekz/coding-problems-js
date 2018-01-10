/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let tmp = {}, i = 0
    for ( const x of nums ) {
        if ( target - x in tmp )
            return [ tmp[ target - x ], i ]
        tmp[x] = i++
    }
    return [0,0]
};