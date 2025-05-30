/* https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree?isFullScreen=true */

var Tree = function() {
    this.root = null;
}

Tree.prototype.insert = function(node, data) {
    if (node == null){
    	node = new Node(data);
    }
 	else if (data < node.data){
        node.left  = this.insert(node.left, data);
    }
    else{
        node.right = this.insert(node.right, data);   
    }

    return node;
}

var Node = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

/* head ends */

/*
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

/* tail begins */

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _stdin = "";
var _stdin_array = "";
var _currentline = 0;

process.stdin.on('data', function(data) {
    _stdin += data;
});

process.stdin.on('end', function() {
    _stdin_array = _stdin.split("\n");
    solution();
});

function readLine() {
    return _stdin_array[_currentline++];
}

function treeHeight(root) {
    // height of empty tree is zero
    if (root === null) {
        return 0;
    }

    let height = 0;
    let queue = [root];

    while (queue.length !== 0) {
        let levelSize = queue
            .length;

        for (let i = 0; i < levelSize; i++) {
            let node = queue
                .shift();
            if (node.left) queue
                .push(node.left);
            if (node.right) queue
                .push(node.right);
        }

        // Increment height 
        // after processing each level
        height++;
    }

    return height;
}
