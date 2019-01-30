/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function (n) {
    let v = new Array(n + 1).fill(false)
    let count = 0
    const permutate = (pos) => {
        if (pos > n) return count++
        for (let i = 1; i <= n; i++)
            if (!v[i] && (i % pos == 0 || pos % i == 0)) {
                v[i] = true
                permutate(pos + 1)
                v[i] = false
            }
    }
    permutate(1)
    return count
};