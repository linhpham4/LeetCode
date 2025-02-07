/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 /*
 Input: Int arr (ascending) & target int
 Output: Int (index of target in arr, otherwise -1)

 Runtime must be O(log n)

 1. Target exists in arr: nums = [1,2,3,4], target = 2 // 1
 2. Target not in arr: nums = [1,2,3,4], target = 5 // -1
 3. One element: nums = [3], target = 3 // 0
 4. Empty arr: nums = [], target = 2 // -1
 5. Duplicates: nums = [1,1,3,4], target = 1 // ???

 Brute Force------
 Iterate through array to find target

 Time: O(n)
 Space: O(1)

 Binary Search-------
 Check element at middle of arr against target
 If element > target, check element at middle of former half of arr
 If element < target, check element at middle of latter half of arr
 Repeat until target is found or else return -1

 Time: O(log n)
 Space: O(1)
 */

 
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            return middle;
        }
    };

    return -1;
};


