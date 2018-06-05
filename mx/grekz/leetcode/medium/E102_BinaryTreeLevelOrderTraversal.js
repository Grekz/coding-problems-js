/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = []
    if (root) doit(res, root, 0)
    return res
};
const doit = (res, walk, lvl) => {
    const n = res.length
    if ( n <= lvl ) {
        res.push([])
    }
    res[lvl].push(walk.val)
    if ( walk.left ) doit(res, walk.left, lvl+1)
    if ( walk.right ) doit(res, walk.right, lvl+1)
}