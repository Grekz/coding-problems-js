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
var reverseList = function(head) {
    let res = null, cur;
    while(head!=null){
        cur=head;
        head=head.next;
        cur.next=res;
        res=cur;
    }
    return res;
};