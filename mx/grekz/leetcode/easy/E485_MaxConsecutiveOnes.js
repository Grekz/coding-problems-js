/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cur = 0
    let ma = 0
    for ( let x of nums ){
        if ( x == 1 )
            cur+=1
        else
            cur = 0
        if ( ma < cur )
            ma = cur
    }
    return ma
};