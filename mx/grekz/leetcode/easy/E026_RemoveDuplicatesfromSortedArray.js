/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums == null || nums.length < 1 ) { return 0; }
    if ( nums.length == 1 ) { return 1; }
    let len = nums.length, base = nums[0], count = 0,cur = 1;
    for(let i = 1; i < len ; i++ ){
        if ( base == nums[i] ) {
            count++;
            nums[i] = -1;
        }else{
            base = nums[i];
            nums[cur++] = nums[i];
        }
    }
    return len - count;
};