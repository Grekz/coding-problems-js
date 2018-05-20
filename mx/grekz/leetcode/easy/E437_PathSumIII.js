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
 * @return {number}
 */
const doit = (n, s) => {
    if ( n == null ) return 0
    return ( n.val == s ? 1 : 0 ) + doit( n.left, s - n.val ) + doit(n.right, s - n.val )
}
var pathSum = function(root, sum) {
    if ( root == null ) return 0
    return doit(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
};