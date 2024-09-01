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
var isBalanced = function(root) {
    const dfs = (root) => {
        if ( root == null ) { return 0; }
        let lh = dfs(root.left);
        if ( lh == -1 ) { return lh; }
        let rh = dfs(root.right);
        if ( rh == -1 ) { return rh; }
        let dif = lh - rh;
        if ( dif > 1 || dif < -1 ) { return -1; }
        return Math.max(lh, rh) + 1 ;
    }
    return dfs(root) != -1;
};