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
 * @return {number}
 */
/*
Input: root of binary tree
Output: length of diameter of the tree

Diameter = longest path btwn 2 nodes
    - May or may not pass through root
Length = number of edges btwn 2 nodes

1. Pass through root: [1,2,3,4] //3
            1
          /   \
        2       3
       /  \
    4       5

1.5 Does not pass through root: [1,2,null,3,4,5,6,7] //4
                 1
              /     
           2           
         /  \       
      3       4    
    /   \    / 
  5       6 7

2. 1 node: [1] //0
3. No node: [] //0

DFS----------
Find bottom left leaf of both left and right subtrees. Count number of levels it takes to get back up to root node from both leaves and add them together.

Create a variable to keep track of the max diameter (to account for unbalanced trees where the max diameter might not pass through root node). Iteratively take max height of left and right subtree and add 1 (for current level). Update max accordingly.

Time: O(n) >>> Traverse through entire tree to make comparision
Space: O(n) >>> Height of tree = amount of calls on call stack
    - Balanced Tree: O(logn)
    - Degenerate: O(n)
*/
var diameterOfBinaryTree = function(root) {
    if (root == null) {
        return 0
    }

    let max = 0

    const dfs = function(node) {
        if (node == null) {
            return 0
        }

        const left = dfs(node.left)
        const right = dfs(node.right)

        max = Math.max(left + right, max)

        return Math.max(left, right) + 1
    }

    dfs(root)
    return max
};