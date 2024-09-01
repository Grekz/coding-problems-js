/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort((a,b) => a[0] - a[1] - (b[0] - b[1]))
    let res = 0
    for ( let i = 0; i < costs.length / 2; i++)
        res += costs[i][0] + costs[i+costs.length / 2][1]
    return res
};