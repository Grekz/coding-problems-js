/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
    const s = new Set(G)
    var res = 0
    while( head != null ) {
        if ( s.has(head.val) && ( head.next == null || !s.has(head.next.val) ) )
            res++
        head = head.next
    }
    return res
};