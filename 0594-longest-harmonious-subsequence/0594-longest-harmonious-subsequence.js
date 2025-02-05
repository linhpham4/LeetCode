/**
 * @param {number[]} nums
 * @return {number}
 */

 /*
 Input: integer array, nums
 Output: integer, length of longest harmonious subsequence
 
 Harmonious array: largest int - smallest int === 1
    - Array can only contain 2 different values and they must be adjacent numbers

 Subsequence: copy of original array. Elements can be removed.

 1. Different integers: [3,1,2,4] // [3,2], [1,2], [3,4] so 2 is longest length
 2. Duplicate integers: [1,1,2,2] // 4
 3. No harmonious subsequence: [1,3,5] // 0
 4. Same integer: [1,1,1,1] // 0
 5. One element: [1] // 0
 6. Negative integers: [-1,0,1] // 3

Brute Force------
Iterate through array
For each element, iterate through array and check if element+1 exists. If so, what is the count of element & element+1
Keep track of max length

Time: O(n^2)
Space: O(1)
Sorting-------
Sort array & find difference between adjacent elements
If difference = 1, find length of subsequence 
Keep track of max length

Time: O(nlogn)
Space: O(1)

Hash Map--------
Create hash map {integer: count}
Iterate through map, check if map contains a key of current key+1
If true, update max length with count of key + count of key+1

Time: O(2n)
Space: O(n)
 */

// var findLHS = function(nums) {
//     nums.sort((a, b) => a - b);

//     let left = 0, right = 1, maxLength = 0;

//     while (right < nums.length) {
//         let diff = nums[right] - nums[left];

//         if (diff === 1) {
//             maxLength = Math.max(maxLength, right - left + 1);
//             right++;
//         } else if (diff < 1) {
//             right++;
//         } else {
//             left++;
//         }
//     }

//     return maxLength;
// };

var findLHS = function(nums) {
    let count = new Map();
    let maxLength = 0;

    for (const num of nums) {
        if (count.has(num)) {
            count.set(num, count.get(num)+1);
        } else {
            count.set(num, 1);
        }
    }

    for (const [key, value] of count) {
        if (count.has(key+1)) {
            maxLength = Math.max(maxLength, value + count.get(key+1));
        }
    }

    return maxLength;
}