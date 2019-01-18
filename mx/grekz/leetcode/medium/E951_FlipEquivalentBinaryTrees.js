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
var flipEquiv = function (a, b) {
    if (b === null || a === null) return a === b
    return a.val === b.val && (flipEquiv(a.left, b.left) && flipEquiv(b.right, a.right) || flipEquiv(a.left, b.right) && flipEquiv(b.left, a.right))
};