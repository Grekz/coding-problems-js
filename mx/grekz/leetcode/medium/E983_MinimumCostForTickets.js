/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
    const n = days[days.length - 1]
    let dayCosts = Array(n + 1).fill(0)
    for (const x of days)
        dayCosts[x] = 2147483647
    for (let i = 1; i <= n; i++) {
        if (dayCosts[i] == 2147483647) {
            let minCost = dayCosts[i - 1] + costs[0]
            minCost = Math.min(minCost, dayCosts[getOrZero(i, 7)] + costs[1])
            minCost = Math.min(minCost, dayCosts[getOrZero(i, 30)] + costs[2])
            dayCosts[i] = minCost
        } else {
            dayCosts[i] = dayCosts[i - 1]
        }
    }
    return dayCosts[n]
};
const getOrZero = (a, b) => {
    if (a < b) {
        return 0
    }
    return a - b
}