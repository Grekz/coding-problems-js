/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function (x, y, z) {
    if (x + y < z) return false
    if (x == z || y == z || x + y == z) return true
    return z % gcd(x, y) == 0
};
const gcd = (a, b) => {
    if (b == 0)
        return a
    return gcd(b, a % b)
}