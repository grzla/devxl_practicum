/* https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem?isFullScreen=true */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const DoublyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
        this.prev = null;
    }
};

const DoublyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        let node = new DoublyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
    }
};

function printDoublyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

/*
 * Complete the 'sortedInsert' function below.
 *
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_DOUBLY_LINKED_LIST llist
 *  2. INTEGER data
 */

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */

function sortedInsert(llist, data) {
    // create new node to insert
    const newNode = new DoublyLinkedListNode(data)
    
    // handle edge cases:
    // 1. if list is empty (llist is null)
    // 2. if new data is smaller than head's data
    // in both cases, new node becomes the head
    if (!llist || data < llist.data) {
        // point new node's next to current head (might be null)
        newNode.next = llist
        // if list wasn't empty, update old head's prev pointer
        if (llist) llist.prev = newNode
        // return new node as new head
        return newNode
    }
    
    // pointer to traverse the list
    let current = llist
    
    // traverse list until either:
    // 1. we reach the end (current.next is null)
    // 2. or we find a node with data greater than our insertion value
    // this ensures we stop at the correct insertion point
    while (current.next && current.next.data < data) {
        current = current.next
    }
    
    // at this point:
    // - current points to the node BEFORE where we want to insert
    // - current.next is either null or points to a node with larger data
    
    // save reference to the next node (might be null)
    newNode.next = current.next
    // link new node's prev to current
    newNode.prev = current
    // if there's a next node, update its prev pointer
    if (current.next) current.next.prev = newNode
    // link current's next to new node
    current.next = newNode
    
    // return original head of list
    return llist
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const llistCount = parseInt(readLine(), 10);

        let llist = new DoublyLinkedList();

        for (let i = 0; i < llistCount; i++) {
            const llistItem = parseInt(readLine(), 10);
            llist.insertNode(llistItem);
        }

        const data = parseInt(readLine(), 10);

        let llist1 = sortedInsert(llist.head, data);

        printDoublyLinkedList(llist1, " ", ws)
        ws.write("\n");
    }

    ws.end();
}
