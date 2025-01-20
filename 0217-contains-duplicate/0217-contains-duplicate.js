/**
 * @param {number[]} nums
 * @return {boolean}
*/
/*
DOUBLE LOOP----------------------------------------------------------
Input: Array
Output: Boolean

Ex 1: [2,1,1] //true
i = 1
j = 2

Ex 2: [2,1] //false
Ex 3: [] //false
Ex 4: [1] //false

Double loop through array, comparing each element to the next to see if their values are the same

function (array) {
    loop through each element in array starting from index 0 (i)
        loop through each element starting from index i + 1 (j)
            if element at index i === index j
                return true
    return false
}

Time: O(n^2)
Space: O(1)

 */
// var containsDuplicate = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 return true;
//             };
//         };
//     };
//     return false;
// };

/*
SORT()-----------------------------------------------------------
Sort array and compare elements to the one next to it

function(array) {
    sort array in ascending order
    compare elements to the one in the next index
        if same value
            return true
        else move to the next index
}

Time: O(nlogn)
Space: O(1)
*/
// var containsDuplicate = function(nums) {
//     nums.sort((a,b) => a - b);
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i+1]) {
//             return true;
//         };
//     };
//     return false;
// };

/*
HASH SET------------------------------
Create a set from the array
If length of array is longer than set = return true
Else return false
*/
var containsDuplicate = function(nums) {
    const numSet = new Set(nums)
    if (nums.length > numSet.size) {
        return true;
    };
    return false;
}