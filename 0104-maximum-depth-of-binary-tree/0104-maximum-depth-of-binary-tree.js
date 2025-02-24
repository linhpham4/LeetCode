/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 /*
 Input: arr (nodes of binary tree)
Output: int (depth of tree)

1) Complete tree: root = [1,2,3] // 3
2) Tree with null nodes: root = [1,2,3,null,null,4] // 3
3) One node: root = [1] // 1
4) No nodes: root = [] // 0

DFS------------
Recursively add the max depth of left and right subtree to the current node level

Time: O(n) >>> number of nodes
Space: O(h) >>> height of tree
    Balanced tree = O(logn)
    Degenerate tree = O(n)

BFS----------
Traverse tree level by level. Initialize a queue with root & create variable for current node and depth.
For the current node being removed from the queue, add its children into queue.
If there node has children, increase depth counter.


Time: O(n)
Space: O(n)
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
 /*
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }

    return (1 + Math.max(maxDepth(root.left), maxDepth(root.right)));
};
*/
var maxDepth = function(root) {
    const queue = [];
    let depth = 0;

    if (root !== null) {
        queue.push(root);
    }

    while(queue.length > 0) {
        const currentLength = queue.length;
        for (let i = 0; i < currentLength; i++) {
            const currentNode = queue.shift();

            if(currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if(currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        depth++;
    }
    return depth;
}