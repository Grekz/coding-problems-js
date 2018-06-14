/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const dfs = ( x, max, min) => x == null || !(x.val >= max || x.val <= min) && dfs(x.left, x.val, min) && dfs(x.right, max, x.val)
    return root == null || dfs(root, 2147483648, -2147483649)
};