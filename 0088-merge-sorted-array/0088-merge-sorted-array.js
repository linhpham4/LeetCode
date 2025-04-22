/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let mIndex = m - 1;
    let nIndex = n - 1;
    let current = m + n - 1;

    while (nIndex >= 0) {
        if (mIndex >= 0 && nums1[mIndex] > nums2[nIndex]) {
            nums1[current] = nums1[mIndex];
            mIndex--;
        } else {
            nums1[current] = nums2[nIndex];
            nIndex--;
        };
        current--;
    };
};