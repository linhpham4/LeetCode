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
Space: O(n) >>> Call stack of function call on each node

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
var isSameTree = function(p, q) {
    // console.log(p.left, q.left)
    // console.log(p.right, q.right)
    // if (p == null && q == null) {
    //     return true;
    // } 
    if (!p && !q) {
        return true;
    } 
    
    // if ((p == null || q == null) || p.val !== q.val) {
    //     return false;
    // }
    if ((!p || !q) || p.val !== q.val) {
        // console.log(p.val, q.val)
        return false;
    }

    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) ;
};