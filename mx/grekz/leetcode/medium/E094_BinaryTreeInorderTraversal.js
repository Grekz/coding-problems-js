/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = []
    const doit = x => {
        if ( x ) {
            doit(x.left)
            res.push(x.val)
            doit(x.right)
        }
    }
    doit(root)
    return res
};