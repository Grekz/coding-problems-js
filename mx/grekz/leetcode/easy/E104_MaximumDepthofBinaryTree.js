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
var maxDepth = function(root) {
    if(root == null) return 0;
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return ( left > right ? left : right ) + 1 ;
};