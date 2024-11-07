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
 * Complete the 'matchingBraces' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY braces as parameter.
 */

function matchingBraces(braces) {
    /* 
    for each element of the braces array: 
    create a new stack 
    for each character in the string, add the corresponding closing brace to the stack
    if the character is not a key in bracepairs (it is a closing brace), pop the stack and compare it to the character. if not equal, break and set balanced to false.
    when there are no more characters in the string, check the stack size. if 0, 'YES' else 'NO'
    */
    const results = [];
    const bracePairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (let str of braces) {
        const stack = [];
        let balanced = true;
        
        for (let char of str) {
            if (char in bracePairs) {
                stack.push(bracePairs[char]);
            } else if (stack.length === 0 || char !== stack.pop()) {
                balanced = false;
                break;
            }
        }
        
        results.push(balanced && stack.length === 0 ? 'YES' : 'NO');
    }
    
    return results;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const bracesCount = parseInt(readLine().trim(), 10);

    let braces = [];

    for (let i = 0; i < bracesCount; i++) {
        const bracesItem = readLine();
        braces.push(bracesItem);
    }

    const result = matchingBraces(braces);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
