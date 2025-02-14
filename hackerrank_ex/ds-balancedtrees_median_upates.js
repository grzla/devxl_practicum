/* https://www.hackerrank.com/challenges/median/problem?isFullScreen=true */

function processData(input) {
    // simple node class for binary search tree
    class Node {
        constructor(value) {
            this.value = value
            this.left = null
            this.right = null
            this.size = 1  // includes self and all children
        }
    }

    class BST {
        constructor() {
            this.root = null
        }

        // insert and update size along the path
        insert(value) {
            this.root = this._insert(this.root, value)
        }

        _insert(node, value) {
            if (!node) return new Node(value)
            
            node.size++
            if (value <= node.value) {
                node.left = this._insert(node.left, value)
            } else {
                node.right = this._insert(node.right, value)
            }
            return node
        }

        // remove and update size along the path
        remove(value) {
            let found = this._contains(this.root, value)
            if (!found) return false
            
            this.root = this._remove(this.root, value)
            return true
        }

        _contains(node, value) {
            if (!node) return false
            if (value === node.value) return true
            if (value < node.value) return this._contains(node.left, value)
            return this._contains(node.right, value)
        }

        _remove(node, value) {
            if (!node) return null

            node.size--
            if (value < node.value) {
                node.left = this._remove(node.left, value)
            } else if (value > node.value) {
                node.right = this._remove(node.right, value)
            } else {
                // node to delete found
                if (!node.left) return node.right
                if (!node.right) return node.left
                
                // find smallest value in right subtree
                let minNode = this._findMin(node.right)
                node.value = minNode.value
                node.right = this._remove(node.right, minNode.value)
            }
            return node
        }

        _findMin(node) {
            while (node.left) node = node.left
            return node
        }

        // find kth smallest value
        findKth(k) {
            return this._findKth(this.root, k)
        }

        _findKth(node, k) {
            if (!node) return null
            
            let leftSize = node.left ? node.left.size : 0
            
            if (k === leftSize + 1) return node.value
            if (k <= leftSize) return this._findKth(node.left, k)
            return this._findKth(node.right, k - leftSize - 1)
        }

        // get median using findKth
        findMedian() {
            if (!this.root) return null
            
            let size = this.root.size
            let mid = Math.floor((size + 1) / 2)
            
            if (size % 2 === 1) {
                return this.findKth(mid)
            } else {
                return (this.findKth(mid) + this.findKth(mid + 1)) / 2
            }
        }
    }

    let tree = new BST()
    let lines = input.trim().split('\n')
    let n = parseInt(lines[0])
    
    for (let i = 1; i <= n; i++) {
        let [op, num] = lines[i].split(' ')
        num = parseInt(num)
        
        if (op === 'a') {
            tree.insert(num)
            console.log(tree.findMedian())
        } else if (op === 'r') {
            if (!tree.remove(num) || !tree.root) {
                console.log("Wrong!")
            } else {
                console.log(tree.findMedian())
            }
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
