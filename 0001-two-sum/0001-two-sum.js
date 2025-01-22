/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

Input: array of integers & an integer
Output: array of indicies where the sum of the intgers at those indicies equals target integer
Cannot be the same index
Smaller index returned first

nums1 = [2,1,1], target = 2
nums2 = [-1,1,0], target = -1

Iterate through array (pointer i)
Iterate through array (pointer j)
If array[i] + array[j] === target
return [i,j] sorted in ascending order

Time: O(n^2)
Space: O(1)
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};