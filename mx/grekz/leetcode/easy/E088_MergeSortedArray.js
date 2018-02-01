/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(n == 0 ) return;
    let i = m -1 , j = n - 1, ind = n + m  - 1;
    while(ind >= 0 ){
        if(i < 0) nums1[ind--] = nums2[j--]; 
        else if(j < 0) nums1[ind--] = nums1[i--]; 
        else if(nums1[i] > nums2[j]) nums1[ind--] = nums1[i--];
        else nums1[ind--] = nums2[j--]; 
    }
};