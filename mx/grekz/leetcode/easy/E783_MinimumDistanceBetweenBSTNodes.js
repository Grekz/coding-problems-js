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
var minDiffInBST = function(root) {
    let minDiff = 2147483647
    let prev = null
    const doit = n => {
        if ( !n ) return
        doit(n.left)
        if ( prev ) 
            minDiff = Math.min(minDiff, n.val - prev.val)
        prev = n
        doit(n.right)
    }
    doit(root)
    return minDiff
};