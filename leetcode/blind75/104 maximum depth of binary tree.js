/*
https://leetcode.com/problems/maximum-depth-of-binary-tree/?envType=problem-list-v2&envId=oizxjoit

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2

 

Constraints:

    The number of nodes in the tree is in the range [0, 104].
    -100 <= Node.val <= 100


*/

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
var maxDepth = function(root) {
    // base case: if root is null, return 0
    if (!root) return 0
    
    // recursively find max depth of left and right subtrees
    const leftDepth = maxDepth(root.left)
    const rightDepth = maxDepth(root.right)
    
    // return the maximum depth plus 1 for current node
    return Math.max(leftDepth, rightDepth) + 1
}