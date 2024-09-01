/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = [], i = 0
    const n = nums.length;
    while (i < n) {
        let j = i
        const c = nums[i]
        while( j + 1 < n && nums[j + 1] - nums[j] == 1 ) { 
            j++
        }
        res.push(c + (j == i ? "" : "->" + nums[j]) )
        i = j + 1
    }
    return res
};