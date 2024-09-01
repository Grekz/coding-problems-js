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
var sortedArrayToBST = function(nums) {
    if ( nums.length == 0 ) return null
    const helper = (l, h) => {
        if ( l > h )
            return null
        const m = l + Math.floor(( h - l ) / 2)
        let res = new TreeNode(nums[m])
        res.left = helper(l, m-1)
        res.right = helper(m+1, h)
        return res
    }
    return helper(0, nums.length-1)    
};