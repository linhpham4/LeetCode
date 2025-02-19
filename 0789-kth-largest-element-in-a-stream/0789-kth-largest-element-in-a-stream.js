/*
Constructor Input: int (k) & int arr (nums)
Add Input: int
Add Output: int, kth largest in arr (non distinct value)

    1. k = 2, nums = [1,2,3]
    KthLargest.add(4) // 3
    KthLargest.add(4) // 4

    2. Initiallized with <k elements: k = 2, nums = [1]
    KthLargest.add(4) // 1
    KthLargest.add(2) // 2

    3. Initiallized with no elements: k = 1, nums = []
    KthLargest.add(4) // 4

Sort----------
    Sort array in descending order after every add operations
    Return element at k - 1 index

    Time: O(m * nlogn) where m is the number of add calls
    Space: O(1)

Min Heap-------
    Add each int to a min heap with size of k

    Time: O(m * logk)
        - Add int to heap of size k = O(logk)
        - Do add operation m times
    Space: O(k) min heap of size k
*/
/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

/**
 * @param {number} k
 * @param {number[]} nums
 */
 /*
var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums;
};

/** 
 * @param {number} val
 * @return {number}
 */
 /*
KthLargest.prototype.add = function(val) {
    this.nums.push(val);
    this.nums.sort((a, b) => b - a);
    return this.nums[this.k - 1];
};
*/

class MinHeap {
    constructor() {
        this.minHeap = [];
    }

    peek() {
        return this.minHeap[0];
    }

    size() {
        return this.minHeap.length;
    }

    insert(val) {
        this.minHeap.push(val);
        this.bubbleUp(this.minHeap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.minHeap[index] >= this.minHeap[parentIndex]){
                break;
            }
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    swap(index1, index2) {
        const tmp = this.minHeap[index1];
        this.minHeap[index1] = this.minHeap[index2];
        this.minHeap[index2] = tmp;
    }

    remove() {
        if (this.size() === 1){
            return this.minHeap.pop();
        }

        const max = this.minHeap[0];
        this.minHeap[0] = this.minHeap.pop();
        this.bubbleDown(0);
        return max;
    }

    bubbleDown(index) {
        const leftChild = (index * 2) + 1;
        const rightChild = (index * 2) + 2;
        let smallest = index;

        if (this.minHeap[leftChild] < this.minHeap[smallest]) {
            smallest = leftChild;
        }

        if (this.minHeap[rightChild] < this.minHeap[smallest]) {
            smallest = rightChild;
        }

        if (smallest !== index) {
            this.swap(smallest, index);
            this.bubbleDown(smallest);
        }
    }
}

 var KthLargest = function(k, nums) {
    this.k = k;
    this.numsHeap = new MinHeap();

    for (const num of nums) {
        this.numsHeap.insert(num);
    }

    while (this.numsHeap.size() > this.k) {
        this.numsHeap.remove();
    }
 }

 KthLargest.prototype.add = function(val) {
    this.numsHeap.insert(val);

    if (this.numsHeap.size() > this.k) {
        this.numsHeap.remove();
    }

    return this.numsHeap.peek();
 }