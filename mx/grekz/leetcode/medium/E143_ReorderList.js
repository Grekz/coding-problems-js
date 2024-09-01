/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if ( head == null || head.next == null) return
    // get to the middle, reverse second part, mix parts
    let slow = head, fast = head
    while ( fast.next != null && fast.next.next != null ){
        slow = slow.next
        fast = fast.next.next
    }
    fast = slow.next
    let cur
    while (fast.next != null){
        cur = fast.next
        fast.next = cur.next
        cur.next = slow.next
        slow.next = cur
    }
    fast = slow.next
    cur = slow
    slow = head
    while ( slow != cur ) {
        cur.next = fast.next
        fast.next = slow.next
        slow.next = fast
        slow = fast.next
        fast = cur.next
    }
};