/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head == null || n < 1) 
        return head
    let size = 0
    let walk = head
    while(walk.next){
        size++
        walk = walk.next
    }
    let index = size - (n - 1)
    if(index < 1){
        head = head.next
        return head
    }
    walk = head
    let i = 0
    while(walk.next){
        i++
        if(i == index){
            walk.next = walk.next.next
            break
        }
        walk = walk.next
    }
    return head
};