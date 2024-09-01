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
var findTilt = function(root) {
    let su = 0
    const doit = x => {
        if ( x == null ) return 0
        let left = doit(x.left)
        let right = doit(x.right)
        su += Math.abs(left-right)
        return x.val + left + right
    }
    doit(root)
    return su
};