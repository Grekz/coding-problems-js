/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let res = 0, cnt = Array(60).fill(0)
    for ( const x of time ) {
        const d = (60 - x % 60) % 60
        res += cnt[d]
        cnt[x % 60] += 1
    }
    return res
};