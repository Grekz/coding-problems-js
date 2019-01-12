/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    let s = new Set()
    const dfs = (node) => {
        if (!node) return false
        if (s.has(k - node.val)) return true
        s.add(node.val)
        return dfs(node.left) || dfs(node.right)
    }
    return dfs(root)
};