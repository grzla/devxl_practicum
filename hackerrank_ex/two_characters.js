/* 
https://www.hackerrank.com/challenges/two-characters/problem?isFullScreen=true
*/

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
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
    // get unique characters from string
    const chars = [...new Set(s)]
    
    // if we have 0 or 1 unique chars, no valid pattern is possible
    if (chars.length < 2) return 0
    
    let maxLength = 0
    
    // try every possible pair of characters
    for (let i = 0; i < chars.length - 1; i++) {
        for (let j = i + 1; j < chars.length; j++) {
            const char1 = chars[i]
            const char2 = chars[j]
            
            // filter string to only include our two chosen characters
            const filtered = [...s].filter(c => c === char1 || c === char2)
            
            // if no characters remain after filtering, skip this pair
            if (filtered.length === 0) continue
            
            // check if the filtered string alternates properly
            let isValid = true
            for (let k = 1; k < filtered.length; k++) {
                // if any adjacent characters are the same, pattern is invalid
                if (filtered[k] === filtered[k-1]) {
                    isValid = false
                    break
                }
            }
            
            // if valid pattern and longer than current max, update maxLength
            if (isValid && filtered.length > maxLength) {
                maxLength = filtered.length
            }
        }
    }
    
    return maxLength
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}
