/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSame = (s,t) => {
    if(s==null && t==null) return true
    if(s==null || t==null) return false
    return s.val==t.val && isSame(s.left,t.left) && isSame(s.right,t.right)
}
var isSubtree = function(s, t) {
    if ( s == null ) return false
    return isSame(s,t) || isSubtree(s.left, t) || isSubtree(s.right, t)
};