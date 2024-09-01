/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const Counter = array => {
        let count = {}
        array.forEach(val => count[val] = (count[val] || 0) + 1)
        return count
    }
    const a = Counter(nums1), b = Counter(nums2)
    let res = []
    for ( let x in a ) {
        if ( b.hasOwnProperty(x) ) {
            let c = Math.min(b[x], a[x])
            for( let i = 0; i < c; i++ ) {
                res.push(parseInt(x))
            }
        }
    }
    return res
};