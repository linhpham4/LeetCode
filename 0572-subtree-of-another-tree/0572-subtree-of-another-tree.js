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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

 /*
 Input: 2 binary trees
 Output: boolean

 Check if root node of subRoot is a node in root that has the same descendent structure and values at each node

 1. root and subRoot are the same: 
 root = [1,2,3,4,5], subRoot = [1,2,3,4,5] //true
 * 
 * root
 *          1
 *       /.    \
 *      2.      3
 *    /.  \   
 *   4.    5. 
 * 
 * subRoot
 *          1
 *       /.    \
 *      2.      3
 *    /.  \    
 *   4.    5.

 2. subRoot is subtree of root:
 root = [1,2,3,4,5], subRoot = [2,4,5] //true

 root
 *          1
 *       /.    \
 *      2.      3
 *    /.  \   
 *   4.    5. 
 * 
 * subRoot
 *      2.      
 *    /.  \    
 *   4.    5.

 3. subRoot is not subtree of root:
 root = [1,2,3,4,5], subRoot = [2,4,6] //false

 root
 *          1
 *       /.    \
 *      2.      3
 *    /.  \   
 *   4.    5. 
 * 
 * subRoot
 *      2.      
 *    /.  \    
 *   4.    6.

 4. Different structure:
 root = [1,2,3,4,5], subRoot = [2,4] //false

 root
 *          1
 *       /.    \
 *      2.      3
 *    /.  \   
 *   4.    5. 
 * 
 * subRoot
 *      2.      
 *    /.     
 *   4.    

 5. Extra node in subRoot:
 root = [1,2,3], subRoot = [1,2,3,4] //false
 root
 *          1
 *       /.    \
 *      2.      3 
 * 
 * subRoot
 *          1
 *       /.    \
 *      2.      3 
 *     /
 *.  4

 6. null root:
 root = [], subRoot = [1,2,3,4] //false

 7. null subrRoot:
 root = [1,2,3], subRoot = [] //true

 DFS--------
 Check if subRoot is the same tree as root first.
 Check that a node within root has the same value of subRoot's root node.
 Compare descendents of that node in both trees.

 Time: O(n) >>> Worst case is root and subRoot are the same 0(n+n)
 Space: O(n) >>> Call stack of size equal to height of binary tree where worst case tree is degenerate with height of n nodes

 */
var isSubtree = function (root, subRoot) {
    if (!subRoot) return true;

    if (!root) return false;

    if (isSameTree (root, subRoot)) {
        return true;
    }

    return isSubtree (root.left, subRoot) || isSubtree (root.right, subRoot);
}

var isSameTree = function(root, subRoot) {
    if (!root && !subRoot) {
        return true;
    }

    if(!root || !subRoot || root.val !== subRoot.val) {
        return false;
    }

    return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right);
};