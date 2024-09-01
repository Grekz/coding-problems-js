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
var diameterOfBinaryTree = function(root) {
    let res = 0
    const doit = n => {
        if ( n == null ) return 0
        const le = doit(n.left)
        const ri = doit(n.right)
        res = Math.max(res, le+ri)
        return Math.max(le, ri) + 1
    }
    doit(root)
    return res
};