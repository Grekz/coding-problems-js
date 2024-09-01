/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (!nums || nums.length < 1) return [-1, -1]
    const idx = bSearch(nums, target, true)
    if (nums[idx % nums.length] != target)
        return [-1, -1]
    const rIdx = bSearch(nums, target, false) - 1
    return [idx, rIdx]
};
const bSearch = (n, t, l) => {
    let a = 0, b = n.length, m
    while (a < b) {
        m = a + ((b - a) >> 1)
        if (n[m] > t || (l && n[m] == t))
            b = m
        else
            a = m + 1
    }
    return a
}