/* https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem?isFullScreen=true */
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

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    // early return for empty lists
    if (!head1 || !head2) {
        // will return the non-null value if one exists
        return head1 || head2
    }

    // create a dummy node as the starting point
    // eliminates the need to handle the first node as a special case
    let dummy = new SinglyLinkedListNode(0)
    let current = dummy

    // continue while we have nodes in both lists to compare
    while (head1 && head2) {
        // compare the values in the current nodes of both lists
        // link the smaller value to our result list
        if (head1.data <= head2.data) {
            // head1 has smaller/equal value, add it to result
            current.next = head1
            // move head1 pointer to next node
            head1 = head1.next
        } else {
            // head2 has smaller value, add it to result
            current.next = head2
            // move head2 pointer to next node
            head2 = head2.next
        }
        // advance the current pointer in our result list
        current = current.next
    }

    // at this point, at least one list is empty
    // append any remaining nodes from either list
    // note: only one of these will actually do anything
    if (head1) current.next = head1  // attach remaining nodes from list1
    if (head2) current.next = head2  // attach remaining nodes from list2

    // return the merged list, skipping our dummy node
    return dummy.next
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const llist1Count = parseInt(readLine(), 10);

        let llist1 = new SinglyLinkedList();

        for (let i = 0; i < llist1Count; i++) {
            const llist1Item = parseInt(readLine(), 10);
            llist1.insertNode(llist1Item);
        }
      
      	const llist2Count = parseInt(readLine(), 10);

        let llist2 = new SinglyLinkedList();

        for (let i = 0; i < llist2Count; i++) {
            const llist2Item = parseInt(readLine(), 10);
            llist2.insertNode(llist2Item);
        }

        let llist3 = mergeLists(llist1.head, llist2.head);

        printSinglyLinkedList(llist3, " ", ws)
        ws.write("\n");
    }

    ws.end();
}
