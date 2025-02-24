/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 /*
Input: arr (nodes in binary tree)
Output: boolean (true if height-balanced, otherwise false)

Height-balanced = Levels of left and right subtree of each node cannot differ by more than 1 level
Can't do BFS because you can have a tree where its overall left and right subtree from the root is the same height, but the sub subtrees can still differ by more than 1 level
1. Complete tree: [1,2,3] // true
2. Balanced tree: [1,2,3,null,null,4] //true
3. Not balanced tree: [1,2,3,null,null,4,null,5] //false
4. 1 node: [1] //true
5. No nodes: [] //true

Brute Force-------
Recursively check each if each node's subtree is balanced before checking its children's subtrees

Time: O(n^2) >>> recursive DFS on every node's subtree
Space: O(n)

DFS-----------
Check if each subtree is balanced starting from the bottom.
Check if bottom most subtree is balanced. Pass along height of subtree to its parent node so it can be compared to the other subtree

Time: O(n)
Space: O(n)
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 /*
var isBalanced = function(root) {
    if (root === null) {
        return true;
    }

    let left = height(root.left);
    let right = height(root.right);

    if (Math.abs(left - right) > 1) {
        return false;
    }

    return isBalanced(root.left) && isBalanced(root.right);
};

var height = function(root) {
    if (root === null) {
        return 0;
    }

    return (1 + Math.max(height(root.left), height(root.right)));
}
*/

var isBalanced = function(root) {
    return dfs(root)[0] === true;
}

var dfs = function(root) {
    if (root === null) {
        return [true, 0];
    }

    const left = dfs(root.left);
    const right = dfs(root.right);
    const isBalanced = 
        Math.abs(left[1] - right[1]) <= 1 &&
        left[0] === true && 
        right[0] === true
    const height = 1 + Math.max(left[1], right[1]);

    return [isBalanced ? true : false, height];
}