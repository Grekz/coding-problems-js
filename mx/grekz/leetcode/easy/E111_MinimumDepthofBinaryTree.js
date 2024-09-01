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
var minDepth = function(root) {
    if(root == null) return 0
    const drill = ( walk, lvl ) => {
        if(walk == null) return 2147483647
        if(walk.left == null && walk.right == null) return lvl
        return Math.min(drill(walk.left, lvl+1), drill(walk.right, lvl+1))
    }
    return drill(root, 1)
};