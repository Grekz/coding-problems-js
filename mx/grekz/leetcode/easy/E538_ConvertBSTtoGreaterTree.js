/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
let cur
var convertBST = function(root) {
    cur = 0
    const go = x => {
        if ( x == null ) return
        go(x.right)
        x.val += cur
        cur = x.val
        go(x.left)
    }
    go(root)
    return root
};