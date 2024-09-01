/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    const n = nums.length - 1
    let ma = -2147483648, mi = 2147483647, end = -2, ini = -1
    for (let i = 0; i <= n; i++) {
        const a = nums[i]
        const b = nums[n - i]
        ma = Math.max(ma, a)
        mi = Math.min(mi, b)
        if (a < ma) {
            end = i
        }
        if (b > mi) {
            ini = n - i
        }
    }
    return end - ini + 1
};