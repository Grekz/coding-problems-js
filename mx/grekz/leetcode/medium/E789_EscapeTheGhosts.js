/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function (ghosts, target) {
    const t0 = target[0], t1 = target[1]
    let dest = Math.abs(t0) + Math.abs(t1)
    for (let g of ghosts)
        if (Math.abs(g[0] - t0) + Math.abs(g[1] - t1) <= dest)
            return false
    return true
};