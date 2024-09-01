/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
    if (!root) return 0
    let res = 0
    if (L <= root.val && root.val <= R)
        res += root.val
    if (L <= root.val)
        res += rangeSumBST(root.left, L, R)
    if (root.val <= R)
        res += rangeSumBST(root.right, L, R)
    return res
};