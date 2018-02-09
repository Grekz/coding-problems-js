/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if ( root == null ) {return false}
    const sumOk = sum - root.val == 0 && root.left == null && root.right == null
    const remain = sum - root.val
    return sumOk || hasPathSum(root.left, remain) || hasPathSum(root.right, remain)
};