/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 /*
 Input: binary tree
 Output: level order traversal
    - represented by 2d array

1. Balanced: root = [1,2,3] // [[1], [2,3]]
2. Unbalanced: root = [1,2,3,null, null, 4] //[[1],[2,3],[4]]
3. Degenerate: root = [1,2,null,3] //[[1],[2],[3]]
4. 1 Node: root = [1] //[1]
5. Null root: root = [] //[]

BFS----------
Create empty traversal array. 
Create queue and push in root node. 
Push every node in the queue as an array into the traversal array.
For each node that is removed, push its children into the queue unless children are null.
Repeat until queue is empty.

Time: O(n)
Space: O(n)

 */
var levelOrder = function(root) {
    if(!root) return []

    const traversalArr = []
    const queue = []
    queue.push(root)

    while(queue.length > 0) {
        const queueLength = queue.length
        const currentLevel = []

        for(let i = 0; i < queueLength; i++) {
            const currentNode = queue.shift()

            if(currentNode !== null) {
                currentLevel.push(currentNode.val)
                queue.push(currentNode.left)
                queue.push(currentNode.right)
            }
        }

        if (currentLevel.length > 0) {
            traversalArr.push(currentLevel)
        }
        // console.log(queue)
    }
    return traversalArr
};