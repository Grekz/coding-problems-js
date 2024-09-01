/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if( l1 == null ) return l2;
    if( l2 == null ) return l1;
    let temp = new ListNode(-1), walk = temp;
    while(l1 != null && l2 != null){
        if(l1.val < l2.val){
            walk.next = l1;
            l1 = l1.next;
        }else{
            walk.next = l2;
            l2 = l2.next;
        }
        walk = walk.next;
    }
    if(l1 == null) walk.next = l2;
    if(l2 == null) walk.next = l1;
    return temp.next;
};