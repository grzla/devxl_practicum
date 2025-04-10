/*
https://leetcode.com/problems/subtree-of-another-tree/?envType=problem-list-v2&envId=oizxjoit

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

 

Example 1:

Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

Example 2:

Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false

 

Constraints:

    The number of nodes in the root tree is in the range [1, 2000].
    The number of nodes in the subRoot tree is in the range [1, 1000].
    -104 <= root.val <= 104
    -104 <= subRoot.val <= 104


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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // base case: if we've reached end of a path
    if (!root) {
        return false
    }
    
    // check if current node could be a match
    if (root.val === subRoot.val) {
        // if trees match from this node, we're done
        if (compareTree(root, subRoot)) {
            return true
        }
    }
    
    // if no match at current node, keep searching both subtrees
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

function compareTree(root, subRoot) {
    // base case: if we've reached end of a path
    if (!root && !subRoot) {
        return true
    }
    
    // if one tree is null and the other is not, they don't match
    if (!root || !subRoot) {
        return false
    }
    
    // if values don't match, trees don't match
    if (root.val !== subRoot.val) {
        return false
    }
    
    // recursively check both left and right subtrees
    return compareTree(root.left, subRoot.left) && compareTree(root.right, subRoot.right)
}