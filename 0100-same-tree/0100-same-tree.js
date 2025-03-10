/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 /*
 Input: two binary trees
 Output: boolean

 Same structure and values at each node position

 1. Same: p = [1,2,3], q = [1,2,3] //true
 2. Left and Right child switched: : p = [1,2,3], q = [1,3,2] //false
 3. Different # of nodes: : p = [1,2,3], q = [1,2,3,4] //false
 4. No nodes: : p = [null], q = [null] //true

DFS--------
Compare node at the same position in both trees. If values are the same, compare children iteratively. 

Time: O(n) >>> Worse case is both trees are the same n+n = 2n = n
Space: O(n) >>> Call stack that is size of the height of binary tree, in the worst case the tree is degenerate and height is n nodes in tree

BFS------
Compare trees at each level before moving to the next.
Create 2 queue and push in root of each tree into queue.
For every node removed from queue, push in it's children.

Time: O(n)
Space: O(n)

Base case (checking the last node in the tree)
- null and null //true
- null and 1 //false
- 1 and 2 //false
- 1 and 1 //true

 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

/* 
var isSameTree = function(p, q) {
    if (!p && !q) {
        return true;
    } 
    
    if ((!p || !q) || p.val !== q.val) {
        // console.log(p.val, q.val)
        return false;
    }

    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) ;
};
*/

var isSameTree = function(p, q) {
    const pQueue = [];
    const qQueue = [];
    pQueue.push(p);
    qQueue.push(q);

    while (pQueue.length !== 0 && qQueue.length !== 0) {
        for (let i = pQueue.length; i > 0; i--) {
            // console.log("before", pQueue, qQueue)
            let nodeP = pQueue.pop();
            let nodeQ = qQueue.pop();
            // console.log("after pop", pQueue, qQueue)

            if (nodeP === null && nodeQ === null) continue;

            if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val) {
                return false;
            }

            pQueue.push(nodeP.left);
            pQueue.push(nodeP.right);
            qQueue.push(nodeQ.left);
            qQueue.push(nodeQ.right);
        }
    }
    return true;
}