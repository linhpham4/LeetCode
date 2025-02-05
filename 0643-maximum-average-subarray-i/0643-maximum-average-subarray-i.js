/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 /*
 Input: Integer array (nums) & integer (k)
 Output: Float, max average of subarray with length k

 Contiguous subarray: Subarray without removing or skipping any elements

 1. Positive average: nums = [1,2,4], k = 2 // 4
 2. Negative average: nums = [-2,0,-1], k = 2 // -2
 3. One element: nums = [2], k = 1 // 2

 Sliding Window---------
 Sum integers from start of array to index k (window of k width)
 Iterate through array starting from index k
 Subtract int that leaves the window and adding int that enters window
 Update max sum accordingly
 Return max sum / k

 Time: O(2n)
 Space: O(1)
 */
var findMaxAverage = function(nums, k) {
    if (nums.length === 1) {
        return nums[0];
    }

    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maxSum = sum;

    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i-k] + nums[i];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum/k;
};