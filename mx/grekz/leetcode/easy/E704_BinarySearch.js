/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    return bSearch(nums, target, 0, nums.length - 1)
};
const bSearch = (nums, target, ini, end) => {
    if (ini > end)
        return -1
    const mid = ini + Math.floor((end - ini) / 2)
    if (nums[mid] === target)
        return mid
    if (nums[mid] > target)
        return bSearch(nums, target, ini, mid - 1)
    return bSearch(nums, target, mid + 1, end)
}