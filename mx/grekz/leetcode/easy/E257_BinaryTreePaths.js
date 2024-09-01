/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = []
    const traverse = (x, cur) => {
        let tmp = cur + x.val
        if ( x.left == null && x.right == null )
            res.push(tmp)
        else{
            if ( x.left != null )
                traverse(x.left, tmp + "->")
            if ( x.right != null )
                traverse(x.right, tmp + "->")
        }
    }
    if ( root != null )
        traverse(root, "")
    return res
};