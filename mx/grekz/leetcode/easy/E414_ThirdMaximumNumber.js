/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (nums.length < 3 )
        return Math.max(...nums)
    
    let m1, m2, m3
    m1 = m2 = m3 = Math.min(...nums)
    for ( let n of nums ) {
        if ( n > m1 ) {
            m3 = m2
            m2 = m1
            m1 = n
        }else if ( n > m2 && n < m1) {
            m3 = m2
            m2 = n
        }else if ( n > m3 && n < m2) {
            m3 = n
        }
    }
    return m1 > m2 && m2 > m3 ? m3 : m1
};