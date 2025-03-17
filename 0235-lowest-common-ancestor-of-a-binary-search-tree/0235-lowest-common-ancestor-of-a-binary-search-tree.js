/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/*
Input: binary tree, node p and q
Output: LCA

LCA = Lowest node in tree where p and q are descendants
    - A node can be descendant of itself

1. 

Compare p and q to root node. If a node has value less that of root, search the left subtree. If greater than node, search right subtree.
If p and q are in different sides, then their parent is the LCA.
If p or q has value equal to root node, return root node.

Time: O(logn) >>>> only have to visit one node for each level of tree visited
Space: O(1) 

 */
var lowestCommonAncestor = function(root, p, q) {
    let current = root

    while (current) {
        // console.log(p ,q)
        if (p.val > current.val && q.val > current.val) {
            current = current.right
        } else if (p.val < current.val && q.val < current.val) {
            current = current.left
        } else {
            return current
        }
    }

    return null;
};