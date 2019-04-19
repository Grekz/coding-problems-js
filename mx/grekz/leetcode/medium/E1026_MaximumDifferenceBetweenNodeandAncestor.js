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
const maxAncestorDiff = root => dfs(root, root.val, root.val)

const dfs = (node, max, min) => {
    if (node == null) return max - min
    max = Math.max(max, node.val)
    min = Math.min(min, node.val)
    return Math.max(dfs(node.left, max, min), dfs(node.right, max, min))
}