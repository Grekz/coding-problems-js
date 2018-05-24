/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let c = countit(root.left) + 1
    if ( c == k ) return root.val
    if ( k > c ) return kthSmallest(root.right, k - c)
    return kthSmallest(root.left, k)
};
const countit = x => {
    if (x)
        return 1 + countit(x.left) + countit(x.right)
    return 0
}