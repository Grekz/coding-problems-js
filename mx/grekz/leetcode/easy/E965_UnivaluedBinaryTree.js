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
var isUnivalTree = function (root) {
    if (root === null) return true
    if (!!root.left && !(root.val === root.left.val && isUnivalTree(root.left)))
        return false
    if (!!root.right && !(root.val === root.right.val && isUnivalTree(root.right)))
        return false
    return true
};