/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if ( t1 == null ) return t2
    if ( t2 == null ) return t1
    let c = new TreeNode(t1.val + t2.val)
    c.left = mergeTrees(t1.left, t2.left)
    c.right = mergeTrees(t1.right, t2.right)
    return c
};