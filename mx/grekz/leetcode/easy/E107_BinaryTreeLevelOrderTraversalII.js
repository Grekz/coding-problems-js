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
var levelOrderBottom = function(root) {
    let res = []
    const dfs = (res, lvl, root) => {
        if ( root == null ) return
        let le = res.length
        lvl += 1
        if ( le < lvl ){
            res.unshift([])
            le+=1
        }
        res[le - lvl].push(root.val)
        dfs(res, lvl, root.left)
        dfs(res, lvl, root.right)
    }
    dfs(res, 0, root)
    return res
};