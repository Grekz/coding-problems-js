/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function (p, q) {
    const g = gcd(p, q)
    p /= g
    p %= 2
    q /= g
    q %= 2
    if (p == 1 && q == 1)
        return 1
    if (p == 1)
        return 0
    return 2
};
const gcd = (a, b) => {
    if (a == 0)
        return b
    return gcd(b % a, a)
}