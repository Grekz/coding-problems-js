/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let counts = {}, ini = {}
    let max = -1, res = -1
    nums.forEach(
        (x, i) => {
            let cur = 1 + (counts[x] || 0)
            counts[x] = cur
            ini[x] = ini.hasOwnProperty(x) ? ini[x] : i
            if (max < cur) {
                max = cur
                res = i - ini[x] + 1
            } else if (max === cur) {
                res = Math.min(res, i - ini[x] + 1)
            }
        }
    )
    return res
};