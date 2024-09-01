/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
    let ans = 0
    const dfs = n => {
        if ( !n )
            return 0
        let l = dfs(n.left), r = dfs(n.right)
        ans += Math.abs(l) + Math.abs(r)
        return l + r + n.val - 1
    }
    dfs(root)
    return ans
};