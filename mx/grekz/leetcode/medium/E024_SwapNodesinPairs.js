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
var swapPairs = function(head) {
    let res = new ListNode(0);
    res.next = head;
    let walk = res;
    while ( walk.next != null && walk.next.next != null ) {
        let a = walk.next, b = walk.next.next;
        a.next = b.next;
        b.next = a;
        walk.next = b;
        walk = a;
    }        
    return res.next;
};