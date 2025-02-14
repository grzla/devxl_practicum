/*
3. Binary Tree Search

In a binary search tree, each node holds a value and a reference to as many as 2 child nodes, or children. The root node has no ancestors. The children are called left and right, and subtrees rooted at left and right are the left and right subtrees. If each node is considered the root of a subtree, each node value in its left subtree must be less than its own value. Likewise, each node in it`s right 
subtree must have a greater or equal value to the root. This allows for efficient searching.

For each value in a list of integers, determine if it is present in a tree. If it is, return the integer 1, otherwise, return 0.

Function Description
Complete the function isPresent in the editor below.

isPresent has the following parameter(s):
    BSTreeNode root: reference to the root node of a tree of integers
    int val[q]: an array of integer items to search for
Returns:
    int[q]: an integer array where each value at index i denotes whether val[i] is found in the BST or not

Constraints
• 1 ≤ n, q ≤ 10^5
• 1 ≤ val[i] ≤ 5 × 10^4

Sample Input:
STDIN      Function
-----      ----
11      →  tree size n = 11
20      →  node values = [20, 10, 30, 8, 12, 25, 40, 6, 11, 13, 23]
10
30
*/

function isPresent(root, val) {
    // base cases: empty tree or found the value
    if (!root) {
        return 0
    }
    if (root.value === val) {
        return 1
    }
    
    // if value is less than current node, search left subtree
    if (val < root.value) {
        return isPresent(root.left, val)
    }
    
    // if value is greater than current node, search right subtree
    return isPresent(root.right, val)
}

// i had the tree traversal logic correct but did not understand how to handle val as an array. i am not sure if it actually is an array. (wouldn't it be called vals?)

/* 
// if val is an array the solution requires an internal function. 

function isPresent(root, val) {
    // helper function to check single value
    function isPresentSingle(node, value) {
        if (!node) {
            return 0
        }
        if (node.value === value) {
            return 1
        }
        
        if (value < node.value) {
            return isPresentSingle(node.left, value)
        }
        
        return isPresentSingle(node.right, value)
    }
    
    // map each value in the array to its presence (1) or absence (0)
    return val.map(value => isPresentSingle(root, value))
}
*/