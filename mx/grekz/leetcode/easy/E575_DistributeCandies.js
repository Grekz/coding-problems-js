/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    const a = Math.floor(candies.length / 2)
    const b = (new Set(candies)).size
    return Math.min(a, b)
};