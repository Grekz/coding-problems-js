/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let j = numbers.length - 1 
    let i = 0
    while(i < j){
        let sum = numbers[j] + numbers[i]
        if (sum < target) i+=1
        else if(sum > target) j-=1
        else return [i+1,j+1]
    }
    return [-1,-1]
};