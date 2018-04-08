/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res = []
    for ( let x of nums ) {
        let v = Math.abs(x) - 1
        nums[v] = -Math.abs(nums[v])
    }
    for ( let i = 0; i < nums.length; i++ ){
        if ( nums[i] > 0 )
            res.push(i + 1)
    }
    return res
};