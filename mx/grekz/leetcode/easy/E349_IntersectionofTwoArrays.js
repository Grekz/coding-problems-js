/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if (nums1.length < 1 || nums2.length < 1) return []
    let a = new Set(nums1)
    let b = new Set(nums2)
    let intersection = [...a].filter(x => b.has(x))
    return [...intersection]
};