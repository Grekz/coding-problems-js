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
var isSymmetric = function(root) {
    if ( root == null ) return true;
    const isMirror = (l,r) => {
        if ( l == null && r == null ) return true;
        if ( l == null || r == null ) return false;
        return l.val == r.val && isMirror(l.left, r.right) && isMirror(l.right, r.left);
    }
    return isMirror(root.left, root.right);
};