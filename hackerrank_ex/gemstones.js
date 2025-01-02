/* 
https://www.hackerrank.com/challenges/gem-stones/problem?isFullScreen=true
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
 * Complete the 'gemstones' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY arr as parameter.
 */

function gemstones(arr) {
    // if array is empty, return 0
    if (!arr.length) return 0
    
    // convert first string to set of unique characters
    let commonElements = new Set(arr[0].split(''))
    
    // iterate through remaining strings
    for (let i = 1; i < arr.length; i++) {
        // convert current string to set of unique characters
        let currentRockElements = new Set(arr[i].split(''))
        
        // filter commonElements to keep only elements that exist in current rock
        commonElements = new Set(
            [...commonElements].filter(element => currentRockElements.has(element))
        )
        
        // optimization: if no common elements left, we can return early
        if (commonElements.size === 0) return 0
    }
    
    // return count of elements that appear in all rocks
    return commonElements.size
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < n; i++) {
        const arrItem = readLine();
        arr.push(arrItem);
    }

    const result = gemstones(arr);

    ws.write(result + '\n');

    ws.end();
}
