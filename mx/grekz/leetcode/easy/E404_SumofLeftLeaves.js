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
var sumOfLeftLeaves = function(root) {
    if (root == null || ( root.left == null && root.right == null ) ) return 0;
        
    let ans = 0;
    if(root.left != null && root.left.left == null && root.left.right == null) 
        ans += root.left.val;
    return ans + sumOfLeftLeaves(root.right) + sumOfLeftLeaves(root.left);        

};