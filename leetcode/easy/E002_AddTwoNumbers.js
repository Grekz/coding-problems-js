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
var addTwoNumbers = function(l1, l2) {
    let carry = 0, res = new ListNode(0), sum = 0, head = res;
    while ( l1 !== null || l2 !== null || carry > 0 ) {
        sum = carry;
        if ( l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }
        if ( l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }
        if ( sum < 10 ){
            carry = 0;
        }else{
            carry = 1;
            sum -= 10;
        }
        res.next = new ListNode(sum);
        res = res.next;
    }
    return head.next;
};