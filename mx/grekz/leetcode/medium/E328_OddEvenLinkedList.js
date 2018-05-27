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
var oddEvenList = function(head) {
    if ( head && head.next && head.next.next ) {
        let od = head, ev = head.next, evHe = head.next
        while ( ev && ev.next ) {
            od.next = od.next.next
            ev.next = ev.next.next
            od = od.next
            ev = ev.next
        }
        od.next = evHe
    }
    return head
};