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
var sumRootToLeaf = function(root) {
    const dfs = (n, c) => {
        if ( n == null ) return 0
        c = c * 2 + n.val
        if ( n.right == null && n.left == null ) 
            return c
        return dfs(n.right, c) + dfs(n.left, c)
    }
    return dfs(root, 0)
};