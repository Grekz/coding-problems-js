/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    const dfs = root => root ? (root.left || root.right ? [...dfs(root.left), ...dfs(root.right)] : [root.val]) : []
    return dfs(root1).toString() == dfs(root2).toString()
};
// const dfs = root => !root ? '' : dfs(root.left) + dfs(root.right) + (root.left || root.right ? '' : root.val)
