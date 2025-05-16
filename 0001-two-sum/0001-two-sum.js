/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indicies = {};

    for (let i = 0; i < nums.length; i++) {
        indicies[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (indicies[diff] && indicies[diff] != i) {
            return [indicies[diff], i];
        }
    }

    return 0;
};