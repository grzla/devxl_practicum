/* https://www.hackerrank.com/challenges/balanced-brackets/problem?isFullScreen=true */
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
    // create a stack to keep track of opening brackets
    const stack = []
    
    // create a map of closing brackets to their corresponding opening brackets
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    
    // iterate through each character in the string
    for (let char of s) {
        // if it's an opening bracket, push to stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char)
        } else {
            // it's a closing bracket
            
            // if stack is empty, we know string is unbalanced
            if (stack.length === 0) {
                return 'NO'
            }
            
            // get the last opening bracket from stack
            const lastOpening = stack.pop()
            
            // check if current closing bracket matches the last opening bracket
            if (bracketPairs[char] !== lastOpening) {
                return 'NO'
            }
        }
    }
    
    // after processing all chars, stack should be empty if balanced
    // if stack has items, we have leftover opening brackets
    return stack.length === 0 ? 'YES' : 'NO'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        const result = isBalanced(s);

        ws.write(result + '\n');
    }

    ws.end();
}
