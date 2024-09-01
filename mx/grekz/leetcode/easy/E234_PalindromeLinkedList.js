/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head == null || head.next == null) return true;
    if(head.next.next == null) return head.next.val == head.val;
    let fast = head, slow = head, rev = null;
    while ( fast != null && fast.next != null ) {
        fast = fast.next.next;
        let tmp = rev;
        rev = slow;
        slow = slow.next;
        rev.next = tmp;
    }
    if ( fast != null ) {
        slow = slow.next;
    }
    while ( rev != null && rev.val == slow.val ){
        rev = rev.next;
        slow = slow.next;
    }
    return rev == null;
};