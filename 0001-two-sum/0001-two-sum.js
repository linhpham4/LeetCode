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
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return [];
// };

/*
Create empty hashmap
Iterate through array to add key-value pair for each element {value: index}
Iterate through array to subtract element from target to find the difference
Check if integer of that value exists in hashmap and is not the current index being iterated over
If true, return indicies

Time: O(n)
Space: O(n)
*/
// var twoSum = function(nums, target) {
//     const indicies = {};

//         for (let i = 0; i < nums.length; i++) {
//             indicies[nums[i]] = i;
//         }

//         for (let i = 0; i < nums.length; i++) {
//             const diff = target - nums[i]
//             if (indicies[diff] && indicies[diff] !== i) {
//                 return [i, indicies[diff]];
//             }
//         }
//         return [];
// }

/*
Create empty hashmap
Iterate through array to subtract element from target to find the difference
Check if integer of that value exists in hashmap
If true, return indicies
If not, add new entry to map {value: index}

Time: O(n)
Space: O(n)
*/
// var twoSum = function(nums, target) {
//     const prevMap = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         const diff = target - nums[i];
//         if (prevMap.has(diff)) {
//             return [prevMap.get(diff), i];
//         }

//         prevMap.set(nums[i], i);
//     }

//     return [];
// }

/*
SORT--------------------------
Sort integers
Find sum of largest and smallest integer and compare to target
If sum is larger than target, find sum the next largest integer
If sum is less than target, find sum with next smallest integer

Create new empty array
Itertate through nums to add each element as [integer, index] to empty array >>> O(n)
Sort new array >>> O(nlogn)

Create left and right pointers
While loop >>>> O(n)
Check if sum of integer at left and right pointers = target
If true, return indicies
If sum is larger than target, move right pointer to the left
Else move left pointer to the right

Time: O(nlogn) >>> sorting time dominates any O(n) operations
Space: O(n)
*/

var twoSum = function(nums, target) {
    let sorted = [];

    for (let i = 0; i < nums.length; i++) {
        sorted.push([nums[i], i]);
    }

    sorted.sort((a,b) => a[0] - b[0]);

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let sum = sorted[left][0] + sorted[right][0];

        if (sum === target) {
            return [Math.min(sorted[left][1], sorted[right][1]), Math.max(sorted[left][1], sorted[right][1])] //Need min and max to determine order of ORIGINAL indicies
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }

    return [];
}