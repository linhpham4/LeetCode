/**
 * @param {number[]} stones
 * @return {number}
 */
/*
Input: Int arr representing stone weights
Output: Int of last stone or 0 if last stone is destroyed

Each step:
- Choose 2 heaviest stones
- if x === y, both stones are destroyed
- if x < y, weight of y = y - x 
- continue until no more than 1 stone left


1. No stones remain: [1, 2, 3, 4]
    1) 3 & 4 >>> 4 becomes 1
    2) 2 & 1 >>> 2 becomes 1
    3) 1 & 1 >>> both destroyed
    4) return 0
    
2. 1 stone remain: [1, 2]
    1) 1 & 2 >>> 2 becomes 1
    2) return 1

3. 1 stone in arr: [3] // return 3

4. All same weight(odd): [2, 2, 2] // return 2

5. All same weight(even): [2, 2] // return 0

6. No stones: [] // return 0

Sort---------
Sort arr, find diff between last 2 elements, push diff unless is 0

Time: O(n^2logn) >>> nlogn for sort, n for loop condition
Space: O(1)
    
*/
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones.sort((a,b) => a - b);
        let smashedWeight = stones.pop() - stones.pop();
        if (smashedWeight !== 0) {
            stones.push(smashedWeight);
        };
    };
    return stones.length === 1 ? stones[0] : 0;
};