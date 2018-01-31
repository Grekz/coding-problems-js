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
var deleteDuplicates = function(head) {
    if (head == null || head.next == null )
        return head
    let walk = head
    while(walk.next != null)
        if(walk.val == walk.next.val)
            walk.next = walk.next.next
        else
            walk = walk.next
    return head
};