/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    let d = {}
    let s = []
    for ( let x of nums ) {
        while ( s.length > 0 && s[s.length-1] < x )
            d[s.pop()] = x
        s.push(x)
    }
    for ( let i = 0; i < findNums.length; i++ )
        findNums[i] = d[findNums[i]] || -1
    return findNums
};