/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    newNums = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (i > 0) {
            let sum = 0;
            
            for (let j = 0; j <= i; j++) {
                sum += nums[j];
            };
            
            newNums.push(sum);
        } else {
           newNums.push(nums[i]); 
        }; 
    };
    
    return newNums;
};