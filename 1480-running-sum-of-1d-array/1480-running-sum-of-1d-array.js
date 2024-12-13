/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* 1st try: Overcomplicated it lol
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
*/

var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++){
        nums[i] += nums[i-1]
    };
    
    return nums
};