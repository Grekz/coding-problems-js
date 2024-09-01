/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if ( root == null || root == q || root == p ) return root
    let l = lowestCommonAncestor(root.left, p, q)
    let r = lowestCommonAncestor(root.right, p, q)
    if ( l != null && r != null ) return root
    if ( l == null ) return r
    return l
};