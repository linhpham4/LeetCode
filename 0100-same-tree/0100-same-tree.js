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

// var isSameTree = function(p, q) {
//     const pQueue = [];
//     pQueue.push(p);
//     let pFront = 0;
//     let pEnd = pQueue.length - 1;

//     const qQueue = [];
//     qQueue.push(q);
//     let qFront = 0;
//     let qEnd = qQueue.length - 1;
    

//     while (pFront < pEnd && qFront < qEnd) {
//         const pCurrentLength = pQueue.length - pFront;
//         // const qCurrentLength = qQueue.length - qFront;

//         for (let i = 0; i < pCurrentLength, i++) {
//             const pCurrentNode = pQueue[pFront];
//             pFront++;

//             if(pCurrentNode.left !== null) {
//                 pQueue.push(pCurrentNode.left);
//             }

//             if(pCurrentNode.right !== null) {
//                 pQueue.push(pCurrentNode.right);
//             }
//         }
//         queue.push(p.left, q.left)
//     }


// }

var isSameTree = function(p, q) {
    const q1 = [];
        const q2 = [];
        q1.push(p);
        q2.push(q);
        
        while (q1.length !== 0 && q2.length !== 0) {
            for (let i = q1.length; i > 0; i--) {
                let nodeP = q1.pop();
                let nodeQ = q2.pop();

                if (nodeP === null && nodeQ === null) continue;
                if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val) {
                    return false;
                }
                
                q1.push(nodeP.left);
                q1.push(nodeP.right);
                q2.push(nodeQ.left);
                q2.push(nodeQ.right);
            }
        }

        return true;
    }
