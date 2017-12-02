/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const a = nums1.length,
          b = nums2.length,
          c = a + b + 1
    if ( a > b )
        return findMedianSortedArrays(nums2, nums1)
    let l = 0, 
        h = a
    while ( l <= h ) {
        let m1 = parseInt(( l + h ) / 2),
            m2 = parseInt(c / 2 - m1),
            mla = m1 == 0 ? Number.MIN_VALUE : nums1[m1 - 1],
            mlb = m2 == 0 ? Number.MIN_VALUE : nums2[m2 - 1],
            mra = m1 == a ? Number.MAX_VALUE : nums1[m1],
            mrb = m2 == b ? Number.MAX_VALUE : nums2[m2]
        if ( mla > mrb )
            h = m1 - 1
        else if ( mlb > mra )
            l = m1 + 1
        else{
            return ( a + b ) % 2 != 0 ? Math.max(mla,mlb) : (Math.max(mla,mlb) + Math.min(mra, mrb)) / 2
        }
            
    }
    return 0.0
};