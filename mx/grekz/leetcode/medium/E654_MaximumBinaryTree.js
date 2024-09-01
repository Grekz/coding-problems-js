/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if ( nums == null || nums.length < 1 ) {
        return null
    }
    let max = Math.max(...nums)
    let i = nums.indexOf(max)
    let res = new TreeNode(nums[i])
    res.left = constructMaximumBinaryTree(nums.slice(0, i))
    res.right = constructMaximumBinaryTree(nums.slice(i+1))
    return res
};