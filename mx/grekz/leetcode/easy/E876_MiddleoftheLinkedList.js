/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => getKth(head, 0, Math.floor(getSize(head) / 2))
const getSize = (node, n = 0) => node === null ? n : getSize(node.next, n + 1)
const getKth = (node, n, k) => n === k ? node : getKth(node.next, n + 1, k)
