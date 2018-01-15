/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(list) {
    const merge = (lists, ini, las) => {
        if ( ini > las ) { return null; }
        if ( ini == las ) { return lists[ini]; }
        const mid = Math.floor(( ini + las ) / 2);
        let a = merge(lists, ini, mid),
        b = merge(lists, mid+1, las),
        tmp = new ListNode(0),
        cur = tmp;
        while ( a != null && b != null ) {
            if ( a.val < b.val ) {
                cur.next = a;
                a = a.next;
            }else{
                cur.next = b;
                b = b.next;                
            }
            cur = cur.next;
        }
        cur.next = a != null ? a : b;
        return tmp.next;
    }
    return merge( list, 0, list.length - 1 );
};