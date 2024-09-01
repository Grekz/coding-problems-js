/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let res = 0;
    //based in this principle a^b^b = a
    for (let i = 0; i < nums.length ; i++)
        res ^= i ^ nums[i];
    return res ^ nums.length;
};