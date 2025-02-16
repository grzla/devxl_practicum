/*
Binary Search Tree

Implement the following operations of a Binary Search Tree (BST).

- insert(x): Inserts an item x to the tree. If the item is already present, it will be ignored.
- delete(x): Deletes an item x from the tree. If the item is not present in the tree, it will be ignored.
- search(x): Searches an item x in the tree. If the item is found, it returns true. Otherwise, it returns false.
- inorder(): Returns an array containing the inorder traversal of the tree.

Note: 
- The item to be inserted/deleted/searched should be an integer.
- The inorder traversal returns the nodes' values in ascending order.

Example:
// Create a new BST
let bst = new BST();

// Insert items
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);

// Inorder traversal
console.log(bst.inorder()); // Output: [1, 3, 6, 8, 10]

// Search for items
console.log(bst.search(6)); // Output: true
console.log(bst.search(12)); // Output: false

// Delete an item
bst.delete(3);

// Inorder traversal after deletion
console.log(bst.inorder()); // Output: [1, 6, 8, 10]

Constraints:
- The number of nodes in the tree will be in the range [1, 1000].
- The item to be inserted/deleted/searched will be in the range [1, 10^6].
*/

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    
    insert(value) {
        // Write your code here
        let newNode = new Node(value)
        
        if (!this.root) {
            this.root = newNode
        } else {
            this._insertNode(this.root, newNode)
        }
    }
    
    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode
            } else {
                this._insertNode(node.left, newNode)
            }
        } else if (newNode.value > node.value) {
            if (!node.right) {
                node.right = newNode
            } else {
                this._insertNode(node.right, newNode)
            }
        }
    }
    
    delete(value) {
        // Write your code here
        this.root = this._deleteNode(this.root, value)
    }
    
    _deleteNode(node, value) {
        if (!node) {
            return null
        }
        
        if (value < node.value) {
            node.left = this._deleteNode(node.left, value)
        } else if (value > node.value) {
            node.right = this._deleteNode(node.right, value)
        } else {
            if (!node.left && !node.right) {
                return null
            } else if (!node.left) {
                return node.right
            } else if (!node.right) {
                return node.left
            } else {
                let minNode = this._findMinNode(node.right)
                node.value = minNode.value
                node.right = this._deleteNode(node.right, minNode.value)
            }
        }
        
        return node
    }
    
    _findMinNode(node) {
        while (node.left) {
            node = node.left
        }
        return node
    }
    
    search(value) {
        // Write your code here
        return this._searchNode(this.root, value)
    }
    
    _searchNode(node, value) {
        if (!node) {
            return false
        }
        
        if (value === node.value) {
            return true
        } else if (value < node.value) {
            return this._searchNode(node.left, value)
        } else {
            return this._searchNode(node.right, value)
        }
    }
    
    inorder() {
        // Write your code here
        let result = []
        this._inorderTraversal(this.root, result)
        return result
    }
    
    _inorderTraversal(node, result) {
        if (node) {
            this._inorderTraversal(node.left, result)
            result.push(node.value)
            this._inorderTraversal(node.right, result)
        }
    }
} 