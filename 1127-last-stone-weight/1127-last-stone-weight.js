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

Max Heap-------
Create max heap to choose 2 heaviest stone
After smashing stones, update heap accordingly
Continue until no more than 1 stone left

Time: O(nlogn)
    - insert elements = O(logn)
    - need to perform insert n times to create heap
    - insert or remove element = O(logn)
Space: O(n)
*/

/*
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
*/
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    swap(index1, index2) {
        let tmp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = tmp;
    }
    
    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if(this.heap[index] <= this.heap[parentIndex]) {
                break;
            }
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    remove() {
        if (this.size() === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return max;
    }

    bubbleDown(index) {
        const leftChild = (index * 2) + 1;
        const rightChild = (index * 2) + 2;
        let largest = index;

        if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
            largest = leftChild;
        }

        if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
            largest = rightChild;
        }

        if (largest !== index) {
            this.swap(largest, index);
            this.bubbleDown(largest);
        }
    }
}

var lastStoneWeight = function(stones) {
    const stoneHeap = new MaxHeap();

    for (const stone of stones) {
        stoneHeap.insert(stone);
    };

    while (stoneHeap.size() > 1) {
        const stone1 = stoneHeap.remove();
        const stone2 = stoneHeap.remove();

        if (stone1 !== stone2) {
            console.log(stone1, stone2, stoneHeap)
            stoneHeap.insert(stone1 - stone2)
        };
    };

    return stoneHeap.size() === 1 ? stoneHeap.peek() : 0;
}

const test1 = [2,7,4,1,8,1];
const test2 = [1];
const testHeap = new MaxHeap();
for (const stone of test1) {
        testHeap.insert(stone);
};
console.log("MaxHeap:", testHeap, "| Want: [8,7,4,1,2,1]", "| Passed: Yes")
console.log("Peek:", testHeap.peek(), "| Want: 8", "| Passed: Yes")
console.log("Size:", testHeap.size(), "| Want: 6", "| Passed: Yes")
testHeap.insert(9)
console.log("Insert int 9:", testHeap, "| Want: [9,7,8,1,2,1,4]", "| Passed: Yes")
testHeap.remove(0)
testHeap.remove(0)
console.log("Remove index 0 twice:", testHeap, "| Want: [7,2,4,1,1]", "| Passed: Yes")
testHeap.swap(0,1)
console.log("Swap index 0 and 1:", testHeap, "| Want: [2,7,4,1,1]", "| Passed: Yes")