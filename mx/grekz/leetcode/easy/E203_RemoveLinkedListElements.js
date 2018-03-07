/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if ( head == null ) return head
    let fh = new ListNode(-1)
    let cur = fh
    fh.next = head
    while ( cur.next != null ) {
        if ( cur.next.val == val )
            cur.next = cur.next.next
        else
            cur = cur.next
    }
    return fh.next
};